import Image from "next/image";

const checks = [
  "Employer’s sponsorship status",
  "Salary threshold",
  "Role eligibility",
] as const;

export function Intro() {
  return (
    <section className="gutter grid items-center gap-8 py-12 md:py-16 lg:grid-cols-2 lg:gap-12">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight leading-tight sm:text-4xl">
          Your go-to UK job board for{" "}
          <span className="text-brand">visa sponsorship opportunities</span>
        </h2>

        <p className="mt-5 max-w-xl text-xs text-ink/75 leading-relaxed sm:text-sm">
          JobVisaHunt is built specifically for people searching for UK visa sponsorship jobs. We
          review vacancies from licensed sponsors, checking key details such as the employer’s
          sponsorship status, salary threshold and role eligibility before listing them.
        </p>

        <p className="mt-4 max-w-xl text-xs text-ink/75 leading-relaxed sm:text-sm">
          By filtering out unsuitable and non-sponsoring vacancies, we help you cut through the
          noise, save valuable time and focus on opportunities worth applying for, so you can search
          smarter and apply with greater confidence.
        </p>

        <p className="mono-label mt-6 text-ink/60">
          Checked before listing
        </p>

        <ul className="mt-2 max-w-md divide-y divide-ink/10 border-y border-ink/10">
          {checks.map((check, index) => (
            <li key={check} className="flex gap-3 py-2 text-xs text-ink/80">
              <span className="font-mono font-medium text-brand">0{index + 1}</span>
              {check}
            </li>
          ))}
        </ul>
      </div>

   <div className="order-first aspect-[4/3] relative w-full overflow-hidden rounded-lg bg-[#FFFFFF] p-2 shadow-sm lg:order-none">
  <div className="relative h-full w-full overflow-hidden rounded">
    <Image
      src="/landing-hero/landing-hero-bg.svg"
      alt="UK Visa Sponsorship opportunities preview"
      fill
      className="object-cover object-center"
      priority
    />
  </div>
</div>
    </section>
  );
}
