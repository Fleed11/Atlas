import type { Role } from './types';
import { workspaceForRole, type Workspace } from './workspaces';
import type { AtlasSession } from './session';

export interface WorkspaceRoute {workspace:Workspace; path:string; allowed:boolean}
export function resolveWorkspace(session:AtlasSession|null|undefined):WorkspaceRoute|null{
 if(!session)return null;
 const workspace=workspaceForRole(session.role);
 if(!workspace)return null;
 return {workspace,path:`/app/${workspace.id}`,allowed:true};
}
export function canAccessWorkspace(session:AtlasSession|null|undefined,workspaceId:string){
 const resolved=resolveWorkspace(session); return Boolean(resolved?.workspace.id===workspaceId);
}
export function roleHome(role:Role){return `/app/${workspaceForRole(role)?.id??'player'}`}
