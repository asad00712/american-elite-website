"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { ScrollReveal } from "./scroll-reveal";

export function Testimonials() {
  return (
    <section className="py-24 px-[5%] bg-white">
      <ScrollReveal className="text-center mb-[52px]">
        <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold justify-center">
          <span className="w-7 h-0.5 bg-gold shrink-0" />
          Client Stories
        </div>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5">
          Trusted by <em className="italic text-gold">Thousands</em>
          <br />
          of Travelers Worldwide
        </h2>
        <div className="w-[90px] h-0.5 mx-auto my-[18px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="text-base text-body-2 leading-7 max-w-[580px] mx-auto">
          From C-suite executives to wedding parties — our clients love the
          Limousine.com experience every time.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] mt-[50px]">
        {TESTIMONIALS.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <div
              className={`rounded-xl p-[34px] relative transition-all hover:-translate-y-1 ${
                t.featured
                  ? "bg-navy border border-navy hover:shadow-[0_12px_40px_rgba(13,21,38,0.25)]"
                  : "bg-ivory border border-ivory-3 hover:shadow-[0_12px_40px_rgba(13,21,38,0.1)] hover:border-gold/20"
              }`}
            >
              {/* Quote mark */}
              <div
                className={`absolute top-[22px] right-6 font-heading text-[5rem] leading-none ${
                  t.featured ? "text-gold-3/[0.09]" : "text-gold/10"
                }`}
              >
                &ldquo;
              </div>

              <div
                className={`text-[0.82rem] tracking-[2px] mb-3.5 ${
                  t.featured ? "text-gold-3" : "text-gold"
                }`}
              >
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>

              <p
                className={`text-[0.91rem] leading-7 italic mb-[22px] ${
                  t.featured ? "text-white/55" : "text-body-2"
                }`}
              >
                {t.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gold relative">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <div
                    className={`font-bold text-[0.86rem] ${
                      t.featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {t.name}
                  </div>
                  <div
                    className={`text-[0.74rem] mt-0.5 ${
                      t.featured ? "text-white/[0.38]" : "text-body-3"
                    }`}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
