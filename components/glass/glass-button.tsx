import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const glassButtonVariants = cva(
  [
    "material-interactive",
    "relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap",
    "border text-sm font-medium leading-none outline-none select-none",
    "transition-all duration-200",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "focus-visible:outline-none",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:content-['']",
  ],
  {
    variants: {
      variant: {
        /** Neutral frosted control. */
        default: [
          "material-glass",
          "text-[color:var(--material-content-primary)]",
          "before:bg-linear-to-b before:from-white/14 before:to-transparent",
        ],
        /** Primary action: visibly tinted and elevated. */
        primary: [
          "material-glass material-tint-primary material-tint-strong",
          "text-[color:var(--material-content-primary)]",
          "shadow-[0_10px_28px_color-mix(in_oklab,var(--material-tint-primary)_20%,transparent)]",
          "before:bg-linear-to-b before:from-white/22 before:via-transparent before:to-black/5",
        ],
        /** Cool secondary tint, less prominent than primary. */
        secondary: [
          "material-glass material-tint-info",
          "text-[color:var(--material-content-primary)]",
          "before:bg-linear-to-b before:from-white/16 before:to-transparent",
        ],
        success: [
          "material-glass material-tint-success material-tint-strong",
          "text-[color:var(--material-content-primary)]",
          "shadow-[0_10px_28px_color-mix(in_oklab,var(--material-tint-success)_18%,transparent)]",
          "before:bg-linear-to-b before:from-white/20 before:to-transparent",
        ],
        warning: [
          "material-glass material-tint-warning material-tint-strong",
          "text-[color:var(--material-content-primary)]",
          "shadow-[0_10px_28px_color-mix(in_oklab,var(--material-tint-warning)_18%,transparent)]",
          "before:bg-linear-to-b before:from-white/20 before:to-transparent",
        ],
        info: [
          "material-glass material-tint-info material-tint-strong",
          "text-[color:var(--material-content-primary)]",
          "shadow-[0_10px_28px_color-mix(in_oklab,var(--material-tint-info)_18%,transparent)]",
          "before:bg-linear-to-b before:from-white/20 before:to-transparent",
        ],
        destructive: [
          "material-glass material-tint-danger material-tint-strong",
          "text-[color:var(--material-content-primary)]",
          "shadow-[0_10px_28px_color-mix(in_oklab,var(--material-tint-danger)_20%,transparent)]",
          "before:bg-linear-to-b before:from-white/20 before:to-transparent",
        ],
        /** Transparent glass with a stronger edge and no filled surface. */
        outline: [
          "material-glass-clear",
          "border-2! border-[color:var(--material-glass-border)]!",
          "bg-transparent! shadow-none!",
          "text-[color:var(--material-content-primary)]",
          "before:bg-transparent",
        ],
        /** No visible fill; hover reveals the material surface. */
        ghost: [
          "border-transparent bg-transparent shadow-none",
          "text-[color:var(--material-content-secondary)]",
          "hover:material-glass hover:text-[color:var(--material-content-primary)]",
          "before:bg-transparent",
        ],
      },
      material: {
        regular: "material-glass",
        clear: "material-glass-clear",
      },
      size: {
        sm: "h-8 gap-1.5 rounded-[var(--material-radius-sm)] px-3 text-xs has-[>svg]:px-2.5",
        default: "h-9 rounded-[var(--material-radius-md)] px-4 has-[>svg]:px-3",
        lg: "h-11 rounded-[var(--material-radius-lg)] px-6 text-base has-[>svg]:px-4",
        icon: "size-9 rounded-[var(--material-radius-md)] p-0",
        "icon-sm": "size-8 rounded-[var(--material-radius-sm)] p-0",
        "icon-lg": "size-11 rounded-[var(--material-radius-lg)] p-0",
      },
    },
    compoundVariants: [
      // The explicit material prop wins for transparent/solid variants.
      {
        variant: "default",
        material: "clear",
        class: "shadow-none",
      },
      {
        variant: "primary",
        material: "clear",
        class: "shadow-[0_8px_24px_color-mix(in_oklab,var(--material-tint-primary)_14%,transparent)]",
      },
    ],
    defaultVariants: {
      variant: "default",
      material: "regular",
      size: "default",
    },
  },
)

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    {
      className,
      variant,
      material,
      size,
      asChild = false,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        data-slot="glass-button"
        data-variant={variant ?? "default"}
        data-material={material ?? "regular"}
        className={cn(glassButtonVariants({ variant, material, size, className }))}
        type={asChild ? undefined : type}
        {...props}
      />
    )
  },
)
GlassButton.displayName = "GlassButton"

export { GlassButton, glassButtonVariants }
