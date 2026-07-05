import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ministries } from "@/data/ministries";
import { NAV } from "@/lib/nav";
import Image from "next/image";

export function Ministries() {
  return (
    <Section id={NAV.ministries} aria-labelledby="ministries-heading">
      <AnimatedSection>
        <Eyebrow>교회 사역</Eyebrow>
        <h2
          id="ministries-heading"
          className="text-4xl md:text-5xl font-bold text-ink tracking-[-0.025em] mb-4"
        >
          지역과 함께하는
          <br />
          핵심 사역
        </h2>
        <p className="text-muted text-lg mb-16 max-w-xl leading-relaxed">
          정다운교회는 교육·복지·문화 3대 비전을 바탕으로 지역 사회를 섬기고
          있습니다.
        </p>
      </AnimatedSection>

      <div className="space-y-8">
        {ministries.map((ministry, i) => (
          <AnimatedSection key={ministry.id} delay={i * 0.08}>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-sand hover:shadow-2xl transition-shadow duration-500 ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* 이미지 */}
              <div
                className={`relative aspect-video md:aspect-auto md:min-h-72 bg-cream ${
                  i % 2 === 1 ? "[direction:ltr]" : ""
                }`}
              >
                <Image
                  src={ministry.image ?? "/images/placeholder.jpg"}
                  alt={ministry.name}
                  fill
                  className="object-cover"
                  unoptimized
                  loading="lazy"
                />
              </div>

              {/* 내용 */}
              <div
                className={`p-8 md:p-12 flex flex-col justify-center bg-cream ${
                  i % 2 === 1 ? "[direction:ltr]" : ""
                }`}
              >
                {ministry.since && (
                  <span className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">
                    {ministry.since}년 시작
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-bold text-ink mb-2 tracking-tight">
                  {ministry.name}
                </h3>
                <p className="text-accent font-medium mb-4">
                  {ministry.tagline}
                </p>
                <p className="text-charcoal/70 leading-relaxed text-[0.9375rem]">
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
