import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "match-card";
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = "text", width, height, lines = 1, ...props }, ref) => {
    const baseStyles = "animate-pulse bg-surface-elevated rounded overflow-hidden";

    const variants = {
      text: "h-4 w-full",
      circular: "rounded-full",
      rectangular: "rounded-lg",
      "match-card": "rounded-xl",
    };

    const content = Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={cn(baseStyles, variants[variant])}
        style={{
          width: variant === "text" ? (i === lines - 1 ? "60%" : "100%") : width,
          height: variant === "text" ? "1rem" : height,
          marginBottom: lines > 1 && i < lines - 1 ? "0.5rem" : 0,
        }}
      />
    ));

    return <div ref={ref} className={cn(className)} {...props}>{content}</div>;
  }
);

Skeleton.displayName = "Skeleton";

export function MatchCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center gap-4 p-4">
        <Skeleton variant="circular" width={48} height={48} className="flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="70%" />
          <Skeleton variant="text" width="40%" />
        </div>
        <Skeleton variant="rectangular" width={80} height={36} className="flex-shrink-0" />
        <div className="flex items-center gap-2 w-24">
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="circular" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}

export function MatchListSkeleton({ count = 5 }: { count?: number } = {}) {
  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, i) => (
        <MatchCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function StandingsTableSkeleton({ rows = 10 }: { rows?: number } = {}) {
  return (
    <div className="space-y-1">
      <div className="grid grid-cols-[48px_1fr_60px_50px_50px_50px_50px_50px_60px] gap-3 px-3 py-2 text-text-muted text-xs font-medium uppercase tracking-wider">
        {["", "Team", "MP", "W", "D", "L", "GF", "GA", "GD", "Pts"].map((col, i) => (
          <Skeleton key={i} variant="text" width={col === "Team" ? "60%" : "100%"} />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="grid grid-cols-[48px_1fr_60px_50px_50px_50px_50px_50px_50px_60px] gap-3 px-3 py-3 items-center">
          <Skeleton variant="text" width="100%" height="1.25rem" />
          <div className="flex items-center gap-3">
            <Skeleton variant="circular" width={28} height={28} />
            <Skeleton variant="text" width="60%" />
          </div>
          <Skeleton variant="text" width="100%" height="1.25rem" />
          <Skeleton variant="text" width="100%" height="1.25rem" />
          <Skeleton variant="text" width="100%" height="1.25rem" />
          <Skeleton variant="text" width="100%" height="1.25rem" />
          <Skeleton variant="text" width="100%" height="1.25rem" />
          <Skeleton variant="text" width="100%" height="1.25rem" />
          <Skeleton variant="text" width="100%" height="1.25rem" />
          <Skeleton variant="text" width="100%" height="1.25rem" />
        </div>
      ))}
    </div>
  );
}

export function PlayerCardSkeleton() {
  return (
    <div className="animate-pulse flex flex-col items-center gap-3 p-4">
      <Skeleton variant="circular" width={80} height={80} />
      <div className="space-y-2 w-full">
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="50%" />
        <Skeleton variant="text" width="40%" />
      </div>
    </div>
  );
}