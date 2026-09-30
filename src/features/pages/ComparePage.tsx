import { PageContainer, SectionHeader } from "../../components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/common/Card";
import { Button } from "../../components/common/Button";

export function ComparePage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Compare"
        subtitle="Side-by-side player and team comparison"
      />
      <div className="space-y-6">
        <Card variant="outlined" padding="md">
          <CardHeader>
            <CardTitle>Player Comparison</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-text-secondary">Player A</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for player..."
                    className="w-full pl-10 pr-4 py-2 bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-text-secondary">Player B</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for player..."
                    className="w-full pl-10 pr-4 py-2 bg-surface border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
            </div>
            <Button variant="primary" className="w-full md:w-auto" disabled>
              Compare Players
            </Button>
          </CardContent>
        </Card>

        <Card variant="elevated" padding="md">
          <CardHeader>
            <CardTitle>Comparison Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-surface rounded-lg border border-border">
                <h4 className="font-medium text-text-primary mb-2">Radar Chart</h4>
                <p className="text-sm text-text-secondary">Visualize player attributes on a radar/spider chart</p>
              </div>
              <div className="p-4 bg-surface rounded-lg border border-border">
                <h4 className="font-medium text-text-primary mb-2">Stat Table</h4>
                <p className="text-sm text-text-secondary">Detailed side-by-side statistical comparison</p>
              </div>
              <div className="p-4 bg-surface rounded-lg border border-border">
                <h4 className="font-medium text-text-primary mb-2">Team Comparison</h4>
                <p className="text-sm text-text-secondary">Compare squads, form, and head-to-head records</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}