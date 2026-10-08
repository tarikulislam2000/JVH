const gbp = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

export const formatGBP = (n: number) => gbp.format(n);

export function formatSalaryRange(min: number, max: number, period: "year" | "hour" = "year") {
  return `${formatGBP(min)}–${max.toLocaleString("en-GB")} / ${period}`;
}

/** "8 Min ago", "3 hrs ago", "2 days ago" */
export function timeAgo(iso: string, now = Date.now()) {
  const mins = Math.max(1, Math.round((now - new Date(iso).getTime()) / 60_000));
  if (mins < 60) return `${mins} Min ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs} hr${hrs > 1 ? "s" : ""} ago`;
  const days = Math.round(hrs / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
}
