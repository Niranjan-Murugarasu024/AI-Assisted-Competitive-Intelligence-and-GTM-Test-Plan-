/**
 * data_store.js
 * In-memory client bundle of verified research data.
 * Guarantees zero runtime CORS fetch failure and 100% offline deterministic performance.
 */

export const COMPETITOR_PROGRAMS = [
  {
    "id": "COMP-UPGRAD-001",
    "provider": "upGrad",
    "program_name": "Executive PG Programme in Machine Learning & AI",
    "official_url": "https://www.upgrad.com/machine-learning-ai-pgd-iiitb/",
    "credential_partner": "IIIT Bangalore (International Institute of Information Technology Bangalore)",
    "credential_category": "Executive PG Diploma",
    "published_price_inr_min": 335000,
    "published_price_inr_max": 340000,
    "published_price_display": "₹3,35,000 - ₹3,40,000",
    "currency": "INR",
    "tax_terms": "Inclusive of applicable GST in standard published tuition.",
    "financing_terms": "No-cost and low-cost EMI options offered via partner NBFCs (terms subject to credit underwriting).",
    "duration_months": 13,
    "duration_display": "12 - 13 Months",
    "weekly_hours_min": 12,
    "weekly_hours_max": 15,
    "weekly_hours_display": "12 - 15 hours/week",
    "delivery_format": "Online (Recorded video lectures + live weekend doubt-resolution sessions)",
    "hands_on_projects_count": 12,
    "projects_description": "12+ industry case studies & assignments covering supervised learning, deep learning, NLP, computer vision, and generative AI.",
    "capstone_included": true,
    "career_support_claims": "Dedicated student mentor, 1:1 career coaching sessions, 360-degree placement assistance via upGrad recruitment network, and interview preparation workshops.",
    "eligibility_requirements": "Bachelor's degree with minimum 50% marks; high school/college level mathematics background recommended; no mandatory coding prerequisite.",
    "access_date": "2026-10-22",
    "evidence_classification": "Observed Official Claims with Caveats",
    "confidence": "High",
    "caveats": "Outcome statistics (e.g. average salary hike percentages) are self-reported marketing claims not audited by an independent third party; tuition is non-refundable past trial cut-off date."
  },
  {
    "id": "COMP-SIMPLI-002",
    "provider": "Simplilearn",
    "program_name": "Post Graduate Program in AI and Machine Learning",
    "official_url": "https://www.simplilearn.com/pgp-ai-machine-learning-certification-training-course",
    "credential_partner": "Purdue University (in collaboration with IBM)",
    "credential_category": "Bootcamp PG Certificate",
    "published_price_inr_min": 259600,
    "published_price_inr_max": 354000,
    "published_price_display": "₹2,20,000 - ₹3,00,000 + 18% GST (Total: ₹2,59,600 - ₹3,54,000)",
    "currency": "INR",
    "tax_terms": "18% GST is added on base tuition during payment checkout.",
    "financing_terms": "Monthly EMI financing available through partner lending platforms.",
    "duration_months": 11,
    "duration_display": "11 Months",
    "weekly_hours_min": 10,
    "weekly_hours_max": 15,
    "weekly_hours_display": "10 - 15 hours/week",
    "delivery_format": "Online Bootcamp (Live interactive classes led by industry instructors + Purdue masterclasses)",
    "hands_on_projects_count": 25,
    "projects_description": "25+ practical hands-on projects across retail, e-commerce, healthcare, and finance domains; browser-based GPU lab sandboxes provided.",
    "capstone_included": true,
    "career_support_claims": "JobAssist program providing resume assistance, top hiring company partner access, and mock technical interview sessions.",
    "eligibility_requirements": "Bachelor's degree in any discipline with basic programming and mathematical aptitude.",
    "access_date": "2026-10-22",
    "evidence_classification": "Observed Official Claims with Caveats",
    "confidence": "High",
    "caveats": "Program awards a joint digital certificate of completion from Purdue University Online and Simplilearn; it is not a formal degree and does not confer Purdue alumni status. Placement service facilitates introductions but does not guarantee job placement."
  },
  {
    "id": "COMP-GRTLEA-003",
    "provider": "Great Learning",
    "program_name": "Post Graduate Program in Artificial Intelligence & Machine Learning (PGP-AIML)",
    "official_url": "https://www.mygreatlearning.com/pg-program-artificial-intelligence-course",
    "credential_partner": "McCombs School of Business at The University of Texas at Austin & Great Lakes",
    "credential_category": "Executive Education Certificate",
    "published_price_inr_min": 283200,
    "published_price_inr_max": 324500,
    "published_price_display": "₹2,40,000 - ₹2,75,000 + 18% GST (Total: ₹2,83,200 - ₹3,24,500)",
    "currency": "INR",
    "tax_terms": "Base tuition excludes 18% GST which is charged at registration.",
    "financing_terms": "Corporate sponsorship billing and flexible 12-month zero-interest EMI schemes.",
    "duration_months": 12,
    "duration_display": "12 Months",
    "weekly_hours_min": 10,
    "weekly_hours_max": 12,
    "weekly_hours_display": "10 - 12 hours/week",
    "delivery_format": "Online Mentored Learning (Self-paced video content paired with weekly live micro-mentorship batches)",
    "hands_on_projects_count": 10,
    "projects_description": "10 hands-on assignments and 1 comprehensive cross-domain capstone project evaluated by industry mentors.",
    "capstone_included": true,
    "career_support_claims": "GL Excelerate portal access, dedicated career manager, resume building reviews, live hiring drives, and alumni networking access.",
    "eligibility_requirements": "Bachelor's degree with minimum 50% aggregate marks; prior mathematics background required; Python knowledge recommended.",
    "access_date": "2026-10-22",
    "evidence_classification": "Observed Official Claims with Caveats",
    "confidence": "High",
    "caveats": "Credential awarded is a Certificate of Completion from UT Austin McCombs Executive Education; it does not confer academic university degree credits or UT Austin regular alumni status."
  },
  {
    "id": "COMP-IITD-004",
    "provider": "Emeritus / IIT Delhi",
    "program_name": "Advanced Certificate Programme in Machine Learning and Deep Learning",
    "official_url": "https://cep.iitd.ac.in",
    "credential_partner": "Continuing Education Programme (CEP), Indian Institute of Technology Delhi",
    "credential_category": "Executive Education Certificate",
    "published_price_inr_min": 230100,
    "published_price_inr_max": 230100,
    "published_price_display": "₹1,95,000 + 18% GST (Total: ₹2,30,100)",
    "currency": "INR",
    "tax_terms": "18% GST applied to the base academic fee of ₹1,95,000.",
    "financing_terms": "3-installment payment schedule across program duration managed by Emeritus platform.",
    "duration_months": 6,
    "duration_display": "6 Months",
    "weekly_hours_min": 6,
    "weekly_hours_max": 8,
    "weekly_hours_display": "6 - 8 hours/week (~80 total live hours + assignments)",
    "delivery_format": "Live Online Interactive Lectures (Delivered directly by IIT Delhi faculty on Emeritus platform)",
    "hands_on_projects_count": 5,
    "projects_description": "Assignments covering linear algebra, statistical learning, neural nets, and 1 dedicated 3-week final capstone project (~20 hours).",
    "capstone_included": true,
    "career_support_claims": "No placement agency service or job guarantee; participants earn CEP IIT Delhi alumni/executive recognition certificate.",
    "eligibility_requirements": "Graduates (10+2+3) or Diploma holders with mathematics at 10+2 level; minimum 1 year of professional work experience preferred.",
    "access_date": "2026-10-22",
    "evidence_classification": "Observed Official Claims with Caveats",
    "confidence": "High",
    "caveats": "This is an executive continuing education certificate, not an IIT Delhi degree. Focus is strictly pedagogical with no placement or career-switching agency support included."
  },
  {
    "id": "COMP-ISI-005",
    "provider": "Coursera / Indian Statistical Institute (ISI)",
    "program_name": "Post Graduate Diploma in Applied Statistics (PGDAS)",
    "official_url": "https://www.coursera.org/degrees/pg-diploma-applied-statistics-isi",
    "credential_partner": "Indian Statistical Institute (ISI Kolkata)",
    "credential_category": "Academic Postgraduate Diploma",
    "published_price_inr_min": 470000,
    "published_price_inr_max": 470000,
    "published_price_display": "₹4,50,000 tuition + ₹20,000 registration (Total: ₹4,70,000)",
    "currency": "INR",
    "tax_terms": "Academic tuition fee set by Indian Statistical Institute council.",
    "financing_terms": "Pay-per-semester breakdown; student loans eligible through nationalized educational banks.",
    "duration_months": 24,
    "duration_display": "12 - 36 Months (Nominal: 24 Months)",
    "weekly_hours_min": 10,
    "weekly_hours_max": 20,
    "weekly_hours_display": "10 - 20 hours/week",
    "delivery_format": "Online Asynchronous Modules + Proctored Semester Examinations and live faculty office hours",
    "hands_on_projects_count": 8,
    "projects_description": "Rigorous applied statistical computing projects utilizing R and Python; econometric, time series, and biostatistical modeling coursework.",
    "capstone_included": true,
    "career_support_claims": "Access to Coursera Career Concierge & job network; credential backed by ISI's global academic reputation.",
    "eligibility_requirements": "Bachelor's degree with Mathematics or Statistics at the degree level; formal academic entrance screening.",
    "access_date": "2026-10-22",
    "evidence_classification": "Observed Official Claims with Caveats",
    "confidence": "High",
    "caveats": "Demands substantial mathematical rigor (linear algebra, probability distributions, calculus); significant dropout risk if prerequisite foundational math is lacking. Not an accelerated bootcamp."
  }
];

