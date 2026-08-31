export type Channel='in_app'|'email'|'whatsapp';
export interface Conversation {id:string; participantIds:string[]; subject?:string; lastMessageAt?:string; status:'open'|'archived';}
export interface Message {id:string; conversationId:string; senderId:string; body:string; channel:Channel; createdAt:string; readAt?:string;}
export interface Notification {id:string; userId:string; type:'application'|'trial'|'message'|'report'|'task'|'system'; title:string; body:string; readAt?:string; createdAt:string; actionUrl?:string;}
export function unreadCount(notifications:Notification[],userId:string){return notifications.filter(n=>n.userId===userId&&!n.readAt).length}
