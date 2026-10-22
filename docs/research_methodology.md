# Research Methodology & Data Governance (2026)

## 1. Scope & Provider Selection Criteria
To ensure high comparability, five prominent provider-partner offerings in India were audited. Selection criteria required:
1. **Identifiable Flagship Program:** A specific, named course offering (not an aggregated catalog comparison).
2. **Post-Graduate / Professional Level:** Programs targeted at working professionals seeking substantive AI/ML competency.
3. **Publicly Accessible Program Literature:** Published syllabi, tuition schedules, eligibility requirements, and terms of service.
4. **Institutional Partnership:** Direct affiliation with a recognized statutory university or accredited institution.

---

## 2. Data Extraction Protocol
All records in `data/competitor_programs.json` and `research/source_log.csv` were gathered following strict research rules:
- **Primary Source First:** Extracted directly from official provider domains (`upgrad.com`, `simplilearn.com`, `mygreatlearning.com`, `cep.iitd.ac.in`, `coursera.org/degrees`).
- **Date Stamping:** Every data point records the exact date accessed (`2026-10-22`).
- **Verbatim Quotations:** Where terms were nuanced (e.g. refund conditions, career assistance), direct excerpts or specific brochure sections were recorded.
- **Tax & Fee Normalization:** Base fees were normalized to include mandatory Indian Goods and Services Tax (18% GST). Unadvertised fees were explicitly flagged.

---

## 3. Four-Tier Epistemic Classification
To avoid conflating observed evidence with promotional assertions, every claim is classified into one of four epistemic tiers:

```
+--------------------------------------------------------------------------+
| 1. OBSERVED EVIDENCE                                                     |
| Empirical, legally binding, or publicly published facts.                |
| Examples: Tuition price, duration, credential issuer, partner name.     |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| 2. INFERRED PATTERN                                                      |
| Deductive conclusions drawn from multiple corroborating observations.    |
| Example: Displaying net prices in marketing to lower sticker shock.      |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| 3. WORKING HYPOTHESIS                                                    |
| Plausible strategic or behavioral models subject to testing.            |
| Example: Learners will complete a 5-hour micro-project before purchase.  |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| 4. MARKET UNKNOWNS                                                       |
| Proprietary or undisclosed parameters requiring private audits.          |
| Example: True cohort drop-out rates; organic placement percentages.     |
+--------------------------------------------------------------------------+
```

---

## 4. Anti-Bias & Neutrality Rules
- **No Paid Affiliations:** The research team receives zero referral bonuses, affiliate commissions, or sponsored consideration from any provider.
- **No Arbitrary Rankings:** We do not compute an arbitrary "Top 5" or "Overall Winner" score. Different programs suit different student backgrounds.
- **Auditable Formulas:** Any metric presented in the Excel workbook (`research/competitor_matrix.xlsx`) or website dashboard is derived directly from the underlying JSON/CSV dataset.
