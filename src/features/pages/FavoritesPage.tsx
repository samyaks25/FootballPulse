import { PageContainer, SectionHeader } from "../../components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/common/Card";
import { EmptyState, NoFavouritesEmptyState } from "../../components/feedback/EmptyState";
import { Button } from "../../components/common/Button";

export function FavoritesPage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Favorites"
        subtitle="Your pinned teams, leagues, and matches"
      />
      <div className="space-y-6">
        <Card variant="outlined" padding="md">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <CardTitle>Favorite Teams</CardTitle>
            <Button variant="outline" size="sm">
              Add Team
            </Button>
          </CardHeader>
          <CardContent>
            <NoFavouritesEmptyState />
          </CardContent>
        </Card>

        <Card variant="outlined" padding="md">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <CardTitle>Favorite Leagues</CardTitle>
            <Button variant="outline" size="sm">
              Add League
            </Button>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              }
              title="No Favorite Leagues"
              description="Pin leagues to see their fixtures and standings here"
            />
          </CardContent>
        </Card>

        <Card variant="outlined" padding="md">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <CardTitle>Favorite Matches</CardTitle>
            <Button variant="outline" size="sm">
              Add Match
            </Button>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              }
              title="No Favorite Matches"
              description="Pin important matches to track them easily"
            />
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}