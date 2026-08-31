# Atlas V1 RBAC

Roles: `player`, `parent`, `scout`, `club_admin`, `academy_admin`, `atlas_staff`, `super_admin`.

| Capability | Player | Parent | Scout | Club | Academy | Atlas Staff | Super Admin |
|---|---|---|---|---|---|---|---|
| Own profile | RW | R linked | R authorized | R authorized | R authorized | RW | RW |
| Apply to opportunity | RW | assist | - | - | - | RW | RW |
| Scout reports | R own | R linked | RW own | R authorized | R authorized | RW | RW |
| Recruitment needs | - | - | R | RW | RW | RW | RW |
| Opportunities | R | R linked | R | RW | RW | RW | RW |
| User administration | - | - | - | - | - | RW | RW |

Security rule: hiding a button in the frontend is never authorization. Every protected read/write must be checked server-side.

For minors, parent access must be based on an explicit verified relationship and consent state. Private documents and media are denied by default.
