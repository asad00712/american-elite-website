"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { ScrollReveal } from "./scroll-reveal";

export function CtaBanner() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative py-24 px-[5%] text-center overflow-hidden" id="contact">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563720223185-11003d516935?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-navy/[0.89]" />
      </div>

      <ScrollReveal className="relative z-10 max-w-[680px] mx-auto">
        <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold-3 justify-center">
          <span className="w-7 h-0.5 bg-gold-3 shrink-0" />
          Get Started
        </div>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-white leading-[1.2] -tracking-wide mt-3.5 mb-4">
          Ready to Book Your
          <br />
          <em className="italic text-gold">Next Ride?</em>
        </h2>

        <p className="text-white/50 text-base leading-7 mb-10">
          From airport pickups to corporate travel and special events —
          we make it effortless. Professional service, reasonable rates, available 24/7.
        </p>
        <div className="flex justify-center gap-3.5 flex-wrap">
          <button
            onClick={() => {
              setClicked(true);
              setTimeout(() => setClicked(false), 3000);
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-br from-gold-2 to-gold text-white px-[34px] py-[15px] rounded-md text-[0.88rem] font-bold tracking-wide uppercase border-none cursor-pointer hover:shadow-[0_12px_36px_rgba(184,144,46,0.45)] hover:-translate-y-0.5 transition-all"
          >
            {clicked
              ? "\u2713 Connecting you to booking..."
              : "Book Your Ride Now \u2192"}
          </button>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center gap-2 border-[1.5px] border-white/[0.28] text-white px-[34px] py-[15px] rounded-md text-[0.88rem] font-medium no-underline uppercase tracking-wide hover:bg-white/[0.07] hover:border-white/50 transition-all"
          >
            &#128222; {SITE.phone}
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}
