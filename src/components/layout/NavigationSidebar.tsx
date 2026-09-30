import { forwardRef, type HTMLAttributes, type ReactNode, isValidElement, cloneElement } from "react";
import { cn } from "../../utils/cn";
import { NavItem } from "../../types";

export interface NavigationSidebarProps extends HTMLAttributes<HTMLElement> {
  items: NavItem[];
  activeItem: string;
  onNavigate: (path: string) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  logo?: ReactNode;
  footer?: ReactNode;
}

export const NavigationSidebar = forwardRef<HTMLElement, NavigationSidebarProps>(
  ({ className, items, activeItem, onNavigate, collapsed = false, onToggleCollapse, logo, footer, children, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "fixed left-0 top-0 z-50 h-full bg-surface border-r border-border transition-all duration-300 ease-out flex flex-col",
          collapsed ? "w-16" : "w-64",
          className
        )}
        {...props}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-border">
          {!collapsed && logo && (
            <div className="flex items-center gap-3 min-w-0 flex-1">
              {logo}
            </div>
          )}
          {collapsed && logo && (
            <div className="flex items-center justify-center">
              {isValidElement(logo)
                ? cloneElement(logo as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })
                : logo}
            </div>
          )}
          {onToggleCollapse && (
            <button
              onClick={onToggleCollapse}
              className={cn(
                "p-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors",
                collapsed && "rotate-180"
              )}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1" aria-label="Main navigation">
          {items.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.path)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150",
                  "text-text-secondary hover:text-text-primary hover:bg-surface-elevated",
                  isActive && "bg-primary/10 text-primary border-l-2 border-primary",
                  collapsed && "justify-center px-0"
                )}
                title={collapsed ? item.label : undefined}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.label}
              >
                <span className={cn("flex-shrink-0 w-6 h-6 flex items-center justify-center", collapsed ? "mx-auto" : "")}>
                  {item.icon}
                </span>
                {!collapsed && <span className="font-medium text-sm truncate">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {footer && !collapsed && (
          <div className="p-4 border-t border-border">
            {footer}
          </div>
        )}

        {children}
      </aside>
    );
  }
);

NavigationSidebar.displayName = "NavigationSidebar";