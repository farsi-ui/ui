import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const glassBadgeVariants = cva(
  [
    "material-glass inline-flex w-fit items-center justify-center gap-1.5",
    "rounded-[var(--material-radius-pill)] border px-2.5 py-1",
    "text-xs font-medium leading-none whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        neutral: "text-[color:var(--material-content-primary)]",
        primary: "material-tint-primary material-tint-strong text-[color:var(--material-content-primary)]",
        success: "material-tint-success text-[color:var(--material-content-primary)]",
        warning: "material-tint-warning text-[color:var(--material-content-primary)]",
        info: "material-tint-info text-[color:var(--material-content-primary)]",
        destructive: "material-tint-danger text-[color:var(--material-content-primary)]",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        default: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "default",
    },
  },
)

export interface GlassBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassBadgeVariants> {}

const GlassBadge = React.forwardRef<HTMLDivElement, GlassBadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="glass-badge"
      data-variant={variant ?? "neutral"}
      className={cn(glassBadgeVariants({ variant, size, className }))}
      {...props}
    />
  ),
)
GlassBadge.displayName = "GlassBadge"

export { GlassBadge, glassBadgeVariants }
