import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "narrow" | "wide" | "full";
  padding?: "none" | "sm" | "md" | "lg";
}

export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ className, variant = "default", padding = "md", children, ...props }, ref) => {
    const variants = {
      default: "max-w-6xl",
      narrow: "max-w-3xl",
      wide: "max-w-7xl",
      full: "max-full",
    };

    const paddings = {
      none: "",
      sm: "px-3 py-3",
      md: "px-4 md:px-6 py-4 md:py-6",
      lg: "px-6 md:px-8 py-6 md:py-8",
    };

    return (
      <div ref={ref} className={cn("w-full mx-auto", variants[variant], paddings[padding], className)} {...props}>
        {children}
      </div>
    );
  }
);

PageContainer.displayName = "PageContainer";

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  badge?: React.ReactNode;
  divider?: boolean;
}

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, action, badge, divider = true, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6", divider && "pb-4 border-b border-border", className)} {...props}>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">{title}</h2>
            {badge && <div className="flex-shrink-0">{badge}</div>}
          </div>
          {subtitle && <p className="text-text-secondary text-base md:text-lg">{subtitle}</p>}
        </div>
        {action && <div className="flex-shrink-0 mt-2 sm:mt-0">{action}</div>}
        {children}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";