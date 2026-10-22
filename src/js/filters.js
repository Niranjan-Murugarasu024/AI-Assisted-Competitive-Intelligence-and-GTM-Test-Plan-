/**
 * filters.js
 * Search, filter, and dynamic summary aggregation for the Competitor Intelligence Dashboard.
 */

export function filterPrograms(programs, criteria) {
  if (!Array.isArray(programs)) return [];

  const query = (criteria.search || "").toLowerCase().trim();
  const provider = criteria.provider || "all";
  const credential = criteria.credential || "all";
  const priceRange = criteria.priceRange || "all";
  const durationRange = criteria.durationRange || "all";
  const capstoneOnly = !!criteria.capstoneOnly;

  return programs.filter(prog => {
    // Search query match
    if (query) {
      const matchTarget = [
        prog.provider,
        prog.program_name,
        prog.credential_partner,
        prog.credential_category,
        prog.projects_description,
        prog.career_support_claims,
        prog.tax_terms
      ].join(" ").toLowerCase();
      
      if (!matchTarget.includes(query)) return false;
    }

    // Provider filter
    if (provider !== "all" && prog.provider !== provider) {
      return false;
    }

    // Credential filter
    if (credential !== "all" && prog.credential_category !== credential) {
      return false;
    }

    // Price range filter
    if (priceRange !== "all") {
      const price = prog.published_price_inr_max;
      if (priceRange === "under_250k" && price >= 250000) return false;
      if (priceRange === "250k_350k" && (price < 250000 || price > 350000)) return false;
      if (priceRange === "over_350k" && price <= 350000) return false;
    }

    // Duration filter
    if (durationRange !== "all") {
      const months = prog.duration_months;
      if (durationRange === "le_6" && months > 6) return false;
      if (durationRange === "7_12" && (months < 7 || months > 12)) return false;
      if (durationRange === "gt_12" && months <= 12) return false;
    }

    // Capstone only
    if (capstoneOnly && !prog.capstone_included) {
      return false;
    }

    return true;
  });
}

/**
 * Computes live mathematical summary metrics from any list of program records.
 * All numbers are computed from the real dataset records, not hardcoded.
 */
export function computeSummaryMetrics(programs) {
  if (!Array.isArray(programs) || programs.length === 0) {
    return {
      count: 0,
      minPrice: 0,
      maxPrice: 0,
      avgPrice: 0,
      avgDuration: 0,
      taxExclusionCount: 0,
      jobGuaranteeCount: 0
    };
  }

  const count = programs.length;
  let minPrice = Infinity;
  let maxPrice = -Infinity;
  let totalPrice = 0;
  let totalDuration = 0;
  let taxExclusionCount = 0;
  let jobGuaranteeCount = 0;

  programs.forEach(p => {
    const minP = p.published_price_inr_min || 0;
    const maxP = p.published_price_inr_max || minP;
    
    if (minP < minPrice) minPrice = minP;
    if (maxP > maxPrice) maxPrice = maxP;

    // Midpoint price for average
    totalPrice += (minP + maxP) / 2;
    totalDuration += (p.duration_months || 0);

    // Count programs that exclude GST from headline pricing
    if ((p.tax_terms || "").includes("18% GST") || (p.tax_terms || "").includes("excludes")) {
      taxExclusionCount++;
    }

    // Check if any program legally guarantees placement
    if ((p.career_support_claims || "").toLowerCase().includes("guarantee job") || (p.career_support_claims || "").toLowerCase().includes("100% placement")) {
      jobGuaranteeCount++;
    }
  });

  return {
    count,
    minPrice: minPrice === Infinity ? 0 : minPrice,
    maxPrice: maxPrice === -Infinity ? 0 : maxPrice,
    avgPrice: Math.round(totalPrice / count),
    avgDuration: +(totalDuration / count).toFixed(1),
    taxExclusionCount,
    jobGuaranteeCount
  };
}
