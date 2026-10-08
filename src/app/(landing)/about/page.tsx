import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "About Us" };

export default function Page() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Who we are and how we help international talent find UK sponsorship."
      />
      <Container className="py-12 text-sm text-ink/70">Content coming soon.</Container>
    </>
  );
}
