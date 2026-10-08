import { Container } from "./container";

export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <section className="border-b border-ink/10 bg-brand-50 py-10 sm:py-14">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-sm text-ink/70">{description}</p>}
      </Container>
    </section>
  );
}
