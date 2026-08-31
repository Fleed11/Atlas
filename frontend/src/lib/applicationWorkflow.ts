import type { ApplicationStatus } from './types';
const transitions:Record<ApplicationStatus,ApplicationStatus[]>={
 applied:['reviewed','rejected'], reviewed:['shortlisted','rejected'], shortlisted:['invited','rejected'], invited:['completed','rejected'], completed:['accepted','rejected'], accepted:[], rejected:[]
};
export function canTransition(from:ApplicationStatus,to:ApplicationStatus){return transitions[from].includes(to)}
export function transitionApplication(from:ApplicationStatus,to:ApplicationStatus):ApplicationStatus{if(!canTransition(from,to))throw new Error(`Invalid application transition: ${from} -> ${to}`);return to}
export function getNextStatuses(status:ApplicationStatus){return transitions[status]}
