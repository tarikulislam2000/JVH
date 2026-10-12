"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/navigation";
import { cn } from "@/lib/cn";

export const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function   MainNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="hidden items-center gap-1 text-[0.84375rem] lg:flex">
      {mainNav.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          aria-current={isActive(pathname, href) ? "page" : undefined}
          className={cn("hover:text-brand px-3", isActive(pathname, href) && "font-semibold text-brand")}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
