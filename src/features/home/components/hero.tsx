"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react"
import { buttonVariants } from "@/components/ui/button"
import { ROUTES } from "@/config/routes"
type HeroSlide = {
  id: number
  title: string
  image: string
  description: string
  link: string
  users: string
  rating: string
}

const heroData: [HeroSlide, ...HeroSlide[]] = [
  {
    id: 1,
    title: "Simplify Your UK Sponsorship From Job Search",
    image: "/landing-hero/landing-hero-bg.svg",
    description:
      "Spend less time searching and more time applying to the right opportunities, all in one place.",
    link: "View Openings",
    users: "53,434+ happy users",
    rating: "4.5/5 rating",
  },
  {
    id: 2,
    title: "Find Verified Sponsorship Jobs From Licensed Employers",
    image: "/landing-hero/landing-hero.jpg",
    description:
      "Discover verified opportunities from licensed employers and focus your search on roles that match your skills and experience.",
    link: "View Openings",
    users: "53,434+ happy users",
    rating: "4.5/5 rating",
  },
]
const SLIDE_DURATION = 8000 // ms

const stats = [
  ["100+", "Daily sponsorship jobs"],
  ["200+", "Expert-built CVs"],
  ["100+", "NHS support statements"],
]



/* ---------- Letter-by-letter title (bottom → top) ---------- */
const titleVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.025 } },
  exit: { transition: { staggerChildren: 0.01, staggerDirection: -1 } },
}

const letterVariants: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { y: "-110%", transition: { duration: 0.35, ease: "easeIn" } },
}

function AnimatedTitle({ text }: { text: string }) {
  return (
    <motion.h1
      variants={titleVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      aria-label={text}
      className="max-w-3xl text-3[rem] leading-[1.05] font-semibold tracking-tight sm:text-[3.75rem] md:text-[4.25rem] lg:text-[4.75rem]"
    >
      {text.split(" ").map((word, wi) => (
        <span key={wi} aria-hidden className="inline-block whitespace-nowrap">
          {/* overflow-hidden clips each letter as it slides up */}
          <span className="-my-[0.1em] inline-block overflow-hidden py-[0.1em] align-bottom">
            {word.split("").map((char, ci) => (
              <motion.span key={ci} variants={letterVariants} className="inline-block">
                {char}
              </motion.span>
            ))}
          </span>
          {"\u00A0"}
        </span>
      ))}
    </motion.h1>
  )
}

/* ---------- Hero ---------- */
export function Hero() {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const slide = heroData[index] ?? heroData[0]

  // Auto-advance every 8s. Re-runs when `index` changes, so clicking a
  // dot also resets the timer. Disabled for reduced-motion users.
  useEffect(() => {
    if (reduceMotion) return
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % heroData.length)
    }, SLIDE_DURATION)
    return () => clearTimeout(id)
  }, [index, reduceMotion])

  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-brand-900 text-white">
      {/* Background images: crossfade + slow zoom */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          className="absolute inset-0 -z-20"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: SLIDE_DURATION / 1000 + 1.2, ease: "linear" },
          }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            sizes="100vw"
            priority={slide.id === 1}
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand/60 to-brand-dark/65" />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-[1320px] flex-1 flex-col items-center justify-center px-4 pt-16 pb-12 text-center sm:pt-20 lg:pt-24 lg:pb-16">
        {/* Fixed min-height prevents layout jump between slides */}
        <div className="flex min-h-[26rem] flex-col items-center sm:min-h-[28rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="flex flex-col items-center"
              exit={{ transition: { duration: 0.4 } }}
            >
              <AnimatedTitle text={slide.title} />

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="mt-5 mb-8 max-w-2xl text-xs text-white/85 sm:text-sm"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <Link href={ROUTES.jobs} className={buttonVariants({ size: "sm" })}>
                  {slide.link}
                </Link>

                <p className="mt-6 rounded border border-white/30 px-3 py-1 font-mono text-[10px] tracking-wider uppercase">
                  {slide.users} · {slide.rating}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide indicators with progress fill */}
        <div className="mt-6 flex gap-1.5" role="tablist" aria-label="Hero slides">
          {heroData.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className="relative h-1 w-8 overflow-hidden rounded bg-white/30"
            >
              {i === index && (
                <motion.span
                  key={`fill-${index}`}
                  className="absolute inset-y-0 left-0 bg-white"
                  initial={{ width: reduceMotion ? "100%" : "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="relative grid border-t border-white/20 sm:grid-cols-3">
        {stats.map(([n, l], i) => (
          <div
            key={l}
            className={`flex items-center justify-center gap-3 px-4 py-5 sm:py-8 ${
              i ? "border-t border-white/20 sm:border-t-0 sm:border-l" : ""
            }`}
          >
            <span className="text-3xl font-medium sm:text-4xl lg:text-5xl">{n}</span>
            <span className="font-mono text-[10px] tracking-wider uppercase sm:text-xs">{l}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
