import Image from "next/image";

const logos = [
  "/landing-hero/hero-image-1.svg",
  "/landing-hero/hero-image-2.svg",
  "/landing-hero/hero-image-3.svg",
  "/landing-hero/hero-image-4.svg",
  "/landing-hero/hero-image-5.svg",
  "/landing-hero/hero-image-5.svg",

];

export function LogoStrip() {
  return (
    <div className="frame overflow-hidden border-b py-6">
      <div className="scrollbar-none flex items-center justify-between gap-10 overflow-x-auto px-6 text-ink/45">
        {logos.map((l, i) => <div key={i}>
           <Image
      src={l}
      width={113}
      height={46}
      alt="Picture of the author"
    />
        </div>
        )}
      </div>

    </div>
  );
}
