import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

const stats = [
  ["100+", "Daily sponsorship jobs"],
  ["200+", "Expert-built CVs"],
  ["100+", "NHS support statements"],
];

export function Hero() {
    const containerStyle = {
    backgroundImage: "url('/landing-hero/landing-hero-bg.svg')", // No need to type 'public/'
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw'
  };
  return (
    <section className="relative bg-brand-50 text-white" style={containerStyle}>
      <div className="absolute inset-0 bg-gradient-to-b from-brand/60 to-brand-dark/65" />
      <div className="relative mx-auto flex max-w-[1320px] flex-col items-center px-4 pt-16 pb-12 text-center sm:pt-20 lg:pt-24 lg:pb-16">
        <h1 className="max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Simplify Your UK Sponsorship From Job Search
        </h1>
        <p className="mt-5 mb-[32px] max-w-2xl text-xs text-white/85 sm:text-sm">
          Spend less time searching and more time applying to the right opportunities, all in one
          place.
        </p>
        <Link
          href={ROUTES.jobs}
          className={buttonVariants({ size: "sm" })}
        >
          View Openings
        </Link>
        <p className="mt-6 rounded border border-white/30 px-3 py-1 font-mono text-[10px] tracking-wider uppercase">
          45,000+ happy users · 4.9/5 rating
        </p>
        <div className="mt-6 flex gap-1.5">
          <i className="h-1 w-5 rounded bg-white/40" />
          <i className="h-1 w-5 rounded bg-white" />
        </div>
      </div>
      <div className="relative grid border-t border-white/20 sm:grid-cols-3">
        {stats.map(([n, l], i) => (
          <div
            key={l}
            className={`flex items-center justify-center gap-3 px-4 py-5 sm:py-8 ${i ? "border-t border-white/20 sm:border-t-0 sm:border-l" : ""}`}
          >
            <span className="text-3xl font-medium sm:text-4xl lg:text-5xl">{n}</span>
            <span className="font-mono text-[10px] tracking-wider uppercase sm:text-xs">{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
