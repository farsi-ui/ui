import * as React from "react"

import { cn } from "@/lib/utils"

import type { GlassMaterialVariant, GlassTint, GlassTintStrength } from "./glass-types"

export type { GlassMaterialVariant, GlassTint, GlassTintStrength } from "./glass-types"

const materialVariantClasses: Record<GlassMaterialVariant, string> = {
  regular: "material-glass",
  clear: "material-glass-clear",
}

const tintClasses: Record<Exclude<GlassTint, "none">, string> = {
  primary: "material-tint-primary",
  success: "material-tint-success",
  warning: "material-tint-warning",
  danger: "material-tint-danger",
  info: "material-tint-info",
}

const tintStrengthClasses: Record<GlassTintStrength, string> = {
  default: "",
  strong: "material-tint-strong",
}

export interface GlassCardProps extends React.ComponentPropsWithoutRef<"div"> {
  variant?: GlassMaterialVariant
  tint?: GlassTint
  tintStrength?: GlassTintStrength
  interactive?: boolean
}

const getGlassCardMaterialClasses = ({
  variant,
  tint,
  tintStrength,
  interactive,
}: Pick<GlassCardProps, "variant" | "tint" | "tintStrength" | "interactive">) =>
  cn(
    materialVariantClasses[variant ?? "regular"],
    tint && tint !== "none" ? tintClasses[tint] : "",
    tint && tint !== "none" ? tintStrengthClasses[tintStrength ?? "default"] : "",
    interactive && "material-interactive",
  )

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      variant = "regular",
      tint = "none",
      tintStrength = "default",
      interactive = false,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="glass-card"
      data-material={variant}
      data-tint={tint}
      data-interactive={interactive || undefined}
      className={cn(
        getGlassCardMaterialClasses({ variant, tint, tintStrength, interactive }),
        "flex flex-col gap-6 rounded-(--material-radius-lg) p-6",
        className,
      )}
      {...props}
    />
  ),
)
GlassCard.displayName = "GlassCard"

const GlassCardHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-slot="glass-card-header" className={cn("grid auto-rows-min gap-2", className)} {...props} />
  ),
)
GlassCardHeader.displayName = "GlassCardHeader"

const GlassCardTitle = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<"h3">>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      data-slot="glass-card-title"
      className={cn(
        "text-lg font-semibold leading-none tracking-tight text-(--material-content-primary)",
        className,
      )}
      {...props}
    />
  ),
)
GlassCardTitle.displayName = "GlassCardTitle"

const GlassCardDescription = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<"p">>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      data-slot="glass-card-description"
      className={cn("text-sm leading-relaxed text-(--material-content-secondary)", className)}
      {...props}
    />
  ),
)
GlassCardDescription.displayName = "GlassCardDescription"

const GlassCardContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-slot="glass-card-content" className={cn(className)} {...props} />
  ),
)
GlassCardContent.displayName = "GlassCardContent"

const GlassCardFooter = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="glass-card-footer"
      className={cn("flex items-center gap-2 border-t border-(--material-glass-border) pt-4", className)}
      {...props}
    />
  ),
)
GlassCardFooter.displayName = "GlassCardFooter"

export {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
  getGlassCardMaterialClasses,
}
