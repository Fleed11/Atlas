import type { Base44Adapter } from './base44Adapter';
import type { Page } from './dataContracts';

export interface ListOptions { page?:number; pageSize?:number; filters?:Record<string,string|number|boolean>; }
export class AtlasRepository<T extends {id:string}> {
 constructor(protected readonly db:Base44Adapter, protected readonly collection:string){}
 list(options:ListOptions={}):Promise<Page<T>>{return this.db.list<T>(this.collection,{page:options.page??1,pageSize:options.pageSize??25,...(options.filters??{})})}
 get(id:string):Promise<T>{return this.db.get<T>(this.collection,id)}
 create(payload:Record<string,unknown>):Promise<T>{return this.db.create<T>(this.collection,payload)}
 update(id:string,payload:Record<string,unknown>):Promise<T>{return this.db.update<T>(this.collection,id,payload)}
 remove(id:string):Promise<void>{return this.db.remove(this.collection,id)}
}
export function createAtlasRepositories(db:Base44Adapter){return {
 users:new AtlasRepository(db,'users'), players:new AtlasRepository(db,'players'), organizations:new AtlasRepository(db,'organizations'), recruitmentNeeds:new AtlasRepository(db,'recruitmentNeeds'), opportunities:new AtlasRepository(db,'opportunities'), applications:new AtlasRepository(db,'applications'), trials:new AtlasRepository(db,'trials'), events:new AtlasRepository(db,'events'), scoutProfiles:new AtlasRepository(db,'scoutProfiles'), scoutReports:new AtlasRepository(db,'scoutReports'), watchlists:new AtlasRepository(db,'watchlistItems'), objectives:new AtlasRepository(db,'objectives'), media:new AtlasRepository(db,'mediaAssets'), documents:new AtlasRepository(db,'documents'), conversations:new AtlasRepository(db,'conversations'), messages:new AtlasRepository(db,'messages'), notifications:new AtlasRepository(db,'notifications'), crmContacts:new AtlasRepository(db,'crmContacts'), crmActivities:new AtlasRepository(db,'crmActivities'), crmTasks:new AtlasRepository(db,'crmTasks'), crmDeals:new AtlasRepository(db,'crmDeals'), verificationCases:new AtlasRepository(db,'verificationCases'), auditEvents:new AtlasRepository(db,'auditEvents'), familyRelationships:new AtlasRepository(db,'familyRelationships'), consents:new AtlasRepository(db,'consents')
}}
