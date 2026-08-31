# Atlas CRM V1

CRM is the relationship and execution layer connecting players, families, scouts, clubs, academies and opportunities.

## Core objects
- Contacts
- Activities: notes, calls, messages, emails, meetings, tasks and status changes
- Tasks with assignee, due date, priority and status
- Recruitment deals linking player + organization + opportunity

## Pipeline
Discovery → Shortlist → Contact → Trial → Offer → Won/Lost.

Probability defaults are stage guidance, not financial forecasts: 10/25/40/60/80/100/0.

## Weighted pipeline
Weighted value = deal value × probability. Values are optional and should not be shown if absent.

## Communications
In-app messaging is the canonical Atlas channel. Email and WhatsApp are optional integrations. External integrations must respect consent, permissions and audit rules.

## Notifications
Application, trial, message, report, task and system events can create notifications. Unread state is per user.

## Security
CRM access is scoped by role and object relationship. Notes and contact details are not globally searchable unless their visibility permits it.
