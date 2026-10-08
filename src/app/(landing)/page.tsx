import { AboutSection } from "@/features/home/components/about-section";
import { HowItWorks } from "@/features/home/components/how-it-works";
import { Intro } from "@/features/home/components/intro";
import { LogoStrip } from "@/features/home/components/logo-strip";
import { Newsletter } from "@/features/home/components/newsletter";
import { RecentJobs } from "@/features/home/components/recent-jobs";
import { Statement } from "@/features/home/components/statement";
import { Testimonials } from "@/features/home/components/testimonials";
import { Hero } from "@/features/home/components/hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <div className="frame">
        <Intro />
        <HowItWorks />
        <RecentJobs />
      </div>
      <Statement />
      <div className="frame">
        <Testimonials />
        <AboutSection />
        <Newsletter />
      </div>
    </>
  );
}
