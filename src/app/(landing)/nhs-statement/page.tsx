import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "NHS Supporting Statement" };

export default function Page() {
  return (
    <>
      <PageHeader
        title="NHS Supporting Statement"
        description="Generate a tailored NHS supporting statement."
      />
      <Container className="py-12 text-sm text-ink/70">Content coming soon.</Container>
    </>
  );
}
