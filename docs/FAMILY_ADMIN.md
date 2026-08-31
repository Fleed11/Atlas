# Atlas Family & Admin Core V1

## Family
A parent/legal guardian is represented through an explicit player relationship. Verification is mandatory before protected access.

Consents are granular by purpose: profile, media, scouting, contact, trial and international transfer. Consent is scoped, timestamped, revocable and optionally expires.

Protected access requires both a verified relationship and an active consent for the requested purpose.

## Atlas Staff / Admin
Atlas Staff can review verification cases and operate authorized CRM/player/recruitment functions. Super Admin additionally manages roles.

Verification lifecycle:
`Pending → Verified / Rejected`
`Verified → Suspended`
`Rejected → Pending`
`Suspended → Pending`

## Audit
Verification, role changes, consent changes and denied access must create auditable events.

## Privacy principle
Do not expose private player information merely because a parent relationship exists; purpose-specific consent and authorization remain required.
