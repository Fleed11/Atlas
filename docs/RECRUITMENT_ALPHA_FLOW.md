# Atlas Recruitment Alpha Flow

This milestone closes the domain loop between discovery, scouting, matching and club review.

## Flow
Player/Scout discovery → Atlas Match → Candidate → Shortlist → Contact → Trial → Offer → Signed/Rejected.

## Permissions
- Scouts can calculate matches and create scout reports.
- Clubs/Academies and authorized Atlas staff can review candidates and shortlist them.
- Candidate stage transitions are validated server-side through the action layer.
- Super Admin retains administrative authority but does not bypass audit requirements.

## Match
`calculateMatch` returns match evidence for the requesting authorized actor. A score is a decision-support signal, not an automatic hiring decision.

## Scout report
Reports capture rating, position fit, technical, decision making, physical, mental, summary and recommendation.

## Candidate pipeline
Allowed transitions are explicit. Invalid transitions are rejected before persistence.
