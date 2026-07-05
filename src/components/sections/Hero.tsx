"use client";

import { motion, useReducedMotion } from "framer-motion";
import { NAV } from "@/lib/nav";
import { EASE } from "@/lib/motion";
import { church } from "@/data/church";

export function Hero() {
  const shouldReduce = useReducedMotion();

  const anim = (delay: number, y = 24, blur = false) =>
    shouldReduce
      ? {}
      : {
          initial: {
            opacity: 0,
            y,
            ...(blur ? { filter: "blur(8px)" } : {}),
          },
          animate: {
            opacity: 1,
            y: 0,
            ...(blur ? { filter: "blur(0px)" } : {}),
          },
          transition: { duration: blur ? 1.1 : 0.8, ease: EASE, delay },
        };

  return (
    <section
      id={NAV.hero}
      className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/images/hero-placeholder.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/10 to-ink/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          {...anim(0.3)}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-soft mb-6"
        >
          {church.denomination}
        </motion.p>

        <motion.h1
          {...anim(0.5, 40, true)}
          className="text-6xl md:text-8xl font-bold text-white leading-[1.04] tracking-[-0.03em] mb-6"
        >
          {church.name}
        </motion.h1>

        <motion.p
          {...anim(0.9)}
          className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed"
        >
          선교하고, 사람을 키우고, 지역과 함께하는 교회
        </motion.p>

        <motion.div
          {...anim(1.2)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`#${NAV.worship}`}
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-deep transition-colors"
          >
            예배 시간 보기
          </a>
          <a
            href={`#${NAV.about}`}
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white hover:border-white/80 transition-colors"
          >
            교회 소개
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={shouldReduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/30 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={shouldReduce ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
