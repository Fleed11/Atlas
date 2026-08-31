# Atlas Alpha Build Plan

The next milestone is a functional Alpha, not a production release.

## Implemented in this layer
- Role-specific workspace registry
- Authenticated role → workspace routing
- Player dashboard data loader
- Scout dashboard data loader
- Club/Academy dashboard data loader
- Atlas Staff dashboard data loader
- Framework-neutral Base44 adapter remains the persistence boundary

## Remaining before first real test
1. Build/finish the React pages that consume these workspace loaders.
2. Create the Base44 entities listed in `DATA_LAYER_BASE44.md`.
3. Configure Base44 authentication and real role claims.
4. Implement server-side authorization for every protected query/action.
5. Connect uploads/storage for media and documents.
6. Wire the four-language UI and Arabic RTL.
7. Seed a controlled staging dataset.
8. Run the smoke tests in `TEST_READINESS.md`.
9. Fix all blocking defects before inviting external testers.

## Definition of first-test ready
The first Alpha is test-ready only when a tester can sign in, land in the correct role workspace, read/write authorized data, complete one end-to-end recruitment flow, receive notifications, and verify that unauthorized data is inaccessible.

## Current estimate
The GitHub codebase is not itself the running Base44 deployment. The remaining work depends on the actual Base44 project/environment and its authentication/data APIs. Therefore no honest calendar date can be promised until those are connected.
