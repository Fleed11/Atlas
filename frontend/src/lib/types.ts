export type Role = 'player'|'parent'|'scout'|'club_admin'|'academy_admin'|'atlas_staff'|'super_admin';
export type Locale = 'en'|'es'|'fr'|'ar';
export type OpportunityType = 'trial'|'club'|'academy'|'camp'|'showcase'|'exchange'|'scholarship';
export type ApplicationStatus = 'applied'|'reviewed'|'shortlisted'|'invited'|'completed'|'accepted'|'rejected';
export interface Player { id:string; name:string; age:number; nationality:string; country:string; city?:string; position:string; secondaryPosition?:string; preferredFoot:'left'|'right'|'both'; level?:string; currentOrganization?:string; verified:boolean; profileCompletion:number; }
export interface Opportunity { id:string; title:string; organization:string; type:OpportunityType; country:string; city?:string; ageMin:number; ageMax:number; positions:string[]; level?:string; match?:number; verified?:boolean; }
export interface MatchResult { score:number; confidence:number; reasons:string[]; missing:string[]; warnings:string[]; }
