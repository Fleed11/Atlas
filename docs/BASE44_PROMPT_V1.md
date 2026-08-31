# MASTER PROMPT — BASE44 / ATLAS V1

You are implementing ATLAS, a premium global football ecosystem. Use the repository documentation as the source of truth.

## Non-negotiable product behavior
- Do not remove existing Atlas Portal Player functionality when extending the app.
- Build responsive web UI for desktop, tablet and mobile.
- Support English, Spanish, French and Arabic from first launch.
- Arabic requires true RTL layout using logical CSS properties.
- Never hard-code user-facing strings; use translation keys.
- Never use fake records in production views without an explicit demo mode.
- Enforce authorization on the backend/server action layer, not only in the UI.
- Private player documents/media are denied by default.
- Parent access to minors requires an explicit verified relationship.
- Verification badges must reflect actual verification state.

## Roles
Player, Parent, Scout, Club Admin, Academy Admin, Atlas Staff, Super Admin.

## Build order
1. Auth + session + RBAC.
2. Core entities from DATABASE_SCHEMA.md.
3. Player profile and media.
4. Parent/family relationship and consent.
5. Organization profiles and recruitment needs.
6. Opportunities + applications + trials.
7. Scout reports + objectives + Atlas Score.
8. Atlas Search with filters and natural-language query normalization.
9. Atlas Match with explainable score/confidence.
10. Messaging + notifications + calendar.
11. CRM + admin + audit logs.
12. Production QA, accessibility, error/loading/empty states.

## Atlas Score
Technical 30%, Decision 20%, Physical 20%, Mentality 20%, Discipline 10%. Display score, confidence and number of underlying reports. Do not imply an objective truth: it is an Atlas assessment metric.

## Atlas Search
One search box across Players, Clubs, Academies, Scouts, Opportunities, Trials and Events. Support football vocabulary and multilingual aliases. Return relevance, verification state and reason for match. Search must be permission-aware.

## Atlas Match
Match players against recruitment needs/opportunities. Return score, confidence, reasons, missing information and warnings. Missing data lowers confidence; it must not be treated as a match.

## UX
Visual identity: background #0B0B0B, cards #151515, gold #C8A14A, white #F5F5F5, grey #6B7280. Typography: Montserrat for headings and Poppins for body. Premium football/sports-tech aesthetic. Use subtle transitions and gold accents without excessive effects.

## Definition of done
A feature is not complete until it has: permission rules, validation, loading state, empty state, error state, responsive layout, translations in all four locales, audit behavior where relevant, and tests for its core business logic.
