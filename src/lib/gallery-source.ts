import { hardcodedGallery } from "@/data/gallery";
import type { GalleryItem } from "@/types/content";

export type { GalleryItem };

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return [...hardcodedGallery].sort(
    (a, b) => a.order - b.order || b.date.localeCompare(a.date)
  );
}
