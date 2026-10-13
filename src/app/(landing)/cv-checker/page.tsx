import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "CV Score Checker" };

export default function Page() {
  return (
    <>
      <PageHeader title="CV Score Checker" description="Find out how strong your CV really is." />
      <Container className="py-12 text-sm text-ink/70">Content coming soon.</Container>
    </>
  );
}
