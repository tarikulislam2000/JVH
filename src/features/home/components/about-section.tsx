import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="grid items-center gutter py-10 lg:grid-cols-2 gap-[4rem] lg:py-14">
      <div className="bg-[#FFFFFF] shadow-sm rounded-lg p-2">

         <div className="order-first aspect-[4/3] relative w-full overflow-hidden lg:order-none">
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
        <p className="mt-3 text-right font-medium text-[11px] text-ink/50 uppercase">London, UK</p>
      </div>
      <div>
        <p className="font-medium text-[11px] tracking-wider text-ink/50 uppercase">About us</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Who We Are</h2>
        <p className="my-6 text-[18px] font-semibold max-w-lg">
          At Job Visa Hunt, we’re dedicated to delivering excellence in everything we do.
        </p>
        <p className=" max-w-lg text-[15px] font-medium leading-relaxed text-ink/70">
          Our team is passionate about creating impactful solutions tailored to meet each client’s
          unique needs. With a focus on quality, innovation, and customer satisfaction, we strive to
          build lasting relationships and provide services that truly make a difference. Discover
          how our expertise and commitment can help you achieve your goals.
        </p>
        <Link
          href={ROUTES.about}
          className={buttonVariants({ variant: "outline", className: "mt-[2rem]" })}
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
