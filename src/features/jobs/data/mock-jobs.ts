import type { Job } from "../types";

const minutesAgo = (m: number) => new Date(Date.now() - m * 60_000).toISOString();

const base = {
  title: "Clinical Support Worker",
  employer: { name: "Sherwood Forest Hospitals NHS Foundation Trust", initials: "msi" },
  location: "Stockport",
  salary: { min: 25760, max: 27476, period: "year" as const },
  contract: "Permanent" as const,
  cosIssued: { count: 94, year: 2025 },
  description:
    "Support clinical teams with day-to-day patient care on the ward. Employer is a licensed UK sponsor; Skilled Worker sponsorship is available for eligible candidates.",
};

/** Replace with a DB / API call in features/jobs/api.ts – nothing else needs to change. */
export const mockJobs: Job[] = [
  {
    ...base,
    id: "1",
    slug: "clinical-support-worker-1",
    postedAt: minutesAgo(8),
    dependantsAllowed: true,
    sponsorship: "likely",
    scope: "overseas",
  },
  {
    ...base,
    id: "2",
    slug: "clinical-support-worker-2",
    postedAt: minutesAgo(8),
    dependantsAllowed: true,
    sponsorship: "available",
    scope: "overseas",
  },
  {
    ...base,
    id: "3",
    slug: "clinical-support-worker-3",
    postedAt: minutesAgo(8),
    dependantsAllowed: true,
    sponsorship: "likely",
    scope: "uk-only",
  },
  {
    ...base,
    id: "4",
    slug: "clinical-support-worker-4",
    postedAt: minutesAgo(8),
    dependantsAllowed: true,
    sponsorship: "likely",
    scope: "overseas",
  },
  {
    ...base,
    id: "5",
    slug: "clinical-support-worker-5",
    postedAt: minutesAgo(8),
    dependantsAllowed: true,
    sponsorship: "likely",
    scope: "uk-only",
  },
  {
    ...base,
    id: "6",
    slug: "clinical-support-worker-6",
    postedAt: minutesAgo(8),
    dependantsAllowed: true,
    sponsorship: "likely",
    scope: "overseas",
  },
];
