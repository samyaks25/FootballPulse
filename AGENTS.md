# FootballPulse Development Rules

Architectural Reference: [footballpulse_technical_plan.md](./footballpulse_technical_plan.md)

## Architecture
- Follow the architecture defined in footballpulse_technical_plan.md.
- Keep frontend, backend, API, database, and domain logic separated.
- Do not introduce unnecessary dependencies or frameworks.

## TypeScript / React
- Use TypeScript strict mode.
- Do not use `any` unless there is a documented reason.
- Use React functional components.
- Keep reusable UI components separate from feature-specific components.
- Keep API/data-fetching logic outside presentation components.
- Prefer strongly typed domain models.

## Tauri / Rust
- Keep native/system functionality in the Rust/Tauri layer.
- Do not expose API credentials directly to React.
- Keep Rust modules focused and testable.

## API
- Do not make unnecessary API requests.
- Respect API-Football rate limits.
- Prefer cached data where appropriate.
- Use mock data during UI development when possible.
- Handle loading, errors, empty responses, and stale data.

## Database
- Keep SQLite access isolated from the UI.
- Use migrations/schema changes carefully.
- Do not store secrets in SQLite.

## Security
- Never commit API keys, tokens, passwords, or secrets.
- Never modify .gitignore to allow secrets into Git.
- Treat all external API data as untrusted input.

## Code Quality
- Avoid duplicated logic.
- Do not rewrite unrelated files.
- Do not create unnecessary abstraction layers.
- Run type checking/build/tests after meaningful changes.
- Fix errors before moving to the next feature.

## UI
- FootballPulse must have its own visual identity.
- Do not copy FotMob or SofaScore branding, logos, proprietary layouts, or exact UI.
- Build reusable loading, error, and empty states.
- Maintain consistent spacing, typography, and interaction patterns.

## AI Development
- Implement one feature or module at a time.
- Inspect the existing code before modifying it.
- Do not regenerate the entire project unnecessarily.
- Explain significant architectural changes before making them.
