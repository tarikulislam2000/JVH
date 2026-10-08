import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { Logo } from "./logo";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { buttonVariants } from "../ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white">
      <div className="mx-auto flex h-14 w-full max-w-page items-center justify-between gutter">
        <Logo className="text-xl" />
        <MainNav />
        <div className="flex items-center gap-2">
          <Link
            href={ROUTES.login}
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "hidden sm:inline-flex",
            })}
          >
            Login
          </Link>
          <Link
            href={ROUTES.register}
            className={buttonVariants({
              size: "sm",
              className: "bg-[#265DF5]",
            })}
          >
            Get Started
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
