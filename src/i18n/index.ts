// Tiny i18n helpers. English lives at the original URLs, German under /de/.
export type Lang = 'en' | 'de';

export const SITE = 'https://www.dualstackstudio.com';

/** Build a path in the given language: l('de', '/creative#work') -> '/de/creative#work'. */
export function l(lang: Lang, path: string): string {
  if (lang === 'en') return path;
  if (path === '/' || path === '') return '/de/';
  if (path.startsWith('#')) return path;
  return '/de' + (path.startsWith('/') ? path : '/' + path);
}

/** From any pathname, return the English and German equivalents of the same page. */
export function altPaths(pathname: string): { en: string; de: string } {
  const clean = pathname.replace(/\/+$/, '') || '/'; // build output reports '/web/', links use '/web'
  const isDe = clean === '/de' || clean.startsWith('/de/');
  const en = isDe ? clean.replace(/^\/de/, '') || '/' : clean;
  const de = en === '/' ? '/de/' : '/de' + en;
  return { en, de };
}

/** Format an ISO date (YYYY-MM-DD) for the given language, without timezone surprises. */
export function formatDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map(Number);
  const en = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const de = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  return lang === 'de' ? `${d}. ${de[m - 1]} ${y}` : `${en[m - 1]} ${d}, ${y}`;
}
