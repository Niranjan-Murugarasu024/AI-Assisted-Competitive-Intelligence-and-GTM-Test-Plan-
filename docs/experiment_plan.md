# Five-Experiment GTM Validation Plan (2026)

This document details the operational execution protocols for the five validation experiments proposed in the Proof Before Purchase test plan.

---

## Experiment 1: Prospective-Learner Discovery Interviews
- **ID:** `EXP-001`
- **Current Status:** `Proposed`
- **Theme:** Problem Discovery & Buyer Psychology
- **Hypothesis:** Prospective AI/data learners who are actively comparing programs can articulate at least three distinct unaddressed anxieties regarding hidden costs, credential validity, and realistic workload.
- **Target Population:** Working professionals (2-8 years experience) in India/SE Asia currently researching or actively considering an AI/data upskilling program within the next 90 days ($n=20$).
- **Methodology:** Semi-structured 30-minute qualitative video interviews using a neutral discovery protocol with zero sales pitching. Audio transcribed and coded for recurring friction themes.
- **Primary Metric:** Problem Resonance Rate: Percentage of interviewees who unprompted or strongly affirm that assessing hands-on skill fit before paying ₹2L+ is their single biggest anxiety (Target: $\ge 70\%$).
- **Decision Gate:** Proceed if $\ge 14$ of 20 participants ($70\%$) identify pre-purchase skill-fit validation as a top-3 unmet need. If $< 50\%$, pivot positioning towards post-enrollment tutoring or career coaching.

---

## Experiment 2: Diagnostic Prototype Usability Testing
- **ID:** `EXP-002`
- **Current Status:** `Proposed`
- **Theme:** Prototype Usability & Cognitive Clarity
- **Hypothesis:** Prospective learners can complete the deterministic diagnostic in under 3 minutes without facilitator assistance and correctly interpret their mini-project, rubric, and provider questions.
- **Target Population:** 15 prospective learners representing all 4 target role tracks (Data Analyst, Data Engineer, AI Engineer, AI/Product Analyst).
- **Methodology:** Moderated think-aloud usability sessions ($n=10$) followed by unmoderated screen-recorded task runs ($n=15$). Participants are asked to complete the diagnostic, explain what the output means, and review the checklist.
- **Primary Metric:** Unassisted Task Completion Rate: Percentage of participants who configure inputs, review recommendation, and expand rubric without navigational errors (Target: $\ge 85\%$).
- **Decision Gate:** Passes if unassisted completion is $\ge 85\%$ and SUS score $\ge 80$. If comprehension fails on the evaluation rubric, redesign output card with simpler tabular formatting before running public traffic.

---

## Experiment 3: Curriculum-First vs. Proof-First Messaging A/B Test
- **ID:** `EXP-003`
- **Current Status:** `Proposed`
- **Theme:** GTM Positioning & Landing Page Conversion
- **Hypothesis:** Positioning that highlights "Proof Before Purchase: Test Your Real Project Fit" will generate a higher qualified consultation and diagnostic completion rate than standard "Industry-Leading AI Curriculum" messaging.
- **Target Population:** Organic and targeted LinkedIn/community visitors actively browsing data & AI upskilling comparisons (minimum sample size: 500 unique visitors per variant).
- **Methodology:** Split-traffic landing page experiment with identical visual layouts and identical comparison tools, varying only the hero value proposition and CTA framing.
  - **Control (Variant A):** "Master AI & Data Science with Top University Programs" (CTA: "Explore Programs").
  - **Treatment (Variant B):** "Proof Before Purchase: Diagnose Your Role Fit & Build a Free Test Project" (CTA: "Start 3-Min Free Diagnostic").
- **Primary Metric:** Qualified Engagement Rate: Diagnostic Completions divided by Eligible Unique Landing Page Visitors (Target: Treatment achieves $\ge 25\%$ relative lift over Control at $p < 0.05$).
- **Decision Gate:** If Treatment out-converts Control with statistical confidence ($p < 0.05$), adopt Proof-First positioning as standard baseline.

---

## Experiment 4: Sample-Project Preview & Rubric Engagement
- **ID:** `EXP-004`
- **Current Status:** `Proposed`
- **Theme:** Practical Engagement & Self-Evaluation Utility
- **Hypothesis:** Learners who are provided with a concrete role-fit mini-project task and objective rubric will report higher decision confidence when evaluating whether to enroll in an expensive program.
- **Target Population:** Users who complete the diagnostic and view their recommended mini-project (Target: 100 engaged users).
- **Methodology:** In-page interactive task preview offering users the option to inspect sample code, download project templates, and review self-grading checklist. Follow-up 1-click feedback widget: *"Did this preview clarify the day-to-day work required?"*
- **Primary Metric:** Decision Clarity Lift: Self-reported rating on "Confidence in knowing whether this role suits me" (Target: Treatment mean $\ge 4.2/5$ vs Control mean $\le 3.1/5$).
- **Decision Gate:** Adopt sample project previews permanently if Decision Clarity rating reaches $\ge 4.0/5$ and download rate $\ge 25\%$.

---

## Experiment 5: Transparent Program-Comparison Experience Testing
- **ID:** `EXP-005`
- **Current Status:** `Proposed`
- **Theme:** Consumer Trust & Decision Acceleration
- **Hypothesis:** Providing an unbiased, source-linked competitor comparison table with disclosed tax caveats and project realities accelerates prospective learners' ability to ask targeted questions to sales reps.
- **Target Population:** Prospective students actively in dialogue with or evaluating at least two commercial programs ($n=30$).
- **Methodology:** Users are provided with the interactive matrix and the downloadable audit workbook. A guided prompt tests whether they can successfully identify hidden costs and curriculum differences across upGrad, Simplilearn, and IIT Delhi.
- **Primary Metric:** Informed Decision Preparedness: Percentage of participants who state the tool revealed a material financial or structural caveat they were previously unaware of (Target: $\ge 75\%$).
- **Decision Gate:** If $\ge 75\%$ report discovering unadvertised terms and 0 bias complaints occur, publish the matrix openly as a portfolio artifact and open-source benchmark tool.
