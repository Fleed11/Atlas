import type { ApiError, Page } from './dataContracts';

export interface Base44Adapter {
  getCurrentUser<T>():Promise<T>;
  list<T>(collection:string,params?:Record<string,string|number|boolean>):Promise<Page<T>>;
  get<T>(collection:string,id:string):Promise<T>;
  create<T>(collection:string,payload:Record<string,unknown>):Promise<T>;
  update<T>(collection:string,id:string,payload:Record<string,unknown>):Promise<T>;
  remove(collection:string,id:string):Promise<void>;
  action<T>(name:string,payload:Record<string,unknown>):Promise<T>;
}
export class Base44AdapterError extends Error{constructor(public error:ApiError){super(error.message);this.name='Base44AdapterError'}}
export function createAdapter(fetcher:typeof fetch=fetch):Base44Adapter{
 const request=async<T>(url:string,init?:RequestInit):Promise<T>=>{const response=await fetcher(url,{...init,headers:{'Content-Type':'application/json',...(init?.headers??{})}});const data=await response.json().catch(()=>null);if(!response.ok)throw new Base44AdapterError(data??{code:`HTTP_${response.status}`,message:'Request failed'});return data as T};
 return {getCurrentUser:()=>request('/api/me'),list:(collection,params)=>request(`/api/${collection}?${new URLSearchParams(Object.entries(params??{}).map(([k,v])=>[k,String(v)]))}`),get:(collection,id)=>request(`/api/${collection}/${id}`),create:(collection,payload)=>request(`/api/${collection}`,{method:'POST',body:JSON.stringify(payload)}),update:(collection,id,payload)=>request(`/api/${collection}/${id}`,{method:'PATCH',body:JSON.stringify(payload)}),remove:async(collection,id)=>{await request(`/api/${collection}/${id}`,{method:'DELETE'})},action:(name,payload)=>request(`/api/actions/${name}`,{method:'POST',body:JSON.stringify(payload)})};
}
