import Image from "next/image"

const logos = [
  "/landing-hero/hero-image-1.svg",
  "/landing-hero/hero-image-2.svg",
  "/landing-hero/hero-image-3.svg",
  "/landing-hero/hero-image-4.svg",
  "/landing-hero/hero-image-5.svg",
  "/landing-hero/hero-image-5.svg",
]

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-16 pr-16"
    >
      {logos.map((src, i) => (
        <li key={i} className="shrink-0">
          <Image
            src={src}
            width={113}
            height={46}
            alt={hidden ? "" : `Partner logo ${i + 1}`}
            className="h-11 w-auto object-contain"
          />
        </li>
      ))}
    </ul>
  )
}

export function LogoStrip() {
  return (
    <div className="frame overflow-hidden border-b py-6">
      <div className="group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </div>
  )
}


