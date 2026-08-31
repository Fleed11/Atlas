# Atlas API Contract V1

Base44 actions/functions should expose these application operations. Exact Base44 transport can be selected during implementation; these contracts are provider-neutral.

## Auth
`GET /me` -> user + role + locale + permissions

## Players
`GET /players?query=&position=&age_min=&age_max=&country=`
`GET /players/:id`
`PATCH /players/:id`
`POST /players/:id/media`

## Search
`POST /search` body `{ query, category?, filters?, locale }` -> grouped results with `relevance`, `verified`, `reasons`.

## Match
`POST /match/player-opportunities` body `{ player_id, opportunity_ids? }`
`POST /match/player-recruitment-needs` body `{ player_id, need_ids? }`

## Opportunities
`GET /opportunities`
`GET /opportunities/:id`
`POST /opportunities`
`POST /opportunities/:id/applications`
`PATCH /applications/:id`

## Reports
`GET /players/:id/reports`
`POST /players/:id/reports`

## Development
`GET /players/:id/objectives`
`POST /players/:id/objectives`
`PATCH /objectives/:id`

## Organizations
`GET /organizations/:id`
`PATCH /organizations/:id`
`GET /organizations/:id/recruitment-needs`
`POST /organizations/:id/recruitment-needs`

## Rules
Every operation must enforce RBAC and object-level authorization. Search results must respect profile/media visibility. Writes must generate audit events for sensitive entities.
