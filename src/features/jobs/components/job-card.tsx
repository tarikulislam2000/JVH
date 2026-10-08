import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { jobRoute } from "@/config/routes";
import { cn } from "@/lib/cn";
import type { Job } from "../types";
import { formatSalaryRange, timeAgo } from "@/lib/format";

function Cell({ label, value, className }: { label: string; value: string; className?: string }) {
  return (
    <div className={cn("p-2.5", className)}>
      <dt className="font-mono text-[9px] tracking-wider text-ink/50 uppercase">{label}</dt>
      <dd className="mt-1 text-[11px] font-medium sm:text-xs">{value}</dd>
    </div>
  );
}

export function JobCard({ job }: { job: Job }) {
  const sponsorship =
    job.sponsorship === "likely" ? "Sponsorship likely available" : "Sponsorship available";
  return (
    <article className="flex flex-col border border-ink/15 bg-white p-3">
      <div className="flex flex-wrap gap-1.5">
        <span className="rounded-xs border border-brand px-1.5 py-0.5 font-mono text-[8px] text-brand uppercase">
          {sponsorship}
        </span>
        <span className="rounded-xs bg-success px-1.5 py-0.5 font-mono text-[8px] text-white uppercase">
          {job.scope === "overseas" ? "Overseas" : "UK only"}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="grid size-8 shrink-0 place-items-center rounded-sm bg-[#005DAB] text-[10px] font-bold text-white italic">
          {job.employer.initials}
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold">{job.title}</h3>
          <p className="truncate text-[10px] text-ink/60">{job.employer.name}</p>
        </div>
      </div>
      <dl className="mt-3 grid grid-cols-2 border border-ink/10 *:border-ink/10 [&>*:nth-child(n+3)]:border-t [&>*:nth-child(odd)]:border-r">
        <Cell
          label="Salary"
          value={formatSalaryRange(job.salary.min, job.salary.max, job.salary.period)}
        />
        <Cell label="Posted" value={timeAgo(job.postedAt)} />
        <Cell label="Location" value={job.location} />
        <Cell label="Contract" value={job.contract} />
        <Cell
          label="CoS issued"
          value={`${job.cosIssued.count} in ${job.cosIssued.year}`}
          className="text-brand"
        />
        <Cell
          label="Dependants"
          value={job.dependantsAllowed ? "Dependants Allowed" : "Not allowed"}
        />
      </dl>
      <Link href={jobRoute(job.slug)} className={buttonVariants({ className: "mt-3 w-full" })}>
        View details
      </Link>
    </article>
  );
}

export function JobGrid({ jobs }: { jobs: Job[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((j) => (
        <JobCard key={j.id} job={j} />
      ))}
    </div>
  );
}
