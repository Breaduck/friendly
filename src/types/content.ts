export type ServiceItem = {
  name: string;
  time: string;
  location: string;
  description?: string;
};

export type PhilosophyItem = {
  title: string;
  description: string;
};

export type HistoryItem = {
  year: string;
  title: string;
  description: string;
};

export type VisionItem = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

export type MinistryItem = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  since?: string;
  image?: string;
};

export type GalleryItem = {
  title: string;
  date: string;
  image: string;
  caption?: string;
  order: number;
};