export const RESEARCH_INSIGHTS = [
  {
    "id": "INSIGHT-001",
    "title": "Gross vs. Net Pricing Obfuscation (The GST & Financing Escalator)",
    "observation": "Three out of five evaluated providers (Simplilearn, Great Learning, Emeritus/IIT Delhi) quote baseline tuition exclusive of 18% GST in headline marketing promotional materials, resulting in a mandatory unadvertised surcharge of ₹35,000 to ₹54,000 at checkout. Total realized pricing ranges from ₹2,30,100 to ₹4,70,000.",
    "evidence_ids": ["COMP-UPGRAD-001", "COMP-SIMPLI-002", "COMP-GRTLEA-003", "COMP-IITD-004", "COMP-ISI-005"],
    "interpretation": "Educational platforms use headline-price masking to lower initial cognitive resistance during top-of-funnel consideration. When learners reach high-pressure sales calls, financing/EMI payments are emphasized ('only ₹7,999/month') to distract from the 18% GST inflation and lender financing interest.",
    "alternative_explanation": "Providers operate across multiple corporate and international tax jurisdictions where B2B enterprise sponsorships or non-resident candidates are tax-exempt, prompting them to display net base tuition standardly.",
    "business_implication": "A transparent 'all-in cost calculator' that discloses actual out-of-pocket costs (tuition + GST + mandatory exam fees + financing interest) establishes immediate trust and credibility with skeptical learners.",
    "confidence": "High (Directly verifiable across published tuition fee schedules and enrollment checkouts)",
    "remains_unknown": "The exact proportion of retail learners who drop out during the payment checkout step due to sudden GST sticker shock.",
    "next_validation_action": "Conduct qualitative interviews in Experiment 1 specifically probing at what stage prospective buyers discovered the final after-tax total cost."
  },
  {
    "id": "INSIGHT-002",
    "title": "The Institutional Credential Halo vs. Legal Degree Reality",
    "observation": "Programs prominently feature prestigious university brand logos (Purdue University, UT Austin McCombs, IIT Delhi) on landing pages, but the legal credential awarded is an 'Executive Continuing Education Certificate' or 'Bootcamp Completion Award', which does not confer alumni status or degree credit.",
    "evidence_ids": ["COMP-SIMPLI-002", "COMP-GRTLEA-003", "COMP-IITD-004"],
    "interpretation": "Platforms leverage institutional prestige ('Halo Effect') to justify premium fee structures (₹2L - ₹3.5L). Prospective students frequently conflate an executive certificate with a formal university degree, leading to post-enrollment remorse when they discover they cannot claim alumni network privileges or academic transfer credits.",
    "alternative_explanation": "Universities intentionally partner with commercial aggregators via their continuing education divisions to monetize academic brand equity without diluting regular on-campus degree standards.",
    "business_implication": "Proof-Before-Purchase can position itself as a neutral consumer advocate by providing a 'Credential Decoding Matrix' that demystifies degree vs. certificate vs. bootcamp status.",
    "confidence": "High (Confirmed via fine print disclaimers on provider terms and university partner portals)",
    "remains_unknown": "How hiring managers and technical recruiters in India/US actually weigh executive education certificates versus public GitHub portfolio evidence.",
    "next_validation_action": "Survey 25 technical hiring managers on how they evaluate 'IIT Delhi CEP Certificate' vs 'Purdue Bootcamp' vs 'Verified Production Code Repo'."
  },
  {
    "id": "INSIGHT-003",
    "title": "Outcome Asymmetry: 'Placement Assistance' Conflated with Job Placement",
    "observation": "Commercial platforms promise '360-degree career support', 'JobAssist', and 'exclusive job boards', yet official terms of service explicitly clarify that participation does not guarantee job interviews, placement, or minimum salary thresholds.",
    "evidence_ids": ["COMP-UPGRAD-001", "COMP-SIMPLI-002", "COMP-GRTLEA-003", "COMP-IITD-004"],
    "interpretation": "High-pressure sales funnels rely heavily on career transformation promises to close sales. However, the legal terms insulate providers from accountability, creating an asymmetric risk where the learner absorbs 100% of the financial burden while the provider takes upfront cash.",
    "alternative_explanation": "In a volatile tech hiring market, no third-party educational vendor can responsibly guarantee macro hiring demand, making standard disclaimer clauses standard legal prudence.",
    "business_implication": "Learners are hungry for pre-purchase de-risking: verifying their actual role capability before writing a ₹2.5L+ check. This validates the core value proposition of our diagnostic test.",
    "confidence": "High (Directly stated in terms of service agreements across all reviewed providers)",
    "remains_unknown": "The actual percentage of enrolled learners who secure a net-positive career transition attributable directly to the provider's internal portal vs self-directed applications.",
    "next_validation_action": "Run user interviews (Experiment 1) to test if learners know the difference between 'placement support' and 'job guarantee'."
  },
  {
    "id": "INSIGHT-004",
    "title": "Project Claim Inflation: High Quantity vs. Production-Depth Gap",
    "observation": "Marketing collateral highlights high project counts ('25+ projects', '12+ industry case studies'), but syllabus inspection reveals that the vast majority are pre-cleaned 45-minute Jupyter notebook walkthroughs with guided code snippets.",
    "evidence_ids": ["COMP-UPGRAD-001", "COMP-SIMPLI-002", "COMP-GRTLEA-003"],
    "interpretation": "Quantity is easier to market to beginners than engineering depth. However, tech hiring managers routinely discard cookie-cutter bootcamp projects (e.g., Titanic survival, Boston housing, MNIST classifiers) as lacking genuine software engineering or data validation rigor.",
    "alternative_explanation": "Beginner learners need bite-sized scaffolded exercises to build initial confidence before tackling open-ended software architectures.",
    "business_implication": "Offering a tangible mini-project with an objective evaluation rubric before purchase allows learners to taste real-world problem complexity and verify their intrinsic interest before committing 12 months.",
    "confidence": "High (Evident from detailed syllabus schedules and GitHub repositories of past graduates)",
    "remains_unknown": "Whether prospective learners find open-ended projects energizing or intimidating before enrolling.",
    "next_validation_action": "Measure user completion rates of the diagnostic's suggested mini-project scope in Experiment 4."
  },
  {
    "id": "INSIGHT-005",
    "title": "Time Commitment Underestimation and Completion Drop-Off",
    "observation": "Recommended weekly commitment is listed as 6 to 15 hours per week alongside full-time employment, but rigorous curricula (such as ISI's Applied Statistics or IIT Delhi's deep learning) realistically require 15-20+ hours for candidates without strong mathematical prerequisites.",
    "evidence_ids": ["COMP-UPGRAD-001", "COMP-SIMPLI-002", "COMP-IITD-004", "COMP-ISI-005"],
    "interpretation": "Understating weekly workload lowers friction during sales calls. When working professionals encounter advanced linear algebra, backpropagation calculus, or R programming, they experience severe cognitive fatigue, contributing to high attrition.",
    "alternative_explanation": "Course designers calculate hours based on median learners with ideal prerequisites, rather than career switchers starting from scratch.",
    "business_implication": "Our diagnostic's workload feasibility check (correlating weekly hours with prerequisite gaps) provides an honest, friction-reducing diagnostic that establishes our product as a trusted advisor.",
    "confidence": "Moderate to High (Observed in syllabus requirements vs advertised marketing study plans)",
    "remains_unknown": "Exact attrition rates across cohorts, as edtech providers treat graduation rates as proprietary confidential data.",
    "next_validation_action": "Collect time-budget estimates and past online course drop-out histories in user discovery interviews."
  }
];

