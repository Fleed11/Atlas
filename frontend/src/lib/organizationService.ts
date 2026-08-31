import type { Base44Adapter } from './base44Adapter';
import type { AtlasSession } from './session';
import { assertRole } from './session';
import type { Role } from './types';

export interface OrganizationInput{name:string;type:'club'|'academy';country:string;city?:string;website?:string;description?:string;}
export interface RecruitmentNeedInput{organizationId:string;title:string;position:string;ageMin?:number;ageMax?:number;countryPreference?:string;description?:string;status:'draft'|'open'|'closed';}
const orgRoles:Role[]=['club_admin','academy_admin','atlas_staff','super_admin'];
export function assertOrganizationRole(session:AtlasSession){return assertRole(session,orgRoles)}
export async function createOrganization(api:Base44Adapter,session:AtlasSession,input:OrganizationInput){const s=assertOrganizationRole(session);return api.action('createOrganization',{actorId:s.userId,input})}
export async function updateOrganization(api:Base44Adapter,session:AtlasSession,id:string,input:Partial<OrganizationInput>){const s=assertOrganizationRole(session);return api.action('updateOrganization',{actorId:s.userId,organizationId:id,input})}
export async function createRecruitmentNeed(api:Base44Adapter,session:AtlasSession,input:RecruitmentNeedInput){const s=assertOrganizationRole(session);return api.action('createRecruitmentNeed',{actorId:s.userId,input})}
export async function listCandidates(api:Base44Adapter,session:AtlasSession,organizationId:string){const s=assertOrganizationRole(session);return api.action('listCandidates',{actorId:s.userId,organizationId})}
