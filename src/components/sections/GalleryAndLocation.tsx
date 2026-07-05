import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { church } from "@/data/church";
import { NAV } from "@/lib/nav";
import Image from "next/image";

export function GalleryAndLocation() {
  return (
    <Section id={NAV.gallery} className="bg-cream" aria-labelledby="gallery-heading">
      {/* 대표 사진 2장 */}
      <AnimatedSection>
        <Eyebrow>갤러리</Eyebrow>
        <h2
          id="gallery-heading"
          className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-14"
        >
          교회 사진
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-28">
        {/* 큰 사진 — 예배 */}
        <AnimatedSection className="md:col-span-3">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <Image
              src="/images/pck-5.jpg"
              alt="정다운교회 사역"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              unoptimized
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-6">
              <p className="text-white font-semibold text-sm">교회 사역</p>
              <p className="text-white/70 text-xs mt-0.5">지역과 함께하는 정다운교회</p>
            </div>
          </div>
        </AnimatedSection>

        {/* 오른쪽 컬럼 */}
        <div className="md:col-span-2 flex flex-col gap-5">
          {/* 목사님 사진 */}
          <AnimatedSection delay={0.06} className="flex-1">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/pck-4.jpg"
                alt="이종운 담임목사"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
                unoptimized
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-5">
                <p className="text-white font-semibold text-sm">이종운 담임목사</p>
              </div>
            </div>
          </AnimatedSection>

          {/* 벧엘요양원 */}
          <AnimatedSection delay={0.12} className="flex-1">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/pck-4.jpg"
                alt="벧엘노인요양원"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                unoptimized
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-5">
                <p className="text-white font-semibold text-sm">벧엘노인요양원</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 오시는 길 */}
      <div className="border-t border-sand pt-20">
        <AnimatedSection>
          <Eyebrow>오시는 길</Eyebrow>
          <h2
            id="location-heading"
            className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4"
          >
            찾아오시는 방법
          </h2>
          <p className="text-muted leading-relaxed mb-12 max-w-lg">
            {church.nearestStation}에서 도보 {church.walkingMinutes}분 거리입니다.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* 지도 카드 */}
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
              <div className="aspect-video flex flex-col items-center justify-center p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="font-bold text-ink mb-1">{church.name}</p>
                <p className="text-sm text-muted mb-8 leading-relaxed">{church.addressFull}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {/* 네이버 지도 */}
                  <a
                    href={church.naverMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#03C75A] hover:bg-[#02b351] px-6 py-2.5 text-sm font-semibold text-white transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/>
                    </svg>
                    네이버지도
                  </a>
                  {/* 카카오맵 */}
                  <a
                    href={`https://map.kakao.com/link/search/${encodeURIComponent(church.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#FEE500] hover:bg-[#f0d800] px-6 py-2.5 text-sm font-semibold text-[#3C1E1E] transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3C6.477 3 2 6.813 2 11.5c0 2.967 1.73 5.572 4.33 7.153L5.2 21.63a.5.5 0 00.724.534l4.07-2.408A11.8 11.8 0 0012 20c5.523 0 10-3.813 10-8.5S17.523 3 12 3z"/>
                    </svg>
                    카카오맵
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 상세 정보 */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-4">
              {[
                {
                  label: "주소",
                  content: church.addressFull,
                },
                {
                  label: "대중교통",
                  content: `${church.nearestStation} 하차 후 도보 ${church.walkingMinutes}분`,
                  badge: "지하철",
                },
                {
                  label: "연락처",
                  content: null,
                  phone: church.phone,
                  email: church.email,
                },
              ].map(({ label, content, badge, phone, email }) => (
                <div key={label} className="bg-white rounded-2xl px-8 py-6 shadow-sm">
                  <h3 className="text-sm font-bold text-ink mb-3">{label}</h3>
                  {badge && (
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center rounded-lg bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 flex-shrink-0 mt-0.5">
                        {badge}
                      </span>
                      <p className="text-sm text-charcoal/75 leading-relaxed">{content}</p>
                    </div>
                  )}
                  {!badge && content && (
                    <p className="text-sm text-charcoal/75 leading-relaxed">{content}</p>
                  )}
                  {phone && (
                    <div className="space-y-1.5">
                      <p className="text-sm text-charcoal/75">
                        전화:{" "}
                        <a href={`tel:${phone}`} className="text-accent hover:underline">
                          {phone}
                        </a>
                      </p>
                      <p className="text-sm text-charcoal/75">
                        이메일:{" "}
                        <a href={`mailto:${email}`} className="text-accent hover:underline">
                          {email}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
}