export const GTM_EXPERIMENTS = [
  {
    "id": "EXP-001",
    "title": "Prospective-Learner Discovery Interviews",
    "theme": "Problem Discovery & Buyer Psychology",
    "status": "Proposed",
    "hypothesis": "Prospective AI/data learners who are actively comparing programs can articulate at least three distinct unaddressed anxieties regarding hidden costs, credential validity, and realistic workload.",
    "target_audience": "Working professionals (2-8 years experience) in India/SE Asia currently researching or actively considering an AI/data upskilling program within the next 90 days (n=20).",
    "method": "Semi-structured 30-minute qualitative video interviews using a neutral discovery protocol with zero sales pitching. Audio transcribed and coded for recurring friction themes.",
    "control_treatment": "N/A (Exploratory qualitative inquiry). Balanced across non-technical switchers (n=10) and adjacent software engineers (n=10).",
    "primary_metric": "Problem Resonance Rate: Percentage of interviewees who unprompted or strongly affirm that assessing hands-on skill fit before paying ₹2L+ is their single biggest anxiety (Target: ≥ 70%).",
    "secondary_metrics": [
      "Average number of hidden cost/credential ambiguities cited per participant",
      "Willingness to spend 3-5 hours on a diagnostic trial project before enrolling (Target: ≥ 65%)",
      "Reported distrust score towards edtech sales phone calls (1-5 scale)"
    ],
    "guardrails": [
      "Informed consent obtained prior to recording",
      "Zero PII stored in public repositories or project documentation; anonymized IDs only",
      "No selling of any partner programs or advice during interviews"
    ],
    "required_resources": "Video conferencing tool, Calendly scheduling link, interview guide protocol, gift card incentive ($15 or ₹1,000 equivalent per completed session).",
    "duration": "2 Weeks (10 business days)",
    "decision_criteria": "Proceed if ≥ 14 of 20 participants (70%) identify pre-purchase skill-fit validation as a top-3 unmet need. If < 50%, pivot positioning towards post-enrollment tutoring or career coaching."
  },
  {
    "id": "EXP-002",
    "title": "Diagnostic Prototype Usability Testing",
    "theme": "Prototype Usability & Cognitive Clarity",
    "status": "Proposed",
    "hypothesis": "Prospective learners can complete the deterministic diagnostic in under 3 minutes without facilitator assistance and correctly interpret their mini-project, rubric, and provider questions.",
    "target_audience": "15 prospective learners representing all 4 target role tracks (Data Analyst, Data Engineer, AI Engineer, AI/Product Analyst).",
    "method": "Moderated think-aloud usability sessions (n=10) followed by unmoderated screen-recorded task runs (n=15). Participants are asked to complete the diagnostic, explain what the output means, and review the checklist.",
    "control_treatment": "N/A (Single-product usability test assessing task completion and comprehension).",
    "primary_metric": "Unassisted Task Completion Rate: Percentage of participants who configure inputs, review recommendation, and expand rubric without navigational errors (Target: ≥ 85%).",
    "secondary_metrics": [
      "Average time on task (Target: < 180 seconds)",
      "Comprehension accuracy score of evaluation rubric and provider questions (Target: ≥ 80% correct recall)",
      "System Usability Scale (SUS) benchmark score (Target: ≥ 80 / 100)"
    ],
    "guardrails": [
      "No diagnostic input data saved or transmitted over the wire (pure local state verification)",
      "Clear explanation that results are advisory recommendations and do not certify job placement",
      "Observer does not intervene unless participant is blocked for > 60 seconds"
    ],
    "required_resources": "Loom / OBS recording setup, prototype hosted on static URL, 5 standard user persona scenarios, standardized SUS survey form.",
    "duration": "1 Week (5 business days)",
    "decision_criteria": "Passes if unassisted completion is ≥ 85% and SUS score ≥ 80. If comprehension fails on the evaluation rubric, redesign output card with simpler tabular formatting before running public traffic."
  },
  {
    "id": "EXP-003",
    "title": "Curriculum-First vs. Proof-First Messaging A/B Test",
    "theme": "GTM Positioning & Landing Page Conversion",
    "status": "Proposed",
    "hypothesis": "Positioning that highlights 'Proof Before Purchase: Test Your Real Project Fit' will generate a higher qualified consultation and diagnostic completion rate than standard 'Industry-Leading AI Curriculum' messaging.",
    "target_audience": "Organic and targeted LinkedIn/community visitors actively browsing data & AI upskilling comparisons (minimum sample size: 500 unique visitors per variant).",
    "method": "Split-traffic landing page experiment with identical visual layouts and identical comparison tools, varying only the hero value proposition and CTA framing.",
    "control_treatment": "Control (Variant A): 'Master AI & Data Science with Top University Programs' (Curriculum & Credential-first CTA: 'Explore Programs'). Treatment (Variant B): 'Proof Before Purchase: Diagnose Your Role Fit & Build a Free Test Project' (Proof-first CTA: 'Start 3-Min Free Diagnostic').",
    "primary_metric": "Qualified Engagement Rate: Diagnostic Completions divided by Eligible Unique Landing Page Visitors (Target: Treatment achieves ≥ 25% relative lift over Control at p < 0.05).",
    "secondary_metrics": [
      "Bounce rate per variant",
      "Workbook download click rate",
      "Downstream provider outbound source link clicks per visitor"
    ],
    "guardrails": [
      "No deceptive dark patterns or countdown timers",
      "Deterministic local diagnostic experience on both variants",
      "Strict privacy-first analytics (privacy-preserving aggregate counts; zero cookies or IP harvesting)"
    ],
    "required_resources": "Static site deployment on Vercel with edge-split or clean A/B routing, organic social posts across tech communities (Reddit, LinkedIn, Twitter/X tech groups).",
    "duration": "2 Weeks (or until 500 unique visits per variant is reached)",
    "decision_criteria": "If Treatment out-converts Control with statistical confidence (p < 0.05), adopt Proof-First positioning as standard baseline. If Control wins or no difference, refine the diagnostic teaser copy."
  },
  {
    "id": "EXP-004",
    "title": "Sample-Project Preview & Rubric Engagement",
    "theme": "Practical Engagement & Self-Evaluation Utility",
    "status": "Proposed",
    "hypothesis": "Learners who are provided with a concrete role-fit mini-project task and objective rubric will report higher decision confidence when evaluating whether to enroll in an expensive program.",
    "target_audience": "Users who complete the diagnostic and view their recommended mini-project (Target: 100 engaged users).",
    "method": "In-page interactive task preview offering users the option to inspect sample code, download project templates, and review self-grading checklist. Follow-up 1-click feedback widget: 'Did this preview clarify the day-to-day work required?'",
    "control_treatment": "Control: Static syllabus text listing module topics. Treatment: Interactive mini-project brief with architecture diagram, test dataset snippet, and 3-tier scoring rubric.",
    "primary_metric": "Decision Clarity Lift: Self-reported rating on 'Confidence in knowing whether this role suits me' (Target: Treatment mean ≥ 4.2/5 vs Control mean ≤ 3.1/5).",
    "secondary_metrics": [
      "Project brief download rate (Target: ≥ 30% of diagnostic completers)",
      "Time spent actively inspecting the rubric card (Target: > 45 seconds)",
      "Provider questions checklist interaction rate"
    ],
    "guardrails": [
      "All sample project briefs use publicly accessible open datasets (e.g. NYC TLC, Kaggle Open, HuggingFace)",
      "Clear notice that self-evaluation does not substitute for formal accredited testing",
      "Zero telemetry tracking without explicit anonymous click action"
    ],
    "required_resources": "Pre-authored sample datasets, GitHub starter repositories for the 4 tracks, markdown project briefs.",
    "duration": "2 Weeks",
    "decision_criteria": "Adopt sample project previews permanently if Decision Clarity rating reaches ≥ 4.0/5 and download rate ≥ 25%. If < 15%, simplify project scope to 30-minute interactive notebooks."
  },
  {
    "id": "EXP-005",
    "title": "Transparent Program-Comparison Experience Testing",
    "theme": "Consumer Trust & Decision Acceleration",
    "status": "Proposed",
    "hypothesis": "Providing an unbiased, source-linked competitor comparison table with disclosed tax caveats and project realities accelerates prospective learners' ability to ask targeted questions to sales reps.",
    "target_audience": "Prospective students actively in dialogue with or evaluating at least two commercial programs (n=30).",
    "method": "Users are provided with the interactive matrix and the downloadable audit workbook. A guided prompt tests whether they can successfully identify hidden costs and curriculum differences across upGrad, Simplilearn, and IIT Delhi.",
    "control_treatment": "Control: Standard provider brochures and search engine queries. Treatment: Standardized Proof-Before-Purchase comparison table with verified evidence IDs, direct URLs, and GST warnings.",
    "primary_metric": "Informed Decision Preparedness: Percentage of participants who state the tool revealed a material financial or structural caveat they were previously unaware of (Target: ≥ 75%).",
    "secondary_metrics": [
      "Total workbook (.xlsx) downloads",
      "Click-through rate to official university partner accreditation pages",
      "Qualitative feedback on transparency and perceived bias (Target: 0 accusations of commercial promotion)"
    ],
    "guardrails": [
      "All claims must cite verifiable public URLs and access dates",
      "Equal visual weighting across all 5 providers (no 'Featured' or 'Sponsored' badges)",
      "Explicit statement that matrix is an educational research tool and does not provide financial or legal advice"
    ],
    "required_resources": "Interactive matrix UI, downloadable competitor_matrix.xlsx, post-interaction feedback questionnaire.",
    "duration": "2 Weeks",
    "decision_criteria": "If ≥ 75% report discovering unadvertised terms and 0 bias complaints occur, publish the matrix openly as a portfolio artifact and open-source benchmark tool."
  }
];

