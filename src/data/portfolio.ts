// ============================================================================
// Bluetigercub — Portfolio Data
// ============================================================================

export interface ProjectImage {
  src: string;
  alt: string;
  layoutHint?: 'full' | 'half' | 'small' | 'offset';
}

export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  year: number;
  client?: string;
  role: string;
  tools: string[];
  summary: string;
  description: string[];
  pullQuote?: string;
  coverImage: string;
  images: ProjectImage[];
  accent?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  issue: string;
  email: string;
  socials: Array<{ platform: string; url: string }>;
  aboutShort: string;
}

export interface About {
  name: string;
  portraitImage: string;
  bio: string[];
  disciplines: string[];
  colophon: string;
}

export const colors = {
  cream: '#F7F5F0',
  white: '#FFFFFF',
  ink: '#141414',
  border: '#E8E8E8',
  blue: '#1A4BE8',
  pink: '#FF2D78',
  magenta: '#C8186C',
  green: '#3DF03D',
  orange: '#FF5A1F',
  blush: '#F3D9DC',
  sky: '#BFD4E8',
  paleYellow: '#FFFACD',
} as const;

const pic = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const portfolio: Project[] = [
  {
    id: 'halcyon-press',
    index: '01',
    title: 'Halcyon Press',
    category: 'Brand Identity',
    year: 2025,
    client: 'Halcyon Press',
    role: 'Art Direction, Identity Design',
    tools: ['Figma', 'Glyphs', 'InDesign'],
    summary: 'A wordmark and editorial system for an independent poetry publisher.',
    description: [
      'Halcyon Press needed an identity that felt literary without slipping into nostalgia. We built the system around a single high-contrast serif wordmark, paired with a flexible grid that lets each book series carry its own colour while staying unmistakably Halcyon.',
      'The result is a kit of parts — covers, spine treatments, a recurring index motif — that the in-house team can extend without a designer in the room. Restraint was the brief: let the writing be loud, let the design hold the door open.',
    ],
    pullQuote: 'Let the writing be loud — the design holds the door open.',
    coverImage: pic('halcyon-cover', 1200, 1500),
    images: [
      { src: pic('halcyon-1', 1600, 900), alt: 'Halcyon wordmark on cream stock', layoutHint: 'full' },
      { src: pic('halcyon-2', 800, 1000), alt: 'Book spine series', layoutHint: 'offset' },
      { src: pic('halcyon-3', 800, 800), alt: 'Index page detail', layoutHint: 'small' },
      { src: pic('halcyon-4', 1200, 800), alt: 'Cover system across four titles', layoutHint: 'half' },
    ],
    accent: colors.blue,
  },
  {
    id: 'nocturne-festival',
    index: '02',
    title: 'Nocturne',
    category: 'Art Direction',
    year: 2024,
    client: 'Nocturne Sound & Light Festival',
    role: 'Art Direction, Motion',
    tools: ['After Effects', 'Cinema 4D', 'Figma'],
    summary: 'Identity and motion language for a night-time arts festival.',
    description: [
      'Nocturne runs from dusk to dawn, so the identity had to live in the dark. We designed a system that reads as well projected onto a building as it does printed on a wristband — built on a single electric blue and a typographic logo that fragments and reassembles in motion.',
      'The motion language borrows from long-exposure photography: type smears, light trails, and a slow bloom that mirrors the festival's after-hours pace. Print materials hold still; everything on screen breathes.',
    ],
    pullQuote: 'An identity built to live in the dark.',
    coverImage: pic('nocturne-cover', 1200, 1500),
    images: [
      { src: pic('nocturne-1', 1600, 1000), alt: 'Projection on festival facade', layoutHint: 'full' },
      { src: pic('nocturne-2', 900, 1200), alt: 'Wristband and pass', layoutHint: 'offset' },
      { src: pic('nocturne-3', 1200, 800), alt: 'Motion frames', layoutHint: 'half' },
      { src: pic('nocturne-4', 600, 600), alt: 'Logo fragment detail', layoutHint: 'small' },
      { src: pic('nocturne-5', 1400, 900), alt: 'Stage signage at night', layoutHint: 'full' },
    ],
    accent: colors.blue,
  },
  {
    id: 'meridian-type',
    index: '03',
    title: 'Meridian',
    category: 'Type Design',
    year: 2024,
    role: 'Type Design, Specimen Design',
    tools: ['Glyphs', 'RoboFont', 'InDesign'],
    summary: 'A warm display serif drawn across six weights, with a printed specimen.',
    description: [
      'Meridian started as a single headline cut and grew into a six-weight family. The brief I set myself: a serif with humanist warmth that still holds together at billboard scale — generous apertures, a low contrast, and italics with real handwritten energy.',
      'The specimen book is the project's argument made physical. Each weight gets a spread that pushes it to an extreme, so a designer can see exactly where Thin breaks and where Bold starts to shout.',
    ],
    pullQuote: 'A serif with humanist warmth that still holds at billboard scale.',
    coverImage: pic('meridian-cover', 1200, 1500),
    images: [
      { src: pic('meridian-1', 1000, 1400), alt: 'Specimen cover', layoutHint: 'offset' },
      { src: pic('meridian-2', 1600, 900), alt: 'Weight comparison spread', layoutHint: 'full' },
      { src: pic('meridian-3', 800, 800), alt: 'Glyph detail', layoutHint: 'small' },
      { src: pic('meridian-4', 1200, 800), alt: 'Italic showing', layoutHint: 'half' },
    ],
    accent: colors.orange,
  },
  {
    id: 'tidal-app',
    index: '04',
    title: 'Tidal',
    category: 'Product / UI',
    year: 2025,
    client: 'Tidal Health',
    role: 'Product Design, Design System',
    tools: ['Figma', 'Framer', 'Principle'],
    summary: 'A calm, editorial interface for a sleep and recovery app.',
    description: [
      'Most health apps shout numbers at you. Tidal does the opposite — it treats your data like a quiet morning paper. We built a soft, editorial interface where charts read like illustrations and the typography carries the same care you'd expect from print.',
      'The design system runs on generous spacing, a restrained pastel palette, and one accent that only appears when the app has something genuinely worth your attention. Less alarm, more attention.',
    ],
    pullQuote: 'It treats your data like a quiet morning paper.',
    coverImage: pic('tidal-cover', 1200, 1500),
    images: [
      { src: pic('tidal-1', 900, 1600), alt: 'App home screen', layoutHint: 'offset' },
      { src: pic('tidal-2', 900, 1600), alt: 'Sleep chart screen', layoutHint: 'small' },
      { src: pic('tidal-3', 1600, 1000), alt: 'Design system overview', layoutHint: 'full' },
      { src: pic('tidal-4', 1200, 800), alt: 'Component library', layoutHint: 'half' },
    ],
    accent: colors.sky,
  },
  {
    id: 'concrete-poetry',
    index: '05',
    title: 'Concrete / Poetry',
    category: 'Editorial',
    year: 2023,
    client: 'Kunsthalle Bern (self-initiated)',
    role: 'Editorial Design, Typesetting',
    tools: ['InDesign', 'Risograph', 'Figma'],
    summary: 'A risograph-printed anthology mapping concrete poetry to brutalist buildings.',
    description: [
      'A self-initiated book pairing mid-century concrete poetry with the brutalist architecture of the same era. The typesetting treats text as structure — words become walls, stanzas become floor plans — printed in two-colour risograph for that slightly-off, mechanical bite.',
      'Every spread is set by hand. The grid is strict, the deviations deliberate. It's the project where I learned that a constraint, chosen well, is the most generous gift you can give yourself.',
    ],
    pullQuote: 'Words become walls; stanzas become floor plans.',
    coverImage: pic('concrete-cover', 1200, 1500),
    images: [
      { src: pic('concrete-1', 1600, 1000), alt: 'Open risograph spread', layoutHint: 'full' },
      { src: pic('concrete-2', 800, 1000), alt: 'Two-colour overprint detail', layoutHint: 'offset' },
      { src: pic('concrete-3', 800, 800), alt: 'Cover close-up', layoutHint: 'small' },
      { src: pic('concrete-4', 1200, 900), alt: 'Stack of printed copies', layoutHint: 'half' },
      { src: pic('concrete-5', 1400, 900), alt: 'Type-as-structure spread', layoutHint: 'full' },
    ],
    accent: colors.pink,
  },
  {
    id: 'verdant-studio',
    index: '06',
    title: 'Verdant',
    category: 'Brand Identity',
    year: 2025,
    client: 'Verdant Landscape Studio',
    role: 'Identity, Art Direction',
    tools: ['Figma', 'Glyphs', 'Photoshop'],
    summary: 'A living identity for a landscape architecture practice.',
    description: [
      'Verdant designs public gardens, so their identity needed to grow. We built a mark that behaves like a planted grid — a flexible armature that fills in differently for each project, the way a planting plan matures over seasons.',
      'The palette is anchored in a single fluoro green used with discipline: a flash of it on a business card, a full field of it on a hoarding. Photography stays documentary and plain, letting the green do the talking.',
    ],
    pullQuote: 'A mark that behaves like a planted grid.',
    coverImage: pic('verdant-cover', 1200, 1500),
    images: [
      { src: pic('verdant-1', 1600, 900), alt: 'Site hoarding in fluoro green', layoutHint: 'full' },
      { src: pic('verdant-2', 900, 1200), alt: 'Business card', layoutHint: 'offset' },
      { src: pic('verdant-3', 800, 800), alt: 'Mark construction', layoutHint: 'small' },
      { src: pic('verdant-4', 1200, 800), alt: 'Documentary garden photography', layoutHint: 'half' },
    ],
    accent: colors.green,
  },
];

