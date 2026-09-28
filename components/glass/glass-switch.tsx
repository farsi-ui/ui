"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

export interface GlassSwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  tint?: "primary" | "success" | "info" | "warning" | "danger"
  material?: "regular" | "clear"
}

const tintClasses = {
  primary: "material-tint-primary",
  success: "material-tint-success",
  info: "material-tint-info",
  warning: "material-tint-warning",
  danger: "material-tint-danger",
} as const

const GlassSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  GlassSwitchProps
>(({ className, tint = "primary", material = "regular", ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    data-slot="glass-switch"
    data-material={material}
    data-tint={tint}
    className={cn(
      material === "clear" ? "material-glass-clear" : "material-glass",
      tintClasses[tint],
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full",
      "border p-0.5 align-middle outline-none transition-all duration-200",
      "data-[state=checked]:material-tint-strong data-[state=checked]:shadow-[0_0_0_1px_color-mix(in_oklab,var(--material-current-tint)_18%,transparent),0_8px_20px_color-mix(in_oklab,var(--material-current-tint)_18%,transparent)]",
      "focus-visible:ring-[3px] focus-visible:ring-(--material-interactive-ring-color)",
      "disabled:cursor-not-allowed disabled:opacity-55",
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      data-slot="glass-switch-thumb"
      className={cn(
        "pointer-events-none block size-4 rounded-full",
        "bg-white/85 shadow-[0_2px_7px_rgb(0_0_0/0.22)]",
        "ring-1 ring-black/5 transition-transform duration-200",
        "data-[state=checked]:translate-x-5 rtl:data-[state=checked]:-translate-x-5",
      )}
    />
  </SwitchPrimitive.Root>
))
GlassSwitch.displayName = SwitchPrimitive.Root.displayName

export { GlassSwitch }
