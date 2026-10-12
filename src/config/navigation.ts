import type { Route } from "next";
import { LEGAL_PAGES, ROUTES, legalRoute, type LegalSlug } from "./routes";
import { siteConfig } from "./site";

export interface SubNavItem {
  title: string;
  description: string;
  href: Route;
  badge?: string;
  iconType: "heart" | "chart" | "edit" | "target";
}

export interface NavSection {
  header?: string;
  items: SubNavItem[];
}

export interface NavItem {
  label: string;
  href?: Route;
  children?: NavSection[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About Us", href: ROUTES.about },
  { label: "Jobs", href: ROUTES.jobs },
  {
    label: "Get Hired Faster",
    children: [
      {
        header: "NHS SUPPORT",
        items: [
          {
            title: "NHS Statement",
            description: "Create a winning NHS supporting statement",
            href: ROUTES.nhsStatement,
            iconType: "heart",
          },
        ],
      },
      {
        header: "CV SUPPORT",
        items: [
          {
            title: "CV Score Checker",
            description: "Find out how strong your CV really is",
            href: ROUTES.cvChecker,
            badge: "BETA",
            iconType: "chart",
          },
          {
            title: "Revamp My CV",
            description: "Transform your CV from basic to interview-ready",
            href: ROUTES.buildCv,
            badge: "BETA",
            iconType: "edit",
          },
          {
            title: "Tailor CV for Job",
            description: "Match your CV to a job description",
            href: ROUTES.tailorCv,
            badge: "BETA",
            iconType: "target",
          },
        ],
      },
    ],
  },
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
} satisfies Record<string, { label: string; href: Route }[]>;

export const socialLinks = [
  { label: "TikTok", href: siteConfig.social.tiktok },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Instagram", href: siteConfig.social.instagram },
] as const;
