/**
 * rules.js
 * Deterministic diagnostic recommendation engine.
 * Pure functional module: given the exact same input parameters,
 * it returns the exact same recommendation, evidence checklist, rubric, and questions.
 */

export const DIAGNOSTIC_ROLES = {
  data_analyst: {
    title: "Data Analyst",
    defaultGap: "Advanced SQL (Window functions, CTEs, query optimization)",
    skills: ["SQL", "Data Modeling", "Exploratory Analysis", "Business Dashboards", "Statistical Testing"]
  },
  data_engineer: {
    title: "Data Engineer",
    defaultGap: "Data Warehouse Modeling (Star/Snowflake schema, dbt)",
    skills: ["dbt Core", "DuckDB / PostgreSQL", "Airflow / Prefect", "Data Quality CI/CD", "Parquet / Lakehouse"]
  },
  ai_engineer: {
    title: "AI Engineer",
    defaultGap: "Model Deployment & REST/gRPC APIs (FastAPI, Docker)",
    skills: ["FastAPI", "Vector DBs (Qdrant/Chroma)", "RAG Architectures", "Prompt Guardrails", "Docker"]
  },
  ai_product_analyst: {
    title: "AI/Product Analyst",
    defaultGap: "AI Feature Performance Metrics (Perplexity, Hallucination Rate, Latency)",
    skills: ["A/B Testing", "Token Unit Economics", "Latency & Quality Telemetry", "Causal Inference", "Funnel Analytics"]
  }
};

export const TIME_TIERS = {
  tier_low: {
    label: "Under 5 hours/week",
    hoursBudget: "3 - 5 hours",
    pacingLabel: "Targeted Micro-Sprint",
    complexity: "Focused proof-of-concept prioritizing a working minimal vertical slice."
  },
  tier_mid: {
    label: "5 - 10 hours/week",
    hoursBudget: "8 - 12 hours",
    pacingLabel: "Balanced Practitioner Pace",
    complexity: "Modular multi-component application with robust data cleaning and visualization."
  },
  tier_high: {
    label: "10 - 15 hours/week",
    hoursBudget: "15 - 20 hours",
    pacingLabel: "Accelerated Immersion",
    complexity: "End-to-end production architecture with automated testing, edge-case coverage, and documentation."
  },
  tier_ultra: {
    label: "15+ hours/week",
    hoursBudget: "25+ hours",
    pacingLabel: "Full Immersion Track",
    complexity: "Enterprise-grade system with containerization, continuous integration, and performance benchmarks."
  }
};

export const EXPERIENCE_LEVELS = {
  beginner: {
    label: "Beginner / Career Switcher",
    focus: "Foundational syntax mastery, reproducible environment setup, and baseline data hygiene."
  },
  intermediate: {
    label: "Intermediate / Practitioner",
    focus: "Architectural separation of concerns, defensive programming, and realistic edge-case testing."
  },
  advanced: {
    label: "Advanced / Senior",
    focus: "Scalability tradeoffs, latency budgets, cost optimization, and automated CI/CD guardrails."
  }
};

export const OUTCOME_GOALS = {
  portfolio: {
    label: "Portfolio Showcase",
    targetArtifact: "Public GitHub repository with comprehensive README, visual architecture diagrams, and live interactive demo."
  },
  promotion: {
    label: "Work Promotion / Work Deliverable",
    targetArtifact: "Business-impact technical memo with ROI justification, failure recovery runbook, and executive dashboard."
  },
  mastery: {
    label: "Concept Mastery",
    targetArtifact: "First-principles implementation isolating algorithm mechanics without dependency on black-box boilerplate."
  },
  career_switch: {
    label: "Career Switch Proof",
    targetArtifact: "Production take-home project matching hiring criteria of top-tier technology companies."
  }
};

/**
 * Main deterministic recommendation generator.
 * @param {Object} inputs
 * @param {string} inputs.role - 'data_analyst' | 'data_engineer' | 'ai_engineer' | 'ai_product_analyst'
 * @param {string} inputs.level - 'beginner' | 'intermediate' | 'advanced'
 * @param {Array<string>} inputs.gaps - Array of selected gap strings
 * @param {string} inputs.timeTier - 'tier_low' | 'tier_mid' | 'tier_high' | 'tier_ultra'
 * @param {string} inputs.outcome - 'portfolio' | 'promotion' | 'mastery' | 'career_switch'
 * @param {Object} rulesData - The loaded diagnostic_rules.json data object
 * @returns {Object} Recommendation object
 */
