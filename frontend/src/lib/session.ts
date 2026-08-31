import type { Locale, Role } from './types';
export interface AtlasSession {userId:string;role:Role;locale:Locale;authenticatedAt:string;expiresAt?:string;}
export function createSession(userId:string,role:Role,locale:Locale='en'):AtlasSession{return {userId,role,locale,authenticatedAt:new Date().toISOString()}}
export function isAuthenticated(session:AtlasSession|null|undefined){return Boolean(session?.userId&&session?.role)}
export function assertAuthenticated(session:AtlasSession|null|undefined):AtlasSession{if(!isAuthenticated(session))throw new Error('Authentication required');return session}
export function assertRole(session:AtlasSession|null|undefined,roles:Role[]){const s=assertAuthenticated(session);if(!roles.includes(s.role))throw new Error('Forbidden');return s}
