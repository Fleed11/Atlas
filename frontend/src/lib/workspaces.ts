import type { Role } from './types';
export type WorkspaceId='player'|'parent'|'scout'|'club'|'academy'|'atlas_staff'|'super_admin';
export interface Workspace{ id:WorkspaceId; title:string; role:Role; modules:string[]; primaryActions:string[]; }
export const workspaces:Workspace[]=[
{id:'player',title:'Player Workspace',role:'player',modules:['Profile','Atlas Score','Highlights','Reports','Objectives','Opportunities','Applications','Trials','Calendar','Messages'],primaryActions:['Update profile','Upload highlight','Browse opportunities']},
{id:'parent',title:'Family Workspace',role:'parent',modules:['Player overview','Consent','Documents','Opportunities','Trials','Calendar','Messages'],primaryActions:['Review consent','Review trial','Contact Atlas']},
{id:'scout',title:'Scout Workspace',role:'scout',modules:['Discover','Search','Watchlist','Assignments','Evaluations','Reports','Shortlists','Messages'],primaryActions:['Search players','Add to watchlist','Create report']},
{id:'club',title:'Club Workspace',role:'club_admin',modules:['Organization','Recruitment Needs','Search','Candidates','Opportunities','Trials','CRM','Messages'],primaryActions:['Create recruitment need','Search players','Manage pipeline']},
{id:'academy',title:'Academy Workspace',role:'academy_admin',modules:['Organization','Recruitment Needs','Search','Candidates','Opportunities','Trials','CRM','Messages'],primaryActions:['Create recruitment need','Search players','Manage pipeline']},
{id:'atlas_staff',title:'Atlas Staff Workspace',role:'atlas_staff',modules:['Overview','Players','Scouts','Organizations','Recruitment','Opportunities','Trials','CRM','Verification','Audit'],primaryActions:['Review verification','Manage recruitment','Open CRM']},
{id:'super_admin',title:'Super Admin Workspace',role:'super_admin',modules:['Overview','Users','Roles','All Workspaces','Verification','Audit','System'],primaryActions:['Manage users','Manage roles','Review audit']}
];
export function workspaceForRole(role:Role){return workspaces.find(w=>w.role===role)}
