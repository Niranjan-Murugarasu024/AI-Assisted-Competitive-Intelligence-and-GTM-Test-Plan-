# Four-Week Execution & Pilot Validation Plan (2026)

This operational roadmap outlines the staged progression from empirical desk research to pilot testing and packaging.

---

## Week 1: Research & Evidence Normalization
- **Goal:** Establish a verified baseline of five flagship AI/ML programs in India.
- **Key Tasks:**
  - Audit primary program pages for upGrad, Simplilearn, Great Learning, Emeritus/IIT Delhi, and Coursera/ISI.
  - Normalize tuition figures to include 18% GST and unadvertised exam fees.
  - Construct `research/source_log.csv` with 25 verified granular claims.
  - Compile `data/insights.json` isolating observations from interpretations.
  - Formulate qualitative interview protocols for Experiment 1.
- **Verification Gate:** Pass all automated schema and boundary assertions in `scripts/validate_research_data.py`.

---

## Week 2: Deterministic Prototype Architecture
- **Goal:** Implement the local-only diagnostic engine and interactive interface.
- **Key Tasks:**
  - Author deterministic rules in `data/diagnostic_rules.json` and `src/js/rules.js`.
  - Build responsive UI with dark/light themes, WCAG AA contrast, and glassmorphic aesthetics.
  - Create the interactive filtering and search engine in `src/js/filters.js`.
  - Implement the 6-sheet auditable Excel generator in `scripts/build_research_workbook.py`.
  - Conduct local browser privacy audit verifying zero remote telemetry or storage writes.
- **Verification Gate:** Zero uncaught console errors; identical diagnostic output returned for identical inputs.

---

## Week 3: GTM Validation Design & Usability Testing
- **Goal:** Instrument the 5 validation experiments and run unmoderated usability sessions.
- **Key Tasks:**
  - Prepare 5 standardized usability scenarios for the diagnostic tool.
  - Draft split-testing copy variants for Curriculum-First vs. Proof-First messaging.
  - Publish public starter project repositories for the 4 role tracks.
  - Run initial discovery interviews with prospective learners ($n=5$ pilot batch).
- **Verification Gate:** Unassisted task completion rate $\ge 85\%$ on the diagnostic tool.

---

## Week 4: Evaluation, Documentation & Portfolio Packaging
- **Goal:** Package final deliverables, verify deployment, and synthesize learnings.
- **Key Tasks:**
  - Execute full end-to-end regression test suite (`tests/run_tests.js`).
  - Generate final `research/competitor_matrix.xlsx` and verify Excel formula recalculations.
  - Document all architectural decisions, assumptions, and limitations in `README.md` and `PROJECT_STATUS.md`.
  - Commit clean repository history to Git.
  - Deploy static build to Vercel and verify live HTTPS behavior.
- **Verification Gate:** All downloads functional over HTTPS; production console clean.
