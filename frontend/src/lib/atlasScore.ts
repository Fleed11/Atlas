export interface AtlasScoreInput { technical:number; decision:number; physical:number; mentality:number; discipline:number; }
export interface AtlasScoreResult extends AtlasScoreInput { score:number; confidence:number; }
const weights={technical:.30,decision:.20,physical:.20,mentality:.20,discipline:.10} as const;
function clamp(n:number){return Math.max(0,Math.min(100,n))}
export function calculateAtlasScore(input:AtlasScoreInput, evidenceCount=0):AtlasScoreResult{
 const normalized={technical:clamp(input.technical),decision:clamp(input.decision),physical:clamp(input.physical),mentality:clamp(input.mentality),discipline:clamp(input.discipline)};
 const score=Math.round(normalized.technical*weights.technical+normalized.decision*weights.decision+normalized.physical*weights.physical+normalized.mentality*weights.mentality+normalized.discipline*weights.discipline);
 const confidence=Math.min(100,Math.round(45+Math.log2(evidenceCount+1)*18));
 return {...normalized,score,confidence};
}
