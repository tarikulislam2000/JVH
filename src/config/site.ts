import { env } from "@/lib/env";
import logo from "../../public/globe.svg"
export const siteConfig = {
  name: "Job Visa Hunt",
  logo:logo,
  shortName: "JobVisaHunt",
  description:
    "The UK job search engine for international talent. Verified visa sponsorship vacancies, expert CV support and NHS application tools.",
  url: env.NEXT_PUBLIC_SITE_URL,
  email: "Support@jobvisahunt.com",
  address: ["71-75 Shelton Street", "Covent Garden", "London, UK"],
  locale: "en_GB",
  social: {
    tiktok: "https://www.tiktok.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;
