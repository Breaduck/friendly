import type { HistoryItem, VisionItem } from "@/types/content";

export const historyItems: HistoryItem[] = [
  {
    year: "1971",
    title: "서울 신림동 개척",
    description:
      "서울대 앞 신림동(고시촌)에서 개척 설립. 고시 청년들을 위한 선교에 힘써왔습니다.",
  },
  {
    year: "2011",
    title: "안양시 석수동 신축 이전",
    description:
      "안양시 석수동에 교회를 신축 이전하여 지역 사회를 향한 새로운 도약을 시작했습니다.",
  },
  {
    year: "2015",
    title: "벧엘노인요양원 개원",
    description:
      "어르신들을 내 부모처럼 섬기는 노인 복지 사역, 벧엘노인요양원을 개원했습니다.",
  },
  {
    year: "현재",
    title: "교육·복지·문화 3대 비전 사역",
    description:
      "3대 핵심 비전을 중심으로 지역과 함께하는 교회로 성장하며 주님의 사랑을 전하고 있습니다.",
  },
];

export const visions: VisionItem[] = [
  {
    id: "education",
    title: "교육",
    icon: "📚",
    description:
      "다음 세대를 향한 신앙 교육과 작은도서관을 통한 지역 교육 문화 사역",
  },
  {
    id: "welfare",
    title: "복지",
    icon: "🤝",
    description:
      "벧엘노인요양원을 통해 어르신들을 섬기며 지역 사회의 필요를 채우는 복지 사역",
  },
  {
    id: "culture",
    title: "문화",
    icon: "☕",
    description:
      "카페 운영과 문화 프로그램으로 지역 주민과 교회가 자연스럽게 만나는 문화 사역",
  },
];
