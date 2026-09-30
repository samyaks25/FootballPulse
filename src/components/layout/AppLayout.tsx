import { useState, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { NavigationSidebar } from "./NavigationSidebar";
import { Header } from "./Header";
import { NavItem } from "../../types";

export interface AppLayoutProps {
  children: ReactNode;
  navItems: NavItem[];
  activePath: string;
  onNavigate: (path: string) => void;
  headerTitle?: string;
  headerSubtitle?: string;
  headerActions?: ReactNode;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
  sidebarCollapsed?: boolean;
  onSidebarToggle?: () => void;
  sidebarLogo?: ReactNode;
  sidebarFooter?: ReactNode;
  className?: string;
}

export function AppLayout({
  children,
  navItems,
  activePath,
  onNavigate,
  headerTitle,
  headerSubtitle,
  headerActions,
  showSearch = false,
  onSearch,
  sidebarCollapsed = false,
  onSidebarToggle,
  sidebarLogo,
  sidebarFooter,
  className,
}: AppLayoutProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const sidebarWidth = sidebarCollapsed ? "w-16" : "w-64";

  return (
    <div className={cn("flex h-screen bg-background overflow-hidden", className)}>
      <NavigationSidebar
        items={navItems}
        activeItem={activePath}
        onNavigate={(path) => {
          onNavigate(path);
          setIsMobileSidebarOpen(false);
        }}
        collapsed={sidebarCollapsed}
        onToggleCollapse={onSidebarToggle}
        logo={sidebarLogo}
        footer={sidebarFooter}
        className={sidebarWidth}
      />

      <div className={cn("flex-1 flex flex-col overflow-hidden", sidebarCollapsed ? "ml-16" : "ml-64")}>
        <Header
          title={headerTitle}
          subtitle={headerSubtitle}
          actions={headerActions}
          showSearch={showSearch}
          onSearch={onSearch}
        />

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>

      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}