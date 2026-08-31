import type { Locale } from './types';
import en from '../../../i18n/en.json';
import es from '../../../i18n/es.json';
import fr from '../../../i18n/fr.json';
import ar from '../../../i18n/ar.json';

const dictionaries:Record<Locale,Record<string,string>>={en,es,fr,ar};
export function translate(locale:Locale,key:string,fallback=key){return dictionaries[locale]?.[key]??dictionaries.en?.[key]??fallback;}
export function isRTL(locale:Locale){return locale==='ar';}
export { dictionaries };
