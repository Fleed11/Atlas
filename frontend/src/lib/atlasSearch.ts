import type { Opportunity, Player } from './types';
import { searchPlayers, searchOpportunities } from './search';

export type SearchCategory='all'|'players'|'clubs'|'academies'|'scouts'|'opportunities'|'trials';
export interface AtlasSearchQuery { text:string; category?:SearchCategory; country?:string; position?:string; ageMin?:number; ageMax?:number; verifiedOnly?:boolean; }
export interface SearchItem { id:string; type:'player'|'opportunity'; title:string; subtitle:string; relevance:number; verified:boolean; reasons:string[]; }

export function atlasSearch(query:AtlasSearchQuery,players:Player[],opportunities:Opportunity[]):SearchItem[]{
 const q=query.text.toLowerCase(); const result:SearchItem[]=[];
 if(!query.category||query.category==='all'||query.category==='players'){
  for(const p of searchPlayers(q,players)){
   if(query.country&&p.country.toLowerCase()!==query.country.toLowerCase())continue;
   if(query.position&&p.position.toLowerCase()!==query.position.toLowerCase())continue;
   if(query.ageMin!==undefined&&p.age<query.ageMin)continue;
   if(query.ageMax!==undefined&&p.age>query.ageMax)continue;
   if(query.verifiedOnly&&!p.verified)continue;
   result.push({id:p.id,type:'player',title:p.name,subtitle:`${p.age} · ${p.position} · ${p.country}`,relevance:p.verified?95:80,verified:p.verified,reasons:['Profile data matches the search']});
  }
 }
 if(!query.category||query.category==='all'||query.category==='opportunities'||query.category==='trials'){
  for(const o of searchOpportunities(q,opportunities)){
   if(query.country&&o.country.toLowerCase()!==query.country.toLowerCase())continue;
   if(query.ageMin!==undefined&&o.ageMax<query.ageMin)continue;
   if(query.ageMax!==undefined&&o.ageMin>query.ageMax)continue;
   if(query.verifiedOnly&&!o.verified)continue;
   result.push({id:o.id,type:'opportunity',title:o.title,subtitle:`${o.organization} · ${o.country}`,relevance:o.match??70,verified:Boolean(o.verified),reasons:['Opportunity data matches the search']});
  }
 }
 return result.sort((a,b)=>b.relevance-a.relevance);
}
