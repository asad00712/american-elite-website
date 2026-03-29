"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

/**
 * Parses stat strings like "600+", "98%", "4.9★", "24/7" and animates the numeric part.
 * Non-numeric values (like "24/7") are returned as-is with a fade-in.
 */
function parseStatValue(value: string): {
  number: number;
  prefix: string;
  suffix: string;
  isDecimal: boolean;
  isAnimatable: boolean;
} {
  const match = value.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
  if (!match) {
    return { number: 0, prefix: "", suffix: value, isDecimal: false, isAnimatable: false };
  }

  const [, prefix, numStr, suffix] = match;
  const number = parseFloat(numStr);
  const isDecimal = numStr.includes(".");

  return { number, prefix, suffix, isDecimal, isAnimatable: true };
}

export function AnimatedCounter({
  value,
  className,
  duration = 2000,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasAnimated(true);
        observer.disconnect();

        const parsed = parseStatValue(value);
        if (!parsed.isAnimatable) {
          setDisplay(value);
          return;
        }

        const { number, prefix, suffix, isDecimal } = parsed;
        const startTime = performance.now();

        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * number;

          if (isDecimal) {
            setDisplay(`${prefix}${current.toFixed(1)}${suffix}`);
          } else {
            setDisplay(`${prefix}${Math.floor(current)}${suffix}`);
          }

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setDisplay(value);
          }
        };

        // Start from 0
        if (isDecimal) {
          setDisplay(`${prefix}0.0${suffix}`);
        } else {
          setDisplay(`${prefix}0${suffix}`);
        }

        requestAnimationFrame(animate);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
