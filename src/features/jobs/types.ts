export type SponsorshipStatus = "likely" | "available";
export type WorkerScope = "overseas" | "uk-only";
export type ContractType = "Permanent" | "Fixed term" | "Contract";

export interface Job {
  id: string;
  slug: string;
  title: string;
  employer: { name: string; initials: string };
  location: string;
  salary: { min: number; max: number; period: "year" | "hour" };
  contract: ContractType;
  postedAt: string; // ISO date
  cosIssued: { count: number; year: number };
  dependantsAllowed: boolean;
  sponsorship: SponsorshipStatus;
  scope: WorkerScope;
  description: string;
}

export interface JobFilters {
  q?: string;
  location?: string;
  type?: string;
  limit?: number;
}
