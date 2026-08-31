export type Relationship='parent'|'legal_guardian';
export type ConsentType='profile'|'media'|'scouting'|'contact'|'trial'|'international_transfer';
export type ConsentStatus='pending'|'granted'|'revoked'|'expired';
export interface FamilyRelationship{id:string;parentUserId:string;playerId:string;relationship:Relationship;verified:boolean;verifiedAt?:string;}
export interface Consent{id:string;playerId:string;grantedByUserId:string;type:ConsentType;status:ConsentStatus;scope:string[];grantedAt?:string;expiresAt?:string;revokedAt?:string;}
export interface FamilyMember{id:string;userId:string;name:string;relationship:Relationship;verified:boolean;}
export function hasVerifiedRelationship(relations:FamilyRelationship[],parentUserId:string,playerId:string){return relations.some(r=>r.parentUserId===parentUserId&&r.playerId===playerId&&r.verified)}
export function hasActiveConsent(consents:Consent[],playerId:string,type:ConsentType,now=new Date()){return consents.some(c=>c.playerId===playerId&&c.type===type&&c.status==='granted'&&(!c.expiresAt||new Date(c.expiresAt)>now))}
export function canParentAccess(relations:FamilyRelationship[],consents:Consent[],parentUserId:string,playerId:string,consentType:ConsentType){return hasVerifiedRelationship(relations,parentUserId,playerId)&&hasActiveConsent(consents,playerId,consentType)}
