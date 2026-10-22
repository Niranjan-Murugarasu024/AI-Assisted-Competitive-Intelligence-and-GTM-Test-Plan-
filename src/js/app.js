/**
 * app.js
 * Main frontend application controller for Proof Before Purchase.
 * Handles DOM rendering, live filtering, dynamic KPI metrics calculation,
 * deterministic diagnostic state, and local-only privacy guarantees.
 */

import { COMPETITOR_PROGRAMS, RESEARCH_INSIGHTS, GTM_EXPERIMENTS, DIAGNOSTIC_RULES_DATA } from './data_store.js';
import { filterPrograms, computeSummaryMetrics } from './filters.js';
import { generateDiagnosticRecommendation, DIAGNOSTIC_ROLES } from './rules.js';
import { validateDiagnosticInputs, sanitizeText } from './validation.js';

// Application State (Local-only, in-memory)
const state = {
  programs: COMPETITOR_PROGRAMS,
  insights: RESEARCH_INSIGHTS,
  experiments: GTM_EXPERIMENTS,
  rulesData: DIAGNOSTIC_RULES_DATA,
  filters: {
    search: '',
    provider: 'all',
    credential: 'all',
    priceRange: 'all',
    durationRange: 'all',
    capstoneOnly: false
  },
  diagnostic: {
    role: 'data_analyst',
    level: 'beginner',
    timeTier: 'tier_mid',
    outcome: 'portfolio',
    gaps: []
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderOverviewKPIs();
  initMatrixFilters();
  renderMatrixTable();
  renderInsights();
  initDiagnosticForm();
  renderExperiments();
  initNavScroll();
  
  // Privacy audit logging in browser console
  console.info(
    "%c[ProofBeforePurchase] Security Audit: Application loaded in pure local-only mode. Zero third-party trackers, zero cookies, zero external API calls.",
    "color: #10b981; font-weight: bold; font-size: 11px;"
  );
});

// -------------------------------------------------------------
// THEME TOGGLE CONTROLLER
// -------------------------------------------------------------
function initTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  updateThemeIcon(toggleBtn, currentTheme);

  toggleBtn.addEventListener('click', () => {
    const active = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', active);
    updateThemeIcon(toggleBtn, active);
  });
}

function updateThemeIcon(btn, theme) {
  btn.innerHTML = theme === 'light' 
    ? '<span>🌙</span> Dark Mode' 
    : '<span>☀️</span> Light Mode';
}

// -------------------------------------------------------------
// OVERVIEW METRICS (DYNAMIC COMPUTATION)
// -------------------------------------------------------------
function renderOverviewKPIs() {
  const metrics = computeSummaryMetrics(state.programs);

  const kpiCount = document.getElementById('kpi-count');
  const kpiPrice = document.getElementById('kpi-price-range');
  const kpiDuration = document.getElementById('kpi-duration');
  const kpiGst = document.getElementById('kpi-gst-warning');
  const kpiGuarantee = document.getElementById('kpi-guarantee');

  if (kpiCount) kpiCount.textContent = metrics.count;
  if (kpiPrice) {
    const minStr = `₹${(metrics.minPrice / 100000).toFixed(2)}L`;
    const maxStr = `₹${(metrics.maxPrice / 100000).toFixed(2)}L`;
    kpiPrice.textContent = `${minStr} - ${maxStr}`;
  }
  if (kpiDuration) kpiDuration.textContent = `${metrics.avgDuration} Mo`;
  if (kpiGst) {
    const pct = Math.round((metrics.taxExclusionCount / metrics.count) * 100);
    kpiGst.textContent = `${metrics.taxExclusionCount} of ${metrics.count} (${pct}%)`;
  }
  if (kpiGuarantee) {
    kpiGuarantee.textContent = `${metrics.jobGuaranteeCount} of ${metrics.count} (0%)`;
  }
}

