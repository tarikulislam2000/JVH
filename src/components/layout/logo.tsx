import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/cn";
import Image from "next/image";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      href={ROUTES.home}
      aria-label={`${siteConfig.name} home`}
      className={cn("font-semibold tracking-tight", light ? "text-white" : "text-brand", className)}
    >
  <Image
      src="/jvh-logo.svg"
      width={153}
      height={200}
      alt="Picture of the author"
    />    </Link>
  );
}
