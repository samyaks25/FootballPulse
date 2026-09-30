import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { Button } from "../common/Button";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "outline" | "ghost";
  };
  variant?: "default" | "centered" | "inline";
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "flex flex-col items-center justify-center gap-4 py-12 px-6 text-center",
      centered: "flex flex-col items-center justify-center gap-4 min-h-[300px] px-6 text-center",
      inline: "flex flex-col items-center justify-center gap-3 py-8 px-4 text-center",
    };

    return (
      <div ref={ref} className={cn(variants[variant], className)} {...props}>
        <div className={cn("w-16 h-16 rounded-2xl bg-surface-elevated border border-border flex items-center justify-center text-text-muted", icon ? "" : "hidden")}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
          {description && <p className="text-text-secondary text-sm mt-1 max-w-sm">{description}</p>}
        </div>
        {action && (
          <Button variant={action.variant || "primary"} onClick={action.onClick} size="sm">
            {action.label}
          </Button>
        )}
        {children}
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";

export interface NoLiveMatchesEmptyStateProps {
  onNavigate?: () => void;
}

export function NoLiveMatchesEmptyState({ onNavigate }: NoLiveMatchesEmptyStateProps) {
  return (
    <EmptyState
      icon={
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      }
      title="No Live Matches"
      description="There are no matches in play right now. Check upcoming fixtures below."
      action={onNavigate ? { label: "View Upcoming", onClick: onNavigate, variant: "outline" } : undefined}
      variant="centered"
    />
  );
}

export interface NoFavouritesEmptyStateProps {
  onSearch?: () => void;
}

export function NoFavouritesEmptyState({ onSearch }: NoFavouritesEmptyStateProps) {
  return (
    <EmptyState
      icon={
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      }
      title="No Favourites Yet"
      description="Pin your favourite clubs and leagues to get quick access to their fixtures."
      action={onSearch ? { label: "Browse Leagues", onClick: onSearch, variant: "primary" } : undefined}
      variant="centered"
    />
  );
}

export interface NoSearchResultsEmptyStateProps {
  query: string;
  onClear?: () => void;
}

export function NoSearchResultsEmptyState({ query, onClear }: NoSearchResultsEmptyStateProps) {
  return (
    <EmptyState
      icon={
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      }
      title="No Results Found"
      description={`No results for "${query}". Try searching by team name or competition.`}
      action={onClear ? { label: "Clear Search", onClick: onClear, variant: "ghost" } : undefined}
      variant="centered"
    />
  );
}

export interface NoDataEmptyStateProps {
  title: string;
  description?: string;
}

export function NoDataEmptyState({ title, description }: NoDataEmptyStateProps) {
  return (
    <EmptyState
      icon={
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M9 9h6v6H9z" />
        </svg>
      }
      title={title}
      description={description}
      variant="centered"
    />
  );
}