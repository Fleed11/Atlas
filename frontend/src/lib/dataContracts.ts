export interface Page<T>{items:T[];page:number;pageSize:number;total:number;hasNext:boolean;}
export interface ApiError{code:string;message:string;field?:string;requestId?:string;}
export interface AuditInput{actorId:string;action:string;entityType:string;entityId:string;metadata:Record<string,string|number|boolean>;}
export function validatePagination(page=1,pageSize=25){if(!Number.isInteger(page)||page<1)throw new Error('Invalid page');if(!Number.isInteger(pageSize)||pageSize<1||pageSize>100)throw new Error('Invalid pageSize');return {page,pageSize}}
