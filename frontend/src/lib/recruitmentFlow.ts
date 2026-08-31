import type { Base44Adapter } from './base44Adapter';
import type { AtlasSession } from './session';
import { assertRole } from './session';
import type { Role } from './types';

export type CandidateStage='discovered'|'shortlisted'|'contacted'|'trial'|'offer'|'signed'|'rejected';
const organizationRoles:Role[]=['club_admin','academy_admin','atlas_staff','super_admin'];
export function canMoveCandidate(from:CandidateStage,to:CandidateStage){const allowed:Record<CandidateStage,CandidateStage[]>={discovered:['shortlisted','rejected'],shortlisted:['contacted','rejected'],contacted:['trial','rejected'],trial:['offer','rejected'],offer:['signed','rejected'],signed:[],rejected:[]};return allowed[from].includes(to)}
export async function transitionCandidate(api:Base44Adapter,session:AtlasSession,input:{candidateId:string;from:CandidateStage;to:CandidateStage;note?:string}){const s=assertRole(session,organizationRoles);if(!canMoveCandidate(input.from,input.to))throw new Error(`Invalid candidate transition: ${input.from} -> ${input.to}`);return api.action('transitionCandidate',{actorId:s.userId,...input})}
