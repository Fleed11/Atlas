import type { Base44Adapter } from './base44Adapter';
import type { AtlasSession } from './session';
import { assertAuthenticated } from './session';

export interface OpportunityFilters {query?:string;country?:string;position?:string;ageMin?:number;ageMax?:number;organizationType?:'club'|'academy';}
export async function searchOpportunities(api:Base44Adapter,session:AtlasSession,filters:OpportunityFilters={}){const s=assertAuthenticated(session);return api.action('searchOpportunities',{actorId:s.userId,filters})}
export async function getOpportunity(api:Base44Adapter,session:AtlasSession,id:string){const s=assertAuthenticated(session);return api.get('opportunities',id).then(data=>({data,viewerId:s.userId}))}
export async function applyToOpportunity(api:Base44Adapter,session:AtlasSession,playerId:string,opportunityId:string,message?:string){const s=assertAuthenticated(session);return api.action('createApplication',{actorId:s.userId,playerId,opportunityId,message})}
export async function listMyApplications(api:Base44Adapter,session:AtlasSession,playerId:string){const s=assertAuthenticated(session);return api.list('applications',{playerId,viewerId:s.userId})}
