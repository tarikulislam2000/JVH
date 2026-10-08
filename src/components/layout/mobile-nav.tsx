"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/config/navigation";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/cn";
import { isActive } from "./main-nav";

export function MobileNav() {
  const pathname = usePathname();
  // Menu is "open" only for the path it was opened on, so navigating closes it automatically.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  // lock scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenPath(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpenPath(open ? null : pathname)}
        className="grid size-9 place-items-center rounded-sm border border-ink/20"
      >
        <span className="space-y-1" aria-hidden>
          <i
            className={cn("block h-0.5 w-4 bg-ink transition", open && "translate-y-1.5 rotate-45")}
          />
          <i className={cn("block h-0.5 w-4 bg-ink transition", open && "opacity-0")} />
          <i
            className={cn(
              "block h-0.5 w-4 bg-ink transition",
              open && "-translate-y-1.5 -rotate-45",
            )}
          />
        </span>
      </button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-ink/10 bg-white px-4 py-3"
        >
          {mainNav.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                "block border-b border-ink/10 py-3 text-sm",
                isActive(pathname, href) && "font-semibold text-brand",
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href={ROUTES.login}
            className="mt-4 block rounded-sm border border-ink/20 py-2.5 text-center text-sm sm:hidden"
          >
            Login
          </Link>
        </nav>
      )}
    </div>
  );
}
