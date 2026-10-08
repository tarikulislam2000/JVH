import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { LEGAL_PAGES, type LegalSlug } from "@/config/routes";

type Props = { params: Promise<{ slug: string }> };
const isLegal = (s: string): s is LegalSlug => s in LEGAL_PAGES;

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(LEGAL_PAGES).map((slug) => ({ slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return isLegal(slug) ? { title: LEGAL_PAGES[slug] } : {};
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  if (!isLegal(slug)) notFound();
  return (
    <>
      <PageHeader title={LEGAL_PAGES[slug]} />
      <Container className="py-12 text-sm text-ink/70">Legal copy goes here.</Container>
    </>
  );
}
