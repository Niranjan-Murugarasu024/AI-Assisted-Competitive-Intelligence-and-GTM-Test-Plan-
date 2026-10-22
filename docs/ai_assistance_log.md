# AI-Assistance & Prototyping Audit Log (2026)

This document records the specific AI-assisted workflows utilized during the development of the Proof Before Purchase prototype, human oversight checkpoints, and material corrections made.

---

## 1. Summary of AI Tools Utilized
- **AI Models & Engines:** Gemini Engine / Advanced Agentic Assistant.
- **Development Tooling:** PowerShell CLI, Python 3.13, Node.js v22, openpyxl, Vanilla CSS3, Native ES6 Modules.
- **Architectural Policy:** Strict runtime independence. The production application is 100% deterministic and contains zero paid LLM API calls or server dependencies.

---

## 2. Actual Task Breakdown & Verification Record

| Task ID | Task Description | AI Contribution | Human / Engineer Review & Correction | Measured Verification |
| :--- | :--- | :--- | :--- | :--- |
| **AILOG-01** | Competitor Data Extraction | Queried official program fees, durations, and partner details via search grounding. | Audited search outputs against official terms; identified and corrected unadvertised 18% GST exclusions across 3 providers. | Verified via `data/competitor_programs.json` |
| **AILOG-02** | Evidence Ledger Formulation | Generated structured observations, alternative explanations, and business implications for 5 insights. | Refined the distinction between marketing claims and legally binding disclaimers to eliminate promotional tone. | Verified via `data/insights.json` and `research/source_log.csv` |
| **AILOG-03** | Excel Workbook Automation Script | Drafted `scripts/build_research_workbook.py` utilizing openpyxl for 6 sheets and native Excel formulas. | Verified formula references (`=AVERAGE`, `=MIN`, `=MAX`, `=COUNTA`), ensured frozen headers and auto-adjusted column widths. | Verified by running script and inspecting generated `.xlsx` |
| **AILOG-04** | Deterministic Rules Engine | Structured four role tracks, time tiers, and project templates in `src/js/rules.js`. | Tested edge cases to ensure identical inputs return identical recommendations; isolated rules into separate data store. | Verified via automated test assertions in `tests/run_tests.js` |
| **AILOG-05** | UI Architecture & Responsive CSS | Generated modern glassmorphic styling, dark/light theme tokens, and accessible form controls in `src/css/styles.css`. | Corrected color contrast ratios to meet WCAG AA standards; ensured responsive layout collapses gracefully on mobile viewports. | Verified in local browser preview and DOM inspection |
| **AILOG-06** | Data Integrity Validation Script | Created `scripts/validate_research_data.py` to enforce required keys, URL formats, and boundary constraints. | Fixed console encoding crash in Windows PowerShell (`cp1252` encoding of unicode checkmarks replaced with ASCII `[OK]`). | Verified by executing `python scripts/validate_research_data.py` |

---

## 3. Privacy & Safety Review
- **Zero API Keys in Client:** Frontend JavaScript contains no API tokens or environment secrets.
- **Zero Storage Persistence:** No diagnostic user inputs are saved to `localStorage`, `sessionStorage`, or remote databases.
- **Zero Third-Party Telemetry:** No Google Analytics, Meta Pixel, or tracking beacons embedded.
