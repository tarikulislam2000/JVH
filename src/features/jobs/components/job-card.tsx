import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { jobRoute } from "@/config/routes";
import { cn } from "@/lib/cn";
import type { Job } from "../types";
import { formatSalaryRange, timeAgo } from "@/lib/format";
import Image from "next/image";

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
    <article className="flex flex-col border border-ink/15 bg-white py-4 rounded-md hover:shadow-xl transition duration-150 ease-in-out
">
   <div className="px-3">
    <div className="flex flex-wrap gap-1.5 justify-end">
        <span className={`rounded-xs border border-brand px-1.5 py-0.5 font-mono text-[11px] text-brand font-semiBold uppercase ${job.sponsorship ==="likely"? "":"bg-[#4375FF] text-white"}`}>
          {sponsorship}
        </span>
        <span className="rounded-xs bg-success px-1.5 py-0.5 font-mono text-[11px] text-white font-semiBold uppercase flex items-center">
          <span className="mr-1.5">{job.scope === "overseas" ? "Overseas" : "UK only"}</span>
          <Image
          src={"/recent-sponsorship-jobs/spon.svg"}
          width={14}
          height={14}
          alt="spon icon"
          />
        </span>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="grid size-8 shrink-0 place-items-center rounded-sm bg-[#005DAB] text-[10px] font-bold text-white italic">
          {job.employer.initials}
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-[1.125rem] font-font-semibold">{job.title}</h3>
          <p className="truncate text-[0.875rem] text-ink/60">{job.employer.name}</p>
        </div>
      </div>
   </div>
      <dl className="mt-3 grid grid-cols-2  border-y border-ink/10 *:border-ink/10 [&>*:nth-child(n+3)]:border-t [&>*:nth-child(odd)]:border-r">
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
      <div className="px-3">

      <Link href={jobRoute(job.slug)} className={buttonVariants({ className: "mt-3 w-full" })}>
        View details
      </Link>
      </div>
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
