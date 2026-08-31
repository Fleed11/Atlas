import type { Player } from './types';

export interface PlayerProfileUpdate {
  name?: string;
  age?: number;
  nationality?: string;
  country?: string;
  city?: string;
  position?: string;
  secondaryPosition?: string;
  preferredFoot?: Player['preferredFoot'];
  level?: string;
  currentOrganization?: string;
}

export interface PlayerObjective {
  id:string; title:string; category:'technical'|'tactical'|'physical'|'mental'|'discipline'; progress:number; dueDate:string; status:'active'|'completed'|'overdue';
}

export interface PlayerMedia { id:string; title:string; type:'video'|'image'; url:string; thumbnailUrl?:string; category:'match'|'training'|'highlight'; visibility:'public'|'scouts'|'private'; }
export interface PlayerDocument { id:string; type:'passport'|'medical'|'registration'|'cv'|'other'; status:'pending'|'verified'|'rejected'|'expired'; expiresAt?:string; visibility:'private'|'authorized'; }

export function profileCompletion(player:Player):number {
 const fields=[player.name,player.age,player.nationality,player.country,player.position,player.preferredFoot,player.level,player.currentOrganization];
 return Math.round(fields.filter(Boolean).length/fields.length*100);
}

export function objectiveProgress(objectives:PlayerObjective[]):number {
 if(!objectives.length)return 0;
 return Math.round(objectives.reduce((sum,o)=>sum+Math.max(0,Math.min(100,o.progress)),0)/objectives.length);
}

export function canExposeMedia(media:PlayerMedia, viewer:'owner'|'scout'|'club'|'public'){
 if(media.visibility==='public')return true;
 if(media.visibility==='private')return viewer==='owner';
 return viewer!=='public';
}
