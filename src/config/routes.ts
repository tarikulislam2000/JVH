import type { Route } from "next";

/**
 * Single source of truth for URLs. With `typedRoutes`, every entry must match a real page,
 * so a deleted/renamed page is a compile-time error instead of a 404 in production.
 */
export const ROUTES = {
  home: "/",
  about: "/about",
  jobs: "/jobs",
  pricing: "/pricing",
  blog: "/blog",
  contact: "/contact",
  buildCv: "/build-cv",
  nhsStatement: "/nhs-statement",
  cvChecker: "/cv-checker",
  tailorCv: "/tailor-cv",
  login: "/login",
  register: "/register",
} as const satisfies Record<string, Route>;

export const jobRoute = (slug: string) => `/jobs/${slug}` as Route;
export const legalRoute = (slug: LegalSlug) => `/legal/${slug}` as Route;

export const LEGAL_PAGES = {
  terms: "Terms & Conditions",
  privacy: "Privacy & Cookie Policy",
  refund: "Refund Policy",
  disclaimer: "Disclaimer",
} as const;
export type LegalSlug = keyof typeof LEGAL_PAGES;
