import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { getAllJobSlugs, getJobBySlug } from "@/features/jobs/api";
import { formatSalaryRange, timeAgo } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getAllJobSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = await getJobBySlug((await params).slug);
  if (!job) return {};
  return {
    title: `${job.title} – ${job.employer.name}`,
    description: job.description,
    alternates: { canonical: `/jobs/${job.slug}` },
  };
}

export default async function JobPage({ params }: Props) {
  const job = await getJobBySlug((await params).slug);
  if (!job) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.postedAt,
    employmentType: job.contract === "Permanent" ? "FULL_TIME" : "CONTRACTOR",
    hiringOrganization: { "@type": "Organization", name: job.employer.name },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: job.location, addressCountry: "GB" },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "GBP",
      value: {
        "@type": "QuantitativeValue",
        minValue: job.salary.min,
        maxValue: job.salary.max,
        unitText: job.salary.period.toUpperCase(),
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHeader title={job.title} description={job.employer.name} />
      <Container className="grid gap-8 py-10 lg:grid-cols-[2fr_1fr]">
        <p className="max-w-prose text-sm leading-relaxed text-ink/80">{job.description}</p>
        <dl className="space-y-3 border border-ink/15 p-4 text-sm">
          <div>
            <dt className="mono-label text-ink/50">Salary</dt>
            <dd>{formatSalaryRange(job.salary.min, job.salary.max, job.salary.period)}</dd>
          </div>
          <div>
            <dt className="mono-label text-ink/50">Location</dt>
            <dd>{job.location}</dd>
          </div>
          <div>
            <dt className="mono-label text-ink/50">Contract</dt>
            <dd>{job.contract}</dd>
          </div>
          <div>
            <dt className="mono-label text-ink/50">Posted</dt>
            <dd>{timeAgo(job.postedAt)}</dd>
          </div>
        </dl>
      </Container>
    </>
  );
}
