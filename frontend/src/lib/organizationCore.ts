import type { Opportunity } from './types';

export type OrganizationType='club'|'academy';
export interface RecruitmentNeed { id:string; organizationId:string; position:string; ageMin:number; ageMax:number; countryPreference?:string; level?:string; preferredFoot?:'left'|'right'|'both'; status:'open'|'paused'|'closed'; requirements:string[]; }
export interface Organization { id:string; name:string; type:OrganizationType; country:string; city:string; verified:boolean; description?:string; internationalProgram:boolean; }
export interface Candidate { playerId:string; playerName:string; position:string; age:number; atlasScore?:number; matchScore:number; confidence:number; status:'discovered'|'shortlisted'|'contacted'|'trial'|'signed'|'rejected'; }

export function matchesRecruitmentNeed(player:{age:number;position:string;country:string;preferredFoot:string},need:RecruitmentNeed){
 const reasons:string[]=[]; const missing:string[]=[]; let score=0;
 if(player.age>=need.ageMin&&player.age<=need.ageMax){score+=30;reasons.push('Age fits the recruitment range')} 
 if(player.position.toLowerCase()===need.position.toLowerCase()){score+=35;reasons.push('Position matches')} 
 if(need.countryPreference){if(player.country.toLowerCase()===need.countryPreference.toLowerCase()){score+=15;reasons.push('Country preference matches')}} else missing.push('Country preference');
 if(need.level) score+=10; else missing.push('Target level');
 if(need.preferredFoot){if(need.preferredFoot==='both'||need.preferredFoot===player.preferredFoot){score+=10;reasons.push('Preferred foot matches')}} else missing.push('Preferred foot');
 return {score:Math.min(100,score),confidence:Math.max(40,100-missing.length*12),reasons,missing};
}

export function organizationOpportunityFromNeed(org:Organization,need:RecruitmentNeed):Opportunity{
 return {id:`need-${need.id}`,title:`Recruitment: ${need.position}`,organization:org.name,type:'club',country:org.country,city:org.city,ageMin:need.ageMin,ageMax:need.ageMax,positions:[need.position],level:need.level,verified:org.verified};
}
