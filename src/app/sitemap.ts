import type { MetadataRoute } from "next";
import { LEGAL_PAGES, ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { getAllJobSlugs } from "@/features/jobs/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    ROUTES.home,
    // ROUTES.about,
    // ROUTES.jobs,
    // ROUTES.pricing,
    // ROUTES.blog,
    // ROUTES.contact,
    // ROUTES.buildCv,
    // ROUTES.nhsStatement,
  ];
  const legal = Object.keys(LEGAL_PAGES).map((s) => `/legal/${s}`);
  const jobs = (await getAllJobSlugs()).map((s) => `/jobs/${s}`);
  return [...staticPaths, ...legal, ...jobs].map((p) => ({
    url: `${siteConfig.url}${p === "/" ? "" : p}`,
    lastModified: new Date(),
  }));
}
