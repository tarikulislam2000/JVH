import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

const points = [
  ["Word-for-Word Matching", "Align perfectly with NHS job requirements"],
  ["Professional Format", "Industry-standard structure recruiters expect"],
  ["Interview-Ready", "Maximize your chances of landing the role"],
];

export function Statement() {
  return (
    <section className="mx-auto grid max-w-page bg-brand-soft lg:grid-cols-2">
      <div className="gutter py-12 lg:py-16">
        <p className="font-mono text-[10px] tracking-wider text-ink/60 uppercase">
          NHS Supporting Statement Assistant
        </p>
        <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-brand sm:text-4xl">
          Turn Job Applications into Interview Invitations
        </h2>
        <p className="mt-5 max-w-lg text-xs leading-relaxed text-ink/75 sm:text-sm">
          Generate high-standard supporting statements that get recruiters scheduling interviews.
          Our tool helps you craft statements that match NHS job requirements word-for-word,
          showcasing your unique skills, experience, and passion in the exact format recruiters
          expect.
        </p>
        <p className="mt-4 max-w-lg text-xs leading-relaxed text-ink/75 sm:text-sm">
          Instead of stressing over what to write, you’ll walk away with a{" "}
          <b>tailored, professional, and interview-ready statement</b> that maximizes your chances
          of landing the role.
        </p>
        <p className="mt-6 font-mono text-[10px] tracking-wider text-ink/50 uppercase">
          No subscriptions · Instant results · ATS optimized
        </p>
        <Link
          href={ROUTES.nhsStatement}
          className={buttonVariants({ size: "lg", className: "mt-4" })}
        >
          Generate Statement
        </Link>
      </div>
      <div className="flex flex-col justify-around divide-y divide-white/20 bg-brand gutter text-white">
        {points.map(([t, d], i) => (
          <div key={t} className="py-8 lg:py-10">
            <span className="text-4xl font-light sm:text-5xl">0{i + 1}</span>
            <h3 className="mt-3 text-sm font-semibold">{t}</h3>
            <p className="mt-1 text-xs text-white/70">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
