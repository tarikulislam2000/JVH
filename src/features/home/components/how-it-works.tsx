const steps = [
  [
    "Create Free Account",
    "Register for a free account and select your preferred roles, locations, skills and job-alert settings.",
  ],
  [
    "Discover Relevant Opportunities",
    "Browse verified sponsorship vacancies that match your preferences, without wasting time on unsuitable jobs.",
  ],
  [
    "Apply Directly with Confidence",
    "Check job requirements, apply on the employer's site, and get alerts for new listings on our site.",
  ],
];

export function HowItWorks() {
  return (
    <section className="gutter pb-12">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How It Works</h2>
      <div className="mt-8 grid border border-ink/10 bg-brand-soft md:grid-cols-3">
        {steps.map(([t, d], i) => (
          <div
            key={t}
            className={`flex flex-col justify-between gap-8 p-5 md:p-6 ${i ? "border-t border-ink/10 md:border-t-0 md:border-l" : ""}`}
          >
            <span className="text-5xl font-light text-brand sm:text-6xl">0{i + 1}</span>
            <div>
              <h3 className="text-sm font-semibold">{t}</h3>
              <p className="mt-2 text-xs text-ink/70">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
