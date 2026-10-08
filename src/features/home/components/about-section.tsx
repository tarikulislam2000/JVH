import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="grid items-center gap-8 gutter py-10 lg:grid-cols-2 lg:gap-12 lg:py-14">
      <div>

         <div className="order-first aspect-[4/3] relative w-full overflow-hidden rounded-lg bg-[#FFFFFF] p-2 shadow-sm lg:order-none">
        <div className="relative h-full w-full overflow-hidden rounded">
          <Image
            src="/our-team/our-team.svg"
            alt="UK Visa Sponsorship opportunities preview"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
        <p className="mt-2 text-right font-mono text-[10px] text-ink/50 uppercase">London, UK</p>
      </div>
      <div>
        <p className="font-mono text-[10px] tracking-wider text-ink/50 uppercase">About us</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Who We Are</h2>
        <p className="mt-4 text-sm font-semibold">
          At Job Visa Hunt, we’re dedicated to delivering excellence in everything we do.
        </p>
        <p className="mt-4 max-w-lg text-xs leading-relaxed text-ink/70">
          Our team is passionate about creating impactful solutions tailored to meet each client’s
          unique needs. With a focus on quality, innovation, and customer satisfaction, we strive to
          build lasting relationships and provide services that truly make a difference. Discover
          how our expertise and commitment can help you achieve your goals.
        </p>
        <Link
          href={ROUTES.about}
          className={buttonVariants({ variant: "outline", className: "mt-5" })}
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
