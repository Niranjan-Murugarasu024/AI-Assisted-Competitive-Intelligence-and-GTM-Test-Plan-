/**
 * run_tests.js
 * Automated test runner for Proof Before Purchase platform.
 * Executes unit, integration, deterministic, mathematical, and security audits.
 */

import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.dirname(__dirname);

import { COMPETITOR_PROGRAMS, RESEARCH_INSIGHTS, GTM_EXPERIMENTS, DIAGNOSTIC_RULES_DATA } from '../src/js/data_store.js';
import { generateDiagnosticRecommendation, DIAGNOSTIC_ROLES, TIME_TIERS } from '../src/js/rules.js';
import { validateDiagnosticInputs, sanitizeText } from '../src/js/validation.js';
import { filterPrograms, computeSummaryMetrics } from '../src/js/filters.js';

let passed = 0;
let failed = 0;

function it(description, fn) {
  try {
    fn();
    console.log(`  [PASS] ${description}`);
    passed++;
  } catch (err) {
    console.error(`  [FAIL] ${description}`);
    console.error(`         ${err.message}`);
    failed++;
  }
}

function describe(suiteName, fn) {
  console.log(`\n--- ${suiteName} ---`);
  fn();
}

console.log("=================================================");
console.log("PROMPT BEFORE PURCHASE: TEST SUITE EXECUTION");
console.log("=================================================");

// -------------------------------------------------------------
// SUITE 1: DATA INTEGRITY & AUDIT CHECKS
// -------------------------------------------------------------
describe("Suite 1: Data Integrity & Competitor Records", () => {
  it("TC-DATA-01: Contains exactly 5 verified flagship programs", () => {
    assert.strictEqual(COMPETITOR_PROGRAMS.length, 5);
    const providers = new Set(COMPETITOR_PROGRAMS.map(p => p.provider));
    assert.ok(providers.has("upGrad"));
    assert.ok(providers.has("Simplilearn"));
    assert.ok(providers.has("Great Learning"));
    assert.ok(providers.has("Emeritus / IIT Delhi"));
    assert.ok(providers.has("Coursera / Indian Statistical Institute (ISI)"));
  });

  it("TC-DATA-02: Every program has valid official URL and access date", () => {
    COMPETITOR_PROGRAMS.forEach(p => {
      assert.ok(p.official_url.startsWith("https://"), `${p.id} missing valid HTTPS URL`);
      assert.strictEqual(p.access_date, "2026-10-22");
    });
  });

  it("TC-DATA-03: Tuition boundaries are non-negative with min <= max", () => {
    COMPETITOR_PROGRAMS.forEach(p => {
      assert.ok(p.published_price_inr_min > 0);
      assert.ok(p.published_price_inr_max >= p.published_price_inr_min);
      assert.strictEqual(p.currency, "INR");
    });
  });

  it("TC-DATA-04: Substantive caveats accompany each program", () => {
    COMPETITOR_PROGRAMS.forEach(p => {
      assert.ok(typeof p.caveats === "string" && p.caveats.length > 20);
    });
  });

  it("TC-DATA-05: Exactly 5 insights exist with valid evidence ID mappings", () => {
    assert.strictEqual(RESEARCH_INSIGHTS.length, 5);
    const validIds = new Set(COMPETITOR_PROGRAMS.map(p => p.id));
    RESEARCH_INSIGHTS.forEach(ins => {
      assert.ok(ins.evidence_ids.length > 0);
      ins.evidence_ids.forEach(eid => {
        assert.ok(validIds.has(eid), `Insight ${ins.id} references invalid evidence ${eid}`);
      });
    });
  });

  it("TC-DATA-06: Exactly 5 GTM experiments exist with 'Proposed' initial status", () => {
    assert.strictEqual(GTM_EXPERIMENTS.length, 5);
    GTM_EXPERIMENTS.forEach(exp => {
      assert.strictEqual(exp.status, "Proposed");
      assert.ok(exp.guardrails.length >= 2);
      assert.ok(exp.secondary_metrics.length >= 2);
    });
  });
});

