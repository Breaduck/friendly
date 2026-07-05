"use client";

import { AnimatePresence, motion } from "framer-motion";
import { NAV, type NavKey } from "@/lib/nav";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  navItems: [NavKey, string][];
}

export function MobileMenu({
  isOpen,
  onClose,
  activeSection,
  navItems,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-warm-white flex flex-col"
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-sand">
            <span className="text-lg font-bold text-ink">정다운교회</span>
            <button
              onClick={onClose}
              className="p-2 text-charcoal"
              aria-label="메뉴 닫기"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-6">
            {navItems.map(([key, label], i) => (
              <motion.a
                key={key}
                href={`#${NAV[key]}`}
                onClick={onClose}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={cn(
                  "py-5 text-2xl font-semibold border-b border-sand last:border-0",
                  activeSection === NAV[key] ? "text-accent" : "text-charcoal"
                )}
              >
                {label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
