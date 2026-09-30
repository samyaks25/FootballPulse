import { PageContainer, SectionHeader } from "../../components/layout/PageContainer";
import { Card, CardContent } from "../../components/common/Card";
import { NoLiveMatchesEmptyState } from "../../components/feedback/EmptyState";

export function LivePage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Live"
        subtitle="All matches currently in play"
      />
      <div className="space-y-6">
        <Card variant="elevated" padding="md">
          <CardContent>
            <NoLiveMatchesEmptyState />
          </CardContent>
        </Card>

        <Card variant="outlined" padding="md">
          <CardContent className="space-y-3">
            <h3 className="font-semibold text-text-primary">Live Match Tracker</h3>
            <p className="text-text-secondary text-sm">
              When matches are live, they will appear here with real-time updates including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm ml-4">
              <li>Live score and minute-by-minute updates</li>
              <li>Match events (goals, cards, substitutions)</li>
              <li>Team lineups and formations</li>
              <li>Match statistics and possession</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}