"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav, type NavSection, type SubNavItem } from "@/config/navigation";
import { cn } from "@/lib/cn";

export const isActive = (pathname: string, href?: string) =>
  !href ? false : href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

function Icon({ type }: { type: SubNavItem["iconType"] }) {
  switch (type) {
    case "heart":
      return (
        <svg className="size-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    case "chart":
      return (
        <svg className="size-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "edit":
      return (
        <svg className="size-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      );
    case "target":
      return (
        <svg className="size-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      );
  }
}

export function MainNav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav aria-label="Main" className="hidden items-center gap-1 text-[0.84375rem] lg:flex">
      {mainNav.map((item) => {
        if (item.children) {
          const isChildActive = item.children.some((section) =>
            section.items.some((subItem) => isActive(pathname, subItem.href))
          );
          const isOpen = openMenu === item.label;

          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                onClick={() => setOpenMenu(isOpen ? null : item.label)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 text-[0.84375rem] transition-colors hover:text-brand",
                  (isChildActive || isOpen) && "font-semibold text-brand"
                )}
              >
                <span>{item.label}</span>
                <svg
                  className={cn("size-3.5 transition-transform duration-200", isOpen && "rotate-180")}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute left-0 top-full pt-1.5 z-50">
                  <div className="w-[380px] rounded-2xl border border-ink/10 bg-white p-3 shadow-xl ring-1 ring-black/5">
                    {item.children.map((section: NavSection, idx: number) => (
                      <div key={idx} className={cn(idx > 0 && "mt-3 border-t border-ink/5 pt-3")}>
                        {section.header && (
                          <div className="px-3 pb-2 text-[0.6875rem] font-bold tracking-wider text-ink/40 uppercase">
                            {section.header}
                          </div>
                        )}
                        <div className="space-y-1">
                          {section.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              onClick={() => setOpenMenu(null)}
                              className={cn(
                                "flex items-start gap-3.5 rounded-xl p-2.5 transition-colors hover:bg-slate-50",
                                isActive(pathname, subItem.href) && "bg-blue-50/60"
                              )}
                            >
                              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-100/80">
                                <Icon type={subItem.iconType} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-semibold text-slate-900">{subItem.title}</span>
                                  {subItem.badge && (
                                    <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[0.625rem] font-bold text-brand uppercase">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="mt-0.5 text-xs text-ink/60 leading-snug">{subItem.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href!}
            aria-current={isActive(pathname, item.href) ? "page" : undefined}
            className={cn("px-3 py-2 hover:text-brand transition-colors", isActive(pathname, item.href) && "font-semibold text-brand")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
