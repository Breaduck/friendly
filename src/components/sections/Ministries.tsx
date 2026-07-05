import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ministries } from "@/data/ministries";
import { NAV } from "@/lib/nav";
import Image from "next/image";

export function Ministries() {
  return (
    <Section id={NAV.ministries} aria-labelledby="ministries-heading" className="bg-white">
      <AnimatedSection>
        <Eyebrow>교회 사역</Eyebrow>
        <h2
          id="ministries-heading"
          className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4"
        >
          지역과 함께하는 핵심 사역
        </h2>
        <p className="text-lg text-muted leading-relaxed mb-16 max-w-lg">
          정다운교회는 교육·복지·문화 3대 비전을 바탕으로 지역 사회를 섬기고
          있습니다.
        </p>
      </AnimatedSection>

      <div className="space-y-8">
        {ministries.map((ministry, i) => (
          <AnimatedSection key={ministry.id} delay={i * 0.07}>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-400 ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* 이미지 — aspect-[4/3] 비율 고정 */}
              <div className={`relative ${i % 2 === 1 ? "[direction:ltr]" : ""}`}>
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-64">
                  <Image
                    src={ministry.image ?? "/images/church-worship.jpg"}
                    alt={ministry.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                    loading="lazy"
                  />
                </div>
              </div>

              {/* 텍스트 */}
              <div
                className={`p-10 md:p-12 flex flex-col justify-center bg-cream ${
                  i % 2 === 1 ? "[direction:ltr]" : ""
                }`}
              >
                {ministry.since && (
                  <p className="text-[11px] font-semibold text-accent tracking-widest uppercase mb-4">
                    {ministry.since}년 시작
                  </p>
                )}
                <h3 className="text-2xl font-bold text-ink mb-2 tracking-tight">
                  {ministry.name}
                </h3>
                <p className="text-accent font-medium mb-5 text-base">
                  {ministry.tagline}
                </p>
                <p className="text-charcoal/70 leading-loose text-base">
                  {ministry.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
