import type { Lang } from '../i18n';

/** A string in both site languages. */
type L = { en: string; de: string };

/**
 * One photograph. `size` drives the layout: 'wide' runs the full width of the
 * page, 'half' sits next to the neighbouring 'half' plate (two per row, same
 * height). The list below is in reading order.
 */
export interface Plate {
  src: string;
  w: number;
  h: number;
  size: 'wide' | 'half';
  place: L;
  title: L;
  alt: L;
}

const A = '/images/photography/close-to-home/';
const J = '/images/photography/japan/';
const AUSTRIA: L = { en: 'Austria', de: 'Österreich' };
const JAPAN: L = { en: 'Japan', de: 'Japan' };

export const photos: Plate[] = [
  { src: J + 'hero-mountain-cabin.jpg', w: 1672, h: 941, size: 'wide', place: JAPAN, title: { en: 'The mountain keeps watch', de: 'Der Berg hält Wache' }, alt: { en: 'A conical mountain peak above a dark mountain cabin', de: 'Ein kegelförmiger Berggipfel über einer dunklen Berghütte' } },
  { src: A + '02-basilica-lane.webp', w: 1333, h: 2000, size: 'half', place: AUSTRIA, title: { en: 'Closer to the sky', de: 'Dem Himmel näher' }, alt: { en: 'A cobblestone lane climbing to a pink baroque basilica, an old street lamp in the foreground', de: 'Eine Kopfsteinpflastergasse, die zu einer rosa Barockbasilika hinaufführt, im Vordergrund eine alte Straßenlaterne' } },
  { src: A + '03-main-street.webp', w: 1699, h: 2000, size: 'half', place: AUSTRIA, title: { en: 'Colours the shadow spared', de: 'Farben, die der Schatten verschonte' }, alt: { en: 'A quiet village street lined with yellow, green and pastel houses under a blue sky', de: 'Eine ruhige Dorfstraße mit gelben, grünen und pastellfarbenen Häusern unter blauem Himmel' } },
  { src: J + 'mountain-night-stars.jpg', w: 1920, h: 1080, size: 'half', place: JAPAN, title: { en: 'Night settles on the mountain', de: 'Die Nacht legt sich auf den Berg' }, alt: { en: 'The same mountain peak at night under a field of stars', de: 'Derselbe Berggipfel bei Nacht unter einem Sternenhimmel' } },
  { src: J + 'sunset-coast.jpg', w: 2000, h: 1125, size: 'half', place: JAPAN, title: { en: 'The sea takes the sun', de: 'Das Meer nimmt die Sonne' }, alt: { en: 'Sunset over a rocky coastline with waves', de: 'Sonnenuntergang über einer felsigen Küste mit Wellen' } },
  { src: A + '01-valley.webp', w: 2000, h: 1333, size: 'wide', place: AUSTRIA, title: { en: 'The valley, held in light', de: 'Das Tal, im Licht gehalten' }, alt: { en: 'Rolling green hills and a wide valley under a sky streaked with cloud', de: 'Sanfte grüne Hügel und ein weites Tal unter einem von Wolken durchzogenen Himmel' } },
  { src: A + '04-tower-and-lamp.webp', w: 1333, h: 2000, size: 'half', place: AUSTRIA, title: { en: 'Two ways to hold the light', de: 'Zwei Arten, das Licht zu halten' }, alt: { en: 'A church tower with an onion dome against a deep blue sky, a street lamp in the foreground', de: 'Ein Kirchturm mit Zwiebelhaube vor tiefblauem Himmel, im Vordergrund eine Straßenlaterne' } },
  { src: A + '05-evening-lane.webp', w: 1517, h: 2000, size: 'half', place: AUSTRIA, title: { en: 'Last light on the lane', de: 'Letztes Licht auf der Gasse' }, alt: { en: 'A red van parked under trees on a narrow lane beside a timber-clad garage', de: 'Ein roter Kastenwagen unter Bäumen an einer schmalen Gasse neben einer holzverkleideten Garage' } },
  { src: J + 'mountain-range-birch.jpg', w: 2000, h: 1125, size: 'wide', place: JAPAN, title: { en: 'Through the birches, a range', de: 'Durch die Birken, ein Gebirge' }, alt: { en: 'A wide mountain range seen through birch trees', de: 'Eine weite Bergkette, durch Birken gesehen' } },
  { src: A + '06-beech-forest.webp', w: 1333, h: 2000, size: 'half', place: AUSTRIA, title: { en: 'A cathedral of beech', de: 'Eine Kathedrale aus Buchen' }, alt: { en: 'Tall, slim beech trunks in a bright green forest', de: 'Hohe, schlanke Buchenstämme in einem hellgrünen Wald' } },
  { src: A + '07-cabin.webp', w: 1333, h: 2000, size: 'half', place: AUSTRIA, title: { en: 'A small warmth among the spruce', de: 'Ein wenig Wärme zwischen Fichten' }, alt: { en: 'A wooden cabin among dark spruce trunks and green undergrowth', de: 'Eine Holzhütte zwischen dunklen Fichtenstämmen und grünem Unterholz' } },
  { src: J + 'mountain-range-muted.jpg', w: 2000, h: 1330, size: 'half', place: JAPAN, title: { en: 'Morning, in a low voice', de: 'Morgen, mit leiser Stimme' }, alt: { en: 'A wide mountain range in muted morning tones', de: 'Eine weite Bergkette in gedämpften Morgenfarben' } },
  { src: J + 'lake-pagoda-snow.jpg', w: 2000, h: 1339, size: 'half', place: JAPAN, title: { en: 'Red against the snow', de: 'Rot im Schnee' }, alt: { en: 'A lake with a red pagoda and footprints in the snow', de: 'Ein See mit einer roten Pagode und Fußspuren im Schnee' } },
  { src: A + '08-hunting-stand.webp', w: 1600, h: 2000, size: 'half', place: AUSTRIA, title: { en: 'The watcher in the green', de: 'Der Wächter im Grün' }, alt: { en: 'A hunting stand deep in a sunlit spruce forest', de: 'Ein Hochstand tief in einem sonnendurchfluteten Fichtenwald' } },
  { src: A + '09-carved-beech.webp', w: 1333, h: 2000, size: 'half', place: AUSTRIA, title: { en: 'Someone was here', de: 'Jemand war hier' }, alt: { en: 'Orange lettering carved into a grey beech trunk', de: 'Orange Schrift, in einen grauen Buchenstamm geschnitzt' } },
  { src: A + '12-contrail.webp', w: 2000, h: 1383, size: 'wide', place: AUSTRIA, title: { en: "Someone else's journey", de: 'Die Reise von jemand anderem' }, alt: { en: 'A white vapour trail crossing a deep blue sky, with the aircraft at its tip', de: 'Ein weißer Kondensstreifen quert den tiefblauen Himmel, an seiner Spitze das Flugzeug' } },
  { src: J + 'seagull-dock.jpg', w: 2000, h: 1330, size: 'half', place: JAPAN, title: { en: "The dock's only guest", de: 'Der einzige Gast am Steg' }, alt: { en: 'A seagull resting on a weathered dock post over a lake', de: 'Eine Möwe ruht auf einem verwitterten Stegpfosten über einem See' } },
  { src: J + 'sunset-lake.jpg', w: 2000, h: 1330, size: 'half', place: JAPAN, title: { en: 'Still water, last light', de: 'Stilles Wasser, letztes Licht' }, alt: { en: 'Sunset over still water with a lamppost silhouette', de: 'Sonnenuntergang über stillem Wasser mit der Silhouette einer Laterne' } },
  { src: J + 'monument-mountain.jpg', w: 2000, h: 1330, size: 'wide', place: JAPAN, title: { en: 'Stone remembers', de: 'Der Stein erinnert sich' }, alt: { en: 'A stone monument with a mountain in the background', de: 'Ein Steindenkmal mit einem Berg im Hintergrund' } },
  { src: A + '10-rally-car.webp', w: 2000, h: 2000, size: 'half', place: AUSTRIA, title: { en: 'Resting between the bends', de: 'Rast zwischen den Kurven' }, alt: { en: 'A white rally car pulled over at the edge of a forest road', de: 'Ein weißes Rallyeauto am Rand einer Waldstraße' } },
  { src: A + '11-road-to-the-castle.webp', w: 2000, h: 2000, size: 'half', place: AUSTRIA, title: { en: 'The road toward the old walls', de: 'Die Straße zu den alten Mauern' }, alt: { en: 'A road through the valley towards a castle ruin on a wooded hill', de: 'Eine Straße durch das Tal auf eine Burgruine auf einem bewaldeten Hügel zu' } },
  { src: J + 'night-sky-trees.jpg', w: 1920, h: 1080, size: 'half', place: JAPAN, title: { en: 'A glow behind the trees', de: 'Ein Glühen hinter den Bäumen' }, alt: { en: 'A warm glow in the night sky above tree silhouettes', de: 'Ein warmer Schein am Nachthimmel über Baumsilhouetten' } },
  { src: J + 'canal-seagulls.jpg', w: 1080, h: 1920, size: 'half', place: JAPAN, title: { en: 'Grey hour at the canal', de: 'Graue Stunde am Kanal' }, alt: { en: 'A canal-side warehouse building with seagulls on a lamppost', de: 'Ein Lagerhaus am Kanal mit Möwen auf einer Laterne' } },
  { src: J + 'foggy-window.jpg', w: 2000, h: 1125, size: 'wide', place: JAPAN, title: { en: 'The window breathes', de: 'Das Fenster atmet' }, alt: { en: 'A foggy window looking out over a quiet street', de: 'Ein beschlagenes Fenster mit Blick auf eine ruhige Straße' } },
];

export type PlateRow = { kind: 'wide' | 'pair' | 'single'; plates: Plate[] };

/** Group plates into gallery rows: 'wide' plates alone, consecutive 'half' plates in pairs, a leftover 'half' centred. */
export function toRows(list: Plate[]): PlateRow[] {
  const rows: PlateRow[] = [];
  let pending: Plate | null = null;
  for (const p of list) {
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
