import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Pricing" };

export default function Page() {
  return (
    <>
      <PageHeader title="Pricing" description="Simple plans for your UK sponsorship job search." />
      <Container className="py-12 text-sm text-ink/70">Content coming soon.</Container>
    </>
  );
}
