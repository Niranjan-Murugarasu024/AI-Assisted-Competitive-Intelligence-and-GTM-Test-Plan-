# Test Specifications & Verification Protocol

## Test Matrix Overview
This suite verifies that the Proof Before Purchase platform satisfies all functional, mathematical, deterministic, privacy, and interface requirements without external dependencies.

---

## Suite 1: Research & Data Integrity Tests
- **TC-DATA-01:** All 5 required competitor programs exist (`upGrad`, `Simplilearn`, `Great Learning`, `Emeritus / IIT Delhi`, `Coursera / ISI`).
- **TC-DATA-02:** Every program record has a valid `official_url` starting with `https://`.
- **TC-DATA-03:** All monetary values are denominated in INR with valid numeric boundaries ($Published\_Min > 0$ and $Published\_Max \ge Published\_Min$).
- **TC-DATA-04:** Every program includes substantive, transparent caveats regarding tax, placement, or credential limits.
- **TC-DATA-05:** Exactly 5 insights exist, and all cited `evidence_ids` reference valid program records.
- **TC-DATA-06:** Exactly 5 GTM experiments exist with initial status `"Proposed"` or `"Not Started"`.

---

## Suite 2: Diagnostic Determinism & Recommendation Tests
- **TC-DIAG-01:** Every supported target role (`data_analyst`, `data_engineer`, `ai_engineer`, `ai_product_analyst`) generates a valid, tailored mini-project and deliverable.
- **TC-DIAG-02:** Strict Determinism: Running identical inputs twice yields bit-for-bit identical project titles, tools, and rubrics.
- **TC-DIAG-03:** Input Mutation Sensitivity: Changing the weekly study time budget alters the project scope, hours budget, and pacing label.
- **TC-DIAG-04:** Validation Enforcement: Supplying empty gaps, invalid roles, or null inputs produces explicit, user-friendly error messages without breaking execution.
- **TC-DIAG-05:** Output Checklist Alignment: Checklist milestones and provider diligence questions match the selected track.

---

## Suite 3: Filter & Dynamic KPI Computation Tests
- **TC-FILT-01:** Provider filtering correctly isolates records for a single provider.
- **TC-FILT-02:** Price range filtering correctly segments `< ₹2.5L`, `₹2.5L - ₹3.5L`, and `> ₹3.5L`.
- **TC-FILT-03:** Dynamic metric calculation correctly computes average duration ($12.8$ months), price boundaries ($₹2.30\text{L} - ₹4.70\text{L}$), and GST exclusion count ($3$ of $5$).
- **TC-FILT-04:** Keyword search matches case-insensitively across provider names, credentials, tools, and caveats.

---

## Suite 4: Privacy & Client Security Tests
- **TC-PRIV-01:** No diagnostic input state is written to `localStorage` or `sessionStorage`.
- **TC-PRIV-02:** Client codebase contains zero external API keys, tokens, or credentials.
- **TC-PRIV-03:** No external analytics, tracking pixels, or third-party cookies are integrated.
- **TC-PRIV-04:** Pure offline runtime capability: all diagnostic logic functions with zero network access.
