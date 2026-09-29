// Tiny i18n helpers. English lives at the original URLs, German under /de/, Spanish under /es/.
export type Lang = 'en' | 'de' | 'es';

export const SITE = 'https://www.dualstackstudio.com';

/** Build a path in the given language: l('de', '/creative#work') -> '/de/creative#work'. */
export function l(lang: Lang, path: string): string {
  if (lang === 'en') return path;
  if (path.startsWith('#')) return path;
  if (path === '/' || path === '') return `/${lang}/`;
  return `/${lang}` + (path.startsWith('/') ? path : '/' + path);
}

/** From any pathname, return the English, German and Spanish equivalents of the same page. */
export function altPaths(pathname: string): { en: string; de: string; es: string } {
  const clean = pathname.replace(/\/+$/, '') || '/'; // build output reports '/web/', links use '/web'
  const isDe = clean === '/de' || clean.startsWith('/de/');
  const isEs = clean === '/es' || clean.startsWith('/es/');
  const en = isDe ? clean.replace(/^\/de/, '') || '/' : isEs ? clean.replace(/^\/es/, '') || '/' : clean;
  const de = en === '/' ? '/de/' : '/de' + en;
  const es = en === '/' ? '/es/' : '/es' + en;
  return { en, de, es };
}

/** Format an ISO date (YYYY-MM-DD) for the given language, without timezone surprises. */
export function formatDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map(Number);
  const en = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const de = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const es = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  if (lang === 'de') return `${d}. ${de[m - 1]} ${y}`;
  if (lang === 'es') return `${d} de ${es[m - 1]} de ${y}`;
  return `${en[m - 1]} ${d}, ${y}`;
}
