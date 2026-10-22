"""
validate_research_data.py
Executes rigorous integrity checks on competitor records, insight ledgers, and experiment definitions.
"""

import json
import os
import re
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")

errors = []
warnings = []

def check(condition, message, is_warning=False):
    if not condition:
        if is_warning:
            warnings.append(message)
        else:
            errors.append(message)

print("Starting Research Data Integrity Verification...")

# 1. Competitor Programs Validation
programs_path = os.path.join(DATA_DIR, "competitor_programs.json")
check(os.path.exists(programs_path), f"File not found: {programs_path}")

with open(programs_path, "r", encoding="utf-8") as f:
    programs = json.load(f)

check(len(programs) == 5, f"Expected 5 competitor programs, found {len(programs)}")

required_keys = [
    "id", "provider", "program_name", "official_url", "credential_partner",
    "credential_category", "published_price_inr_min", "published_price_inr_max",
    "currency", "tax_terms", "duration_months", "weekly_hours_min",
    "weekly_hours_max", "delivery_format", "hands_on_projects_count",
    "capstone_included", "career_support_claims", "eligibility_requirements",
    "access_date", "confidence", "caveats"
]

expected_providers = {
    "upGrad", "Simplilearn", "Great Learning",
    "Emeritus / IIT Delhi", "Coursera / Indian Statistical Institute (ISI)"
}
found_providers = set()

url_regex = re.compile(r"^https?://")

for p in programs:
    pid = p.get("id", "UNKNOWN")
    found_providers.add(p.get("provider"))
    
    # Check all required keys exist
    for k in required_keys:
        check(k in p and p[k] is not None, f"[{pid}] Missing required key: {k}")
    
    # Validate URL
    check(bool(url_regex.match(p.get("official_url", ""))), f"[{pid}] Invalid URL format: {p.get('official_url')}")
    
    # Validate numerical boundaries
    check(isinstance(p.get("published_price_inr_min"), (int, float)) and p["published_price_inr_min"] > 0, f"[{pid}] Invalid min price: {p.get('published_price_inr_min')}")
    check(isinstance(p.get("published_price_inr_max"), (int, float)) and p["published_price_inr_max"] >= p["published_price_inr_min"], f"[{pid}] Max price less than min price")
    check(isinstance(p.get("duration_months"), (int, float)) and p["duration_months"] > 0, f"[{pid}] Invalid duration months")
    check(p.get("currency") == "INR", f"[{pid}] Currency mismatch: expected INR, got {p.get('currency')}")
    check(isinstance(p.get("capstone_included"), bool), f"[{pid}] Capstone must be boolean")
    
    # Caveats must not be empty
    check(len(p.get("caveats", "").strip()) > 10, f"[{pid}] Caveats field must be substantive and transparent")

# Verify all 5 required providers are covered
missing_providers = expected_providers - found_providers
check(len(missing_providers) == 0, f"Missing required providers: {missing_providers}")

# 2. Insights Ledger Validation
insights_path = os.path.join(DATA_DIR, "insights.json")
check(os.path.exists(insights_path), f"File not found: {insights_path}")

with open(insights_path, "r", encoding="utf-8") as f:
    insights = json.load(f)

check(3 <= len(insights) <= 5, f"Expected 3 to 5 insights, found {len(insights)}")

insight_keys = [
    "id", "title", "observation", "evidence_ids", "interpretation",
    "alternative_explanation", "business_implication", "confidence",
    "remains_unknown", "next_validation_action"
]

all_program_ids = {p["id"] for p in programs}

for ins in insights:
    iid = ins.get("id", "UNKNOWN")
    for ik in insight_keys:
        check(ik in ins and len(str(ins[ik]).strip()) > 0, f"[{iid}] Missing or empty insight key: {ik}")
    # Verify evidence IDs map back to real programs
    for eid in ins.get("evidence_ids", []):
        check(eid in all_program_ids, f"[{iid}] Referenced evidence ID {eid} not found in competitor dataset")

# 3. GTM Experiments Validation
experiments_path = os.path.join(DATA_DIR, "gtm_experiments.json")
check(os.path.exists(experiments_path), f"File not found: {experiments_path}")

with open(experiments_path, "r", encoding="utf-8") as f:
    experiments = json.load(f)

check(len(experiments) == 5, f"Expected exactly 5 GTM experiments, found {len(experiments)}")

exp_keys = [
    "id", "title", "theme", "status", "hypothesis", "target_audience",
    "method", "control_treatment", "primary_metric", "secondary_metrics",
    "guardrails", "required_resources", "duration", "decision_criteria"
]

for exp in experiments:
    eid = exp.get("id", "UNKNOWN")
    for ek in exp_keys:
        check(ek in exp and exp[ek] is not None, f"[{eid}] Missing required experiment key: {ek}")
    # Status must be Proposed or Not Started per master prompt rules
    check(exp.get("status") in ["Proposed", "Not Started"], f"[{eid}] Initial status must be Proposed or Not Started, got {exp.get('status')}")
    check(isinstance(exp.get("secondary_metrics"), list) and len(exp["secondary_metrics"]) >= 2, f"[{eid}] Requires at least 2 secondary metrics")
    check(isinstance(exp.get("guardrails"), list) and len(exp["guardrails"]) >= 2, f"[{eid}] Requires at least 2 guardrails")

# 4. Diagnostic Rules Validation
rules_path = os.path.join(DATA_DIR, "diagnostic_rules.json")
check(os.path.exists(rules_path), f"File not found: {rules_path}")

with open(rules_path, "r", encoding="utf-8") as f:
    rules = json.load(f)

check(len(rules.get("roles", [])) == 4, f"Expected 4 target roles in diagnostic rules")
check(len(rules.get("time_tiers", [])) == 4, f"Expected 4 time tiers")
check(len(rules.get("experience_levels", [])) == 3, f"Expected 3 experience levels")
check(len(rules.get("outcome_goals", [])) == 4, f"Expected 4 outcome goals")
check(len(rules.get("provider_questions", [])) >= 5, f"Expected at least 5 provider questions")

# Report Results
print(f"Total Errors: {len(errors)}")
print(f"Total Warnings: {len(warnings)}")

if errors:
    print("\nFAILED CHECKS:")
    for err in errors:
        print(f"  [FAIL] {err}")
    sys.exit(1)
else:
    print("\n[OK] ALL RESEARCH DATA INTEGRITY CHECKS PASSED SUCCESSFULLY.")
    for w in warnings:
        print(f"  [WARN] {w}")
    sys.exit(0)
