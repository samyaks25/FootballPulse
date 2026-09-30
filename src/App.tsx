import { useState } from "react";
import type { ComponentType } from "react";
import { AppLayout } from "./components/layout/AppLayout";
import type { NavItem } from "./types";
import {
  HomePage,
  LivePage,
  MatchesPage,
  LeaguesPage,
  TeamsPage,
  PlayersPage,
  ComparePage,
  FavoritesPage,
  SettingsPage,
} from "./features/pages";
import {
  HomeIcon,
  LiveIcon,
  MatchesIcon,
  LeaguesIcon,
  TeamsIcon,
  PlayersIcon,
  CompareIcon,
  FavoritesIcon,
  SettingsIcon,
  LogoIcon,
} from "./components/common/Icons";

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: <HomeIcon />, path: "/" },
  { id: "live", label: "Live", icon: <LiveIcon />, path: "/live" },
  { id: "matches", label: "Matches", icon: <MatchesIcon />, path: "/matches" },
  { id: "leagues", label: "Leagues", icon: <LeaguesIcon />, path: "/leagues" },
  { id: "teams", label: "Teams", icon: <TeamsIcon />, path: "/teams" },
  { id: "players", label: "Players", icon: <PlayersIcon />, path: "/players" },
  { id: "compare", label: "Compare", icon: <CompareIcon />, path: "/compare" },
  { id: "favorites", label: "Favorites", icon: <FavoritesIcon />, path: "/favorites" },
  { id: "settings", label: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

const pageComponents: Record<string, ComponentType> = {
  home: HomePage,
  live: LivePage,
  matches: MatchesPage,
  leagues: LeaguesPage,
  teams: TeamsPage,
  players: PlayersPage,
  compare: ComparePage,
  favorites: FavoritesPage,
  settings: SettingsPage,
};

function App() {
  const [activePath, setActivePath] = useState("/");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const currentPage = navItems.find((item) => item.path === activePath)?.id || "home";
  const PageComponent = pageComponents[currentPage];

  const handleNavigate = (path: string) => {
    setActivePath(path);
  };

  const headerTitles: Record<string, { title: string; subtitle?: string }> = {
    "/": { title: "Home", subtitle: "Today's fixtures and live scores" },
    "/live": { title: "Live", subtitle: "All matches currently in play" },
    "/matches": { title: "Matches", subtitle: "Browse all fixtures by date and competition" },
    "/leagues": { title: "Leagues", subtitle: "Explore competitions, standings, and schedules" },
    "/teams": { title: "Teams", subtitle: "Browse clubs, view squads, and track team performance" },
    "/players": { title: "Players", subtitle: "Explore player profiles, statistics, and career data" },
    "/compare": { title: "Compare", subtitle: "Side-by-side player and team comparison" },
    "/favorites": { title: "Favorites", subtitle: "Your pinned teams, leagues, and matches" },
    "/settings": { title: "Settings", subtitle: "Configure your FootballPulse experience" },
  };

  const currentHeader = headerTitles[activePath] || { title: "FootballPulse" };

  return (
    <AppLayout
      navItems={navItems}
      activePath={activePath}
      onNavigate={handleNavigate}
      headerTitle={currentHeader.title}
      headerSubtitle={currentHeader.subtitle}
      showSearch={true}
      sidebarCollapsed={sidebarCollapsed}
      onSidebarToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      sidebarLogo={<LogoIcon />}
      sidebarFooter={
        <div className="text-center text-xs text-text-muted">
          FootballPulse v0.1.0
        </div>
      }
    >
      <PageComponent />
    </AppLayout>
  );
}

export default App;