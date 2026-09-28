import type { Lang } from '../i18n';

/** A string in both site languages. */
type L = { en: string; de: string };

/**
 * One photograph in a series. `size` drives the layout: 'wide' runs the full
 * width of the page, 'half' sits next to the neighbouring 'half' plate (two
 * per row, same height). A 'half' plate without a partner is centred.
 */
export interface Plate {
  file: string;
  w: number;
  h: number;
  size: 'wide' | 'half';
  title: L;
  alt: L;
}

export interface Series {
  slug: string;
  num: string;
  /** Image used on the index and as the series hero (a file in `plates`). */
  cover: string;
  folder: string;
  title: L;
  meta: L;
  gear?: string;
  lead: L;
  plates: Plate[];
}

export const series: Series[] = [
  {
    slug: 'close-to-home',
    num: '01',
    folder: '/images/photography/close-to-home/',
    cover: '02-basilica-lane.webp',
    title: { en: 'Close to home', de: 'Ganz in der Nähe' },
    meta: { en: 'Austria · 2026', de: 'Österreich · 2026' },
    gear: 'Canon EOS R50 · RF-S 18–45 mm',
    lead: {
      en: 'Woods, lanes and hills within a short drive of home. No client, no brief — just the pictures I keep going back to.',
      de: 'Wälder, Gassen und Hügel, keine Autofahrt von zu Hause entfernt. Kein Kunde, kein Auftrag — nur die Bilder, zu denen ich immer wieder zurückkehre.',
    },
    plates: [
      { file: '01-valley.webp', w: 2000, h: 1333, size: 'wide', title: { en: 'The valley from above', de: 'Das Tal von oben' }, alt: { en: 'Rolling green hills and a wide valley under a sky streaked with cloud', de: 'Sanfte grüne Hügel und ein weites Tal unter einem von Wolken durchzogenen Himmel' } },
      { file: '02-basilica-lane.webp', w: 1333, h: 2000, size: 'half', title: { en: 'The way up to the basilica', de: 'Der Weg hinauf zur Basilika' }, alt: { en: 'A cobblestone lane climbing to a pink baroque basilica, an old street lamp in the foreground', de: 'Eine Kopfsteinpflastergasse, die zu einer rosa Barockbasilika hinaufführt, im Vordergrund eine alte Straßenlaterne' } },
      { file: '03-main-street.webp', w: 1699, h: 2000, size: 'half', title: { en: 'The main street', de: 'Die Hauptstraße' }, alt: { en: 'A quiet village street lined with yellow, green and pastel houses under a blue sky', de: 'Eine ruhige Dorfstraße mit gelben, grünen und pastellfarbenen Häusern unter blauem Himmel' } },
      { file: '04-tower-and-lamp.webp', w: 1333, h: 2000, size: 'half', title: { en: 'Tower and lamp', de: 'Turm und Laterne' }, alt: { en: 'A church tower with an onion dome against a deep blue sky, a street lamp in the foreground', de: 'Ein Kirchturm mit Zwiebelhaube vor tiefblauem Himmel, im Vordergrund eine Straßenlaterne' } },
      { file: '05-evening-lane.webp', w: 1517, h: 2000, size: 'half', title: { en: 'Evening lane', de: 'Gasse am Abend' }, alt: { en: 'A red van parked under trees on a narrow lane beside a timber-clad garage', de: 'Ein roter Kastenwagen unter Bäumen an einer schmalen Gasse neben einer holzverkleideten Garage' } },
      { file: '06-beech-forest.webp', w: 1333, h: 2000, size: 'half', title: { en: 'Beech forest', de: 'Buchenwald' }, alt: { en: 'Tall, slim beech trunks in a bright green forest', de: 'Hohe, schlanke Buchenstämme in einem hellgrünen Wald' } },
      { file: '07-cabin.webp', w: 1333, h: 2000, size: 'half', title: { en: 'The cabin', de: 'Die Hütte' }, alt: { en: 'A wooden cabin among dark spruce trunks and green undergrowth', de: 'Eine Holzhütte zwischen dunklen Fichtenstämmen und grünem Unterholz' } },
      { file: '08-hunting-stand.webp', w: 1600, h: 2000, size: 'half', title: { en: 'Hunting stand', de: 'Hochstand' }, alt: { en: 'A hunting stand deep in a sunlit spruce forest', de: 'Ein Hochstand tief in einem sonnendurchfluteten Fichtenwald' } },
      { file: '09-carved-beech.webp', w: 1333, h: 2000, size: 'half', title: { en: 'Carved in beech', de: 'In Buche geschnitzt' }, alt: { en: 'Orange lettering carved into a grey beech trunk', de: 'Orange Schrift, in einen grauen Buchenstamm geschnitzt' } },
      { file: '10-rally-car.webp', w: 2000, h: 2000, size: 'half', title: { en: 'Rally car', de: 'Rallyeauto' }, alt: { en: 'A white rally car pulled over at the edge of a forest road', de: 'Ein weißes Rallyeauto am Rand einer Waldstraße' } },
      { file: '11-road-to-the-castle.webp', w: 2000, h: 2000, size: 'half', title: { en: 'The road to the castle', de: 'Die Straße zur Burg' }, alt: { en: 'A road through the valley towards a castle ruin on a wooded hill', de: 'Eine Straße durch das Tal auf eine Burgruine auf einem bewaldeten Hügel zu' } },
    ],
  },
  {
    slug: 'japan',
    num: '02',
    folder: '/images/photography/japan/',
    cover: 'hero-mountain-cabin.jpg',
    title: { en: 'Mountains and water', de: 'Berge und Wasser' },
    meta: { en: 'Japan · Photographed over several years', de: 'Japan · Über mehrere Jahre fotografiert' },
    lead: {
      en: 'Made over several years in the mountains of Japan: the peaks, the water and the quiet hours in between.',
      de: 'Über mehrere Jahre in den Bergen Japans entstanden: die Gipfel, das Wasser und die stillen Stunden dazwischen.',
    },
    plates: [
      { file: 'hero-mountain-cabin.jpg', w: 1672, h: 941, size: 'wide', title: { en: 'The peak and the cabin', de: 'Der Gipfel und die Hütte' }, alt: { en: 'A conical mountain peak above a dark mountain cabin', de: 'Ein kegelförmiger Berggipfel über einer dunklen Berghütte' } },
      { file: 'mountain-night-stars.jpg', w: 1920, h: 1080, size: 'half', title: { en: 'Stars over the peak', de: 'Sterne über dem Gipfel' }, alt: { en: 'The same mountain peak at night under a field of stars', de: 'Derselbe Berggipfel bei Nacht unter einem Sternenhimmel' } },
      { file: 'sunset-coast.jpg', w: 2000, h: 1125, size: 'half', title: { en: 'Sunset on the coast', de: 'Sonnenuntergang an der Küste' }, alt: { en: 'Sunset over a rocky coastline with waves', de: 'Sonnenuntergang über einer felsigen Küste mit Wellen' } },
      { file: 'mountain-range-birch.jpg', w: 2000, h: 1125, size: 'wide', title: { en: 'The range through birch', de: 'Die Bergkette durch Birken' }, alt: { en: 'A wide mountain range seen through birch trees', de: 'Eine weite Bergkette, durch Birken gesehen' } },
      { file: 'mountain-range-muted.jpg', w: 2000, h: 1330, size: 'half', title: { en: 'Morning range', de: 'Bergkette am Morgen' }, alt: { en: 'A wide mountain range in muted morning tones', de: 'Eine weite Bergkette in gedämpften Morgenfarben' } },
      { file: 'lake-pagoda-snow.jpg', w: 2000, h: 1339, size: 'half', title: { en: 'Pagoda in the snow', de: 'Pagode im Schnee' }, alt: { en: 'A lake with a red pagoda and footprints in the snow', de: 'Ein See mit einer roten Pagode und Fußspuren im Schnee' } },
      { file: 'seagull-dock.jpg', w: 2000, h: 1330, size: 'half', title: { en: 'Seagull on the dock', de: 'Möwe am Steg' }, alt: { en: 'A seagull resting on a weathered dock post over a lake', de: 'Eine Möwe ruht auf einem verwitterten Stegpfosten über einem See' } },
      { file: 'sunset-lake.jpg', w: 2000, h: 1330, size: 'half', title: { en: 'Still water at sunset', de: 'Stilles Wasser bei Sonnenuntergang' }, alt: { en: 'Sunset over still water with a lamppost silhouette', de: 'Sonnenuntergang über stillem Wasser mit der Silhouette einer Laterne' } },
      { file: 'monument-mountain.jpg', w: 2000, h: 1330, size: 'wide', title: { en: 'Monument and mountain', de: 'Denkmal und Berg' }, alt: { en: 'A stone monument with a mountain in the background', de: 'Ein Steindenkmal mit einem Berg im Hintergrund' } },
      { file: 'night-sky-trees.jpg', w: 1920, h: 1080, size: 'half', title: { en: 'Warm glow, night sky', de: 'Warmer Schein am Nachthimmel' }, alt: { en: 'A warm glow in the night sky above tree silhouettes', de: 'Ein warmer Schein am Nachthimmel über Baumsilhouetten' } },
      { file: 'canal-seagulls.jpg', w: 1080, h: 1920, size: 'half', title: { en: 'Canal and gulls', de: 'Kanal und Möwen' }, alt: { en: 'A canal-side warehouse building with seagulls on a lamppost', de: 'Ein Lagerhaus am Kanal mit Möwen auf einer Laterne' } },
      { file: 'foggy-window.jpg', w: 2000, h: 1125, size: 'wide', title: { en: 'Foggy window', de: 'Beschlagenes Fenster' }, alt: { en: 'A foggy window looking out over a quiet street', de: 'Ein beschlagenes Fenster mit Blick auf eine ruhige Straße' } },
    ],
  },
];

export const seriesSlugs = series.map((s) => s.slug);

export function getSeries(slug: string): Series {
  const s = series.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown photo series: ${slug}`);
  return s;
}

export type PlateRow = { kind: 'wide' | 'pair' | 'single'; plates: Plate[] };

/** Group plates into gallery rows: 'wide' plates alone, consecutive 'half' plates in pairs, a leftover 'half' centred. */
export function toRows(plates: Plate[]): PlateRow[] {
  const rows: PlateRow[] = [];
  let pending: Plate | null = null;
  for (const p of plates) {
    if (p.size === 'wide') {
      if (pending) { rows.push({ kind: 'single', plates: [pending] }); pending = null; }
      rows.push({ kind: 'wide', plates: [p] });
    } else if (pending) {
      rows.push({ kind: 'pair', plates: [pending, p] });
      pending = null;
    } else {
      pending = p;
    }
  }
  if (pending) rows.push({ kind: 'single', plates: [pending] });
  return rows;
}

export const t = (v: L, lang: Lang) => v[lang];
