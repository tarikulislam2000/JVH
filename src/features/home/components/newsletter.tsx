import { buttonVariants } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="grid items-end gap-6 border-t border-ink/10 gutter py-12 md:grid-cols-2 lg:py-16">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Subscribe to our newsletter
        </h2>
        <p className="mt-2 text-xs text-ink/60">Get jobs alerts sent directly to your email</p>
      </div>
      <form action="/api/subscribe" method="post" className="flex items-end gap-3">
        <label className="flex-1">
          <span className="font-mono text-[9px] text-ink/50 uppercase">Your email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="mt-1 w-full border-b border-ink/40 py-2 text-xs outline-none focus:border-brand"
          />
        </label>
        <button type="submit" className={buttonVariants({ size: "lg" })}>
          Subscribe
        </button>
      </form>
    </section>
  );
}
