import type { Player } from './types';

export type ScoutSpecialty='talent_id'|'technical'|'tactical'|'physical'|'goalkeeping'|'youth'|'international';
export interface ScoutProfile { id:string; name:string; countries:string[]; ageGroups:string[]; positions:string[]; specialties:ScoutSpecialty[]; verified:boolean; }
export interface WatchlistItem { playerId:string; scoutId:string; priority:'low'|'medium'|'high'; note?:string; status:'watching'|'contacted'|'archived'; createdAt:string; }
export interface ScoutAssignment { id:string; scoutId:string; playerId?:string; organizationId?:string; title:string; dueDate?:string; status:'open'|'in_progress'|'completed'|'cancelled'; }
export interface ScoutReportInput { playerId:string; scoutId:string; technical:number; tactical:number; physical:number; mentality:number; professionalism:number; strengths:string[]; weaknesses:string[]; recommendation:'monitor'|'shortlist'|'trial'|'sign'|'not_recommended'; }

export function scoutCanEvaluate(scout:ScoutProfile,player:Player){
 const positionMatch=scout.positions.length===0||scout.positions.some(p=>p.toLowerCase()===player.position.toLowerCase()||p.toLowerCase()===player.secondaryPosition?.toLowerCase());
 const countryMatch=scout.countries.length===0||scout.countries.some(c=>c.toLowerCase()===player.country.toLowerCase()||c.toLowerCase()===player.nationality.toLowerCase());
 return positionMatch||countryMatch;
}

export function normalizeReport(input:ScoutReportInput){
 const clamp=(n:number)=>Math.max(0,Math.min(100,n));
 return {...input,technical:clamp(input.technical),tactical:clamp(input.tactical),physical:clamp(input.physical),mentality:clamp(input.mentality),professionalism:clamp(input.professionalism)};
}
