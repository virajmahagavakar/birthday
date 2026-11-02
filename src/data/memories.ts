import { allShravaniPhotos } from './photos';

export interface MemoryItem {
  id: string;
  image: string;
  title: string;
  caption: string;
  date?: string;
  location?: string;
  sticker?: string;
  personalNote?: string;
  category?: string;
  tilt: number;
}

export const memoriesData = {
  title: "Our Little Memories",
  heroHeading: "Some moments deserve a permanent place in our hearts.",
  subtitle: "A complete scrapbook collection of every single beautiful memory, smile, and moment together.",
  sectionTitle: "Every Picture Tells Our Story",
  sectionSubtitle: "37 treasured snapshots of laughter, warmth, and celebration.",
  bottomMessage: "And the best part? There are so many more memories waiting to be created with you.",
  btnNext: "Read Something From My Heart ❤️",

  // Film-strip highlights
  filmStrip: allShravaniPhotos.slice(0, 15).map((p, i) => ({
    id: `film-${i}`,
    image: p.src,
    title: p.caption,
    date: `Moment #${i + 1}`,
  })),

  // All 37 memories populated directly from user photos
  memories: allShravaniPhotos.map((photo, index) => ({
    id: photo.id,
    image: photo.src,
    title: photo.caption,
    caption: photo.subtitle || "A moment that brought warmth to my heart.",
    date: `Memory #${index + 1}`,
    location: "Special Corner of Life",
    sticker: photo.tag || "✨ Pure Magic",
    personalNote: `Every time I see this picture, I can't help but smile. You make every frame special, Shravani.`,
    category: photo.category || 'smiles',
    tilt: photo.tilt || (index % 2 === 0 ? -2 : 2),
  })) as MemoryItem[],
};
