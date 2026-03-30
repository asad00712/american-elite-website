import { ScrollReveal } from "@/components/sections/scroll-reveal";
import {
  ChauffeurIcon,
  CheckCircleIcon,
  PlaneIcon,
  DollarIcon,
  HeadphonesIcon,
  GlobeIcon,
} from "@/components/icons/contact-icons";
import type { ReactNode } from "react";

const WHY_CHOOSE_US = [
  {
    icon: <ChauffeurIcon className="w-6 h-6 text-gold" />,
    title: "Professional Chauffeurs",
    description:
      "Professional, courteous and well dressed chauffeurs trained in hospitality and safe driving practices.",
  },
  {
    icon: <CheckCircleIcon className="w-6 h-6 text-gold" />,
    title: "Confirmed Pick-Ups",
    description:
      "We confirm all pick-ups in advance. Arrive early and are available on short notice.",
  },
  {
    icon: <PlaneIcon className="w-6 h-6 text-gold" />,
    title: "Flight Monitoring",
    description:
      "Vast experience in airline business procedures to make your travel worry free. We monitor flight schedules.",
  },
  {
    icon: <DollarIcon className="w-6 h-6 text-gold" />,
    title: "Affordable Pricing",
    description:
      "Reasonable rates with no hidden fees. Affordable and transparent pricing for all services.",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6 text-gold" />,
    title: "Portal-to-Portal Service",
    description:
      "Complete door-to-door service with baggage assistance and knowledge about local hotels and restaurants.",
  },
  {
    icon: <GlobeIcon className="w-6 h-6 text-gold" />,
    title: "NJ & TriState Coverage",
    description:
      "Serving all of New Jersey and the TriState area including all major airports — EWR, JFK, and LGA.",
  },
] as const;

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="h-full bg-ivory border border-ivory-3 rounded-xl p-[30px_26px] relative overflow-hidden transition-all duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(13,21,38,0.14)] hover:border-gold/20 group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-gold before:to-gold-2 before:scale-x-0 before:origin-left before:transition-transform before:duration-[350ms] hover:before:scale-x-100">
      <div className="w-[52px] h-[52px] rounded-xl bg-gold/10 flex items-center justify-center mb-[18px]">
        {icon}
      </div>
      <h3 className="font-heading text-[1.15rem] font-medium text-navy mb-2">
        {title}
      </h3>
      <p className="text-[0.86rem] text-body-2 leading-7">{description}</p>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-24 px-[5%] bg-white">
      <ScrollReveal className="text-center mb-[60px]">
        <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold justify-center">
          <span className="w-7 h-0.5 bg-gold shrink-0" />
          Our Commitment
        </div>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5">
          Why Choose{" "}
          <em className="italic text-gold">American Elite?</em>
        </h2>

        <p className="text-base text-body-2 leading-7 max-w-[580px] mx-auto">
          We take pride in our professional, reliable, and efficient
          transportation service throughout New Jersey and the TriState area.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] max-w-[1240px] mx-auto">
        {WHY_CHOOSE_US.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.08}>
            <BenefitCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
