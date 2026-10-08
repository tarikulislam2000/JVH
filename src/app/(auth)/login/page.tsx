import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export const metadata: Metadata = { title: "Login" };

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Login</h1>
      <form className="mt-5 space-y-3">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          aria-label="Email"
          placeholder="you@example.com"
          className="w-full border border-ink/20 px-3 py-2.5 text-sm"
        />
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          aria-label="Password"
          placeholder="Password"
          className="w-full border border-ink/20 px-3 py-2.5 text-sm"
        />
        <button type="submit" className={buttonVariants({ size: "lg", className: "w-full" })}>
          Login
        </button>
      </form>
      <p className="mt-4 text-xs text-ink/60">
        New here?{" "}
        <Link href={ROUTES.register} className="text-brand underline">
          Create an account
        </Link>
      </p>
    </>
  );
}
