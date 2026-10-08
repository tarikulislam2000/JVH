import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Blog" };

export default function Page() {
  return (
    <>
      <PageHeader title="Blog" description="Guides and news on UK visa sponsorship." />
      <Container className="py-12 text-sm text-ink/70">Content coming soon.</Container>
    </>
  );
}
