export const NAV = {
  hero: "hero",
  worship: "worship",
  pastor: "pastor",
  about: "about",
  ministries: "ministries",
  media: "media",
  gallery: "gallery",
} as const;

export type NavKey = keyof typeof NAV;

export const NAV_LABELS: Record<NavKey, string> = {
  hero: "홈",
  worship: "예배",
  pastor: "목사님",
  about: "교회소개",
  ministries: "사역",
  media: "설교영상",
  gallery: "오시는길",
};
