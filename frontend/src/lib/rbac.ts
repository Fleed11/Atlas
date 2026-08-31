import type { Role } from './types';
export type Permission = 'profile:read'|'profile:write'|'players:read'|'players:write'|'reports:read'|'reports:write'|'opportunities:read'|'opportunities:write'|'applications:write'|'recruitment:write'|'crm:read'|'crm:write'|'admin:read'|'admin:write';
const permissions:Record<Role,Permission[]>={
 player:['profile:read','profile:write','players:read','reports:read','opportunities:read','applications:write'],
 parent:['profile:read','players:read','reports:read','opportunities:read','applications:write'],
 scout:['profile:read','players:read','reports:read','reports:write','opportunities:read'],
 club_admin:['profile:read','players:read','reports:read','opportunities:read','opportunities:write','recruitment:write','crm:read','crm:write'],
 academy_admin:['profile:read','players:read','reports:read','opportunities:read','opportunities:write','recruitment:write','crm:read','crm:write'],
 atlas_staff:['profile:read','profile:write','players:read','players:write','reports:read','reports:write','opportunities:read','opportunities:write','recruitment:write','crm:read','crm:write','admin:read'],
 super_admin:['profile:read','profile:write','players:read','players:write','reports:read','reports:write','opportunities:read','opportunities:write','applications:write','recruitment:write','crm:read','crm:write','admin:read','admin:write']
};
export function can(role:Role, permission:Permission){return permissions[role].includes(permission)}
export function getPermissions(role:Role){return [...permissions[role]]}
