import type { Base44Adapter } from './base44Adapter';
import type { AtlasSession } from './session';
import { assertAuthenticated } from './session';

export interface PlayerProfileInput {firstName:string;lastName:string;dateOfBirth?:string;country?:string;city?:string;position?:string;secondaryPosition?:string;preferredFoot?:'left'|'right'|'both';heightCm?:number;weightKg?:number;bio?:string;}
export async function getMyPlayer(api:Base44Adapter,session:AtlasSession){const s=assertAuthenticated(session);return api.getCurrentUser().then(()=>api.list('players',{ownerId:s.userId,page:1,pageSize:1}))}
export async function updateMyPlayer(api:Base44Adapter,session:AtlasSession,playerId:string,input:PlayerProfileInput){const s=assertAuthenticated(session);return api.action('updatePlayerProfile',{actorId:s.userId,playerId,input})}
export async function uploadHighlight(api:Base44Adapter,session:AtlasSession,playerId:string,fileId:string){const s=assertAuthenticated(session);return api.action('attachPlayerMedia',{actorId:s.userId,playerId,fileId,type:'highlight'})}
