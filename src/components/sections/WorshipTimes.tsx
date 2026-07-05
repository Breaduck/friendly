import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { worshipServices } from "@/data/worship";
import { NAV } from "@/lib/nav";

export function WorshipTimes() {
  return (
    <Section id={NAV.worship} className="bg-cream" aria-labelledby="worship-heading">
      <AnimatedSection>
        <Eyebrow>예배 안내</Eyebrow>
        <h2
          id="worship-heading"
          className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4"
        >
          예배 시간
        </h2>
        <p className="text-muted leading-relaxed mb-16 max-w-lg">
          정다운교회에서 드리는 예배에 여러분을 초대합니다.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {worshipServices.map((service, i) => (
          <AnimatedSection key={service.name} delay={i * 0.06}>
            <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* 예배 종류 */}
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">
                {service.name}
              </p>
              {/* 시간 */}
              <p className="text-4xl font-bold text-ink tracking-tight mb-1">
                {service.time}
              </p>
              {/* 장소 */}
              <p className="text-sm text-muted mb-4">{service.location}</p>
              {/* 설명 */}
              {service.description && (
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {service.description}
                </p>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