// -------------------------------------------------------------
// COMPETITIVE INTELLIGENCE MATRIX
// -------------------------------------------------------------
function initMatrixFilters() {
  const searchInput = document.getElementById('filter-search');
  const providerSelect = document.getElementById('filter-provider');
  const credentialSelect = document.getElementById('filter-credential');
  const priceSelect = document.getElementById('filter-price');
  const durationSelect = document.getElementById('filter-duration');
  const capstoneCheck = document.getElementById('filter-capstone');
  const resetBtn = document.getElementById('filter-reset-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.filters.search = e.target.value;
      renderMatrixTable();
    });
  }

  if (providerSelect) {
    providerSelect.addEventListener('change', (e) => {
      state.filters.provider = e.target.value;
      renderMatrixTable();
    });
  }

  if (credentialSelect) {
    credentialSelect.addEventListener('change', (e) => {
      state.filters.credential = e.target.value;
      renderMatrixTable();
    });
  }

  if (priceSelect) {
    priceSelect.addEventListener('change', (e) => {
      state.filters.priceRange = e.target.value;
      renderMatrixTable();
    });
  }

  if (durationSelect) {
    durationSelect.addEventListener('change', (e) => {
      state.filters.durationRange = e.target.value;
      renderMatrixTable();
    });
  }

  if (capstoneCheck) {
    capstoneCheck.addEventListener('change', (e) => {
      state.filters.capstoneOnly = e.target.checked;
      renderMatrixTable();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.filters = {
        search: '',
        provider: 'all',
        credential: 'all',
        priceRange: 'all',
        durationRange: 'all',
        capstoneOnly: false
      };
      if (searchInput) searchInput.value = '';
      if (providerSelect) providerSelect.value = 'all';
      if (credentialSelect) credentialSelect.value = 'all';
      if (priceSelect) priceSelect.value = 'all';
      if (durationSelect) durationSelect.value = 'all';
      if (capstoneCheck) capstoneCheck.checked = false;
      renderMatrixTable();
    });
  }
}

function renderMatrixTable() {
  const tableBody = document.getElementById('matrix-table-body');
  const countDisplay = document.getElementById('matrix-count-display');
  if (!tableBody) return;

  const filtered = filterPrograms(state.programs, state.filters);

  if (countDisplay) {
    countDisplay.textContent = `Showing ${filtered.length} of ${state.programs.length} audited programs`;
  }

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 3rem;">
          <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 0.5rem;">No programs match the selected filter criteria.</p>
          <span style="font-size: 0.85rem; color: var(--text-dim);">Try clearing filters or broadening search terms.</span>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered.map(prog => {
    const hasTaxWarning = prog.tax_terms.includes('18% GST') || prog.tax_terms.includes('excludes');
    const taxWarningHtml = hasTaxWarning
      ? `<div class="tax-badge-warning">⚠️ Excludes 18% GST in Ads</div>`
      : `<div class="badge badge-success" style="margin-top: 0.25rem;">GST Included</div>`;

    return `
      <tr>
        <td>
          <div class="program-provider">${sanitizeText(prog.provider)}</div>
          <div class="program-name">${sanitizeText(prog.program_name)}</div>
          <div style="margin-top: 0.45rem;">
            <span class="badge badge-info">${sanitizeText(prog.id)}</span>
          </div>
        </td>
        <td>
          <div style="font-weight: 600; font-size: 0.92rem; color: var(--text-main); line-height: 1.45;">${sanitizeText(prog.credential_partner)}</div>
          <div style="font-size: 0.82rem; color: var(--text-dim); margin-top: 0.35rem; font-weight: 500;">${sanitizeText(prog.credential_category)}</div>
        </td>
        <td>
          <div class="price-headline">${sanitizeText(prog.published_price_display)}</div>
          ${taxWarningHtml}
          <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 0.4rem; line-height: 1.45;">${sanitizeText(prog.financing_terms)}</div>
        </td>
        <td>
          <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">${sanitizeText(prog.duration_display)}</div>
          <div style="font-size: 0.84rem; font-weight: 600; color: var(--accent-primary); margin-top: 0.25rem;">${sanitizeText(prog.weekly_hours_display)}</div>
          <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 0.35rem; line-height: 1.45;">${sanitizeText(prog.delivery_format)}</div>
        </td>
        <td>
          <div style="font-weight: 700; font-size: 1rem; color: var(--accent-cyan);">${prog.hands_on_projects_count}+ Projects</div>
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.3rem; line-height: 1.45;">${sanitizeText(prog.projects_description)}</div>
          <div style="margin-top: 0.45rem;">
            <span class="badge ${prog.capstone_included ? 'badge-success' : 'badge-neutral'}">
              ${prog.capstone_included ? '✓ Capstone Included' : 'No Capstone'}
            </span>
          </div>
        </td>
        <td>
          <div style="font-size: 0.85rem; color: var(--text-main); line-height: 1.5;">${sanitizeText(prog.career_support_claims)}</div>
          <div class="caveat-box">
            <strong style="color: var(--text-main);">Legal Caveat:</strong> ${sanitizeText(prog.caveats)}
          </div>
        </td>
        <td style="white-space: nowrap;">
          <a href="${prog.official_url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" id="btn-source-${prog.id}">
            Official Site ↗
          </a>
        </td>
      </tr>
    `;
  }).join('');
}

