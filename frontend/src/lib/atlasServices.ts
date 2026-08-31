import type { Base44Adapter } from './base44Adapter';
import { createAtlasRepositories } from './repositories';

export function createAtlasServices(db:Base44Adapter){
 const repo=createAtlasRepositories(db);
 return {
  repo,
  currentUser:()=>db.getCurrentUser<Record<string,unknown>>(),
  search:(payload:Record<string,unknown>)=>db.action('searchAtlas',payload),
  match:(payload:Record<string,unknown>)=>db.action('calculateMatch',payload),
  atlasScore:(payload:Record<string,unknown>)=>db.action('calculateAtlasScore',payload),
  createApplication:(payload:Record<string,unknown>)=>db.action('createApplication',payload),
  transitionApplication:(payload:Record<string,unknown>)=>db.action('transitionApplication',payload),
  createTrial:(payload:Record<string,unknown>)=>db.action('createTrial',payload),
  transitionTrial:(payload:Record<string,unknown>)=>db.action('transitionTrial',payload),
  createScoutReport:(payload:Record<string,unknown>)=>db.action('createScoutReport',payload),
  createConsent:(payload:Record<string,unknown>)=>db.action('createConsent',payload),
  revokeConsent:(payload:Record<string,unknown>)=>db.action('revokeConsent',payload),
  audit:(payload:Record<string,unknown>)=>db.action('createAuditEvent',payload)
 };
}
