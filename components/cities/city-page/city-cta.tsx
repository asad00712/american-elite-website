"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import type { CityData } from "@/lib/cities-data";

export function CityCta({ city }: { city: CityData }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative py-24 px-[5%] text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${city.image}')` }}
      >
        <div className="absolute inset-0 bg-navy/[0.89]" />
      </div>

      <ScrollReveal className="relative z-10 max-w-[680px] mx-auto">
        <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold-3 justify-center">
          <span className="w-7 h-0.5 bg-gold-3 shrink-0" />
          Book Now
        </div>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-white leading-[1.2] -tracking-wide mt-3.5 mb-4">
          Ready for Your Ride in{" "}
          <em className="italic text-gold">{city.name}?</em>
        </h2>

        <p className="text-white/50 text-base leading-7 mb-10">
          Place your reservation today! Simply call us and our customer service
          representatives will be glad to help schedule your trip or answer your
          questions. You can also fill out our simple online booking form.
        </p>
        <div className="flex justify-center gap-3.5 flex-wrap">
          <button
            onClick={() => {
              setClicked(true);
              setTimeout(() => setClicked(false), 3000);
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-br from-gold-2 to-gold text-white px-[34px] py-[15px] rounded-md text-[0.88rem] font-bold tracking-wide uppercase border-none cursor-pointer hover:shadow-[0_12px_36px_rgba(154,120,36,0.45)] hover:-translate-y-0.5 transition-all"
          >
            {clicked ? "\u2713 Connecting you to booking..." : "Book Your Ride Now \u2192"}
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
