"use client";

import Image from "next/image";
import { CITY_PILLS, CITY_CARDS } from "@/lib/constants";
import { ScrollReveal } from "./scroll-reveal";

export function Cities() {
  const pills = [...CITY_PILLS, ...CITY_PILLS];

  return (
    <section className="py-24 px-[5%] bg-white" id="cities">
      <ScrollReveal className="text-center mb-[50px]">
        <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold justify-center">
          <span className="w-7 h-0.5 bg-gold shrink-0" />
          We&apos;re Everywhere
        </div>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5">
          Top City <em className="italic text-gold">Services</em>
        </h2>
        <div className="w-[90px] h-0.5 mx-auto my-[18px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="text-base text-body-2 leading-7 max-w-[580px] mx-auto">
          Available in the world&apos;s most vibrant cities — from US business
          capitals to cultural hubs of Europe, Middle East &amp; Asia.
        </p>
      </ScrollReveal>

      {/* Marquee */}
      <div className="overflow-hidden mb-[52px]">
        <div className="flex gap-0 w-max animate-marquee">
          {pills.map((pill, i) => (
            <div
              key={`${pill.name}-${i}`}
              className="flex items-center gap-[9px] py-[11px] px-[22px] mx-[7px] border border-ivory-3 rounded-full text-[0.84rem] font-medium text-body-2 bg-ivory whitespace-nowrap"
            >
              <span>{pill.flag}</span> {pill.name}
            </div>
          ))}
        </div>
      </div>

      {/* City cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
        {CITY_CARDS.map((city, i) => (
          <ScrollReveal key={city.name} delay={i * 0.1}>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer group">
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/[0.88] to-navy/[0.15] group-hover:from-navy/[0.93] group-hover:to-navy/[0.28] transition-all flex flex-col justify-end p-[26px]">
                <div className="font-heading text-2xl font-medium text-white mb-[3px]">
                  {city.name}
                </div>
                <div className="text-[0.8rem] text-white/55 mb-[13px]">
                  {city.info}
                </div>
                <div className="inline-flex items-center gap-1.5 text-[0.76rem] font-bold text-gold-3 tracking-widest uppercase opacity-0 translate-y-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Book a ride &#8594;
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
