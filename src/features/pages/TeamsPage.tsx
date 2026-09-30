import { PageContainer, SectionHeader } from "../../components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/common/Card";
import { NoDataEmptyState } from "../../components/feedback/EmptyState";
import { Button } from "../../components/common/Button";

export function TeamsPage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Teams"
        subtitle="Browse clubs, view squads, and track team performance"
      />
      <div className="space-y-6">
        <Card variant="outlined" padding="md">
          <CardHeader>
            <CardTitle>Popular Teams</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Manchester City", league: "Premier League", country: "England" },
              { name: "Real Madrid", league: "La Liga", country: "Spain" },
              { name: "Bayern Munich", league: "Bundesliga", country: "Germany" },
              { name: "Inter Milan", league: "Serie A", country: "Italy" },
              { name: "Paris Saint-Germain", league: "Ligue 1", country: "France" },
              { name: "Liverpool", league: "Premier League", country: "England" },
              { name: "Barcelona", league: "La Liga", country: "Spain" },
              { name: "Borussia Dortmund", league: "Bundesliga", country: "Germany" },
            ].map((team) => (
              <div key={team.name} className="flex items-center justify-between p-3 bg-surface rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-text-primary truncate">{team.name}</h4>
                    <p className="text-sm text-text-muted truncate">{team.league} • {team.country}</p>
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
            <CardTitle>Team Search & Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <NoDataEmptyState
              title="Team browser coming soon"
              description="Search teams by name, filter by league, country, or competition"
            />
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}