import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { historyItems, visions } from "@/data/history";
import { church } from "@/data/church";
import { NAV } from "@/lib/nav";

export function AboutChurch() {
  return (
    <Section id={NAV.about} className="bg-cream" aria-labelledby="about-heading">
      {/* 소개 텍스트 */}
      <AnimatedSection>
        <Eyebrow>교회 소개</Eyebrow>
        <h2
          id="about-heading"
          className="text-4xl md:text-5xl font-bold text-ink tracking-[-0.025em] mb-6"
        >
          정다운교회를
          <br />
          소개합니다
        </h2>
        <div className="max-w-2xl space-y-4 text-muted text-lg leading-relaxed mb-20">
          <p>
            {church.name}는 {church.denomination}에 속해 있으며 1971년 9월
            서울대 앞 신림동(일명 고시촌)에서 개척 설립되어 고시 청년선교에
            힘써왔습니다.
          </p>
          <p>
            2011년 11월 안양시 석수동에 교회를 신축 이전한 후 교육, 복지,
            문화사역(3대 핵심 비전)을 중심으로 지역과 함께하고 있습니다.
          </p>
        </div>
      </AnimatedSection>

      {/* 3대 핵심 비전 */}
      <AnimatedSection delay={0.1}>
        <h3 className="text-2xl font-bold text-ink mb-8">3대 핵심 비전</h3>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {visions.map((vision, i) => (
          <AnimatedSection key={vision.id} delay={i * 0.1}>
            <div className="bg-warm-white rounded-2xl p-8 text-center h-full border border-sand hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-5">{vision.icon}</div>
              <h4 className="text-xl font-bold text-ink mb-3">{vision.title}</h4>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {vision.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* 연혁 */}
      <AnimatedSection delay={0.1}>
        <h3 className="text-2xl font-bold text-ink mb-10">교회 연혁</h3>
        <div className="relative">
          <div className="absolute left-8 top-2 bottom-2 w-px bg-sand hidden md:block" />
          <div className="space-y-6">
            {historyItems.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div className="flex gap-6 md:gap-10 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center w-16">
                    <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-cream relative z-10 mt-1" />
                    <span className="text-[11px] font-bold text-accent mt-2 text-center leading-tight">
                      {item.year}
                    </span>
                  </div>
                  <div className="bg-warm-white rounded-2xl p-6 flex-1 border border-sand">
                    <h4 className="font-semibold text-ink mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-charcoal/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
