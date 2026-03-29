import Link from "next/link";
import type { SVGProps } from "react";
import { ScrollReveal } from "@/components/sections/scroll-reveal";

type IconProps = SVGProps<SVGSVGElement>;

function GlobeIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function MapPinIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 4.993-7.942 10.751-7.942 10.751a.1.1 0 0 1-.117 0S4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function DollarIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </svg>
  );
}

function HeadphonesIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

const CTA_FEATURES = [
  {
    icon: GlobeIcon,
    title: "Global Coverage",
    description: "600+ cities, one consistent standard of excellence",
  },
  {
    icon: MapPinIcon,
    title: "Local Expertise",
    description: "Vetted local operators who know every route and shortcut",
  },
  {
    icon: DollarIcon,
    title: "All-Inclusive",
    description: "Transparent pricing with no hidden fees, everywhere",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock dispatch no matter the timezone",
  },
] as const;

export function CitiesCta() {
  return (
    <section className="py-24 px-[5%] bg-ivory">
      <ScrollReveal className="text-center mb-14">
        <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold justify-center">
          <span className="w-7 h-0.5 bg-gold shrink-0" />
          Why Choose Us
        </div>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5">
          Same Premium Service, Every <em className="italic text-gold">City</em>
        </h2>
        <div className="w-[90px] h-0.5 mx-auto my-[18px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      </ScrollReveal>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-14">
        {CTA_FEATURES.map((feature, i) => (
          <ScrollReveal key={feature.title} delay={i * 0.1}>
            <div className="bg-white rounded-xl p-7 text-center shadow-[0_2px_16px_rgba(13,21,38,0.06)] hover:shadow-[0_8px_30px_rgba(13,21,38,0.1)] transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-medium text-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-[0.88rem] text-body-2 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3} className="text-center">
        <Link
          href="/contact"
          className="inline-block bg-gold text-white px-10 py-4 rounded-[5px] text-[0.9rem] font-semibold no-underline hover:bg-gold-2 hover:shadow-[0_6px_20px_rgba(184,144,46,0.4)] transition-all"
        >
          Book Your Ride
        </Link>
      </ScrollReveal>
    </section>
  );
}
