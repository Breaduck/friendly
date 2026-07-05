"use client";

import { motion, useReducedMotion } from "framer-motion";
import { NAV } from "@/lib/nav";
import { EASE } from "@/lib/motion";
import { church } from "@/data/church";

export function Hero() {
  const shouldReduce = useReducedMotion();

  const anim = (delay: number, y = 20, blur = false) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y, ...(blur ? { filter: "blur(6px)" } : {}) },
          animate: { opacity: 1, y: 0, ...(blur ? { filter: "blur(0px)" } : {}) },
          transition: { duration: blur ? 1.0 : 0.75, ease: EASE, delay },
        };

  return (
    <section
      id={NAV.hero}
      className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden bg-accent-deep"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/images/church-worship.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-deep/70 via-accent-deep/40 to-accent-deep/85" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          {...anim(0.3)}
          className="text-[11px] font-semibold tracking-[0.22em] uppercase text-emerald-300 mb-7"
        >
          {church.denomination}
        </motion.p>

        <motion.h1
          {...anim(0.5, 32, true)}
          className="text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-[1.06] tracking-[-0.03em] mb-7"
        >
          {church.name}
        </motion.h1>

        <motion.p
          {...anim(0.85)}
          className="text-base md:text-lg text-white/75 mb-12 leading-relaxed"
        >
          선교하고, 사람을 키우고, 지역과 함께하는 교회
        </motion.p>

        <motion.div
          {...anim(1.1)}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href={`#${NAV.worship}`}
            className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-sm font-semibold text-accent-deep hover:bg-emerald-50 transition-colors"
          >
            예배 시간 보기
          </a>
          <a
            href={`#${NAV.about}`}
            className="inline-flex items-center justify-center rounded-2xl border border-white/40 px-8 py-3.5 text-sm font-semibold text-white hover:border-white/80 hover:bg-white/10 transition-colors"
          >
            교회 소개
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={shouldReduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
      >
        <motion.div
          animate={shouldReduce ? {} : { y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
