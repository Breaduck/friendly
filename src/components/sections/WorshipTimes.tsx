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
          className="text-4xl md:text-5xl font-bold text-ink tracking-[-0.025em] mb-5"
        >
          예배 시간
        </h2>
        <p className="text-muted text-lg mb-20 max-w-xl leading-relaxed">
          정다운교회에서 드리는 예배에 여러분을 초대합니다.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {worshipServices.map((service, i) => (
          <AnimatedSection key={service.name} delay={i * 0.07}>
            <div className="bg-white rounded-2xl p-10 h-full shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-7 group-hover:bg-accent/20 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-accent" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">
                {service.name}
              </h3>
              <p className="text-3xl font-bold text-accent mb-2 tracking-tight">
                {service.time}
              </p>
              <p className="text-sm text-muted mb-4">{service.location}</p>
              {service.description && (
                <p className="text-sm text-charcoal/70 leading-loose">
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
