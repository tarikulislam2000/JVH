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
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    "Get Hired Faster": true,
  });

  const open = openPath === pathname;

  const toggleSubMenu = (label: string) => {
    setExpandedMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

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
          <i className={cn("block h-0.5 w-4 bg-ink transition", open && "translate-y-1.5 rotate-45")} />
          <i className={cn("block h-0.5 w-4 bg-ink transition", open && "opacity-0")} />
          <i className={cn("block h-0.5 w-4 bg-ink transition", open && "-translate-y-1.5 -rotate-45")} />
        </span>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-ink/10 bg-white px-4 py-3"
        >
          {mainNav.map((item) => {
            if (item.children) {
              const isExpanded = !!expandedMenus[item.label];

              return (
                <div key={item.label} className="border-b border-ink/10 py-3">
                  <button
                    type="button"
                    onClick={() => toggleSubMenu(item.label)}
                    className="flex w-full items-center justify-between text-left text-sm font-medium"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={cn("size-4 transition-transform", isExpanded && "rotate-180")}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {isExpanded && (
                    <div className="mt-2 space-y-3 pl-2 pt-1">
                      {item.children.map((section, idx) => (
                        <div key={idx} className="space-y-1">
                          {section.header && (
                            <div className="text-[0.625rem] font-bold tracking-wider text-ink/40 uppercase">
                              {section.header}
                            </div>
                          )}
                          {section.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              onClick={() => setOpenPath(null)}
                              className={cn(
                                "flex items-center justify-between py-1.5 text-sm text-ink/80 hover:text-brand",
                                isActive(pathname, subItem.href) && "font-semibold text-brand"
                              )}
                            >
                              <span>{subItem.title}</span>
                              {subItem.badge && (
                                <span className="rounded bg-blue-100 px-1 py-0.5 text-[0.5625rem] font-bold text-brand uppercase">
                                  {subItem.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href!}
                onClick={() => setOpenPath(null)}
                className={cn(
                  "block border-b border-ink/10 py-3 text-sm",
                  isActive(pathname, item.href) && "font-semibold text-brand"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href={ROUTES.login}
            onClick={() => setOpenPath(null)}
            className="mt-4 block rounded-sm border border-ink/20 py-2.5 text-center text-sm sm:hidden"
          >
            Login
          </Link>
        </nav>
      )}
    </div>
  );
}