export function generateDiagnosticRecommendation(inputs, rulesData) {
  const roleKey = inputs.role || "data_analyst";
  const timeKey = inputs.timeTier || "tier_mid";
  const levelKey = inputs.level || "beginner";
  const outcomeKey = inputs.outcome || "portfolio";
  const selectedGaps = Array.isArray(inputs.gaps) && inputs.gaps.length > 0 ? inputs.gaps : [DIAGNOSTIC_ROLES[roleKey].defaultGap];

  // Resolve base project template from rulesData
  const roleProjects = (rulesData && rulesData.projects && rulesData.projects[roleKey]) || {};
  const baseProject = roleProjects[timeKey] || {
    title: "End-to-End Role Capability Benchmark",
    description: "Build an isolated, verifiable project artifact targeting your selected skill gaps.",
    tools: "Python, SQL, GitHub",
    sample_data: "Public Open Data Benchmark",
    deliverable: "Documented reproducible GitHub repository."
  };

  const roleInfo = DIAGNOSTIC_ROLES[roleKey] || DIAGNOSTIC_ROLES.data_analyst;
  const timeInfo = TIME_TIERS[timeKey] || TIME_TIERS.tier_mid;
  const levelInfo = EXPERIENCE_LEVELS[levelKey] || EXPERIENCE_LEVELS.beginner;
  const outcomeInfo = OUTCOME_GOALS[outcomeKey] || OUTCOME_GOALS.portfolio;

  // Build deterministic rationale
  const rationale = `Selected for ${roleInfo.title} at ${levelInfo.label} intensity. With a weekly budget of ${timeInfo.label} (${timeInfo.hoursBudget}), this project isolates your target gap (${selectedGaps[0]}) without over-committing to an unmanageable scope. Designed specifically to yield a ${outcomeInfo.label} artifact.`;

  // Build tailored evidence checklist (4-5 concrete milestones)
  const checklist = [
    {
      id: "CHK-01",
      milestone: "Environment Setup & Data Pipeline",
      detail: `Initialize Git repository with strict virtual environment / requirements.txt. Ingest ${baseProject.sample_data} with automated schema checks.`
    },
    {
      id: "CHK-02",
      milestone: `Core Implementation: ${selectedGaps[0]}`,
      detail: `Implement core computational logic using ${baseProject.tools}. Address edge cases (null handling, out-of-bounds inputs, type validation).`
    },
    {
      id: "CHK-03",
      milestone: "Validation & Testing Benchmark",
      detail: `Execute deterministic test assertions verifying data integrity, model error bounds, or query execution performance.`
    },
    {
      id: "CHK-04",
      milestone: "Deliverable & Architecture Documentation",
      detail: `Produce ${baseProject.deliverable} with an architectural flow diagram, methodology overview, and explicit run instructions.`
    },
    {
      id: "CHK-05",
      milestone: "Artifact Verification: " + outcomeInfo.label,
      detail: outcomeInfo.targetArtifact
    }
  ];

  // Extract tailored evaluation rubric
  const baseRubric = (rulesData && rulesData.rubrics && rulesData.rubrics.dimensions) || [];
  const rubric = baseRubric.map(dim => ({
    dimension: dim.name,
    beginner: dim.beginner,
    proficient: dim.proficient,
    production_ready: dim.production_ready
  }));

  // Extract provider interview questions
  const providerQuestions = (rulesData && rulesData.provider_questions) || [];

  // Recommended Next Steps
  const nextSteps = [
    `1. Allocate a contiguous block of ${timeInfo.hoursBudget.split("-")[0].trim()} hours this week before paying any course deposit.`,
    `2. Fork or build the minimal repository specified in the checklist using ${baseProject.tools.split(",")[0]}.`,
    `3. Test your motivation and intrinsic interest on this practical project before entering sales negotiations.`,
    `4. Print the 5 Provider Questions and insist on written answers from admissions counselors before enrolling.`
  ];

  return {
    timestamp: "deterministic-client-evaluated",
    inputs: {
      role: roleInfo.title,
      level: levelInfo.label,
      timeBudget: timeInfo.label,
      outcomeGoal: outcomeInfo.label,
      selectedGaps
    },
    project: {
      title: baseProject.title,
      summary: baseProject.description,
      tools: baseProject.tools,
      sampleData: baseProject.sample_data,
      deliverable: baseProject.deliverable,
      hoursBudget: timeInfo.hoursBudget,
      pacingLabel: timeInfo.pacingLabel,
      rationale
    },
    checklist,
    rubric,
    providerQuestions,
    nextSteps,
    disclaimer: "Advisory diagnostic output. Local deterministic evaluation only. This tool does not guarantee employment, academic admission, or corporate hiring outcomes."
  };
}
