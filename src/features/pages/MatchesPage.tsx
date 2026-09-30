import { PageContainer, SectionHeader } from "../../components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";
import { NoDataEmptyState } from "../../components/feedback/EmptyState";
import { Button } from "../../components/common/Button";

export function MatchesPage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Matches"
        subtitle="Browse all fixtures by date and competition"
        action={
          <div className="flex items-center gap-2">
            <Badge variant="upcoming" size="sm">NS</Badge>
            <Badge variant="live" size="sm" dot>LIVE</Badge>
            <Badge variant="finished" size="sm">FT</Badge>
          </div>
        }
      />
      <div className="space-y-6">
        <Card variant="elevated" padding="md">
          <CardHeader>
            <CardTitle>Today's Fixtures</CardTitle>
          </CardHeader>
          <CardContent>
            <NoDataEmptyState
              title="No matches scheduled for today"
              description="Select a different date to view fixtures"
            />
          </CardContent>
        </Card>

        <Card variant="outlined" padding="md">
          <CardHeader>
            <CardTitle>Quick Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {["All", "Live", "Upcoming", "Finished", "Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1", "Champions League"].map((filter) => (
                <Button key={filter} variant="outline" size="sm">
                  {filter}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}