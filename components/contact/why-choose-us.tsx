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
    icon: <ChauffeurIcon className="w-6 h-6 text-white" />,
    title: "Professional Chauffeurs",
    description:
      "Professional, courteous and well dressed chauffeurs trained in hospitality and safe driving practices.",
    image:
      "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?w=600&q=80",
  },
  {
    icon: <CheckCircleIcon className="w-6 h-6 text-white" />,
    title: "Confirmed Pick-Ups",
    description:
      "We confirm all pick-ups in advance. Arrive early and are available on short notice.",
    image:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?w=600&q=80",
  },
  {
    icon: <PlaneIcon className="w-6 h-6 text-white" />,
    title: "Flight Monitoring",
    description:
      "Vast experience in airline business procedures to make your travel worry free. We monitor flight schedules.",
    image:
      "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=600&q=80",
  },
  {
    icon: <DollarIcon className="w-6 h-6 text-white" />,
    title: "Affordable Pricing",
    description:
      "Reasonable rates with no hidden fees. Affordable and transparent pricing for all services.",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6 text-white" />,
    title: "Portal-to-Portal Service",
    description:
      "Complete door-to-door service with baggage assistance and knowledge about local hotels and restaurants.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    icon: <GlobeIcon className="w-6 h-6 text-white" />,
    title: "NJ & TriState Coverage",
    description:
      "Serving all of New Jersey and the TriState area including all major airports: EWR, JFK, and LGA.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80",
  },
];

function BenefitCard({
  icon,
  title,
  description,
  image,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="h-full rounded-xl relative overflow-hidden transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(13,21,38,0.25)] group">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${image}')` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/75 to-navy/50 transition-opacity duration-350 group-hover:from-navy/98 group-hover:via-navy/80" />

      {/* Content */}
      <div className="relative z-10 p-7 flex flex-col h-full min-h-[260px] justify-end">
        <div className="w-12 h-12 rounded-lg bg-gold/20 backdrop-blur-sm border border-gold/30 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="font-heading text-[1.15rem] font-medium text-white mb-2">
          {title}
        </h3>
        <p className="text-[0.86rem] text-white/65 leading-7">{description}</p>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-24 px-[5%] bg-white">
      <ScrollReveal className="text-center mb-15">
        <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold justify-center">
          <span className="w-7 h-0.5 bg-gold shrink-0" />
          Our Commitment
        </div>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5">
          Why Choose{" "}
          <em className="italic text-gold">American Elite?</em>
        </h2>

        <p className="text-base text-body-2 leading-7 max-w-145 mx-auto">
          We take pride in our professional, reliable, and efficient
          transportation service throughout New Jersey and the TriState area.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5 max-w-310 mx-auto">
        {WHY_CHOOSE_US.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.08}>
            <BenefitCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
