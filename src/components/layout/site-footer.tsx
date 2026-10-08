import Link from "next/link";
import Image from "next/image";
import { footerNav, socialLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand text-white">
      <div className="mx-auto w-full max-w-page px-4 pt-12 sm:px-6">
        {/* Main Footer Top Grid */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            {/* Top Brand Logo */}
            <Image
              src="/jvh-footer-logo.svg"
              width={160}
              height={40}
              alt={siteConfig.name}
              className="h-auto w-auto"
            />
            <p className="mt-4 max-w-xs text-xs text-white/85">
              {siteConfig.description}
            </p>
            <address className="mt-6 font-mono text-[10px] leading-relaxed text-white/80 uppercase not-italic">
              Address
              {siteConfig.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            {/* Newsletter Form */}
            <form
              action="/api/subscribe"
              method="post"
              className="mt-6 flex max-w-sm border border-white/40"
            >
              <input
                type="email"
                name="email"
                required
                aria-label="Email address"
                placeholder="you@email.com"
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-xs outline-none placeholder:text-white/60"
              />
              <button className="bg-brand-dark px-4 text-xs font-medium">
                Subscribe
              </button>
            </form>
            <p className="mt-2 font-mono text-[9px] text-white/70 uppercase">
              New sponsorship jobs, sent daily. Unsubscribe anytime.
            </p>
          </div>

          {/* Nav Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerNav).map(([heading, items]) => (
              <div key={heading}>
                <h2 className="mono-label text-white/70">{heading}</h2>
                <ul className="mt-3 space-y-2 text-xs">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Links */}
            <div>
              <h2 className="mono-label text-white/70">Social</h2>
              <ul className="mt-3 space-y-2 text-xs">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {social.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Link */}
            <div>
              <h2 className="mono-label text-white/70">Support</h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 block text-xs break-all hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-10 flex items-center justify-between border-t border-white/20 pt-6 mono-label text-white/80">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid size-7 place-items-center rounded-full border border-white/50 hover:bg-white/10"
          >
            ↑
          </a>
        </div>
      </div>

      {/* Large Bottom Footer Logo Watermark (Cropped to top-half only) */}
<div
  aria-hidden
  className="relative mt-6 h-28 w-full overflow-hidden opacity-35 pointer-events-none select-none md:h-36 lg:h-48"
>
  <Image
    src="/jvh-footer-logo.svg"
    width={1512}
    height={206}
    alt=""
    className="absolute top-0 left-1/2 -translate-x-1/2 min-w-[1200px] w-full max-w-none object-contain lg:min-w-[1400px]"
    priority
  />
</div>
    </footer>
  );
}
