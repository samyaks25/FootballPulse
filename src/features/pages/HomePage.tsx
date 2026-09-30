import { PageContainer, SectionHeader } from "../../components/layout/PageContainer";
import { Card, CardContent } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";
import { NoLiveMatchesEmptyState, NoDataEmptyState } from "../../components/feedback/EmptyState";

export function HomePage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Home"
        subtitle="Today's fixtures and live scores at a glance"
      />
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card variant="elevated" padding="md">
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-text-primary">Live Now</h3>
                <Badge variant="live" dot>Live</Badge>
              </div>
              <NoLiveMatchesEmptyState />
            </CardContent>
          </Card>

          <Card variant="elevated" padding="md">
            <CardContent className="space-y-3">
              <h3 className="font-semibold text-text-primary">Upcoming Matches</h3>
              <NoDataEmptyState
                title="No upcoming matches"
                description="Matches will appear here when scheduled"
              />
            </CardContent>
          </Card>

          <Card variant="elevated" padding="md">
            <CardContent className="space-y-3">
              <h3 className="font-semibold text-text-primary">Recent Results</h3>
              <NoDataEmptyState
                title="No recent results"
                description="Finished matches will appear here"
              />
            </CardContent>
          </Card>
        </div>

        <Card variant="outlined" padding="md">
          <CardContent className="space-y-3">
            <h3 className="font-semibold text-text-primary">Top Leagues</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { name: "Premier League", country: "England", matches: 10 },
                { name: "La Liga", country: "Spain", matches: 8 },
                { name: "Bundesliga", country: "Germany", matches: 7 },
                { name: "Serie A", country: "Italy", matches: 9 },
                { name: "Ligue 1", country: "France", matches: 6 },
              ].map((league) => (
                <div key={league.name} className="p-3 bg-surface rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-text-primary">{league.name}</span>
                    <Badge variant="info" size="sm">{league.matches} matches</Badge>
                  </div>
                  <p className="text-xs text-text-muted mt-1">{league.country}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}