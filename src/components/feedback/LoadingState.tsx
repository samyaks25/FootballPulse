import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { Skeleton, MatchListSkeleton, StandingsTableSkeleton, PlayerCardSkeleton } from "../common/Skeleton";

export interface LoadingStateProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "full" | "inline" | "overlay";
  text?: string;
  skeleton?: "match-list" | "standings" | "player-card" | "default";
  count?: number;
}

export const LoadingState = forwardRef<HTMLDivElement, LoadingStateProps>(
  ({ className, variant = "full", text = "Loading...", skeleton, count = 5, children, ...props }, ref) => {
    const variants = {
      full: "flex flex-col items-center justify-center min-h-[300px] gap-4",
      inline: "flex flex-col items-center justify-center gap-3 py-8",
      overlay: "absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10",
    };

    const skeletonContent = () => {
      switch (skeleton) {
        case "match-list":
          return <MatchListSkeleton count={count} />;
        case "standings":
          return <StandingsTableSkeleton rows={count} />;
        case "player-card":
          return <PlayerCardSkeleton />;
        default:
          return (
            <div className="space-y-3 w-full max-w-md">
              {Array.from({ length: count }).map((_, i) => (
                <Skeleton key={i} variant="rectangular" height={16} width="100%" />
              ))}
            </div>
          );
      }
    };

    return (
      <div ref={ref} className={cn(variants[variant], className)} {...props}>
        {skeleton ? skeletonContent() : (
          <>
            <div className="relative w-10 h-10">
              <svg className="animate-spin w-full h-full text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </div>
            <p className="text-text-secondary text-sm">{text}</p>
          </>
        )}
        {children}
      </div>
    );
  }
);

LoadingState.displayName = "LoadingState";

export function PageLoadingState({ text = "Loading page..." }: { text?: string } = {}) {
  return (
    <LoadingState variant="full" text={text} skeleton="match-list" count={3} />
  );
}