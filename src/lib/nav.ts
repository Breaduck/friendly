export const NAV = {
  hero: "hero",
  about: "about",
  pastor: "pastor",
  ministries: "ministries",
  worship: "worship",
  media: "media",
  gallery: "gallery",
} as const;

export type NavKey = keyof typeof NAV;

export const NAV_LABELS: Record<NavKey, string> = {
  hero: "홈",
  about: "교회소개",
  pastor: "목사님 인사말",
  ministries: "사역",
  worship: "예배",
  media: "유튜브",
  gallery: "오시는길",
};
