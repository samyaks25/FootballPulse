import { forwardRef, type HTMLAttributes, useState, FormEvent } from "react";
import { cn } from "../../utils/cn";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
  searchPlaceholder?: string;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className, title, subtitle, actions, showSearch = false, onSearch, searchPlaceholder = "Search teams, leagues, players...", children, ...props }, ref) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (onSearch && searchQuery.trim()) {
        onSearch(searchQuery.trim());
      }
    };

    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between gap-4 px-4 md:px-6 h-16">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {title && (
              <div className="flex flex-col min-w-0">
                <h1 className="text-xl font-bold text-text-primary truncate">{title}</h1>
                {subtitle && <p className="text-xs text-text-muted truncate">{subtitle}</p>}
              </div>
            )}
            {showSearch && (
              <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-md md:max-w-lg xl:max-w-xl mx-4">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full pl-10 pr-4 py-2 bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                  autoComplete="off"
                />
              </form>
            )}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {actions}
            {children}
          </div>
        </div>
      </header>
    );
  }
);

Header.displayName = "Header";