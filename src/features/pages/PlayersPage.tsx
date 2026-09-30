import { PageContainer, SectionHeader } from "../../components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";
import { NoDataEmptyState } from "../../components/feedback/EmptyState";
import { Button } from "../../components/common/Button";

export function PlayersPage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Players"
        subtitle="Explore player profiles, statistics, and career data"
      />
      <div className="space-y-6">
        <Card variant="outlined" padding="md">
          <CardHeader>
            <CardTitle>Top Players</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Erling Haaland", team: "Manchester City", position: "Attacker", nationality: "Norway" },
              { name: "Kylian Mbappé", team: "Real Madrid", position: "Attacker", nationality: "France" },
              { name: "Vinícius Júnior", team: "Real Madrid", position: "Attacker", nationality: "Brazil" },
              { name: "Jude Bellingham", team: "Real Madrid", position: "Midfielder", nationality: "England" },
              { name: "Rodri", team: "Manchester City", position: "Midfielder", nationality: "Spain" },
              { name: "Lamine Yamal", team: "Barcelona", position: "Attacker", nationality: "Spain" },
              { name: "Florian Wirtz", team: "Bayer Leverkusen", position: "Midfielder", nationality: "Germany" },
              { name: "Jamal Musiala", team: "Bayern Munich", position: "Midfielder", nationality: "Germany" },
            ].map((player) => (
              <div key={player.name} className="flex items-center justify-between p-3 bg-surface rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-text-primary truncate">{player.name}</h4>
                    <p className="text-sm text-text-muted truncate">{player.team} • {player.position}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default" size="sm">{player.nationality}</Badge>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card variant="elevated" padding="md">
          <CardHeader>
            <CardTitle>Player Search & Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <NoDataEmptyState
              title="Player search coming soon"
              description="Search players by name, filter by team, position, nationality, or compare two players side-by-side"
            />
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}