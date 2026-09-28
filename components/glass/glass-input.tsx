import * as React from "react"

import { cn } from "@/lib/utils"

export interface GlassInputProps extends React.ComponentPropsWithoutRef<"input"> {
  material?: "regular" | "clear"
  tint?: "none" | "primary" | "info" | "success" | "warning" | "danger"
}

const tintClasses = {
  none: "",
  primary: "material-tint-primary",
  info: "material-tint-info",
  success: "material-tint-success",
  warning: "material-tint-warning",
  danger: "material-tint-danger",
} as const

const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, material = "regular", tint = "none", disabled, ...props }, ref) => (
    <input
      ref={ref}
      data-slot="glass-input"
      data-material={material}
      data-tint={tint}
      disabled={disabled}
      className={cn(
        material === "clear" ? "material-glass-clear" : "material-glass",
        tintClasses[tint],
        "h-10 w-full rounded-(--material-radius-md) border px-3 text-sm",
        "bg-transparent! text-(--material-content-primary)",
        "placeholder:text-(--material-content-secondary)",
        "outline-none transition-all duration-200",
        "focus-visible:border-(--material-glass-border-active)",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-(--material-interactive-ring-color)",
        "disabled:cursor-not-allowed disabled:opacity-55",
        className,
      )}
      {...props}
    />
  ),
)
GlassInput.displayName = "GlassInput"

export { GlassInput }
