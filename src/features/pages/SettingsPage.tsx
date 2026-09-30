import { PageContainer, SectionHeader } from "../../components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/common/Card";
import { Button } from "../../components/common/Button";
import { Badge } from "../../components/common/Badge";

export function SettingsPage() {
  return (
    <PageContainer>
      <SectionHeader
        title="Settings"
        subtitle="Configure your FootballPulse experience"
      />
      <div className="space-y-6">
        <Card variant="outlined" padding="md">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize how FootballPulse looks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-text-primary">Theme</h4>
                <p className="text-sm text-text-muted">Choose your preferred color scheme</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Dark</Button>
                <Button variant="primary" size="sm">System</Button>
                <Button variant="outline" size="sm">Light</Button>
              </div>
            </div>
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <div>
                <h4 className="font-medium text-text-primary">Compact Mode</h4>
                <p className="text-sm text-text-muted">Reduce spacing for more content</p>
              </div>
              <Button variant="outline" size="sm">
                Off
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card variant="outlined" padding="md">
          <CardHeader>
            <CardTitle>Data & Cache</CardTitle>
            <CardDescription>Manage data storage and API usage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-text-primary">Cache Size</h4>
                <p className="text-sm text-text-muted">Approximate local storage used</p>
              </div>
              <Badge variant="info">~12 MB</Badge>
            </div>
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <div>
                <h4 className="font-medium text-text-primary">Clear Cache</h4>
                <p className="text-sm text-text-muted">Remove all cached data</p>
              </div>
              <Button variant="outline" size="sm" className="text-warning hover:text-warning">
                Clear Cache
              </Button>
            </div>
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <div>
                <h4 className="font-medium text-text-primary">Mock Mode</h4>
                <p className="text-sm text-text-muted">Use sample data instead of live API</p>
              </div>
              <Badge variant="warning">Enabled</Badge>
            </div>
          </CardContent>
        </Card>

        <Card variant="outlined" padding="md">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Configure match alerts and updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-text-primary">Live Match Alerts</h4>
                <p className="text-sm text-text-muted">Get notified when favorites play</p>
              </div>
              <Button variant="outline" size="sm">
                Off
              </Button>
            </div>
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <div>
                <h4 className="font-medium text-text-primary">Goal Notifications</h4>
                <p className="text-sm text-text-muted">Alert on goals for favorite teams</p>
              </div>
              <Button variant="outline" size="sm">
                Off
              </Button>
            </div>
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <div>
                <h4 className="font-medium text-text-primary">Kickoff Reminders</h4>
                <p className="text-sm text-text-muted">15 minutes before match start</p>
              </div>
              <Button variant="outline" size="sm">
                Off
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card variant="outlined" padding="md">
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>Application information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">Version</span>
              <span className="text-text-primary font-mono">0.1.0</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">Build</span>
              <span className="text-text-primary font-mono">Development</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">Framework</span>
              <span className="text-text-primary">Tauri 2 + React 19 + TypeScript</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">Styling</span>
              <span className="text-text-primary">Tailwind CSS v4</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}