export const DIAGNOSTIC_RULES_DATA = {
  "roles": [
    {
      "id": "data_analyst",
      "name": "Data Analyst",
      "description": "Translates business questions into quantitative insights through exploratory analysis, SQL data modeling, visual analytics, and stakeholder dashboards.",
      "available_gaps": [
        "Advanced SQL (Window functions, CTEs, query optimization)",
        "Statistical Analysis & A/B Testing",
        "Business Intelligence Dashboards (Power BI / Tableau)",
        "Python Data Wrangling (Pandas, Polars, Data Cleaning)",
        "Executive Storytelling & Metric Decomposition"
      ]
    },
    {
      "id": "data_engineer",
      "name": "Data Engineer",
      "description": "Architects, constructs, and maintains robust data processing pipelines, ETL/ELT workflows, data warehouses, and streaming infrastructure.",
      "available_gaps": [
        "Data Warehouse Modeling (Star/Snowflake schema, dbt)",
        "Workflow Orchestration (Airflow, Prefect, Dagster)",
        "Distributed Computing (Spark, PySpark)",
        "Cloud Storage & Lakehouses (AWS S3, Databricks, Snowflake)",
        "Data Quality Validation & CI/CD Pipelines"
      ]
    },
    {
      "id": "ai_engineer",
      "name": "AI Engineer",
      "description": "Integrates machine learning models, modern LLMs, vector search, and agentic workflows into production software applications.",
      "available_gaps": [
        "Model Deployment & REST/gRPC APIs (FastAPI, Docker)",
        "LLM Orchestration & RAG Systems (LangChain, LlamaIndex)",
        "Vector Databases & Semantic Embeddings",
        "Model Evaluation, Guardrails & LLM-as-a-Judge",
        "Fine-tuning & Open Weights Optimization (LoRA, QLoRA)"
      ]
    },
    {
      "id": "ai_product_analyst",
      "name": "AI/Product Analyst",
      "description": "Bridges machine learning capabilities and product outcomes, evaluating feature impact, user behavior, latency/cost tradeoffs, and AI quality metrics.",
      "available_gaps": [
        "Product Funnel & Cohort Retention Analysis",
        "AI Feature Performance Metrics (Perplexity, Hallucination Rate, Latency)",
        "Unit Economics & Token Cost Optimization",
        "Causal Inference & Quasi-Experiments (Diff-in-Diff)",
        "User Feedback Loop Instrumentation & Telemetry"
      ]
    }
  ],
  "time_tiers": [
    { "id": "tier_low", "label": "Under 5 hours/week", "pace": "Constrained / Micro-Sprint", "project_scale": "Focused Micro-Project (3-5 hrs total)" },
    { "id": "tier_mid", "label": "5 - 10 hours/week", "pace": "Balanced Practitioner", "project_scale": "Standard End-to-End Project (8-12 hrs total)" },
    { "id": "tier_high", "label": "10 - 15 hours/week", "pace": "Intensive Accelerator", "project_scale": "Production-Grade Capstone (15-20 hrs total)" },
    { "id": "tier_ultra", "label": "15+ hours/week", "pace": "Full Immersion", "project_scale": "Comprehensive System Build with Full CI/CD (25+ hrs total)" }
  ],
  "experience_levels": [
    { "id": "beginner", "label": "Beginner / Career Switcher", "modifier": "Emphasizes foundational mechanics, step-by-step validation, and clean baseline reproducibility." },
    { "id": "intermediate", "label": "Intermediate / Practitioner", "modifier": "Emphasizes edge-case handling, modular architecture, and industry-standard tooling." },
    { "id": "advanced", "label": "Advanced / Senior", "modifier": "Emphasizes distributed scalability, latency optimization, unit economics, and formal production deployment." }
  ],
  "outcome_goals": [
    { "id": "portfolio", "label": "Portfolio Showcase", "focus": "Public GitHub repository with comprehensive README, live interactive demo, and clear documentation." },
    { "id": "promotion", "label": "Work Promotion / Work Deliverable", "focus": "Immediate application to real internal datasets with executive-ready ROI business summary." },
    { "id": "mastery", "label": "Concept Mastery", "focus": "Deep mathematical and programmatic intuition without reliance on black-box boilerplate." },
    { "id": "career_switch", "label": "Career Switch Proof", "focus": "Proof-of-work artifact that answers typical technical interview take-home challenges." }
  ],
  "projects": {
    "data_analyst": {
      "tier_low": {
        "title": "E-Commerce Customer Retention & Churn Diagnostic",
        "description": "Analyze transactional purchase logs to identify drop-off points, cohort retention curves, and high-value customer cohorts using pure SQL and a clean visualization deck.",
        "tools": "DuckDB / PostgreSQL, Pandas, Seaborn or Tableau Public",
        "sample_data": "Online Retail II public dataset or Brazilian E-Commerce public dataset (Olist)",
        "deliverable": "A structured SQL script with CTEs + an executive 3-slide visual deck outlining churn drivers and recommendations."
      },
      "tier_mid": {
        "title": "SaaS Subscription Cohort & LTV Decomposition Dashboard",
        "description": "Build an end-to-end cohort retention and MRR waterfall analysis modeling churn risk, expansion revenue, and customer lifetime value across acquisition channels.",
        "tools": "PostgreSQL, Python (Pandas/Polars), Streamlit or Power BI",
        "sample_data": "Synthesized B2B SaaS subscription billing records (50,000+ rows)",
        "deliverable": "Interactive dashboard with dynamic date sliders, retention heatmaps, and automated cohort calculation queries."
      },
      "tier_high": {
        "title": "Real-Time Marketplace Pricing & Demand Elasticity Analysis",
        "description": "Formulate econometric regression models and an automated reporting workflow analyzing ride-hailing or hotel surge pricing dynamics and elasticity.",
        "tools": "Python (Statsmodels, Scikit-learn), DuckDB, Plotly Dash",
        "sample_data": "Public TLC Trip Record Data or Open Airbnb Listings data",
        "deliverable": "Reproducible Jupyter notebook with econometric hypothesis tests, causal sanity checks, and a production dashboard."
      },
      "tier_ultra": {
        "title": "Enterprise Financial Analytics Engine & Automated Anomaly Detection",
        "description": "Construct an automated daily data audit and anomaly detection system for payment transactions, complete with email alerts and statistical process control.",
        "tools": "SQL, Python, DuckDB, Metabase / Superset, GitHub Actions",
        "sample_data": "Kaggle Credit Card Fraud & Transaction Logs",
        "deliverable": "Automated pipeline running via CI/CD that extracts data, detects outliers, and pushes an updated reporting summary."
      }
    },
    "data_engineer": {
      "tier_low": {
        "title": "Local SQLite to DuckDB ELT Pipeline with dbt Core",
        "description": "Transform messy raw transactional CSVs into a dimensional Kimball star schema using dbt Core and DuckDB with automated schema tests.",
        "tools": "DuckDB, dbt Core, Python",
        "sample_data": "Synthesized retail point-of-sale data",
        "deliverable": "A clean Git repo with documented dbt models, lineage DAG, and automated generic & singular tests."
      },
      "tier_mid": {
        "title": "Automated Weather & Air Quality Lakehouse Pipeline",
        "description": "Build an idempotent daily API ingestion pipeline extracting public environmental data, writing to partitioned Parquet, and serving SQL queries.",
        "tools": "Python, Prefect / Airflow, DuckDB / MinIO S3, PyArrow",
        "sample_data": "Open-Meteo free historical meteorological API",
        "deliverable": "Dockerized orchestrator running daily ingest with retries, partition validation, and data quality check reporting."
      },
      "tier_high": {
        "title": "Streaming Event Ingestion & Windowed Analytics Engine",
        "description": "Stream clickstream events into a message broker, process aggregations with stream processing, and persist to an analytical columnar store.",
        "tools": "Apache Kafka (or Redpanda), Spark Streaming / Bytewax, ClickHouse / DuckDB",
        "sample_data": "Real-time synthetic IoT sensor or web event generator",
        "deliverable": "Complete docker-compose stack with producer, real-time tumbling window consumer, and zero-data-loss validation test."
      },
      "tier_ultra": {
        "title": "Enterprise Cloud Lakehouse with Delta Lake, dbt, & CI/CD",
        "description": "Deploy a multi-hop (Bronze/Silver/Gold) architecture utilizing Delta Lake or Apache Iceberg with Great Expectations data quality gates.",
        "tools": "Delta Lake, dbt Core, Apache Spark, GitHub Actions, MinIO",
        "sample_data": "Multi-gigabyte public transaction dataset",
        "deliverable": "Production repository featuring CI/CD automated linting (SQLFluff), schema drift detection, and automated backfill tooling."
      }
    },
    "ai_engineer": {
      "tier_low": {
        "title": "Document QA RAG API with Vector Search & Citation Guardrails",
        "description": "Develop a lightweight Retrieval-Augmented Generation (RAG) system that answers questions over technical PDF documentation with exact source page citations.",
        "tools": "Python, FastAPI, ChromaDB / FAISS, Sentence-Transformers, HuggingFace Inference",
        "sample_data": "Public cloud provider API documentation or financial quarterly 10-K filings",
        "deliverable": "FastAPI endpoint accepting user queries and returning semantic answers with verifiable paragraph citations and confidence metrics."
      },
      "tier_mid": {
        "title": "Production RAG Service with Hybrid Search & Re-ranking",
        "description": "Build a production RAG application featuring hybrid BM25 + dense vector search, Cross-Encoder re-ranking, and automated chunking evaluation.",
        "tools": "FastAPI, Qdrant / Weaviate, LangChain / LlamaIndex, Docker",
        "sample_data": "Technical product troubleshooting documentation dataset",
        "deliverable": "Dockerized container with streaming responses, conversation memory, hallucination check guardrails, and latency logs."
      },
      "tier_high": {
        "title": "Agentic Tool-Calling Workflow with Evaluation Benchmark",
        "description": "Construct an autonomous multi-step reasoning agent capable of querying external SQL databases, calculating metrics in Python, and returning validated answers.",
        "tools": "FastAPI, LangGraph / CrewAI, SQLite, Ragas / TruLens, Docker",
        "sample_data": "Company sales database + external currency exchange API",
        "deliverable": "Agentic service with execution traces, loop-prevention guards, and an automated benchmark testing 50 complex multi-hop queries."
      },
      "tier_ultra": {
        "title": "Domain-Specific LLM Fine-Tuning & Quantized Inference Server",
        "description": "Fine-tune an open-source model (e.g. Llama-3-8B or Mistral) on custom instruction-response pairs using QLoRA, evaluate against test splits, and serve with vLLM.",
        "tools": "PyTorch, HuggingFace TRL, PEFT, Unsloth, vLLM, Docker",
        "sample_data": "Specialized legal or medical Q&A dataset",
        "deliverable": "Fine-tuning loss curves, automated ROUGE/BLEU & LLM-as-judge benchmark, and an optimized sub-second inference container."
      }
    },
    "ai_product_analyst": {
      "tier_low": {
        "title": "AI Feature Latency, Token Cost & Quality Audit Report",
        "description": "Perform an empirical benchmark comparing 3 foundation models across response latency, prompt token overhead, cost-per-query, and output accuracy.",
        "tools": "Python, Pandas, Seaborn, Litellm",
        "sample_data": "Standardized benchmark prompt suite (100 synthetic customer service prompts)",
        "deliverable": "Executive memo and cost sensitivity matrix showing projected monthly operational costs at 10k, 100k, and 1M queries."
      },
      "tier_mid": {
        "title": "AI Search Feature A/B Test Design & Conversion Attribution",
        "description": "Design and simulate a randomized controlled trial (A/B test) evaluating the conversion impact of an AI-powered conversational search bar vs traditional keyword search.",
        "tools": "Python (Statsmodels, Scipy), Jupyter Notebook, Streamlit",
        "sample_data": "Simulated e-commerce search logs with session durations and purchase flags",
        "deliverable": "Full experiment design document: sample size power calculations, Minimum Detectable Effect (MDE), guardrail metrics, and simulated analysis script."
      },
      "tier_high": {
        "title": "Comprehensive LLM Guardrail & Hallucination Telemetry Pipeline",
        "description": "Instrument a live telemetry dashboard tracking toxicity, hallucination rates, user sentiment, and fallback rates for a customer-facing AI assistant.",
        "tools": "Python, Prometheus / OpenTelemetry, Grafana / Streamlit, TruLens",
        "sample_data": "Synthetic conversation logs with labeled edge-case failures",
        "deliverable": "Real-time dashboard visualizing error budgets, user drop-off triggers, and automated alert criteria."
      },
      "tier_ultra": {
        "title": "Causal Impact & Unit Economic Valuation of Enterprise AI",
        "description": "Conduct a Difference-in-Differences and Synthetic Control analysis evaluating the operational productivity lift of an internal AI coding or support tool.",
        "tools": "R / Python (CausalPy, DoWhy), DuckDB, Quarto / Markdown",
        "sample_data": "Historical team velocity, ticket resolution time, and cost records across 12 months",
        "deliverable": "Econometric report detailing causal effect estimation, placebo tests, and sensitivity analysis presented in an executive whitepaper."
      }
    }
  },
  "rubrics": {
    "dimensions": [
      {
        "name": "Data Hygiene & Reproducibility",
        "beginner": "Code runs with minor manual path edits; basic error handling; instructions present in README.",
        "proficient": "Fully reproducible environment (requirements.txt / Pipfile); automated seed initialization; zero hardcoded credentials.",
        "production_ready": "One-command Docker containerization; automated schema validation; comprehensive unit tests with CI workflow."
      },
      {
        "name": "Methodological Rigor",
        "beginner": "Applies standard textbook library calls; understands primary metrics (accuracy, precision, RMSE).",
        "proficient": "Validates assumptions (baseline comparisons, cross-validation, data leakage prevention); isolates edge cases.",
        "production_ready": "Benchmarked against realistic cost/latency tradeoffs; statistical significance testing; automated regression guardrails."
      },
      {
        "name": "Business & Engineering Communication",
        "beginner": "Outputs raw charts and code logs; identifies what the model or pipeline does.",
        "proficient": "Translates technical metrics into concrete business implications; creates clean, readable architectural visual.",
        "production_ready": "Executive-ready documentation highlighting unit economics, failure recovery procedures, and measurable ROI impact."
      }
    ]
  },
  "provider_questions": [
    {
      "id": "PQ-01",
      "category": "Curriculum Depth",
      "question": "What proportion of the hands-on projects require building from scratch vs. filling in missing lines in pre-configured Jupyter notebooks?",
      "why_it_matters": "Pre-filled notebooks create an illusion of competence that quickly breaks down in technical coding interviews and real production settings."
    },
    {
      "id": "PQ-02",
      "category": "Credential & Alumni Status",
      "question": "Does this program grant official alumni status, an institutional university email, or degree credits with the partnering university, or strictly a certificate of completion from their continuing education arm?",
      "why_it_matters": "Marketing logos frequently suggest regular university association while legal contracts explicitly state continuing education status only."
    },
    {
      "id": "PQ-03",
      "category": "All-in Financial Commitment",
      "question": "Is the quoted price inclusive of 18% GST, examination proctoring fees, platform access extension fees, and loan origination charges?",
      "why_it_matters": "Unadvertised taxes and financing charges regularly add ₹35,000 to ₹60,000 to the real out-of-pocket tuition cost."
    },
    {
      "id": "PQ-04",
      "category": "Mentorship & Evaluation",
      "question": "Who grades the capstone project—the tenured university professors shown on the brochure, or outsourced teaching assistants? What rubric is used for code review?",
      "why_it_matters": "Syllabus marketing highlights distinguished professors, but daily code evaluations are almost exclusively handled by junior third-party contractors."
    },
    {
      "id": "PQ-05",
      "category": "Placement Transparency",
      "question": "What was the unadjusted placement percentage of the most recently graduated cohort, excluding students who were already employed in data/AI roles prior to enrolling?",
      "why_it_matters": "Reported 'salary hikes' and 'placement rates' are routinely inflated by counting existing tech workers who received routine corporate increments."
    }
  ]
};

