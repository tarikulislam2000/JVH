import { mockJobs } from "./data/mock-jobs";
import { Job, JobFilters } from "./types";


/**
 * Data-access seam. Swap the bodies for Prisma/Drizzle/REST calls later;
 * pages and components only depend on these signatures.
 */
export async function getJobs({ q, location, limit }: JobFilters = {}): Promise<Job[]> {
  const needle = q?.trim().toLowerCase();
  const loc = location?.trim().toLowerCase();
  const rows = mockJobs.filter(
    (j) =>
      (!needle || `${j.title} ${j.employer.name}`.toLowerCase().includes(needle)) &&
      (!loc || j.location.toLowerCase().includes(loc)),
  );
  return limit ? rows.slice(0, limit) : rows;
}

export async function getJobBySlug(slug: string): Promise<Job | undefined> {
  return mockJobs.find((j) => j.slug === slug);
}

export async function getAllJobSlugs(): Promise<string[]> {
  return mockJobs.map((j) => j.slug);
}
