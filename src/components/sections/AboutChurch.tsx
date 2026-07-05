import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { historyItems, visions } from "@/data/history";
import { NAV } from "@/lib/nav";

export function AboutChurch() {
  return (
    <Section id={NAV.about} className="bg-cream" aria-labelledby="about-heading">
      {/* 소개 */}
      <AnimatedSection>
        <Eyebrow>교회 소개</Eyebrow>
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-7"
        >
          정다운교회를 소개합니다
        </h2>
        <p className="max-w-2xl text-charcoal/75 text-lg leading-loose mb-20">
          정다운교회는 대한예수교장로회(통합)교단에 속해 있으며 1971년 9월
          서울대 앞 신림동(일명 고시촌)에서 개척 설립되어 고시 청년선교에
          힘쓰다가 2011년 11월 안양시 석수동에 교회를 신축 이전한 후 교육,
          복지, 문화사역을 중심으로 지역과 함께하며 예수 그리스도의 사랑과
          섬김을 실천하고 있습니다.
        </p>
      </AnimatedSection>

      {/* 3대 핵심 비전 */}
      <AnimatedSection delay={0.08}>
        <h3 className="text-xl font-bold text-ink mb-8">3대 핵심 비전</h3>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
        {visions.map((vision, i) => (
          <AnimatedSection key={vision.id} delay={i * 0.08}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
              <div className="text-4xl mb-5">{vision.icon}</div>
              <h4 className="text-xl font-bold text-ink mb-3">{vision.title}</h4>
              <p className="text-base text-charcoal/65 leading-relaxed">
                {vision.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* 연혁 */}
      <AnimatedSection delay={0.08}>
        <h3 className="text-xl font-bold text-ink mb-10">교회 연혁</h3>
        <div className="relative">
          {/* 타임라인 선 */}
          <div className="absolute left-[1.875rem] top-3 bottom-3 w-px bg-sand hidden md:block" />
          <div className="space-y-5">
            {historyItems.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.08}>
                <div className="flex gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center w-[3.75rem]">
                    <div className="w-3.5 h-3.5 rounded-full bg-accent ring-[3px] ring-cream relative z-10 mt-1.5" />
                    <span className="text-[10px] font-bold text-accent mt-1.5 text-center leading-snug">
                      {item.year}
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl px-7 py-6 flex-1 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h4 className="text-base font-semibold text-ink mb-2">{item.title}</h4>
                    <p className="text-base text-charcoal/65 leading-relaxed">
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
