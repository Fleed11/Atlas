# Atlas Search V1

Atlas Search is the global football search layer. It searches Atlas structured data first and may later incorporate indexed public web data.

## Query pipeline
1. Detect language.
2. Normalize football terms.
3. Extract entities and constraints.
4. Search structured Atlas records.
5. Optionally search indexed public sources.
6. Rank by relevance, verification and freshness.
7. Explain why each result matched.

Example: `U19 left footed centre backs in Spain` becomes:
- age_group = U19
- position = CB
- preferred_foot = LEFT
- country = Spain

Categories: Players, Clubs, Academies, Scouts, Opportunities, Trials, Events.

Never label public/unverified information as Atlas-verified.
