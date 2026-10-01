import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "danger" | "info" | "live" | "upcoming" | "finished";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", dot = false, children, ...props }, ref) => {
    const variants = {
      default: "bg-surface-elevated text-text-secondary border border-border",
      success: "bg-green-500/20 text-green-400 border border-green-500/30",
      warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
      danger: "bg-red-500/20 text-red-400 border border-red-500/30",
      info: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
      live: "bg-accent-red/20 text-accent-red border border-accent-red/30 animate-pulse-subtle",
      upcoming: "bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30",
      finished: "bg-text-muted/20 text-text-muted border border-text-muted/30",
    };

    const sizes = {
      sm: "px-2 py-0.5 text-xs gap-1",
      md: "px-2.5 py-1 text-sm gap-1.5",
      lg: "px-3 py-1.5 text-base gap-2",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium rounded-full border transition-colors",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {dot && <span className={cn("w-1.5 h-1.5 rounded-full", variants[variant].replace(/bg-(\S+)\/20/, "bg-$1").replace(/text-(\S+)/, "bg-$1").replace(/border-(\S+)\/30/, ""))} />}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";