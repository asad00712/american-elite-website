"use client";

import { FEATURES } from "@/lib/constants";
import { ScrollReveal } from "./scroll-reveal";

export function Features() {
  return (
    <section className="py-24 px-[5%] bg-white" id="about">
      <ScrollReveal className="text-center mb-[60px]">
        <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold justify-center">
          <span className="w-7 h-0.5 bg-gold shrink-0" />
          Why Choose Us
        </div>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5">
          The Gold Standard in
          <br />
          <em className="italic text-gold">Chauffeured Travel</em>
        </h2>
        <div className="w-[90px] h-0.5 mx-auto my-[18px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="text-base text-body-2 leading-7 max-w-[580px] mx-auto">
          We connect travelers with the world&apos;s finest licensed
          transportation operators — vetted, insured, and committed to
          excellence on every single journey.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[26px] mt-14">
        {FEATURES.map((feat, i) => (
          <ScrollReveal key={feat.title} delay={i * 0.1}>
            <div className="bg-ivory border border-ivory-3 rounded-xl p-[38px_30px] relative overflow-hidden transition-all duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(13,21,38,0.14)] hover:border-gold/20 group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-gold before:to-gold-2 before:scale-x-0 before:origin-left before:transition-transform before:duration-[350ms] hover:before:scale-x-100">
              <div className="w-[62px] h-[62px] rounded-xl bg-navy flex items-center justify-center text-2xl mb-[22px]">
                {feat.icon}
              </div>
              <h3 className="font-heading text-[1.3rem] font-medium text-navy mb-2.5">
                {feat.title}
              </h3>
              <p className="text-[0.88rem] text-body-2 leading-7">
                {feat.description}
              </p>
              <div className="inline-flex items-center gap-1.5 text-[0.77rem] font-bold text-gold tracking-widest uppercase mt-[18px]">
                {feat.link} <span>&#8594;</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
