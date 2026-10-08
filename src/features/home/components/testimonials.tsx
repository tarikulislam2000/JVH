import Image from "next/image";

const quote =
  "I was already in the UK and struggling to find a role that actually offered sponsorship. A friend told me about Jobvisahunt and I tried it. Two weeks after applying, I got called for interview and now I'm working as a support worker with Visa sponsorship. It really helped me focus on the right jobs.";

export function Testimonials() {
  return (
    <section className="gutter py-14 lg:py-16">
      <div className="text-center">
        <p className="font-mono text-[10px] tracking-wider text-ink/50 uppercase">
          Trusted by job seekers worldwide
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Real Success Stories
        </h2>
        <p className="mt-2 text-xs text-ink/60">
          Join thousands who found their dream job with visa sponsorship
        </p>
      </div>
      <div className="-mx-4 mt-8 scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
        {[0, 1, 2, 3].map((i) => (
          <figure
            key={i}
            className="flex w-[82%] shrink-0 snap-start flex-col justify-between border border-ink/15 p-5 sm:w-[46%] lg:w-auto"
          >
            <div>
              <span className="text-4xl leading-none font-bold text-brand">“</span>
              <blockquote className="mt-2 text-xs leading-relaxed text-ink/80">{quote}</blockquote>
            </div>
            <figcaption className="mt-6 border-t border-ink/10 pt-4">
              <div className="flex items-center gap-3">
          <Image
    src="/testimonial/success-history-writer.svg"
    width={36}
    height={36}
    alt="Adebayo Oluwatosin"
    className="h-9 w-9 rounded-sm object-cover"
  />
                <div>
                  <p aria-label="5 stars" className="text-xs text-amber-500">
                    ★★★★★
                  </p>
                  <p className="text-xs font-semibold">Adebayo Oluwatosin</p>
                  <p className="font-mono text-[8px] text-ink/50 uppercase">
                    Support worker · 7 months ago
                  </p>
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
