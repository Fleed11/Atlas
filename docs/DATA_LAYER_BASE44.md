# Atlas Data Layer / Base44 Integration V1

## Canonical collections
Users, Players, FamilyRelationships, Consents, Organizations, RecruitmentNeeds, Opportunities, Applications, Trials, Events, ScoutProfiles, ScoutReports, WatchlistItems, Objectives, MediaAssets, Documents, Conversations, Messages, Notifications, CRMContacts, CRMActivities, CRMTasks, CRMDeals, VerificationCases, AuditEvents.

## Identity
`Users.id` is the authenticated principal. Every protected record stores an owner/subject relationship where required. Never trust a client-supplied user ID for ownership.

## References
Use stable IDs for relationships. Avoid duplicating sensitive profile data across collections. Resolve display data through authorized reads.

## Required server actions
- `getCurrentUser`
- `authorize`
- `searchAtlas`
- `calculateMatch`
- `createApplication`
- `transitionApplication`
- `createTrial`
- `transitionTrial`
- `createScoutReport`
- `calculateAtlasScore`
- `createConsent`
- `revokeConsent`
- `createAuditEvent`

## Persistence rules
Writes are validated server-side. Every state-machine transition is validated against the allowed transition map. Sensitive writes create an AuditEvent. File access uses authorization-aware delivery.

## Search indexing
Index only fields approved for discovery. Exclude private documents, private contact details, consent records and internal notes. Index updates must happen after authorized writes.

## Base44 implementation
Map each collection to the equivalent Base44 data entity. Map server actions to backend functions/workflows. Keep the domain services in `frontend/src/lib` framework-neutral so they can be reused by tests and adapters.
