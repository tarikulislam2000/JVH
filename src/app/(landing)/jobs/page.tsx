import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { getJobs } from "@/features/jobs/api";
import { JobGrid } from "@/features/jobs/components/job-card";
import { JobSearchForm } from "@/features/jobs/components/job-search-form";

export const metadata: Metadata = {
  title: "UK Visa Sponsorship Jobs",
  description: "Search verified UK jobs with visa sponsorship.",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;
const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export default async function JobsPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const q = first(sp.q);
  const location = first(sp.location);
  const jobs = await getJobs({ q, location });

  return (
    <>
      <PageHeader
        title="Sponsorship Jobs"
        description={`${jobs.length} job${jobs.length === 1 ? "" : "s"} found`}
      />
      <Container className="space-y-6 py-8 sm:py-10">
        <JobSearchForm q={q} location={location} />
        {jobs.length ? (
          <JobGrid jobs={jobs} />
        ) : (
          <p className="py-16 text-center text-sm text-ink/60">
            No jobs match your search. Try a different title or location.
          </p>
        )}
      </Container>
    </>
  );
}
