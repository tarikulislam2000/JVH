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
      <h2 className="text-[2.75rem] font-semibold tracking-tight">How It Works</h2>
      <div className="mt-8 grid border border-ink/10 bg-[#F6F8FF] md:grid-cols-3">
        {steps.map(([t, d], i) => (
          <div
            key={t}
            className={`flex flex-col justify-between   ${i ? "border-t border-ink/10 md:border-t-0 md:border-l" : ""}`}
          >
            <span className="text-[5.25rem] font-light text-brand border-b p-[2rem]">0{i + 1}</span>
            <div className="p-[2rem]">
              <h3 className="text-[1.2rem] font-semibold">{t}</h3>
              <p className="mt-2  text-ink/70">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
