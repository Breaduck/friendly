import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getGalleryItems } from "@/lib/gallery-source";
import { church } from "@/data/church";
import { NAV } from "@/lib/nav";
import Image from "next/image";

export async function GalleryAndLocation() {
  const items = await getGalleryItems();

  return (
    <Section id={NAV.gallery} className="bg-cream" aria-labelledby="gallery-heading">
      {/* 갤러리 */}
      <AnimatedSection>
        <Eyebrow>갤러리</Eyebrow>
        <h2
          id="gallery-heading"
          className="text-4xl md:text-5xl font-bold text-ink tracking-[-0.025em] mb-16"
        >
          교회 사진
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
        {items.map((item, i) => (
          <AnimatedSection key={item.image} delay={i * 0.05}>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-sand group cursor-pointer">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
                loading="lazy"
              />
              {item.caption && (
                <div className="absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium leading-tight">
                    {item.caption}
                  </p>
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* 오시는 길 */}
      <div className="border-t border-sand pt-20">
        <AnimatedSection>
          <Eyebrow>오시는 길</Eyebrow>
          <h2
            id="location-heading"
            className="text-4xl md:text-5xl font-bold text-ink tracking-[-0.025em] mb-4"
          >
            찾아오시는 방법
          </h2>
          <p className="text-muted text-lg mb-12 max-w-xl">
            {church.nearestStation}에서 도보 {church.walkingMinutes}분 거리에
            위치하고 있습니다.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* 지도 placeholder */}
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden aspect-video bg-sand relative">
              <Image
                src="/images/map-placeholder.jpg"
                alt="정다운교회 위치 지도"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-sand/80">
                <div className="text-5xl mb-3">📍</div>
                <p className="text-charcoal font-semibold text-center px-4 mb-1">
                  {church.name}
                </p>
                <p className="text-sm text-muted text-center px-4 mb-6">
                  {church.addressFull}
                </p>
                <a
                  href={`https://map.kakao.com/link/search/${encodeURIComponent(church.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-deep transition-colors"
                >
                  카카오맵으로 보기
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* 주소 정보 */}
          <AnimatedSection delay={0.15}>
            <div className="space-y-4">
              <div className="bg-warm-white rounded-2xl p-8 border border-sand">
                <h3 className="font-bold text-ink text-lg mb-3">주소</h3>
                <p className="text-charcoal leading-relaxed">
                  {church.addressFull}
                </p>
              </div>
              <div className="bg-warm-white rounded-2xl p-8 border border-sand">
                <h3 className="font-bold text-ink text-lg mb-3">대중교통</h3>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center rounded bg-blue-600 text-white text-xs font-bold px-2 py-0.5 flex-shrink-0 mt-0.5">
                    지하철
                  </span>
                  <p className="text-sm text-charcoal leading-relaxed">
                    {church.nearestStation} 하차 후 도보{" "}
                    {church.walkingMinutes}분
                  </p>
                </div>
              </div>
              <div className="bg-warm-white rounded-2xl p-8 border border-sand">
                <h3 className="font-bold text-ink text-lg mb-3">연락처</h3>
                <div className="space-y-2 text-sm text-charcoal">
                  <p>
                    전화:{" "}
                    <a
                      href={`tel:${church.phone}`}
                      className="text-accent hover:underline"
                    >
                      {church.phone}
                    </a>
                  </p>
                  <p>
                    이메일:{" "}
                    <a
                      href={`mailto:${church.email}`}
                      className="text-accent hover:underline"
                    >
                      {church.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
}
