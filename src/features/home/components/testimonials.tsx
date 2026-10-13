import Image from "next/image";

const quote =
  "I was already in the UK and struggling to find a role that actually offered sponsorship. A friend told me about Jobvisahunt and I tried it. Two weeks after applying, I got called for interview and now I'm working as a support worker with Visa sponsorship. It really helped me focus on the right jobs.";

const testimonials = [
  { name: "Adebayo Oluwatosin", role: "Support worker · 7 months ago" },
  { name: "Adebayo Oluwatosin", role: "Support worker · 7 months ago" },
  { name: "Adebayo Oluwatosin", role: "Support worker · 7 months ago" },
  { name: "Adebayo Oluwatosin", role: "Support worker · 7 months ago" },
];

function CardGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-4 pr-4"
    >
      {testimonials.map((item, i) => (
        <figure
          key={i}
          className="relative flex w-[300px] shrink-0 flex-col justify-between rounded border border-ink/15 p-5 sm:w-[340px]"
        >
          <div>
            <span className="absolute text-[6rem] leading-none text-brand">“</span>
            <blockquote className="mt-10 text-justify text-xs leading-relaxed text-ink/80">
              {quote}
            </blockquote>
          </div>
          <figcaption className="mt-6 border-t border-ink/10 pt-4">
            <div className="flex items-center gap-3">
              <Image
                src="/testimonial/success-history-writer.svg"
                width={36}
                height={36}
                alt={hidden ? "" : item.name}
                className="h-9 w-9 rounded-sm object-cover"
              />
              <div>
                <p aria-label="5 stars" className="text-xs text-amber-500">
                  ★★★★★
                </p>
                <p className="text-xs font-semibold">{item.name}</p>
                <p className="font-mono text-[8px] text-ink/50 uppercase">
                  {item.role}
                </p>
              </div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

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

      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="group flex w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          <CardGroup />
          <CardGroup hidden />
        </div>
      </div>
    </section>
  );
}
