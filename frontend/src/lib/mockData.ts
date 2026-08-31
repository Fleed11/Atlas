import type { Opportunity, Player } from './types';
export const players:Player[]=[
{id:'p1',name:'Youssef Atlas',age:18,nationality:'Morocco',country:'Spain',city:'Madrid',position:'CM',secondaryPosition:'DM',preferredFoot:'right',level:'Elite',currentOrganization:'Atlas Academy',verified:true,profileCompletion:92},
{id:'p2',name:'Adam Benali',age:17,nationality:'Morocco',country:'Spain',city:'Valencia',position:'CB',preferredFoot:'left',level:'Elite',verified:true,profileCompletion:88},
{id:'p3',name:'Lucas Martin',age:18,nationality:'France',country:'France',city:'Lyon',position:'LW',preferredFoot:'right',level:'Elite',verified:false,profileCompletion:74}
];
export const opportunities:Opportunity[]=[
{id:'o1',title:'U19 Trial — Spain',organization:'Atlas Partner Club',type:'trial',country:'Spain',city:'Madrid',ageMin:17,ageMax:19,positions:['CM','DM'],level:'Elite',match:92,verified:true},
{id:'o2',title:'Elite Academy Program — Portugal',organization:'Partner Academy',type:'academy',country:'Portugal',ageMin:16,ageMax:19,positions:['CM','CB'],level:'Elite',match:88,verified:true},
{id:'o3',title:'International Showcase — France',organization:'Football Showcase',type:'showcase',country:'France',ageMin:17,ageMax:21,positions:['CM','LW','RW'],level:'Elite',match:84,verified:false}
];
