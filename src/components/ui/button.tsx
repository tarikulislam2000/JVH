import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/** Use on <button>, <Link> or <a>:  className={buttonVariants({ variant: "outline" })} */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand text-white hover:bg-brand-dark",
        outline: "border border-ink/20 bg-white text-ink hover:border-brand hover:text-brand",
        white: "bg-white text-brand hover:bg-brand-50",
        ghost: "text-ink hover:bg-brand-50",
      },
      size: {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-xs",
        lg: "px-5 py-2.5 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: React.ComponentProps<"button"> & ButtonVariants) {
  return (
    <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
