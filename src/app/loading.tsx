export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="grid min-h-[50dvh] place-items-center">
      <span className="size-8 animate-spin rounded-full border-2 border-brand/20 border-t-brand" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
