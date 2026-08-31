import type { Player, Opportunity } from './types';

const aliases:Record<string,string[]> = {
  cb:['cb','centre back','center back','central defender','defenseur central','défenseur central','central'],
  cm:['cm','central midfielder','milieu central','mediocentro'],
  lb:['lb','left back','lateral izquierdo','arrière gauche'],
  rb:['rb','right back','lateral derecho','arrière droit'],
  gk:['gk','goalkeeper','keeper','portero','gardien','حارس'],
};

function hasAlias(text:string, key:string){ return aliases[key]?.some(x=>text.includes(x)); }

export function searchPlayers(query:string, players:Player[]):Player[]{
  const q=query.trim().toLowerCase(); if(!q) return players;
  const positionKey=Object.keys(aliases).find(k=>hasAlias(q,k));
  const age=q.match(/(?:u|under)\s*(\d{1,2})/i)?.[1];
  return players.filter(p=>{
    const text=`${p.name} ${p.position} ${p.secondaryPosition??''} ${p.country} ${p.city??''}`.toLowerCase();
    const positionOk=!positionKey || p.position.toLowerCase()===positionKey || p.secondaryPosition?.toLowerCase()===positionKey;
    const ageOk=!age || p.age<=Number(age);
    return positionOk && ageOk && (text.includes(q) || Boolean(positionKey) || Boolean(age));
  });
}

export function searchOpportunities(query:string, opportunities:Opportunity[]):Opportunity[]{
 const q=query.trim().toLowerCase(); if(!q)return opportunities;
 return opportunities.filter(o=>`${o.title} ${o.organization} ${o.country} ${o.city??''} ${o.positions.join(' ')}`.toLowerCase().includes(q));
}