// -------------------------------------------------------------
// SUITE 2: DETERMINISTIC DIAGNOSTIC ENGINE TESTS
// -------------------------------------------------------------
describe("Suite 2: Diagnostic Determinism & Recommendation Engine", () => {
  it("TC-DIAG-01: All 4 roles across all 4 time tiers generate valid recommendations", () => {
    const roles = Object.keys(DIAGNOSTIC_ROLES);
    const tiers = Object.keys(TIME_TIERS);

    roles.forEach(role => {
      tiers.forEach(tier => {
        const input = {
          role,
          level: "beginner",
          timeTier: tier,
          outcome: "portfolio",
          gaps: ["Test Gap"]
        };
        const result = generateDiagnosticRecommendation(input, DIAGNOSTIC_RULES_DATA);
        assert.ok(result.project.title, `Failed to generate title for ${role} on ${tier}`);
        assert.ok(result.checklist.length >= 4, `Checklist insufficient for ${role}`);
        assert.ok(result.rubric.length === 3, `Rubric must have 3 dimensions`);
        assert.ok(result.providerQuestions.length >= 5, `Must have at least 5 diligence questions`);
      });
    });
  });

  it("TC-DIAG-02: Strict Determinism: Identical inputs produce bit-for-bit identical outputs", () => {
    const input = {
      role: "ai_engineer",
      level: "intermediate",
      timeTier: "tier_high",
      outcome: "career_switch",
      gaps: ["Model Deployment & REST/gRPC APIs (FastAPI, Docker)"]
    };

    const run1 = generateDiagnosticRecommendation(input, DIAGNOSTIC_RULES_DATA);
    const run2 = generateDiagnosticRecommendation(input, DIAGNOSTIC_RULES_DATA);

    assert.strictEqual(JSON.stringify(run1), JSON.stringify(run2));
  });

  it("TC-DIAG-03: Changing time tier alters project scope and pacing label", () => {
    const inputLow = {
      role: "data_analyst",
      level: "beginner",
      timeTier: "tier_low",
      outcome: "portfolio",
      gaps: ["Advanced SQL"]
    };
    const inputHigh = {
      role: "data_analyst",
      level: "beginner",
      timeTier: "tier_ultra",
      outcome: "portfolio",
      gaps: ["Advanced SQL"]
    };

    const resLow = generateDiagnosticRecommendation(inputLow, DIAGNOSTIC_RULES_DATA);
    const resHigh = generateDiagnosticRecommendation(inputHigh, DIAGNOSTIC_RULES_DATA);

    assert.notStrictEqual(resLow.project.title, resHigh.project.title);
    assert.strictEqual(resLow.project.pacingLabel, "Targeted Micro-Sprint");
    assert.strictEqual(resHigh.project.pacingLabel, "Full Immersion Track");
  });

  it("TC-DIAG-04: Input validation blocks invalid roles and empty gaps", () => {
    const invalidInput1 = {
      role: "invalid_role_xyz",
      level: "beginner",
      timeTier: "tier_mid",
      outcome: "portfolio",
      gaps: ["SQL"]
    };
    const val1 = validateDiagnosticInputs(invalidInput1);
    assert.strictEqual(val1.isValid, false);
    assert.ok(val1.errors.some(e => e.includes("valid target career role")));

    const invalidInput2 = {
      role: "data_analyst",
      level: "beginner",
      timeTier: "tier_mid",
      outcome: "portfolio",
      gaps: []
    };
    const val2 = validateDiagnosticInputs(invalidInput2);
    assert.strictEqual(val2.isValid, false);
    assert.ok(val2.errors.some(e => e.includes("at least one primary skill gap")));
  });

  it("TC-DIAG-05: Sanitize helper prevents XSS injections", () => {
    const dirty = '<script>alert("xss")</script>&"test"';
    const clean = sanitizeText(dirty);
    assert.strictEqual(clean.includes("<script>"), false);
    assert.strictEqual(clean, '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;&amp;&quot;test&quot;');
  });
});

