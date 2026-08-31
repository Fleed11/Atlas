# Atlas Recruitment Engine V1

## Purpose
Turn an organization's recruitment need into an explainable candidate pipeline.

## Flow
Recruitment Need → Atlas Search → Atlas Match → Candidate → Shortlist → Contact → Interview → Trial → Offer → Signed.

## Candidate record
Store player, organization, opportunity, stage, match score, confidence, owner, notes, next action and timestamps.

## Ranking
Primary ranking uses 70% match score + 30% confidence. Ranking is a discovery aid, not an automatic signing decision.

## Stage rules
- Discovered → Shortlisted / Rejected
- Shortlisted → Contacted / Rejected
- Contacted → Interview / Trial / Rejected
- Interview → Trial / Offer / Rejected
- Trial → Offer / Rejected
- Offer → Signed / Rejected
- Rejected → Discovered (re-open)
- Signed → terminal

Every transition must be authorized and audited. Organizations only see candidates they are authorized to access.

## Next actions
Every active candidate can have a next action and due timestamp. This becomes the bridge to Atlas CRM, calendar and notifications.
