# Atlas Security Model V1

## Authentication
All protected application actions require an authenticated session. Session identity is the source of truth for user ownership.

## Authorization
Use role-based permissions plus object-level checks. A role alone never grants access to another user's private object.

## Minor protection
A parent may access a minor player's protected data only through a verified relationship and applicable consent state. Staff/scout/organization access is scoped to authorized data.

## Media/documents
Default visibility is private. Signed/private file delivery should be used for sensitive assets. Never expose storage URLs directly when the underlying asset is private.

## Audit
Log sensitive profile changes, document verification, scout report creation/edits, application status changes, role changes and administrative actions.

## Search privacy
Search indexes must exclude private fields and private assets. Ranking must not leak hidden data through snippets, counts or suggestions.
