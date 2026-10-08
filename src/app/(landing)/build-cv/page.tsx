import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Build CV" };

export default function Page() {
  return (
    <>
      <PageHeader title="Build CV" description="Expert-built, ATS-friendly CVs for UK employers." />
      <Container className="py-12 text-sm text-ink/70">Content coming soon.</Container>
    </>
  );
}