export const config: SiteConfig = {
  name: 'Bluetigercub',
  tagline: 'Design, art direction & typography',
  issue: 'Issue 03 — 2025',
  email: 'hello@bluetigercub.com',
  socials: [
    { platform: 'Instagram', url: 'https://instagram.com/bluetigercub' },
    { platform: 'Are.na', url: 'https://are.na/bluetigercub' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/bluetigercub' },
  ],
  aboutShort:
    'Bluetigercub is the studio practice of a designer working across identity, editorial, and type.',
};

export const about: About = {
  name: 'Bluetigercub',
  portraitImage: pic('portrait', 1000, 1250),
  bio: [
    'I'm a graphic designer working at the seam between editorial and brand. I care about the things most people scroll past — a caption set with intent, a margin that breathes, a colour used once and used well.',
    'My practice moves between identity systems, printed matter, type design, and the occasional screen. Whatever the medium, the method is the same: find the structure, then find the one place worth breaking it.',
    'Before going independent I worked in studios across editorial publishing and cultural branding. I'm based wherever the work is, and currently taking on select commissions.',
  ],
  disciplines: [
    'Brand Identity',
    'Editorial Design',
    'Type Design',
    'Art Direction',
    'Product / UI',
  ],
  colophon:
    'Set in Bookmania & Rank · Built with React + Tailwind · Designed & built by Bluetigercub · © 2025',
};
