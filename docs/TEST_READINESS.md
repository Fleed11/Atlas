# Atlas Test Readiness

## Current state
The domain architecture and role workspace configuration are implemented as framework-neutral code. The repository is **not yet production-ready** and should not be presented as a fully working Base44 application until persistence, authentication, backend authorization and UI wiring are connected and tested.

## Test-ready gate
Atlas is ready for a first functional alpha when all of the following are true:
1. Base44 entities exist for the canonical collections.
2. Authenticated sessions return a real user and role.
3. Server-side authorization blocks cross-user/private access.
4. Player, Organization and Scout CRUD persists successfully.
5. Search and Match operate on persisted records.
6. Application and Trial state machines persist valid transitions and reject invalid ones.
7. CRM and Notifications persist and display correctly.
8. Parent/minor consent is enforced server-side.
9. All four locales render without missing keys and RTL works for Arabic.
10. A smoke-test suite passes for the critical flows below.

## Critical smoke tests
- Player signup/login → profile → highlight → opportunity → application.
- Parent relationship verification → consent → protected player view.
- Scout search → watchlist → report → shortlist.
- Club recruitment need → Atlas Search → Match → candidate pipeline → trial.
- Trial confirmation → calendar event → notification → completion/outcome.
- Atlas Staff verification → audit event.
- Super Admin role management → audit event.
- Private player/document data cannot appear in unauthorized search/API results.

## How to test once the gate passes
Use a staging Base44 environment with test accounts for each role. Seed non-production players, clubs, academies and scouts. Execute the smoke tests on desktop and mobile, then verify Arabic RTL and all locale switches. Only after this should production credentials/integrations be enabled.
