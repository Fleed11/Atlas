import type { Role } from './types';
export type VerificationStatus='pending'|'verified'|'rejected'|'suspended';
export type AuditAction='create'|'update'|'delete'|'verify'|'role_change'|'consent_change'|'access_denied';
export interface VerificationCase{id:string;entityType:'player'|'club'|'academy'|'scout';entityId:string;status:VerificationStatus;reviewerId?:string;reason?:string;createdAt:string;updatedAt:string;}
export interface AuditEvent{id:string;actorId:string;action:AuditAction;entityType:string;entityId:string;metadata:Record<string,string|number|boolean>;createdAt:string;}
export interface AdminUser{id:string;email:string;role:Role;status:'active'|'pending'|'suspended';lastActiveAt?:string;}
export function canVerify(role:Role){return role==='atlas_staff'||role==='super_admin'}
export function canManageRoles(role:Role){return role==='super_admin'}
export function verificationTransition(from:VerificationStatus,to:VerificationStatus){const map:Record<VerificationStatus,VerificationStatus[]>={pending:['verified','rejected'],verified:['suspended'],rejected:['pending'],suspended:['pending']};if(!map[from].includes(to))throw new Error(`Invalid verification transition: ${from} -> ${to}`);return to}
