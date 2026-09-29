import type { Lang } from "../i18n";

/** A string in all site languages. */
type L = { en: string; de: string; es: string };

/**
 * One photograph. `size` drives the layout: 'wide' runs the full width of the
 * page, 'half' sits next to the neighbouring 'half' plate (two per row, same
 * height). The list below is in reading order.
 */
export interface Plate {
  src: string;
  w: number;
  h: number;
  size: "wide" | "half";
  place: L;
  title: L;
  alt: L;
}

const A = "/images/photography/close-to-home/";
const J = "/images/photography/japan/";
const AUSTRIA: L = { en: "Austria", de: "Österreich", es: "Austria" };
const JAPAN: L = { en: "Japan", de: "Japan", es: "Japón" };

export const photos: Plate[] = [
  {
    src: J + "hero-mountain-cabin.jpg",
    w: 1672,
    h: 941,
    size: "wide",
    place: JAPAN,
    title: { en: "The mountain keeps watch", de: "Der Berg hält Wache", es: "La montaña vigila" },
    alt: {
      en: "A conical mountain peak above a dark mountain cabin",
      de: "Ein kegelförmiger Berggipfel über einer dunklen Berghütte",
      es: "Un pico cónico de montaña sobre una oscura cabaña de montaña",
    },
  },
  {
    src: A + "02-basilica-lane.webp",
    w: 1333,
    h: 2000,
    size: "half",
    place: AUSTRIA,
    title: { en: "Closer to the sky", de: "Dem Himmel näher", es: "Más cerca del cielo" },
    alt: {
      en: "A cobblestone lane climbing to a pink baroque basilica, an old street lamp in the foreground",
      de: "Eine Kopfsteinpflastergasse, die zu einer rosa Barockbasilika hinaufführt, im Vordergrund eine alte Straßenlaterne",
      es: "Un callejón empedrado que sube hacia una basílica barroca rosada, con un antiguo farol en primer plano",
    },
  },
  {
    src: A + "03-main-street.webp",
    w: 1699,
    h: 2000,
    size: "half",
    place: AUSTRIA,
    title: {
      en: "Colours the shadow spared",
      de: "Farben, die der Schatten verschonte",
      es: "Colores que la sombra perdonó",
    },
    alt: {
      en: "A quiet village street lined with yellow, green and pastel houses under a blue sky",
      de: "Eine ruhige Dorfstraße mit gelben, grünen und pastellfarbenen Häusern unter blauem Himmel",
      es: "Una calle tranquila de pueblo bordeada de casas amarillas, verdes y pastel bajo un cielo azul",
    },
  },
  {
    src: J + "mountain-night-stars.jpg",
    w: 1920,
    h: 1080,
    size: "half",
    place: JAPAN,
    title: {
      en: "Night settles on the mountain",
      de: "Die Nacht legt sich auf den Berg",
      es: "La noche se posa sobre la montaña",
    },
    alt: {
      en: "The same mountain peak at night under a field of stars",
      de: "Derselbe Berggipfel bei Nacht unter einem Sternenhimmel",
      es: "El mismo pico de montaña de noche, bajo un manto de estrellas",
    },
  },
  {
    src: J + "sunset-coast.jpg",
    w: 2000,
    h: 1125,
    size: "half",
    place: JAPAN,
    title: { en: "The sea takes the sun", de: "Das Meer nimmt die Sonne", es: "El mar se lleva el sol" },
    alt: {
      en: "Sunset over a rocky coastline with waves",
      de: "Sonnenuntergang über einer felsigen Küste mit Wellen",
      es: "Atardecer sobre una costa rocosa con olas",
    },
  },
  {
    src: A + "01-valley.webp",
    w: 2000,
    h: 1333,
    size: "wide",
    place: AUSTRIA,
    title: {
      en: "The valley, held in light",
      de: "Das Tal, im Licht gehalten",
      es: "El valle, sostenido por la luz",
    },
    alt: {
      en: "Rolling green hills and a wide valley under a sky streaked with cloud",
      de: "Sanfte grüne Hügel und ein weites Tal unter einem von Wolken durchzogenen Himmel",
      es: "Colinas verdes onduladas y un amplio valle bajo un cielo surcado de nubes",
    },
  },
  {
    src: A + "04-tower-and-lamp.webp",
    w: 1333,
    h: 2000,
    size: "half",
    place: AUSTRIA,
    title: {
      en: "Two ways to hold the light",
      de: "Zwei Arten, das Licht zu halten",
      es: "Dos formas de sostener la luz",
    },
    alt: {
      en: "A church tower with an onion dome against a deep blue sky, a street lamp in the foreground",
      de: "Ein Kirchturm mit Zwiebelhaube vor tiefblauem Himmel, im Vordergrund eine Straßenlaterne",
      es: "Una torre de iglesia con cúpula de cebolla contra un cielo azul profundo, con un farol en primer plano",
    },
  },
  {
    src: A + "05-evening-lane.webp",
    w: 1517,
    h: 2000,
    size: "half",
    place: AUSTRIA,
    title: { en: "Last light on the lane", de: "Letztes Licht auf der Gasse", es: "Última luz en el callejón" },
    alt: {
      en: "A red van parked under trees on a narrow lane beside a timber-clad garage",
      de: "Ein roter Kastenwagen unter Bäumen an einer schmalen Gasse neben einer holzverkleideten Garage",
      es: "Una camioneta roja estacionada bajo árboles en un callejón angosto, junto a un garaje revestido en madera",
    },
  },
  {
    src: J + "mountain-range-birch.jpg",
    w: 2000,
    h: 1125,
    size: "wide",
    place: JAPAN,
    title: {
      en: "Through the birches, a range",
      de: "Durch die Birken, ein Gebirge",
      es: "Entre los abedules, una cordillera",
    },
    alt: {
      en: "A wide mountain range seen through birch trees",
      de: "Eine weite Bergkette, durch Birken gesehen",
      es: "Una amplia cordillera vista entre abedules",
    },
  },
  {
    src: A + "06-beech-forest.webp",
    w: 1333,
    h: 2000,
    size: "half",
    place: AUSTRIA,
    title: { en: "A cathedral of beech", de: "Eine Kathedrale aus Buchen", es: "Una catedral de hayas" },
    alt: {
      en: "Tall, slim beech trunks in a bright green forest",
      de: "Hohe, schlanke Buchenstämme in einem hellgrünen Wald",
      es: "Troncos de haya altos y delgados en un bosque de verde intenso",
    },
  },
  {
    src: A + "13-cabin.webp",
    w: 1333,
    h: 2000,
    size: "half",
    place: AUSTRIA,
    title: {
      en: "A small warmth among the spruce",
      de: "Ein wenig Wärme zwischen Fichten",
      es: "Un poco de calidez entre los abetos",
    },
    alt: {
      en: "A wooden cabin among dark spruce trunks and green undergrowth",
      de: "Eine Holzhütte zwischen dunklen Fichtenstämmen und grünem Unterholz",
      es: "Una cabaña de madera entre troncos oscuros de abeto y maleza verde",
    },
  },
  {
    src: A + "14-road-willow.webp",
    w: 1333,
    h: 2000,
    size: "half",
    place: AUSTRIA,
    title: { en: "Home before dark", de: "Heim vor der Dunkelheit", es: "A casa antes del anochecer" },
    alt: {
      en: "A gravel road leading toward a barn, framed by hanging willow branches, under a sky fading from blue to orange",
      de: "Ein Feldweg zu einer Scheune, gerahmt von herabhängenden Weidenzweigen, unter einem von Blau zu Orange verblassenden Himmel",
      es: "Un camino de ripio hacia un granero, enmarcado por ramas colgantes de sauce, bajo un cielo que se apaga de azul a naranja",
    },
  },
  {
    src: J + "mountain-range-muted.jpg",
    w: 2000,
    h: 1330,
    size: "half",
    place: JAPAN,
    title: { en: "Morning, in a low voice", de: "Morgen, mit leiser Stimme", es: "Mañana, en voz baja" },
    alt: {
      en: "A wide mountain range in muted morning tones",
      de: "Eine weite Bergkette in gedämpften Morgenfarben",
      es: "Una amplia cordillera en tonos apagados de mañana",
    },
  },
  {
    src: J + "lake-pagoda-snow.jpg",
    w: 2000,
    h: 1339,
    size: "half",
    place: JAPAN,
    title: { en: "Red against the snow", de: "Rot im Schnee", es: "Rojo contra la nieve" },
    alt: {
      en: "A lake with a red pagoda and footprints in the snow",
      de: "Ein See mit einer roten Pagode und Fußspuren im Schnee",
      es: "Un lago con una pagoda roja y huellas en la nieve",
    },
  },
  {
    src: A + "08-hunting-stand.webp",
    w: 1600,
    h: 2000,
    size: "half",
    place: AUSTRIA,
    title: { en: "The watcher in the green", de: "Der Wächter im Grün", es: "El vigía entre el verde" },
    alt: {
      en: "A hunting stand deep in a sunlit spruce forest",
      de: "Ein Hochstand tief in einem sonnendurchfluteten Fichtenwald",
      es: "Un puesto de caza en lo profundo de un bosque de abetos iluminado por el sol",
    },
  },
  {
    src: A + "09-carved-beech.webp",
    w: 1333,
    h: 2000,
    size: "half",
    place: AUSTRIA,
    title: { en: "Someone was here", de: "Jemand war hier", es: "Alguien estuvo aquí" },
    alt: {
      en: "Orange lettering carved into a grey beech trunk",
      de: "Orange Schrift, in einen grauen Buchenstamm geschnitzt",
      es: "Letras naranjas talladas en un tronco gris de haya",
    },
  },
  {
    src: A + "07-castle-dusk.webp",
    w: 2000,
    h: 1377,
    size: "half",
    place: AUSTRIA,
    title: { en: "Three towers, one sky", de: "Drei Türme, ein Himmel", es: "Tres torres, un cielo" },
    alt: {
      en: "A castle with three towers in silhouette against a deep orange sunset sky",
      de: "Ein Schloss mit drei Türmen als Silhouette vor tiefrotem Sonnenuntergangshimmel",
      es: "Un castillo con tres torres en silueta contra un cielo de atardecer naranja intenso",
    },
  },
  {
    src: A + "12-contrail.webp",
    w: 2000,
    h: 1383,
    size: "wide",
    place: AUSTRIA,
    title: { en: "Someone else's journey", de: "Die Reise von jemand anderem", es: "El viaje de otra persona" },
    alt: {
      en: "A white vapour trail crossing a deep blue sky, with the aircraft at its tip",
      de: "Ein weißer Kondensstreifen quert den tiefblauen Himmel, an seiner Spitze das Flugzeug",
      es: "Una estela blanca cruzando un cielo azul profundo, con el avión en su punta",
    },
  },
  {
    src: J + "seagull-dock.jpg",
    w: 2000,
    h: 1330,
    size: "half",
    place: JAPAN,
    title: { en: "The dock's only guest", de: "Der einzige Gast am Steg", es: "El único huésped del muelle" },
    alt: {
      en: "A seagull resting on a weathered dock post over a lake",
      de: "Eine Möwe ruht auf einem verwitterten Stegpfosten über einem See",
      es: "Una gaviota posada sobre un poste desgastado del muelle, sobre un lago",
    },
  },
  {
    src: J + "sunset-lake.jpg",
    w: 2000,
    h: 1330,
    size: "half",
    place: JAPAN,
    title: {
      en: "Still water, last light",
      de: "Stilles Wasser, letztes Licht",
      es: "Agua quieta, última luz",
    },
    alt: {
      en: "Sunset over still water with a lamppost silhouette",
      de: "Sonnenuntergang über stillem Wasser mit der Silhouette einer Laterne",
      es: "Atardecer sobre agua quieta con la silueta de un farol",
    },
  },
  {
    src: J + "monument-mountain.jpg",
    w: 2000,
    h: 1330,
    size: "wide",
    place: JAPAN,
    title: { en: "Stone remembers", de: "Der Stein erinnert sich", es: "La piedra recuerda" },
    alt: {
      en: "A stone monument with a mountain in the background",
      de: "Ein Steindenkmal mit einem Berg im Hintergrund",
      es: "Un monumento de piedra con una montaña de fondo",
    },
  },
  {
    src: A + "10-rally-car.webp",
    w: 2000,
    h: 2000,
    size: "half",
    place: AUSTRIA,
    title: { en: "Resting between the bends", de: "Rast zwischen den Kurven", es: "Descanso entre las curvas" },
    alt: {
      en: "A white rally car pulled over at the edge of a forest road",
      de: "Ein weißes Rallyeauto am Rand einer Waldstraße",
      es: "Un auto de rally blanco detenido al borde de un camino forestal",
    },
  },
  {
    src: A + "11-road-to-the-castle.webp",
    w: 2000,
    h: 2000,
    size: "half",
    place: AUSTRIA,
    title: {
      en: "The road toward the old walls",
      de: "Die Straße zu den alten Mauern",
      es: "El camino hacia las murallas antiguas",
    },
    alt: {
      en: "A road through the valley towards a castle ruin on a wooded hill",
      de: "Eine Straße durch das Tal auf eine Burgruine auf einem bewaldeten Hügel zu",
      es: "Un camino que atraviesa el valle hacia las ruinas de un castillo en una colina boscosa",
    },
  },
  {
    src: J + "night-sky-trees.jpg",
    w: 1920,
    h: 1080,
    size: "half",
    place: JAPAN,
    title: {
      en: "A glow behind the trees",
      de: "Ein Glühen hinter den Bäumen",
      es: "Un resplandor detrás de los árboles",
    },
    alt: {
      en: "A warm glow in the night sky above tree silhouettes",
      de: "Ein warmer Schein am Nachthimmel über Baumsilhouetten",
      es: "Un resplandor cálido en el cielo nocturno sobre siluetas de árboles",
    },
  },
  {
    src: J + "canal-seagulls.jpg",
    w: 1080,
    h: 1920,
    size: "half",
    place: JAPAN,
    title: { en: "Grey hour at the canal", de: "Graue Stunde am Kanal", es: "Hora gris en el canal" },
    alt: {
      en: "A canal-side warehouse building with seagulls on a lamppost",
      de: "Ein Lagerhaus am Kanal mit Möwen auf einer Laterne",
      es: "Un depósito junto al canal, con gaviotas sobre un farol",
    },
  },
  {
    src: J + "foggy-window.jpg",
    w: 2000,
    h: 1125,
    size: "wide",
    place: JAPAN,
    title: { en: "The window breathes", de: "Das Fenster atmet", es: "La ventana respira" },
    alt: {
      en: "A foggy window looking out over a quiet street",
      de: "Ein beschlagenes Fenster mit Blick auf eine ruhige Straße",
      es: "Una ventana empañada que mira hacia una calle tranquila",
    },
  },
];

export type PlateRow = { kind: "wide" | "pair" | "single"; plates: Plate[] };

/** Group plates into gallery rows: 'wide' plates alone, consecutive 'half' plates in pairs, a leftover 'half' centred. */
export function toRows(list: Plate[]): PlateRow[] {
  const rows: PlateRow[] = [];
  let pending: Plate | null = null;
  for (const p of list) {
    if (p.size === "wide") {
      if (pending) {
        rows.push({ kind: "single", plates: [pending] });
        pending = null;
      }
      rows.push({ kind: "wide", plates: [p] });
    } else if (pending) {
      rows.push({ kind: "pair", plates: [pending, p] });
      pending = null;
    } else {
      pending = p;
    }
  }
  if (pending) rows.push({ kind: "single", plates: [pending] });
  return rows;
}

export const t = (v: L, lang: Lang) => v[lang];
