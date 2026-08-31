# ATLAS V1 Architecture

```text
ATLAS
├── Atlas Search
├── Atlas Portal
│   ├── Player
│   ├── Parent
│   ├── Scout
│   ├── Club
│   └── Academy
├── Atlas Match
├── Atlas Opportunities
├── Atlas CRM
├── Atlas AI
└── Admin / Security
```

## Core data graph
Player ↔ Scout Report ↔ Scout
Player ↔ Opportunity ↔ Club/Academy
Player ↔ Trial ↔ Club/Academy
Player ↔ Parent
Organization ↔ Recruitment Need ↔ Match ↔ Player

## Principles
1. Server-side RBAC on every protected operation.
2. Explicit parent-child relationships for minors.
3. Least-privilege access to private media/documents.
4. Atlas-verified data must be distinct from public/unverified data.
5. All UI strings use translation keys.
6. Arabic is full RTL, not a separate application.
7. Matching is explainable and includes confidence/missing-data indicators.
