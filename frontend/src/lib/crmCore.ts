export type CRMEntityType='player'|'club'|'academy'|'scout'|'parent'|'opportunity';
export type CRMActivityType='note'|'call'|'message'|'email'|'meeting'|'task'|'status_change';
export type CRMTaskStatus='todo'|'in_progress'|'done'|'cancelled';
export interface CRMContact {id:string; entityType:CRMEntityType; entityId:string; name:string; role?:string; email?:string; phone?:string; country?:string; tags:string[]; ownerId?:string;}
export interface CRMActivity {id:string; entityType:CRMEntityType; entityId:string; type:CRMActivityType; title:string; body?:string; actorId:string; createdAt:string;}
export interface CRMTask {id:string; entityType:CRMEntityType; entityId:string; title:string; assigneeId?:string; dueAt?:string; status:CRMTaskStatus; priority:'low'|'medium'|'high';}
export interface CRMDeal {id:string; playerId:string; organizationId:string; opportunityId?:string; stage:'discovery'|'shortlist'|'contact'|'trial'|'offer'|'won'|'lost'; value?:number; currency?:string; ownerId?:string; probability:number; updatedAt:string;}
export function dealProbability(stage:CRMDeal['stage']){return ({discovery:10,shortlist:25,contact:40,trial:60,offer:80,won:100,lost:0}[stage])}
export function weightedPipeline(deals:CRMDeal[]){return deals.reduce((sum,d)=>sum+(d.value??0)*(d.probability/100),0)}
export function isTaskOverdue(task:CRMTask,now=new Date()){return Boolean(task.dueAt&&task.status!=='done'&&task.status!=='cancelled'&&new Date(task.dueAt)<now)}
