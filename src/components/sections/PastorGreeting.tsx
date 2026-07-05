import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pastorInfo } from "@/data/pastor";
import { NAV } from "@/lib/nav";
import Image from "next/image";

export function PastorGreeting() {
  return (
    <Section id={NAV.pastor} aria-labelledby="pastor-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* 목사님 사진 */}
        <AnimatedSection className="lg:sticky lg:top-24">
          <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-cream">
            <Image
              src={pastorInfo.image}
              alt={`${pastorInfo.name} ${pastorInfo.title}`}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/70 p-8">
              <p className="text-white font-bold text-xl">
                {pastorInfo.name} {pastorInfo.title}
              </p>
              <p className="text-white/60 text-sm">정다운교회</p>
            </div>
          </div>
        </AnimatedSection>

        {/* 인사말 + 목회 철학 */}
        <div className="space-y-12">
          <AnimatedSection>
            <Eyebrow>담임목사 인사말</Eyebrow>
            <h2
              id="pastor-heading"
              className="text-4xl md:text-5xl font-bold text-ink tracking-[-0.025em] mb-8"
            >
              {pastorInfo.name} 목사님의
              <br />
              인사말
            </h2>
            <div className="space-y-4 text-charcoal/80 leading-[1.8] text-[1.0625rem]">
              {pastorInfo.greeting.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h3 className="text-2xl font-bold text-ink mb-6">목회 철학</h3>
            <div className="space-y-4">
              {pastorInfo.philosophies.map((p, i) => (
                <div
                  key={i}
                  className="bg-cream rounded-2xl p-8 border border-sand"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink mb-2">{p.title}</h4>
                      <p className="text-sm text-charcoal/70 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
}
