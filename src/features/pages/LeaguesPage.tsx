import { PageContainer, SectionHeader } from "../../components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";
import { NoDataEmptyState } from "../../components/feedback/EmptyState";
import { Button } from "../../components/common/Button";

export function LeaguesPage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Leagues"
        subtitle="Explore competitions, standings, and schedules"
      />
      <div className="space-y-6">
        <Card variant="outlined" padding="md">
          <CardHeader>
            <CardTitle>Popular Leagues</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Premier League", country: "England", tier: 1, teams: 20, season: "2025/26" },
              { name: "La Liga", country: "Spain", tier: 1, teams: 20, season: "2025/26" },
              { name: "Bundesliga", country: "Germany", tier: 1, teams: 18, season: "2025/26" },
              { name: "Serie A", country: "Italy", tier: 1, teams: 20, season: "2025/26" },
              { name: "Ligue 1", country: "France", tier: 1, teams: 18, season: "2025/26" },
              { name: "Champions League", country: "Europe", tier: 0, teams: 36, season: "2025/26" },
              { name: "Europa League", country: "Europe", tier: 0, teams: 36, season: "2025/26" },
              { name: "Conference League", country: "Europe", tier: 0, teams: 36, season: "2025/26" },
            ].map((league) => (
              <div key={league.name} className="flex items-center justify-between p-3 bg-surface rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-text-primary truncate">{league.name}</h4>
                      {league.tier === 1 && <Badge variant="info" size="sm">Top Tier</Badge>}
                      {league.tier === 0 && <Badge variant="info" size="sm">Continental</Badge>}
                    </div>
                    <p className="text-sm text-text-muted truncate">{league.country} • {league.teams} teams • {league.season}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  View
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card variant="elevated" padding="md">
          <CardHeader>
            <CardTitle>Browse All Competitions</CardTitle>
          </CardHeader>
          <CardContent>
            <NoDataEmptyState
              title="Competition browser coming soon"
              description="Filter by country, tier, and season to find any league or cup competition"
            />
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}