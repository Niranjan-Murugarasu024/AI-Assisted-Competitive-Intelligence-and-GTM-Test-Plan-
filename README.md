# Proof Before Purchase: AI/Data Competitive Intelligence & GTM Test Plan (2026)

[![Integrity Tests](https://img.shields.io/badge/tests-19%20passed%2C%200%20failed-success.svg)](#test-commands-and-actual-test-results)
[![Data Audit](https://img.shields.io/badge/data%20audit-verified%202026--10--22-blue.svg)](#competitive-intelligence-scope)
[![Privacy Architecture](https://img.shields.io/badge/privacy-100%25%20local--only-emerald.svg)](#privacy-security-and-trust)
[![License: MIT](https://img.shields.io/badge/License-MIT-slate.svg)](LICENSE)

An empirical competitive intelligence benchmark, spreadsheet audit package, and deterministic role-fit diagnostic prototype investigating whether prospective learners benefit from testing their project capability before purchasing expensive AI and data upskilling programs.

---

## Table of Contents
1. [Project Overview & Business Problem](#project-overview--business-problem)
2. [Competitive Intelligence Scope & 5 Flagship Programs](#competitive-intelligence-scope)
3. [Evidence Classification & Key Findings](#evidence-classification--key-findings)
4. [Proof Before Purchase Diagnostic Workflow](#proof-before-purchase-diagnostic-workflow)
5. [Go-to-Market (GTM) Strategy & Five-Experiment Plan](#gtm-strategy--five-experiment-plan)
6. [Architecture & Repository Structure](#architecture--repository-structure)
7. [Spreadsheet Engineering (6-Sheet Excel Workbook)](#spreadsheet-engineering)
8. [Local Setup & Reproduction Commands](#local-setup--reproduction-commands)
9. [Test Commands & Actual Test Results](#test-commands-and-actual-test-results)
10. [Privacy, Security & Trust Properties](#privacy-security-and-trust)
11. [Deployment Instructions & Current Status](#deployment-instructions--current-status)
12. [Known Limitations & Epistemic Boundaries](#known-limitations--epistemic-boundaries)
13. [AI-Assisted Development Methodology](#ai-assisted-development-methodology)
14. [Future Work](#future-work)

---

## Project Overview & Business Problem

### Business Context
The market for executive AI and data education in India has become an intensive, high-ticket consumer sector. Programs offered by commercial aggregators in partnership with universities cost between **₹2,30,100 and ₹4,70,000 INR**. 

Prospective learners face severe information asymmetries:
- **Price Masking:** Baseline marketing tuition frequently excludes 18% Indian GST, causing an unadvertised ₹35,000 to ₹54,000 sticker shock at checkout.
- **Credential Ambiguity:** Programs use prestigious university logos, but legal credentials awarded are typically executive continuing education certificates that do not confer university degree credits or alumni status.
- **Asymmetric Outcome Risk:** Commercial sales funnels promise life-changing career transitions, yet legal contracts explicitly disclaim job guarantees.
- **Shallow Practice:** "25+ projects" frequently turn out to be 45-minute guided Jupyter notebook walkthroughs.

### The Value Proposition
**Proof Before Purchase** provides an independent, objective alternative: an interactive diagnostic that recommends an isolated practical micro-project, a 3-tier grading rubric, and 5 critical questions to ask admissions counselors before signing a financing agreement.

---

## Competitive Intelligence Scope

Five identifiable flagship programs were audited against official terms of service, brochures, and fee schedules verified on **2026-10-22**:

| Provider | Flagship Program | Academic Partner | Credential Type | Realized Price (INR) | Duration |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **upGrad** | Executive PG in ML & AI | IIIT Bangalore | Executive PG Diploma | ₹3,35,000 - ₹3,40,000 (Incl. GST) | 12 - 13 Mo |
| **Simplilearn** | PGP in AI and Machine Learning | Purdue University & IBM | Bootcamp PG Certificate | ₹2,59,600 - ₹3,54,000 (Incl. 18% GST) | 11 Mo |
| **Great Learning** | PGP-AIML | UT Austin McCombs | Executive Education Certificate | ₹2,83,200 - ₹3,24,500 (Incl. 18% GST) | 12 Mo |
| **Emeritus / IITD** | Advanced Cert in ML & DL | IIT Delhi CEP | Executive Certificate of Completion | ₹2,30,100 (Incl. 18% GST) | 6 Mo |
| **Coursera / ISI** | PG Diploma in Applied Statistics | ISI Kolkata | Academic Postgraduate Diploma | ₹4,70,000 (Tuition + Registration) | 12 - 36 Mo |

*Dataset is stored canonically in `data/competitor_programs.json` and `research/source_log.csv`.*

---

## Evidence Classification & Key Findings

We distinguish four epistemic levels: **Observed Evidence**, **Inferred Patterns**, **Working Hypotheses**, and **Market Unknowns**.

### Key Insights Summary (`data/insights.json`)
1. **Gross vs. Net Pricing Obfuscation (INSIGHT-001):** 3 of 5 evaluated providers exclude 18% GST from headline promotional material.
2. **Institutional Credential Halo (INSIGHT-002):** Marketing leans heavily on prestigious university brands, while fine print specifies executive non-degree certificate awards.
3. **Outcome Asymmetry (INSIGHT-003):** 100% of reviewed commercial programs disclaim job placement guarantees in their formal terms of service.
4. **Project Claim Inflation (INSIGHT-004):** High project quantity claims ("25+ projects") routinely mask shallow notebook exercises rather than end-to-end production systems.
5. **Time Commitment Underestimation (INSIGHT-005):** Advertised workloads (6-10 hrs/wk) drastically underestimate prerequisite gaps for career switchers tackling advanced calculus and deep learning.

---

## Proof Before Purchase Diagnostic Workflow

The diagnostic evaluates five user inputs:
1. **Target Role:** Data Analyst, Data Engineer, AI Engineer, AI/Product Analyst.
2. **Current Level:** Beginner / Switcher, Intermediate, Advanced.
3. **Target Skill Gaps:** Dynamic checkboxes mapped to role tracks.
4. **Weekly Study Time:** `< 5 hrs`, `5 - 10 hrs`, `10 - 15 hrs`, `15+ hrs`.
5. **Desired Outcome:** GitHub Portfolio, Work Promotion, Concept Mastery, Interview Proof.

### Output Components
- **Tailored Mini-Project Brief:** Architecture, recommended open-source tools, sample public benchmark data, and deliverable format.
- **Selection Rationale:** Clear deterministic explanation of why the scope fits the time budget.
- **Milestone Checklist:** 5-step concrete deliverables.
- **3-Tier Evaluation Rubric:** Beginner, Proficient, and Production-Ready criteria across Data Hygiene, Methodological Rigor, and Communication.
- **Admissions Diligence Questions:** Five hard-hitting questions to ask sales representatives before paying.
- **Legal Disclaimer:** Explicit advisory notification that the diagnostic does not guarantee admission or employment.

---

## GTM Strategy & Five-Experiment Plan

### Strategic Positioning
Capture high-intent learners by providing proof of capability prior to commercial transaction.

### Five Proposed Experiments (`data/gtm_experiments.json`)
- **EXP-001: Prospective-Learner Discovery Interviews ($n=20$):** Qualitative validation of pre-purchase friction points. Decision gate: $\ge 70\%$ problem resonance rate.
- **EXP-002: Diagnostic Prototype Usability Testing ($n=15$):** Unassisted task completion rate benchmark (Target: $\ge 85\%$, SUS $\ge 80$).
- **EXP-003: Curriculum-First vs. Proof-First Messaging A/B Test ($n=1,000$):** Split-traffic conversion test measuring Qualified Engagement Rate.
- **EXP-004: Sample-Project Preview & Rubric Engagement ($n=100$):** Evaluating lift in self-reported career decision clarity.
- **EXP-005: Transparent Program-Comparison Experience Testing ($n=30$):** Measuring informed decision preparedness and caveat awareness.

*All experiment statuses are officially marked as `Proposed` or `Not Started` per scientific integrity policy.*

---

## Architecture & Repository Structure

The platform uses a clean, zero-dependency, static-first web architecture:

```
GTM/
├── index.html                       # Responsive single-page application
├── package.json                     # Scripts, metadata, and dependencies
├── vercel.json                      # Static hosting & security headers
├── PROJECT_STATUS.md                # Progress log & architectural decisions
├── README.md                        # Portfolio documentation
├── src/
│   ├── css/
│   │   └── styles.css               # Vanilla CSS design system with dark/light tokens
│   └── js/
│       ├── app.js                   # Application controller & DOM wiring
│       ├── rules.js                 # Pure deterministic diagnostic recommendation logic
│       ├── filters.js               # Matrix search, filtering, and live metric aggregation
│       ├── validation.js            # Input validation and XSS sanitation
│       └── data_store.js            # In-memory verified data bundle
├── data/
│   ├── competitor_programs.json     # 5 Audited flagship programs
│   ├── insights.json                # 5 Structured research insights
│   ├── gtm_experiments.json         # 5 GTM validation experiments
│   └── diagnostic_rules.json        # Role rules, project templates, and rubrics
├── research/
│   ├── competitor_matrix.xlsx       # Audited 6-sheet Excel workbook with formulas
│   └── source_log.csv               # 25 Verified evidence claims with URLs
├── docs/
│   ├── problem_statement.md         # Research brief & problem analysis
│   ├── research_methodology.md      # Data governance & epistemic tiers
│   ├── gtm_strategy.md              # Positioning, customer journey & funnel metrics
│   ├── experiment_plan.md           # Full 5-experiment protocols
│   ├── four_week_plan.md            # Feasible 4-week execution roadmap
│   ├── limitations.md               # Comparability constraints & unknowns
│   └── ai_assistance_log.md         # Audited AI-assisted task log
├── scripts/
│   ├── build_research_workbook.py   # openpyxl workbook generator
│   └── validate_research_data.py    # Python research data schema validator
├── tests/
│   ├── run_tests.js                 # Automated Node.js test runner (19 assertions)
│   └── test_cases.md                # Formal test case specifications
└── public/
    └── downloads/
        ├── competitor_matrix.xlsx   # Direct downloadable audit workbook
        └── source_log.csv           # Direct downloadable source log
```

---

## Spreadsheet Engineering

The workbook `research/competitor_matrix.xlsx` was generated using Python 3.13 and `openpyxl`. It features:
- **Sheet 1 (Overview):** Dynamic KPI cards powered by native Excel formulas (`=AVERAGE`, `=MIN`, `=MAX`, `=COUNTA`, `=COUNTIF`).
- **Sheet 2 (Competitor Matrix):** Full 20-column comparison matrix with clickable hyperlinks, frozen header pane (`A4`), and active auto-filters.
- **Sheet 3 (Sources & Caveats):** 25 granular claims with exact URLs, access timestamps, and quotations.
- **Sheet 4 (Insight Ledger):** Complete empirical insights, alternative explanations, and unknown parameters.
- **Sheet 5 (GTM Experiments):** Full specification of the 5 validation tests and decision gates.
- **Sheet 6 (Build Log):** Auditable task completion records with actual start/end timestamps.

---

## Local Setup & Reproduction Commands

### Prerequisites
- Node.js (v18+)
- Python (v3.10+) with `openpyxl` (`pip install openpyxl`)

### 1. Clone & Inspect
```bash
git clone <repository-url>
cd GTM
```

### 2. Run Data Validation
```bash
npm run validate:data
# or: python scripts/validate_research_data.py
```

### 3. Rebuild the Excel Workbook
```bash
npm run build:workbook
# or: python scripts/build_research_workbook.py
```

### 4. Execute the Full Automated Test Suite
```bash
npm test
# or: node tests/run_tests.js
```

### 5. Start Local Static Server
```bash
npm start
# or: npx serve .
# Open http://localhost:3000 in your browser
```

---

## Test Commands and Actual Test Results

Execution output of `npm test`:

```
=================================================
PROMPT BEFORE PURCHASE: TEST SUITE EXECUTION
=================================================

--- Suite 1: Data Integrity & Competitor Records ---
  [PASS] TC-DATA-01: Contains exactly 5 verified flagship programs
  [PASS] TC-DATA-02: Every program has valid official URL and access date
  [PASS] TC-DATA-03: Tuition boundaries are non-negative with min <= max
  [PASS] TC-DATA-04: Substantive caveats accompany each program
  [PASS] TC-DATA-05: Exactly 5 insights exist with valid evidence ID mappings
  [PASS] TC-DATA-06: Exactly 5 GTM experiments exist with 'Proposed' initial status

--- Suite 2: Diagnostic Determinism & Recommendation Engine ---
  [PASS] TC-DIAG-01: All 4 roles across all 4 time tiers generate valid recommendations
  [PASS] TC-DIAG-02: Strict Determinism: Identical inputs produce bit-for-bit identical outputs
  [PASS] TC-DIAG-03: Changing time tier alters project scope and pacing label
  [PASS] TC-DIAG-04: Input validation blocks invalid roles and empty gaps
  [PASS] TC-DIAG-05: Sanitize helper prevents XSS injections

--- Suite 3: Filtering & Mathematical Summary Aggregation ---
  [PASS] TC-FILT-01: Filtering by provider returns exact matching records
  [PASS] TC-FILT-02: Price bracket filter isolates < 250k correctly
  [PASS] TC-FILT-03: Mathematical summary metrics match audited reality
  [PASS] TC-FILT-04: Keyword search matches across partners, tools, and caveats

--- Suite 4: Privacy, Client Security & Local-Only Runtime ---
  [PASS] TC-PRIV-01: Zero local/sessionStorage calls in client JavaScript
  [PASS] TC-PRIV-02: Zero remote API secrets or model keys exposed in client files
  [PASS] TC-PRIV-03: Zero remote tracking pixels or analytics tags in index.html
  [PASS] TC-PRIV-04: Downloadable assets exist and are accessible

=================================================
TEST SUMMARY: 19 PASSED, 0 FAILED
=================================================
```

---

## Privacy, Security and Trust

- **Zero Remote Telemetry:** The application makes 0 external network requests during diagnostic execution.
- **Zero Storage Persistence:** No user choices are written to `localStorage`, `sessionStorage`, or `cookies`.
- **Zero API Secrets:** No API keys are embedded or exposed in client bundles.
- **Client Security Headers:** `vercel.json` enforces `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `X-XSS-Protection`, and strict Referrer Policies.

---

## Deployment Instructions & Current Status

### Vercel Deployment
The repository is 100% prepared for instant static deployment on Vercel:
1. Connect this repository to Vercel via GitHub, or deploy directly via the Vercel CLI:
   ```bash
   npx vercel --prod
   ```
2. Build Command: *None (Static)*
3. Output Directory: `.` (Project root)
4. Verify HTTPS endpoints and downloads for `competitor_matrix.xlsx` and `source_log.csv`.

*Current deployment status: Pre-deployment static bundle verified. Live push pending user GitHub/Vercel authentication.*

---

## Known Limitations & Epistemic Boundaries

- **Dynamic Ad-Hoc Discounts:** Figures represent published base rates; telemarketing phone discounts are not tracked.
- **Proprietary Cohort Drop-out Data:** Edtech providers do not publish audited graduation rates; drop-out estimates are based on qualitative reviews and workload mismatches.
- **Advisory Scope:** The diagnostic is an educational self-evaluation tool and does not guarantee employability or admission.

---

## AI-Assisted Development Methodology

Development was accelerated using advanced agentic AI assistance (Gemini Engine) with human architectural oversight:
- **Research Extraction:** Verified official URLs, tuition tables, and GST terms.
- **Excel Automation:** Wrote Python `openpyxl` generation scripts with native formulas.
- **Engineering Review:** Corrected console character encoding issues in Windows PowerShell, verified mathematical averages ($13.2$ months mean duration), and audited WCAG AA contrast.
- *Full record in `docs/ai_assistance_log.md`.*

---

## Future Work

1. Execute **Experiment 1 (Learner Discovery Interviews)** with 20 prospective students.
2. Publish open-source GitHub starter template repositories for all 16 role-fit mini-projects.
3. Conduct **Experiment 3 (A/B Messaging Test)** on live organic traffic to benchmark conversion lift.

---

## License
MIT License. Open for educational, portfolio, and research evaluation.
