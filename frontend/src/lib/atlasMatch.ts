import type { MatchResult, Player, Opportunity } from './types';

const weights = { position:25, age:15, level:10, location:10, technical:10, physical:10, availability:10, requirements:10 } as const;

export function calculateAtlasMatch(player: Player, opportunity: Opportunity): MatchResult {
  let score = 0; const reasons:string[] = []; const missing:string[] = []; const warnings:string[] = [];
  if (opportunity.positions.some(p => p.toLowerCase() === player.position.toLowerCase() || p.toLowerCase() === player.secondaryPosition?.toLowerCase())) { score += weights.position; reasons.push('Position matches'); } else warnings.push('Position does not directly match');
  if (player.age >= opportunity.ageMin && player.age <= opportunity.ageMax) { score += weights.age; reasons.push('Age is within the requested range'); } else warnings.push('Age is outside the requested range');
  if (!player.level || !opportunity.level) missing.push('Competitive level'); else { score += weights.level; reasons.push('Competitive level is available for comparison'); }
  if (player.country && opportunity.country && player.country.toLowerCase() === opportunity.country.toLowerCase()) { score += weights.location; reasons.push('Country matches'); } else missing.push('Location compatibility');
  missing.push('Technical assessment'); missing.push('Physical assessment'); missing.push('Availability');
  if (opportunity.positions.length) { score += weights.requirements; reasons.push('Recruitment requirements are defined'); } else missing.push('Recruitment requirements');
  const confidence = Math.max(35, Math.round(100 - missing.length * 7));
  return { score: Math.min(100, score), confidence, reasons, missing, warnings };
}
