import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { Button } from "../common/Button";

export interface ErrorStateProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  message: string;
  code?: string;
  onRetry?: () => void;
  onDismiss?: () => void;
  variant?: "default" | "inline" | "banner" | "full";
  dismissible?: boolean;
}

export const ErrorState = forwardRef<HTMLDivElement, ErrorStateProps>(
  ({ className, title = "Something went wrong", message, code, onRetry, onDismiss, variant = "default", dismissible = false, children, ...props }, ref) => {
    const variants = {
      default: "flex flex-col items-center justify-center gap-4 py-12 px-6 text-center bg-surface border border-border rounded-xl",
      inline: "flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg",
      banner: "flex items-center justify-between gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg",
      full: "flex flex-col items-center justify-center gap-4 min-h-[300px] px-6 text-center",
    };

    return (
      <div ref={ref} className={cn(variants[variant], className)} {...props}>
        {variant !== "inline" && variant !== "banner" && (
          <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <svg className="w-7 h-7 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
        )}

        <div className={cn("flex-1", variant === "banner" && "flex-1")}>
          <h3 className={cn("font-semibold", variant === "inline" || variant === "banner" ? "text-text-primary" : "text-lg text-text-primary")}>
            {title}
          </h3>
          <p className={cn("mt-1 text-sm", variant === "inline" || variant === "banner" ? "text-red-400" : "text-text-secondary")}>
            {message}
          </p>
          {code && <p className="mt-2 text-xs text-text-muted font-mono">Error: {code}</p>}
        </div>

        {variant === "banner" && dismissible && onDismiss && (
          <button
            onClick={onDismiss}
            className="p-1 hover:bg-red-500/20 rounded transition-colors flex-shrink-0"
            aria-label="Dismiss error"
          >
            <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}

        {(onRetry || (variant === "default" || variant === "full")) && (
          <div className={cn("flex items-center gap-2 mt-2", variant === "banner" && "flex-shrink-0 ml-4")}>
            {onRetry && (
              <Button variant="primary" size="sm" onClick={onRetry}>
                Try Again
              </Button>
            )}
            {variant === "default" || variant === "full" ? (
              <Button variant="ghost" size="sm" onClick={onRetry}>
                Refresh Page
              </Button>
            ) : null}
          </div>
        )}

        {children}
      </div>
    );
  }
);

ErrorState.displayName = "ErrorState";

export function NetworkErrorState(onRetry?: () => void) {
  return (
    <ErrorState
      title="Connection Lost"
      message="Unable to reach the server. Please check your internet connection and try again."
      onRetry={onRetry}
      variant="full"
    />
  );
}

export function QuotaExceededErrorState(retryTime?: string) {
  return (
    <ErrorState
      title="Daily Limit Reached"
      message={retryTime
        ? `API quota exceeded. Serving cached data. Next reset: ${retryTime}`
        : "API quota exceeded. Serving cached data from last successful fetch."}
      variant="banner"
      dismissible
    />
  );
}

export function NotFoundErrorState(onNavigate?: () => void) {
  return (
    <ErrorState
      title="Not Found"
      message="The requested resource could not be found."
      onRetry={onNavigate}
      variant="full"
    />
  );
}

export function GenericErrorState(message: string, onRetry?: () => void) {
  return (
    <ErrorState
      message={message}
      onRetry={onRetry}
      variant="full"
    />
  );
}