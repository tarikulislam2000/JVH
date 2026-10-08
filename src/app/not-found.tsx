import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-dvh place-items-center p-6 text-center">
      <div>
        <p className="mono-label text-brand">404</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Page not found</h1>
        <p className="mt-2 text-sm text-ink/60">
          The page you are looking for does not exist or has moved.
        </p>
        <Link href={ROUTES.home} className={buttonVariants({ size: "lg", className: "mt-6" })}>
          Back to home
        </Link>
      </div>
    </main>
  );
}
