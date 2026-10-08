import type { Route } from "next";
import { LEGAL_PAGES, ROUTES, legalRoute, type LegalSlug } from "./routes";
import { siteConfig } from "./site";

export interface NavItem {
  label: string;
  href: Route;
}

export const mainNav: NavItem[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About Us", href: ROUTES.about },
  { label: "Jobs", href: ROUTES.jobs },
  { label: "Get Hired Faster", href: ROUTES.buildCv },
  { label: "Pricing", href: ROUTES.pricing },
  { label: "Blog", href: ROUTES.blog },
  { label: "Contact", href: ROUTES.contact },
];

export const footerNav = {
  Navigation: [
    { label: "About Us", href: ROUTES.about },
    { label: "Jobs", href: ROUTES.jobs },
    { label: "Verified Jobs", href: "/jobs?type=verified" as Route },
    { label: "Pre-Verified Jobs", href: "/jobs?type=pre-verified" as Route },
  ],
  Resources: [
    { label: "Build CV", href: ROUTES.buildCv },
    { label: "Pricing", href: ROUTES.pricing },
    { label: "Blogs", href: ROUTES.blog },
    { label: "Careers", href: ROUTES.contact },
  ],
  Legal: (Object.keys(LEGAL_PAGES) as LegalSlug[]).map((slug) => ({
    label: LEGAL_PAGES[slug],
    href: legalRoute(slug),
  })),
} satisfies Record<string, NavItem[]>;

export const socialLinks = [
  { label: "TikTok", href: siteConfig.social.tiktok },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Instagram", href: siteConfig.social.instagram },
] as const;
