/**
 * validation.js
 * Input validation, edge case checking, and sanitation.
 */

export function validateDiagnosticInputs(inputs) {
  const errors = [];

  const validRoles = ["data_analyst", "data_engineer", "ai_engineer", "ai_product_analyst"];
  if (!inputs.role || !validRoles.includes(inputs.role)) {
    errors.push("Please select a valid target career role.");
  }

  const validLevels = ["beginner", "intermediate", "advanced"];
  if (!inputs.level || !validLevels.includes(inputs.level)) {
    errors.push("Please specify your current technical experience level.");
  }

  const validTiers = ["tier_low", "tier_mid", "tier_high", "tier_ultra"];
  if (!inputs.timeTier || !validTiers.includes(inputs.timeTier)) {
    errors.push("Please select your realistic weekly study time budget.");
  }

  const validOutcomes = ["portfolio", "promotion", "mastery", "career_switch"];
  if (!inputs.outcome || !validOutcomes.includes(inputs.outcome)) {
    errors.push("Please select your primary desired project outcome.");
  }

  if (!Array.isArray(inputs.gaps) || inputs.gaps.length === 0) {
    errors.push("Please select at least one primary skill gap to target.");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function sanitizeText(str) {
  if (typeof str !== "string") return "";
  return str.replace(/[&<>"']/g, function (match) {
    const escapeMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return escapeMap[match];
  });
}
