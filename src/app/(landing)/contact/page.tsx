import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Questions? Get in touch with the Job Visa Hunt team."
      />
      <Container className="py-12 text-sm text-ink/70">Content coming soon.</Container>
    </>
  );
}
