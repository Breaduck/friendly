"use client";

import { useState, useEffect } from "react";
import { NAV, NAV_LABELS, type NavKey } from "@/lib/nav";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

const navItems = Object.entries(NAV_LABELS).filter(
  ([key]) => key !== "hero"
) as [NavKey, string][];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>(NAV.hero);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    Object.values(NAV).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-warm-white/90 backdrop-blur-md border-b border-sand shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <a
            href={`#${NAV.hero}`}
            className={cn(
              "text-lg font-bold tracking-tight transition-colors",
              scrolled ? "text-ink" : "text-white"
            )}
          >
            정다운교회
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(([key, label]) => (
              <a
                key={key}
                href={`#${NAV[key]}`}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  activeSection === NAV[key]
                    ? "text-accent"
                    : scrolled
                      ? "text-charcoal hover:text-accent"
                      : "text-white/80 hover:text-white"
                )}
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className={cn(
              "md:hidden p-2 transition-colors",
              scrolled ? "text-charcoal" : "text-white"
            )}
            onClick={() => setMenuOpen(true)}
            aria-label="메뉴 열기"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
        navItems={navItems}
      />
    </>
  );
}
