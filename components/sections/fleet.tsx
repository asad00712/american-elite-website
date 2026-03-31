"use client";

import Image from "next/image";
import { FLEET_VEHICLES } from "@/lib/constants";
import { ScrollReveal } from "./scroll-reveal";

export function Fleet() {
  return (
    <section className="py-24 px-[5%] bg-ivory-2" id="fleet">
      <ScrollReveal className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-5">
        <div>
          <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold">
            <span className="w-7 h-0.5 bg-gold shrink-0" />
            Our Fleet
          </div>
          <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5">
            A Vehicle for
            <br />
            <em className="italic text-gold">Every Journey</em>
          </h2>

        </div>
        <p className="max-w-[360px] text-[0.92rem] text-body-2 leading-7">
          From intimate sedan transfers to full-scale bus services. Sedans,
          SUVs, Vans, or Buses, we have you covered for any group size or
          occasion.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FLEET_VEHICLES.map((vehicle, i) => (
          <ScrollReveal key={vehicle.name} delay={i * 0.1}>
            <div className="h-full flex flex-col bg-white rounded-xl overflow-hidden border border-ivory-3 transition-all duration-[350ms] cursor-pointer hover:-translate-y-[7px] hover:shadow-[0_20px_60px_rgba(13,21,38,0.14)] group">
              {/* Image */}
              <div className="h-[190px] overflow-hidden relative">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-2.5 right-2.5 bg-gold text-white text-[0.7rem] font-bold px-2.5 py-[3px] rounded-full">
                  {vehicle.capacity}
                </div>
              </div>
              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="font-heading text-[1.15rem] font-medium text-navy mb-[7px]">
                  {vehicle.name}
                </div>
                <div className="text-[0.82rem] text-body-2 leading-relaxed mb-3.5">
                  {vehicle.description}
                </div>
                <div className="flex flex-wrap gap-[5px] mt-auto">
                  {vehicle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.7rem] px-[9px] py-[3px] rounded-full bg-ivory-2 text-body-2 font-medium border border-ivory-3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
