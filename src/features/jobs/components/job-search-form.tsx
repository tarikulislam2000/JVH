import { ROUTES } from "@/config/routes";
import { UK_LOCATIONS } from "../constants";

/** Plain GET form → works without JS and produces shareable /jobs?q=…&location=… URLs. */
export function JobSearchForm({ q = "", location = "" }: { q?: string; location?: string }) {
  return (
    <form
      action={ROUTES.jobs}
      role="search"
      className="flex flex-col border border-ink/15 bg-white sm:flex-row"
    >
      <input
        name="q"
        defaultValue={q}
        aria-label="Search jobs"
        placeholder="Search job title, company, or skills..."
        className="min-w-0 flex-1 px-3 py-3 text-xs outline-none focus:ring-2 focus:ring-brand/40 focus:ring-inset"
      />
      <select
        name="location"
        defaultValue={location}
        aria-label="Location"
        className="border-t border-ink/15 bg-white px-3 py-3 text-xs text-ink/70 sm:w-40 sm:border-t-0 sm:border-l"
      >
        <option value="">Select Location</option>
        {UK_LOCATIONS.map((l) => (
          <option key={l}>{l}</option>
        ))}
      </select>
      <button
        type="button"
        className="border-t border-ink/15 px-4 py-3 text-xs text-ink/70 sm:border-t-0 sm:border-l"
      >
        Filter
      </button>
      <button
        type="submit"
        className="bg-brand px-5 py-3 text-xs font-medium text-white hover:bg-brand-dark"
      >
        Search Jobs
      </button>
    </form>
  );
}
