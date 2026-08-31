# Atlas Trials & Calendar V1

## Calendar
Atlas events share a normalized model: event type, start/end, timezone, location, participants and status. Store timestamps in UTC where the backend permits it and retain the event timezone for display.

Supported event types: trial, match, training, camp, meeting, scouting.

## Trials
Trial lifecycle:
`Scheduled → Confirmed → Completed`

Cancellation is available before completion. A confirmed trial may also end as `No Show`.

Outcome is separate from attendance/status: Pending, Positive, Negative, Follow Up.

## Notifications
Trial creation/status changes and calendar events can create user notifications. Notifications are user-scoped and support read/unread state and deep links.

## Timezones
Never infer a user's timezone from browser locale alone. Persist event timezone. Display local time while preserving the original timezone in details.

## Integrations
Google/Apple/Outlook calendar integrations can be added later through provider adapters. The Atlas event model remains canonical.