// -------------------------------------------------------------
// EVIDENCE & INSIGHT LEDGER
// -------------------------------------------------------------
function renderInsights() {
  const container = document.getElementById('insights-container');
  if (!container) return;

  container.innerHTML = state.insights.map((ins, idx) => {
    return `
      <div class="insight-card" id="insight-card-${ins.id}">
        <div class="insight-header">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span class="badge badge-info">${ins.id}</span>
              <span class="badge badge-success">${ins.confidence}</span>
            </div>
            <h3 class="insight-title">${sanitizeText(ins.title)}</h3>
          </div>
        </div>

        <div style="margin-bottom: 1rem;">
          <p style="font-size: 0.95rem; color: var(--text-main); font-weight: 500;">
            <strong>Observed Fact:</strong> ${sanitizeText(ins.observation)}
          </p>
        </div>

        <div class="insight-meta">
          <span style="font-size: 0.78rem; color: var(--text-dim);">Supporting Evidence IDs:</span>
          ${ins.evidence_ids.map(eid => `<span class="badge badge-neutral">${eid}</span>`).join(' ')}
        </div>

        <div class="evidence-block">
          <div class="evidence-sub-card">
            <div class="evidence-sub-title">1. Primary Interpretation</div>
            <div class="evidence-sub-text">${sanitizeText(ins.interpretation)}</div>
          </div>
          <div class="evidence-sub-card">
            <div class="evidence-sub-title">2. Plausible Alternative Explanation</div>
            <div class="evidence-sub-text">${sanitizeText(ins.alternative_explanation)}</div>
          </div>
          <div class="evidence-sub-card">
            <div class="evidence-sub-title">3. Business & Strategy Implication</div>
            <div class="evidence-sub-text">${sanitizeText(ins.business_implication)}</div>
          </div>
          <div class="evidence-sub-card">
            <div class="evidence-sub-title">4. Unknowns & Next Validation Step</div>
            <div class="evidence-sub-text">
              <div><strong>Unknown:</strong> ${sanitizeText(ins.remains_unknown)}</div>
              <div style="margin-top: 0.35rem;"><strong>Next Action:</strong> ${sanitizeText(ins.next_validation_action)}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// -------------------------------------------------------------
// DETERMINISTIC DIAGNOSTIC ENGINE
// -------------------------------------------------------------
function initDiagnosticForm() {
  const roleRadios = document.querySelectorAll('input[name="diag-role"]');
  const levelRadios = document.querySelectorAll('input[name="diag-level"]');
  const timeRadios = document.querySelectorAll('input[name="diag-time"]');
  const outcomeRadios = document.querySelectorAll('input[name="diag-outcome"]');
  const gapsContainer = document.getElementById('diagnostic-gaps-container');
  const runBtn = document.getElementById('diagnostic-run-btn');
  const resetBtn = document.getElementById('diagnostic-reset-btn');

  // Populate initial gaps for default role
  updateGapsCheckboxList(state.diagnostic.role, gapsContainer);

  roleRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.diagnostic.role = e.target.value;
      updateGapsCheckboxList(e.target.value, gapsContainer);
    });
  });

  levelRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.diagnostic.level = e.target.value;
    });
  });

  timeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.diagnostic.timeTier = e.target.value;
    });
  });

  outcomeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.diagnostic.outcome = e.target.value;
    });
  });

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      runDiagnosticExecution();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetDiagnosticForm();
    });
  }
}

function updateGapsCheckboxList(roleId, container) {
  if (!container) return;
  const roleDef = state.rulesData.roles.find(r => r.id === roleId);
  if (!roleDef) return;

  container.innerHTML = roleDef.available_gaps.map((gap, idx) => {
    // Select first two by default
    const isChecked = idx < 2;
    return `
      <label class="checkbox-item" id="gap-label-${idx}">
        <input type="checkbox" name="diag-gap" value="${sanitizeText(gap)}" ${isChecked ? 'checked' : ''}>
        <span>${sanitizeText(gap)}</span>
      </label>
    `;
  }).join('');
}

function runDiagnosticExecution() {
  const selectedGapEls = document.querySelectorAll('input[name="diag-gap"]:checked');
  const selectedGaps = Array.from(selectedGapEls).map(el => el.value);

  const inputs = {
    role: state.diagnostic.role,
    level: state.diagnostic.level,
    timeTier: state.diagnostic.timeTier,
    outcome: state.diagnostic.outcome,
    gaps: selectedGaps
  };

  const validationResult = validateDiagnosticInputs(inputs);
  const errorBox = document.getElementById('diagnostic-error-box');
  const outputContainer = document.getElementById('diagnostic-output-container');

  if (!validationResult.isValid) {
    if (errorBox) {
      errorBox.style.display = 'block';
      errorBox.innerHTML = `<strong>Please correct the following:</strong><ul style="margin-left: 1.25rem; margin-top: 0.25rem;">${validationResult.errors.map(e => `<li>${e}</li>`).join('')}</ul>`;
    }
    return;
  }

  if (errorBox) errorBox.style.display = 'none';

  // Pure deterministic evaluation
  const result = generateDiagnosticRecommendation(inputs, state.rulesData);

  renderDiagnosticOutput(result, outputContainer);

  // Security & privacy confirmation
  console.info("[ProofBeforePurchase] Diagnostic evaluated locally in-memory. Zero network requests made.");
}

function renderDiagnosticOutput(res, container) {
  if (!container) return;

  container.innerHTML = `
    <div class="output-card" id="diagnostic-result-card">
      <div class="output-hero">
        <div class="output-badge-bar">
          <span class="badge badge-info">${res.inputs.role}</span>
          <span class="badge badge-neutral">${res.inputs.level}</span>
          <span class="badge badge-warning">${res.project.pacingLabel}</span>
          <span class="badge badge-success">${res.project.hoursBudget}</span>
        </div>
        <h3 class="output-title">${sanitizeText(res.project.title)}</h3>
        <p class="output-desc">${sanitizeText(res.project.summary)}</p>
      </div>

      <div class="meta-box-grid">
        <div class="meta-box">
          <div class="meta-box-title">Recommended Tools</div>
          <div class="meta-box-val">${sanitizeText(res.project.tools)}</div>
        </div>
        <div class="meta-box">
          <div class="meta-box-title">Sample Benchmark Data</div>
          <div class="meta-box-val">${sanitizeText(res.project.sampleData)}</div>
        </div>
        <div class="meta-box">
          <div class="meta-box-title">Target Artifact Outcome</div>
          <div class="meta-box-val">${sanitizeText(res.inputs.outcomeGoal)}</div>
        </div>
      </div>

      <div style="background: var(--bg-secondary); border-radius: var(--radius-md); padding: 1rem; border-left: 3px solid var(--accent-primary); margin: 1.25rem 0;">
        <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.25rem;">Selection Rationale</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">${sanitizeText(res.project.rationale)}</div>
      </div>

      <div style="margin: 1.5rem 0;">
        <h4 style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>📋</span> Evidence & Milestone Checklist
        </h4>
        <div style="display: flex; flex-direction: column;">
          ${res.checklist.map(item => `
            <div class="checklist-item">
              <span class="checklist-num">${item.id}</span>
              <div class="checklist-content">
                <h4>${sanitizeText(item.milestone)}</h4>
                <p>${sanitizeText(item.detail)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="margin: 1.5rem 0;">
        <h4 style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>⚖️</span> Objective 3-Tier Evaluation Rubric
        </h4>
        ${res.rubric.map(dim => `
          <div class="rubric-card">
            <div class="rubric-header">${sanitizeText(dim.dimension)}</div>
            <div class="rubric-levels">
              <div class="rubric-level">
                <div class="rubric-level-tag">Beginner</div>
                <div class="rubric-level-text">${sanitizeText(dim.beginner)}</div>
              </div>
              <div class="rubric-level">
                <div class="rubric-level-tag">Proficient</div>
                <div class="rubric-level-text">${sanitizeText(dim.proficient)}</div>
              </div>
              <div class="rubric-level">
                <div class="rubric-level-tag">Production-Ready</div>
                <div class="rubric-level-text">${sanitizeText(dim.production_ready)}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="margin: 1.5rem 0;">
        <h4 style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>🎯</span> Critical Questions to Ask Admissions Counselors Before Paying
        </h4>
        ${res.providerQuestions.map(pq => `
          <div class="provider-question-item">
            <div class="pq-category">${sanitizeText(pq.category)} (${pq.id})</div>
            <div class="pq-question">"${sanitizeText(pq.question)}"</div>
            <div class="pq-why"><strong>Why this matters:</strong> ${sanitizeText(pq.why_it_matters)}</div>
          </div>
        `).join('')}
      </div>

      <div style="margin: 1.5rem 0; background: var(--bg-secondary); border-radius: var(--radius-md); padding: 1.25rem;">
        <h4 style="margin-bottom: 0.5rem; font-size: 0.95rem; color: var(--text-main);">Recommended Next Steps</h4>
        <ul style="margin-left: 1.25rem; font-size: 0.85rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 0.4rem;">
          ${res.nextSteps.map(step => `<li>${sanitizeText(step)}</li>`).join('')}
        </ul>
      </div>

      <div style="font-size: 0.75rem; color: var(--text-dim); border-top: 1px solid var(--border-subtle); padding-top: 0.75rem; margin-top: 1.25rem;">
        <strong>Notice:</strong> ${res.disclaimer}
      </div>
    </div>
  `;
}

function resetDiagnosticForm() {
  state.diagnostic = {
    role: 'data_analyst',
    level: 'beginner',
    timeTier: 'tier_mid',
    outcome: 'portfolio',
    gaps: []
  };

  const defaultRole = document.querySelector('input[name="diag-role"][value="data_analyst"]');
  const defaultLevel = document.querySelector('input[name="diag-level"][value="beginner"]');
  const defaultTime = document.querySelector('input[name="diag-time"][value="tier_mid"]');
  const defaultOutcome = document.querySelector('input[name="diag-outcome"][value="portfolio"]');

  if (defaultRole) defaultRole.checked = true;
  if (defaultLevel) defaultLevel.checked = true;
  if (defaultTime) defaultTime.checked = true;
  if (defaultOutcome) defaultOutcome.checked = true;

  const gapsContainer = document.getElementById('diagnostic-gaps-container');
  updateGapsCheckboxList('data_analyst', gapsContainer);

  const errorBox = document.getElementById('diagnostic-error-box');
  if (errorBox) errorBox.style.display = 'none';

  const outputContainer = document.getElementById('diagnostic-output-container');
  if (outputContainer) {
    outputContainer.innerHTML = `
      <div style="background: var(--bg-card); border: 1px dashed var(--border-subtle); border-radius: var(--radius-xl); padding: 3rem 2rem; text-align: center;">
        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🧪</div>
        <h3 style="color: var(--text-main); margin-bottom: 0.5rem;">Diagnostic Awaiting Inputs</h3>
        <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 1.5rem;">
          Select your target role, current skills, weekly time budget, and desired outcome on the left, then click <strong>Run Role-Fit Diagnostic</strong> to generate your tailored mini-project and rubric.
        </p>
        <span class="badge badge-success">🔒 Local-Only · Zero PII Collected</span>
      </div>
    `;
  }
}

// -------------------------------------------------------------
// FIVE GTM EXPERIMENTS
// -------------------------------------------------------------
function renderExperiments() {
  const container = document.getElementById('experiments-container');
  if (!container) return;

  container.innerHTML = state.experiments.map(exp => {
    return `
      <div class="experiment-card" id="exp-card-${exp.id}">
        <div class="experiment-top">
          <div class="exp-status-bar">
            <span class="exp-id">${exp.id}</span>
            <span class="badge badge-warning">${exp.status}</span>
          </div>
          <h3 class="exp-title">${sanitizeText(exp.title)}</h3>
          <div class="exp-theme">Theme: ${sanitizeText(exp.theme)}</div>
          <div class="exp-hypothesis">
            <strong>Hypothesis:</strong> ${sanitizeText(exp.hypothesis)}
          </div>
        </div>

        <div>
          <ul class="exp-details-list">
            <li><strong>Target Population:</strong> ${sanitizeText(exp.target_audience)}</li>
            <li><strong>Method:</strong> ${sanitizeText(exp.method)}</li>
            <li><strong>Primary Metric:</strong> ${sanitizeText(exp.primary_metric)}</li>
            <li><strong>Decision Gate:</strong> ${sanitizeText(exp.decision_criteria)}</li>
            <li><strong>Duration & Resources:</strong> ${sanitizeText(exp.duration)} · ${sanitizeText(exp.required_resources)}</li>
          </ul>
        </div>
      </div>
    `;
  }).join('');
}

// -------------------------------------------------------------
// NAV SCROLL SPY
// -------------------------------------------------------------
function initNavScroll() {
  const links = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 100;
    links.forEach(link => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const section = document.querySelector(targetId);
        if (section) {
          if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      }
    });
  });
}
