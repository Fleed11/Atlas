import type { Base44Adapter } from './base44Adapter';
import type { AtlasSession } from './session';
import { assertRole } from './session';
import type { Role } from './types';

const scoutRoles:Role[]=['scout','atlas_staff','super_admin'];
const orgRoles:Role[]=['club_admin','academy_admin','atlas_staff','super_admin'];

export interface MatchRequest{opportunityId:string;playerId?:string;limit?:number;}
export interface ScoutReportInput{playerId:string;organizationId?:string;rating:number;positionFit:number;technical:number;decisionMaking:number;physical:number;mental:number;summary:string;recommendation:'monitor'|'shortlist'|'trial'|'reject';}
export async function atlasMatch(api:Base44Adapter,session:AtlasSession,request:MatchRequest){const s=assertRole(session,[...scoutRoles,...orgRoles]);return api.action('calculateMatch',{actorId:s.userId,...request})}
export async function createScoutReport(api:Base44Adapter,session:AtlasSession,input:ScoutReportInput){const s=assertRole(session,scoutRoles);return api.action('createScoutReport',{actorId:s.userId,input})}
export async function shortlistCandidate(api:Base44Adapter,session:AtlasSession,organizationId:string,playerId:string,opportunityId:string,matchScore?:number){const s=assertRole(session,orgRoles);return api.action('shortlistCandidate',{actorId:s.userId,organizationId,playerId,opportunityId,matchScore})}
export async function listOpportunityCandidates(api:Base44Adapter,session:AtlasSession,organizationId:string,opportunityId:string){const s=assertRole(session,orgRoles);return api.action('listCandidates',{actorId:s.userId,organizationId,opportunityId})}
