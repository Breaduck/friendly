import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { church } from "@/data/church";
import { NAV } from "@/lib/nav";

export function SermonMedia() {
  return (
    <Section id={NAV.media} className="bg-white" aria-labelledby="media-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* 텍스트 */}
        <AnimatedSection>
          <Eyebrow>설교 & 미디어</Eyebrow>
          <h2
            id="media-heading"
            className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6"
          >
            언제 어디서나
            <br />
            말씀을 들으세요
          </h2>
          <p className="text-charcoal/70 leading-loose mb-8">
            정다운교회 공식 유튜브 채널에서 매주 주일 예배 실황, 담임목사님
            말씀, 찬양 영상을 만나보실 수 있습니다. 하나님의 말씀을 통해
            위로를 얻고, 성도 간의 따뜻한 교제가 있는 정다운 공동체에
            온라인으로도 함께해 주세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={church.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-red-600 hover:bg-red-700 px-7 py-3.5 text-sm font-semibold text-white transition-colors"
            >
              {/* YouTube 아이콘 */}
              <svg width="20" height="14" viewBox="0 0 20 14" fill="currentColor">
                <path d="M19.582 2.186A2.506 2.506 0 0 0 17.818.422C16.254 0 10 0 10 0S3.746 0 2.182.422A2.506 2.506 0 0 0 .418 2.186C0 3.75 0 7 0 7s0 3.25.418 4.814a2.506 2.506 0 0 0 1.764 1.764C3.746 14 10 14 10 14s6.254 0 7.818-.422a2.506 2.506 0 0 0 1.764-1.764C20 10.25 20 7 20 7s0-3.25-.418-4.814zM8 10V4l5.2 3L8 10z"/>
              </svg>
              유튜브 채널 바로가기
            </a>
            <a
              href={church.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sand px-7 py-3.5 text-sm font-semibold text-charcoal hover:border-accent hover:text-accent transition-colors"
            >
              지난 설교 말씀 보기
            </a>
          </div>
        </AnimatedSection>

        {/* 유튜브 미리보기 카드 */}
        <AnimatedSection delay={0.1}>
          <a
            href={church.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
          >
            {/* 썸네일 영역 */}
            <div className="relative bg-gray-900 aspect-video flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-gray-900" />
              {/* 재생 버튼 */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-500 flex items-center justify-center transition-colors shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/80 text-sm font-medium">정다운교회 유튜브 채널</p>
                <p className="text-white/50 text-xs">@JungDownChurch_AnYang</p>
              </div>
            </div>

            {/* 채널 정보 */}
            <div className="bg-cream px-6 py-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="10" viewBox="0 0 20 14" fill="white">
                  <path d="M19.582 2.186A2.506 2.506 0 0 0 17.818.422C16.254 0 10 0 10 0S3.746 0 2.182.422A2.506 2.506 0 0 0 .418 2.186C0 3.75 0 7 0 7s0 3.25.418 4.814a2.506 2.506 0 0 0 1.764 1.764C3.746 14 10 14 10 14s6.254 0 7.818-.422a2.506 2.506 0 0 0 1.764-1.764C20 10.25 20 7 20 7s0-3.25-.418-4.814zM8 10V4l5.2 3L8 10z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-ink text-sm">정다운교회 — 안양</p>
                <p className="text-muted text-xs mt-0.5">매주 주일 예배 실황 · 담임목사 말씀 · 찬양</p>
              </div>
              <div className="ml-auto">
                <span className="text-xs font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  구독하기
                </span>
              </div>
            </div>
          </a>
        </AnimatedSection>
      </div>
    </Section>
  );
}
