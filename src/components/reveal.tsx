"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Animate on page load instead of on scroll into view (use for hero content). */
  immediate?: boolean;
  once?: boolean;
};

/**
 * Fade/slide-in wrapper used for hero page-load reveals and scroll-triggered
 * reveals on lower sections. Falls back to a static, fully-visible render
 * when the visitor has prefers-reduced-motion enabled.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  immediate = false,
  once = true,
}: RevealProps) {
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={variants}
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once, margin: "-80px" } })}
    >
      {children}
    </motion.div>
  );
}
