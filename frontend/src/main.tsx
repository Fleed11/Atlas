import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Search, LayoutDashboard, UserRound, Trophy, Target, Globe, FileText, CalendarDays, MessageSquare, Users, ShieldCheck, Building2 } from 'lucide-react';
import './styles.css';

type Lang = 'en'|'es'|'fr'|'ar';
const copy: Record<Lang, Record<string,string>> = {
  en:{dashboard:'Dashboard',profile:'My Profile',score:'Atlas Score',development:'Development',opportunities:'Opportunities',reports:'Reports',calendar:'Calendar',messages:'Messages',documents:'Documents',search:'Search players, clubs, academies, trials...',verified:'Verified'},
  es:{dashboard:'Panel',profile:'Mi perfil',score:'Atlas Score',development:'Desarrollo',opportunities:'Oportunidades',reports:'Informes',calendar:'Calendario',messages:'Mensajes',documents:'Documentos',search:'Buscar jugadores, clubes, academias, pruebas...',verified:'Verificado'},
  fr:{dashboard:'Tableau de bord',profile:'Mon profil',score:'Atlas Score',development:'Développement',opportunities:'Opportunités',reports:'Rapports',calendar:'Calendrier',messages:'Messages',documents:'Documents',search:'Rechercher joueurs, clubs, académies, essais...',verified:'Vérifié'},
  ar:{dashboard:'لوحة التحكم',profile:'ملفي',score:'نقاط أطلس',development:'التطوير',opportunities:'الفرص',reports:'التقارير',calendar:'التقويم',messages:'الرسائل',documents:'الوثائق',search:'ابحث عن لاعبين وأندية وأكاديميات وتجارب...',verified:'موثّق'}
};

export default function App(){
 const [lang,setLang]=useState<Lang>('en'); const [query,setQuery]=useState(''); const t=copy[lang];
 const rtl=lang==='ar';
 const nav=useMemo(()=>[[LayoutDashboard,t.dashboard],[UserRound,t.profile],[Trophy,t.score],[Target,t.development],[Globe,t.opportunities],[FileText,t.reports],[CalendarDays,t.calendar],[MessageSquare,t.messages],[FileText,t.documents]] as const,[t]);
 const cycle=()=>setLang(lang==='en'?'es':lang==='es'?'fr':lang==='fr'?'ar':'en');
 return <div className="app" dir={rtl?'rtl':'ltr'}>
  <aside className="sidebar"><div className="brand">ATLAS<span>●</span></div><div className="role">PLAYER PORTAL</div><nav>{nav.map(([Icon,label],i)=><button className={i===0?'active':''} key={label}><Icon size={18}/><span>{label}</span></button>)}</nav><div className="side-bottom"><button><Users size={18}/>Family</button><button><ShieldCheck size={18}/>Settings</button></div></aside>
  <main className="main"><header><div><div className="eyebrow">ATLAS FOOTBALL</div><h1>{t.dashboard}</h1></div><div className="actions"><button className="lang" onClick={cycle}><Globe size={16}/>{lang.toUpperCase()}</button><div className="avatar">AK</div></div></header>
   <section className="searchbar"><Search size={21}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={t.search}/><kbd>⌘ K</kbd></section>
   {query && <section className="search-results"><strong>Atlas Search</strong><p>Searching Atlas across players, clubs, academies, scouts and opportunities for “{query}”.</p><div className="chips"><span>Players</span><span>Clubs</span><span>Academies</span><span>Opportunities</span></div></section>}
   <section className="hero-grid"><div className="card score-card"><div className="card-label">{t.score}</div><div className="score">84</div><div className="confidence">Confidence 76% · 12 reports</div><div className="score-grid">{[['Technical','88'],['Decision','82'],['Physical','81'],['Mentality','86'],['Discipline','90']].map(([a,b])=><div key={a}><b>{a}</b><i>{b}</i></div>)}</div></div>
   <div className="card profile-card"><div className="card-label">{t.profile}</div><div className="profile-head"><div className="player-avatar">AK</div><div><h2>Player Name</h2><p>18 · CM · Morocco 🇲🇦</p></div></div><div className="progress"><span style={{width:'92%'}}/></div><small>Profile 92% complete</small><div className="verified"><ShieldCheck size={16}/>{t.verified}</div></div></section>
   <section className="cards"><article><div className="card-label">{t.development}</div><h3>+8%</h3><p>Overall development this season</p><div className="mini-bars"><i/><i/><i/><i/><i/></div></article><article><div className="card-label">{t.opportunities}</div><h3>4</h3><p>Matching opportunities available</p><button className="link">Explore →</button></article><article><div className="card-label">WEEKLY OBJECTIVES</div><h3>3 / 5</h3><p>Keep progressing this week</p><div className="progress"><span style={{width:'60%'}}/></div></article></section>
   <section className="lower"><div className="panel"><div className="panel-title"><h2>Recommended Opportunities</h2><button className="link">View all →</button></div>{['U19 Trial — Spain','Elite Academy Program — Portugal','International Showcase — France'].map((v,i)=><div className="op" key={v}><div className="op-icon"><Building2 size={18}/></div><div><b>{v}</b><p>{['Club opportunity','Academy development','Showcase'][i]} · {92-i*4}% match</p></div><span className="match">{92-i*4}%</span></div>)}</div><div className="panel"><div className="panel-title"><h2>Latest Report</h2></div><div className="report"><div className="report-score">86</div><div><b>Scout evaluation</b><p>Strong decision making and technical quality. Development focus: physical consistency.</p></div></div></div></section>
  </main></div>
}

createRoot(document.getElementById('root')!).render(<App/>);