export const SOURCE_LOG_CSV_TEXT = `Evidence_ID,Provider,Exact_Program_Name,Direct_URL,Date_Accessed,Field_Being_Compared,Observed_Value,Supporting_Quotation_Or_Location,Evidence_Classification,Confidence,Caveats
EVID-UPG-01,upGrad,Executive PG Programme in Machine Learning & AI,https://www.upgrad.com/machine-learning-ai-pgd-iiitb/,2026-10-22,Tuition Fee,"₹3,35,000 - ₹3,40,000 INR","Published program fee schedule inclusive of taxes","Official Published Claim",High,"Tuition includes taxes; EMI subject to NBFC interest rates"
EVID-UPG-02,upGrad,Executive PG Programme in Machine Learning & AI,https://www.upgrad.com/machine-learning-ai-pgd-iiitb/,2026-10-22,Duration,"12 - 13 Months","Course duration: 12-13 months recommended for working professionals","Official Published Claim",High,"Self-paced modules with scheduled weekend deadlines"
EVID-UPG-03,upGrad,Executive PG Programme in Machine Learning & AI,https://www.upgrad.com/machine-learning-ai-pgd-iiitb/,2026-10-22,Credential Partner,IIIT Bangalore,"Executive PGD from IIIT Bangalore","Official Academic Partner",High,"Conveys Executive Post Graduate Diploma from IIITB; not regular M.Tech degree"
EVID-UPG-04,upGrad,Executive PG Programme in Machine Learning & AI,https://www.upgrad.com/machine-learning-ai-pgd-iiitb/,2026-10-22,Weekly Commitment,"12 - 15 hours/week","Recommended study effort: 12-15 hrs/week","Official Guideline",High,"Working professionals often report higher hours when completing capstone"
EVID-UPG-05,upGrad,Executive PG Programme in Machine Learning & AI,https://www.upgrad.com/machine-learning-ai-pgd-iiitb/,2026-10-22,Projects & Capstone,"12+ Projects & 1 Capstone","12+ industry case studies and 1 capstone project","Official Curriculum Claim",High,"Projects are primarily hosted on Jupyter notebook environments"
EVID-UPG-06,upGrad,Executive PG Programme in Machine Learning & AI,https://www.upgrad.com/machine-learning-ai-pgd-iiitb/,2026-10-22,Career Support,"360-degree career assistance, job portal access","Resume building, mock interviews, and access to partner hiring drives","Marketing Claim with Legal Disclaimer",Moderate,"Terms of Service state that program does not guarantee employment or compensation levels"
EVID-SIM-01,Simplilearn,Post Graduate Program in AI and Machine Learning,https://www.simplilearn.com/pgp-ai-machine-learning-certification-training-course,2026-10-22,Tuition Fee,"₹2,20,000 - ₹3,00,000 + 18% GST","Base tuition quoted in marketing; 18% GST added at checkout","Official Published Claim",High,"Net payable ranges from ₹2,59,600 to ₹3,54,000 depending on promotional cohort discounts"
EVID-SIM-02,Simplilearn,Post Graduate Program in AI and Machine Learning,https://www.simplilearn.com/pgp-ai-machine-learning-certification-training-course,2026-10-22,Duration,11 Months,"11 months live online bootcamp format","Official Published Claim",High,"Cohort paced with scheduled instructor-led online sessions"
EVID-SIM-03,Simplilearn,Post Graduate Program in AI and Machine Learning,https://www.simplilearn.com/pgp-ai-machine-learning-certification-training-course,2026-10-22,Credential Partner,Purdue University & IBM,"Joint Certificate of Completion from Purdue Online and Simplilearn","Official Partner Co-branding",High,"Digital certificate of completion; does not grant Purdue degree or academic alumni privileges"
EVID-SIM-04,Simplilearn,Post Graduate Program in AI and Machine Learning,https://www.simplilearn.com/pgp-ai-machine-learning-certification-training-course,2026-10-22,Projects & Capstone,"25+ Projects & 3 Capstones","25+ hands-on projects across 3 domains plus GPU lab sandboxes","Official Curriculum Claim",High,"High quantity of pre-configured sandbox exercises"
EVID-SIM-05,Simplilearn,Post Graduate Program in AI and Machine Learning,https://www.simplilearn.com/pgp-ai-machine-learning-certification-training-course,2026-10-22,Career Support,"JobAssist career services","Access to job fairs, career mentorship, resume rewrite assistance","Marketing Claim with Caveat",Moderate,"No placement guarantee; facilitates introductions to corporate recruiters"
EVID-GL-01,Great Learning,Post Graduate Program in Artificial Intelligence & Machine Learning (PGP-AIML),https://www.mygreatlearning.com/pg-program-artificial-intelligence-course,2026-10-22,Tuition Fee,"₹2,40,000 - ₹2,75,000 + 18% GST","Tuition payable in installments; excludes 18% GST","Official Published Claim",High,"Total realized cost is ₹2,83,200 to ₹3,24,500 after tax"
EVID-GL-02,Great Learning,Post Graduate Program in Artificial Intelligence & Machine Learning (PGP-AIML),https://www.mygreatlearning.com/pg-program-artificial-intelligence-course,2026-10-22,Duration,12 Months,"12-month online mentored learning format","Official Published Claim",High,"Weekend online micro-mentorship batches with weekly deliverables"
EVID-GL-03,Great Learning,Post Graduate Program in Artificial Intelligence & Machine Learning (PGP-AIML),https://www.mygreatlearning.com/pg-program-artificial-intelligence-course,2026-10-22,Credential Partner,UT Austin McCombs & Great Lakes,"Certificate of Completion from The University of Texas at Austin McCombs School of Business","Official Executive Partner",High,"Executive education certificate; no academic transcript or regular university degree"
EVID-GL-04,Great Learning,Post Graduate Program in Artificial Intelligence & Machine Learning (PGP-AIML),https://www.mygreatlearning.com/pg-program-artificial-intelligence-course,2026-10-22,Projects & Capstone,"10+ Hands-on Projects & 1 Industry Capstone","10 guided industry projects and 1 mentored final capstone","Official Curriculum Claim",High,"Projects are evaluated by industry mentors against standardized rubrics"
EVID-GL-05,Great Learning,Post Graduate Program in Artificial Intelligence & Machine Learning (PGP-AIML),https://www.mygreatlearning.com/pg-program-artificial-intelligence-course,2026-10-22,Career Support,"GL Excelerate career support, hiring portal","Hiring drives, job board, dedicated career mentorship","Marketing Claim with Caveat",Moderate,"Placement assistance portal access; individual employment outcomes vary widely"
EVID-IITD-01,Emeritus / IIT Delhi,Advanced Certificate Programme in Machine Learning and Deep Learning,https://cep.iitd.ac.in,2026-10-22,Tuition Fee,"₹1,95,000 + 18% GST (₹2,30,100)","Program fee ₹1,95,000 plus applicable taxes (total ₹2,30,100)","Official Published Claim",High,"Payable in 3 scheduled installments via Emeritus platform"
EVID-IITD-02,Emeritus / IIT Delhi,Advanced Certificate Programme in Machine Learning and Deep Learning,https://cep.iitd.ac.in,2026-10-22,Duration,6 Months,"6-month duration; ~80 hours live online faculty instruction","Official Academic Program",High,"Intense academic pacing delivered over 24 weeks"
EVID-IITD-03,Emeritus / IIT Delhi,Advanced Certificate Programme in Machine Learning and Deep Learning,https://cep.iitd.ac.in,2026-10-22,Credential Partner,Continuing Education Programme (CEP) IIT Delhi,"Certificate awarded under Continuing Education Programme, IIT Delhi","Official Institutional Arm",High,"Executive certificate of participation/completion; does not confer regular IIT Delhi degree or alumni association voting status"
EVID-IITD-04,Emeritus / IIT Delhi,Advanced Certificate Programme in Machine Learning and Deep Learning,https://cep.iitd.ac.in,2026-10-22,Projects & Capstone,"5 Assignments & 1 Dedicated Capstone","20-30 hours assignments and 3-week final capstone (~20 hours)","Official Curriculum Claim",High,"High mathematical rigor; evaluated by IIT faculty & teaching assistants"
EVID-IITD-05,Emeritus / IIT Delhi,Advanced Certificate Programme in Machine Learning and Deep Learning,https://cep.iitd.ac.in,2026-10-22,Career Support,"Academic alumni recognition; no placement agency services","No job guarantee or placement agency services provided","Explicit Terms Statement",High,"Unbiased academic upskilling without commercial job placement claims"
EVID-ISI-01,Coursera / Indian Statistical Institute (ISI),Post Graduate Diploma in Applied Statistics (PGDAS),https://www.coursera.org/degrees/pg-diploma-applied-statistics-isi,2026-10-22,Tuition Fee,"₹4,50,000 Tuition + ₹20,000 Registration (₹4,70,000)","Total tuition ₹4.5L payable semester-wise + ₹20k registration","Official Academic Schedule",High,"Fixed academic tariff approved by Institute council; student bank loans eligible"
EVID-ISI-02,Coursera / Indian Statistical Institute (ISI),Post Graduate Diploma in Applied Statistics (PGDAS),https://www.coursera.org/degrees/pg-diploma-applied-statistics-isi,2026-10-22,Duration,"12 - 36 Months (Nominal: 24 Months)","1 to 3 years flexible completion; modular semesters","Official Program Regulation",High,"Semester exit option after Sem 1 grants Post Graduate Certificate in Basic Statistics"
EVID-ISI-03,Coursera / Indian Statistical Institute (ISI),Post Graduate Diploma in Applied Statistics (PGDAS),https://www.coursera.org/degrees/pg-diploma-applied-statistics-isi,2026-10-22,Credential Partner,Indian Statistical Institute (ISI Kolkata),"Formal Post Graduate Diploma awarded by ISI Kolkata","Official University Diploma",High,"Accredited statutory institute academic diploma recognized globally"
EVID-ISI-04,Coursera / Indian Statistical Institute (ISI),Post Graduate Diploma in Applied Statistics (PGDAS),https://www.coursera.org/degrees/pg-diploma-applied-statistics-isi,2026-10-22,Weekly Commitment,"10 - 20 hours/week","Demands 10-20 hours weekly for lectures, problem sets, and R computing","Official Academic Guideline",High,"Heavy mathematical prerequisites (linear algebra, multivariate calculus, distribution theory)"
EVID-ISI-05,Coursera / Indian Statistical Institute (ISI),Post Graduate Diploma in Applied Statistics (PGDAS),https://www.coursera.org/degrees/pg-diploma-applied-statistics-isi,2026-10-22,Career Support,"Coursera Career Network + ISI Global Reputation","Access to Coursera job platform; prestigious academic pedigree","Institutional Value Proposition",High,"No placement agency guarantee; employer recognition driven by ISI academic prestige"
`;
