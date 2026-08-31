import type { Notification } from './communications';
import type { AtlasEvent, Trial } from './trialsCalendar';

export function notificationForTrial(trial:Trial,userId:string):Notification{return {id:`trial-${trial.id}-${userId}`,userId,type:'trial',title:'Trial update',body:`Your trial is ${trial.status}.`,createdAt:new Date().toISOString(),actionUrl:`/trials/${trial.id}`}}
export function notificationForEvent(event:AtlasEvent,userId:string):Notification{return {id:`event-${event.id}-${userId}`,userId,type:event.type==='trial'?'trial':'system',title:event.title,body:`Event scheduled for ${new Date(event.startAt).toLocaleString()}.`,createdAt:new Date().toISOString(),actionUrl:`/calendar?event=${event.id}`}}
