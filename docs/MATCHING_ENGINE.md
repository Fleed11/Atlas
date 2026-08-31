# Atlas Match V1

Explainable weighted matching between a player and a club/academy recruitment need.

- Position: 25%
- Age: 15%
- Level: 10%
- Location: 10%
- Technical profile: 10%
- Physical profile: 10%
- Availability: 10%
- Requirements: 10%

Return:
- `match_score`
- `confidence`
- `matching_reasons[]`
- `missing_information[]`
- `warnings[]`

Missing data must reduce confidence rather than silently become a perfect match.
