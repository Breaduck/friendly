import { Section } from "@/components/ui/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pastorInfo } from "@/data/pastor";
import { NAV } from "@/lib/nav";
import Image from "next/image";

export function PastorGreeting() {
  return (
    <Section id={NAV.pastor} aria-labelledby="pastor-heading" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
        {/* 목사님 사진 — 비율 고정 */}
        <AnimatedSection className="lg:col-span-2 lg:sticky lg:top-24">
          <div className="relative w-full max-w-xs mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-md bg-cream">
            {/* aspect-[3/4] 비율 강제 고정 */}
            <div className="relative aspect-[3/4]">
              <Image
                src={pastorInfo.image}
                alt={`${pastorInfo.name} ${pastorInfo.title}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 80vw, 320px"
                unoptimized
              />
            </div>
            {/* 하단 이름 오버레이 */}
            <div className="bg-accent-deep px-6 py-5">
              <p className="text-white font-bold text-lg leading-tight">
                {pastorInfo.name} {pastorInfo.title}
              </p>
              <p className="text-white/60 text-sm mt-0.5">정다운교회</p>
            </div>
          </div>
        </AnimatedSection>

        {/* 인사말 + 목회 철학 */}
        <div className="lg:col-span-3 space-y-12">
          <AnimatedSection>
            <Eyebrow>담임목사 인사말</Eyebrow>
            <h2
              id="pastor-heading"
              className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-8"
            >
              {pastorInfo.name} 목사님의 인사말
            </h2>
            <div className="space-y-5 text-charcoal/80 leading-loose text-lg">
              {pastorInfo.greeting.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </AnimatedSection>

          {/* 목회 철학 */}
          <AnimatedSection delay={0.12}>
            <h3 className="text-xl font-bold text-ink mb-5">목회 철학</h3>
            <div className="space-y-4">
              {pastorInfo.philosophies.map((p, i) => (
                <div key={i} className="flex items-start gap-4 bg-cream rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-ink mb-2">{p.title}</p>
                    <p className="text-base text-charcoal/65 leading-relaxed">{p.description}</p>
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
