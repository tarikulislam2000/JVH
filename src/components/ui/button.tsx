import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xs border border-transparent text-sm font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-1 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // "Get Started", "Search Jobs", "View details", "Subscribe"
        default:
          "border-btn-border bg-brand-600 text-white hover:bg-brand-700 hover:border-brand-700",
        // "Login", "Show More", "Read More", "Filter"
        outline:
          "border-ink/15 bg-white text-ink hover:bg-brand-50 hover:border-brand-300 aria-expanded:bg-brand-50",
        // Soft blue tint (cards, tags, secondary actions)
        secondary:
          "bg-brand-50 text-brand-700 hover:bg-brand-100",
        // Button on top of blue sections ("Unlock", hero/footer CTAs)
        inverse:
          "border-white bg-white text-brand-700 hover:bg-brand-50",
        ghost: "text-ink hover:bg-brand-50 hover:text-brand-700",
        destructive:
          "border-destructive bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/30",
        link: "text-brand-600 underline-offset-4 hover:text-brand-700 hover:underline",
      },
      size: {
        xs: "h-6 gap-1 px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        default: "h-9 gap-2 px-4",
        lg: "h-10 gap-2 px-5",
        xl: "h-12 gap-2 px-6 text-base",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({
  className,
  variant = "default",
  size = "default",
  fullWidth = false,
  asChild = false,
  type = "button",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      {...(!asChild && { type })}
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
