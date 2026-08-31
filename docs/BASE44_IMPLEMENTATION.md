# Base44 Implementation Brief — ATLAS V1

Build ATLAS as a production-oriented multilingual football ecosystem. Preserve and extend existing Atlas Portal Player functionality rather than deleting it.

## Product
ATLAS — Your Football World. One Place.

## Locales
English, Spanish, French, Arabic. Arabic must be full RTL.

## Roles
Player, Parent, Scout, Club Admin, Academy Admin, Atlas Staff, Super Admin.

## Modules
Authentication; Player Portal; Family Portal; Scout Portal; Club Portal; Academy Portal; Atlas Search; Atlas Match; Opportunities; Trials; Development; Scout Reports; Atlas Score; Highlights; Documents; Calendar; Messaging; Notifications; Atlas CRM; Admin; Audit/Security.

## Design system
Background #0B0B0B; cards #151515; gold #C8A14A; white #F5F5F5; grey #6B7280. Montserrat headings and Poppins body. Premium, minimal, dark sports-tech. Responsive/mobile-first.

## Player
Dashboard: profile completion, Atlas Score, confidence, next event, objectives, reports, opportunities, messages.
Profile: personal identity, football attributes, positions, foot, physical data, career history, organization, bio, visibility, verification.
Atlas Score: Technical 30%, Decision 20%, Physical 20%, Mentality 20%, Discipline 10%; show confidence and report count.

## Search
One global search entry point. Search players, clubs, academies, scouts, opportunities, trials and events. Natural language examples: `U19 left footed centre backs in Spain`. Show categories, filters, verification badges and match reasons.

## Matching
Explainable player-to-club/academy matching with percentage, confidence, reasons and missing data.

## Scout
Authorized player search, watchlist, assignments, reports and opportunities.

## Club / Academy
Profile, recruitment needs, opportunities, trials, candidate pipeline and messages.

## Opportunities
Trials, academy programs, camps, showcases, exchanges, scholarships and club opportunities. Application workflow: Applied -> Reviewed -> Shortlisted -> Invited -> Completed -> Accepted/Rejected.

## CRM
Player and organization pipelines, notes, tasks, contacts, opportunity tracking and audit logs.

## Security
Server-side authorization. Explicit parent-child relationships for minors. Private media/documents denied by default. Consent, visibility, audit logs and data export/deletion.

## Data
Use `docs/DATABASE_SCHEMA.md`. Reuse existing Base44 entities when equivalent entities exist; extend/migrate rather than duplicate.

## UX
Every module requires loading, empty, error and permission-aware states. Never present demo records as real data.
