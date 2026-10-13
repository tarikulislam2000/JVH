import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Tailor CV for Job" };

export default function Page() {
  return (
    <>
      <PageHeader title="Tailor CV for Job" description="Match your CV to a job description." />
      <Container className="py-12 text-sm text-ink/70">Content coming soon.</Container>
    </>
  );
}
