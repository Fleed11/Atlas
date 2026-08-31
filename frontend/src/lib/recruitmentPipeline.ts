export type CandidateStage='discovered'|'shortlisted'|'contacted'|'trial'|'signed'|'rejected';
const transitions:Record<CandidateStage,CandidateStage[]>={discovered:['shortlisted','rejected'],shortlisted:['contacted','rejected'],contacted:['trial','rejected'],trial:['signed','rejected'],signed:[],rejected:[]};
export function canMoveCandidate(from:CandidateStage,to:CandidateStage){return transitions[from].includes(to)}
export function moveCandidate(from:CandidateStage,to:CandidateStage){if(!canMoveCandidate(from,to))throw new Error(`Invalid candidate transition: ${from} -> ${to}`);return to}
export function nextCandidateStages(stage:CandidateStage){return transitions[stage]}
