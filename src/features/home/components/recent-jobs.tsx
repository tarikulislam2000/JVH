import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { getJobs } from "@/features/jobs/api";
import { JobGrid } from "@/features/jobs/components/job-card";
import { JobSearchForm } from "@/features/jobs/components/job-search-form";
import { POPULAR_SEARCHES } from "@/features/jobs/constants";

export async function RecentJobs() {
  const jobs = await getJobs({ limit: 6 });
  return (
    <section id="jobs" className="gutter pb-14">
      <div className="mx-auto flex w-fit max-w-full items-center gap-3 rounded-sm bg-brand p-1.5 pl-3 text-white">
        <div>
          <p className="text-[11px] font-semibold">50 employer career pages</p>
          <p className="font-mono text-[8px] uppercase">Skip the board, apply at the source</p>
        </div>
        <Link
          href={ROUTES.pricing}
          className={buttonVariants({ variant: "white", size: "sm", className: "text-ink" })}
        >
          Unlock
        </Link>
      </div>
      <h2 className="mt-6 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
        Recent Sponsorship Jobs
      </h2>
      <div className="mt-6">
        <JobSearchForm />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[9px] text-ink/60 uppercase">Popular</span>
        {POPULAR_SEARCHES.map((p) => (
          <Link
            key={p}
            href={{ pathname: ROUTES.jobs, query: { q: p } }}
            className="rounded-xs border border-ink/15 px-2.5 py-1 text-[11px] hover:border-brand hover:text-brand"
          >
            {p}
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <JobGrid jobs={jobs} />
      </div>
      <div className="mt-6 text-center">
        <Link href={ROUTES.jobs} className={buttonVariants({ variant: "outline" })}>
          Show More
        </Link>
      </div>
    </section>
  );
}