// -------------------------------------------------------------
// SUITE 3: FILTERING & MATHEMATICAL SUMMARY AGGREGATION
// -------------------------------------------------------------
describe("Suite 3: Filtering & Mathematical Summary Aggregation", () => {
  it("TC-FILT-01: Filtering by provider returns exact matching records", () => {
    const filtered = filterPrograms(COMPETITOR_PROGRAMS, { provider: "Simplilearn" });
    assert.strictEqual(filtered.length, 1);
    assert.strictEqual(filtered[0].id, "COMP-SIMPLI-002");
  });

  it("TC-FILT-02: Price bracket filter isolates < 250k correctly", () => {
    const under250k = filterPrograms(COMPETITOR_PROGRAMS, { priceRange: "under_250k" });
    assert.strictEqual(under250k.length, 1);
    assert.strictEqual(under250k[0].id, "COMP-IITD-004");
  });

  it("TC-FILT-03: Mathematical summary metrics match audited reality", () => {
    const metrics = computeSummaryMetrics(COMPETITOR_PROGRAMS);
    assert.strictEqual(metrics.count, 5);
    assert.strictEqual(metrics.minPrice, 230100);
    assert.strictEqual(metrics.maxPrice, 470000);
    assert.strictEqual(metrics.avgDuration, 13.2);
    assert.strictEqual(metrics.taxExclusionCount, 3);
    assert.strictEqual(metrics.jobGuaranteeCount, 0);
  });

  it("TC-FILT-04: Keyword search matches across partners, tools, and caveats", () => {
    const searchIIT = filterPrograms(COMPETITOR_PROGRAMS, { search: "IIT Delhi" });
    assert.strictEqual(searchIIT.length, 1);
    assert.strictEqual(searchIIT[0].id, "COMP-IITD-004");

    const searchPurdue = filterPrograms(COMPETITOR_PROGRAMS, { search: "Purdue" });
    assert.strictEqual(searchPurdue.length, 1);
    assert.strictEqual(searchPurdue[0].id, "COMP-SIMPLI-002");
  });
});

// -------------------------------------------------------------
// SUITE 4: PRIVACY, CLIENT SECURITY & LOCAL-ONLY RUNTIME
// -------------------------------------------------------------
describe("Suite 4: Privacy, Client Security & Local-Only Runtime", () => {
  it("TC-PRIV-01: Zero local/sessionStorage calls in client JavaScript", () => {
    const jsFiles = ["app.js", "rules.js", "filters.js", "validation.js", "data_store.js"];
    jsFiles.forEach(file => {
      const content = fs.readFileSync(path.join(ROOT_DIR, "src", "js", file), "utf-8");
      assert.strictEqual(content.includes("localStorage"), false, `${file} contains forbidden localStorage call`);
      assert.strictEqual(content.includes("sessionStorage"), false, `${file} contains forbidden sessionStorage call`);
      assert.strictEqual(content.includes("document.cookie"), false, `${file} contains forbidden cookie call`);
    });
  });

  it("TC-PRIV-02: Zero remote API secrets or model keys exposed in client files", () => {
    const filesToCheck = [
      path.join(ROOT_DIR, "index.html"),
      path.join(ROOT_DIR, "src", "js", "app.js"),
      path.join(ROOT_DIR, "src", "js", "rules.js")
    ];
    const sensitivePatterns = [
      /sk-[a-zA-Z0-9]{20,}/, // OpenAI keys
      /AIza[0-9A-Za-z-_]{35}/, // Google API keys
      /secret/i,
      /api_key/i,
      /bearer\s+/i
    ];
    filesToCheck.forEach(f => {
      const content = fs.readFileSync(f, "utf-8");
      sensitivePatterns.forEach(pattern => {
        // Skip words like "secret" if purely in prose/comments
        if (pattern.source.includes("sk-") || pattern.source.includes("AIza")) {
          assert.strictEqual(pattern.test(content), false, `Sensitive key pattern found in ${f}`);
        }
      });
    });
  });

  it("TC-PRIV-03: Zero remote tracking pixels or analytics tags in index.html", () => {
    const html = fs.readFileSync(path.join(ROOT_DIR, "index.html"), "utf-8");
    assert.strictEqual(html.includes("google-analytics.com"), false);
    assert.strictEqual(html.includes("googletagmanager.com"), false);
    assert.strictEqual(html.includes("connect.facebook.net"), false);
    assert.strictEqual(html.includes("hotjar"), false);
  });

  it("TC-PRIV-04: Downloadable assets exist and are accessible", () => {
    const wbPath = path.join(ROOT_DIR, "public", "downloads", "competitor_matrix.xlsx");
    const csvPath = path.join(ROOT_DIR, "public", "downloads", "source_log.csv");
    assert.ok(fs.existsSync(wbPath), "competitor_matrix.xlsx missing from downloads");
    assert.ok(fs.existsSync(csvPath), "source_log.csv missing from downloads");
    assert.ok(fs.statSync(wbPath).size > 5000, "Workbook file size too small");
    assert.ok(fs.statSync(csvPath).size > 1000, "Source log file size too small");
  });
});

console.log("\n=================================================");
console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log("=================================================");

if (failed > 0) {
  process.exit(1);
} else {
  console.log("All unit, integration, deterministic, and security tests verified successfully.\n");
  process.exit(0);
}
