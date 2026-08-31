import type { Base44Adapter } from './base44Adapter';
import type { AtlasSession } from './session';
import { assertAuthenticated } from './session';

export async function loadPlayerDashboard(api:Base44Adapter,session:AtlasSession){const s=assertAuthenticated(session);return Promise.all([api.list('players',{ownerId:s.userId}),api.list('opportunities',{status:'open'}),api.list('trials',{playerId:s.userId}),api.list('notifications',{userId:s.userId,unread:true})])}
export async function loadScoutDashboard(api:Base44Adapter,session:AtlasSession){const s=assertAuthenticated(session);return Promise.all([api.list('scoutProfiles',{userId:s.userId}),api.list('watchlistItems',{scoutId:s.userId}),api.list('scoutAssignments',{scoutId:s.userId,status:'open'}),api.list('notifications',{userId:s.userId,unread:true})])}
export async function loadOrganizationDashboard(api:Base44Adapter,session:AtlasSession){const s=assertAuthenticated(session);return Promise.all([api.list('organizations',{ownerId:s.userId}),api.list('recruitmentNeeds',{ownerId:s.userId,status:'open'}),api.list('crmDeals',{ownerId:s.userId}),api.list('trials',{organizationOwnerId:s.userId}),api.list('notifications',{userId:s.userId,unread:true})])}
export async function loadStaffDashboard(api:Base44Adapter,session:AtlasSession){const s=assertAuthenticated(session);return Promise.all([api.list('verificationCases',{status:'pending'}),api.list('auditEvents',{limit:25}),api.list('opportunities',{status:'open'}),api.list('notifications',{userId:s.userId,unread:true})])}
