import { SITE } from "@/lib/constants";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/icons/contact-icons";
import type { ReactNode } from "react";

const SERVICES = [
  "Airport Transportation",
  "Corporate Transportation",
  "Business Accounts",
  "Party Limos",
  "Wedding Transportation",
  "Concerts",
  "Prom",
  "Sporting Events",
  "Bar Hopping",
  "Conventions",
  "Anniversary",
  "Bachelorette Party",
  "Corporate Events",
] as const;

const NJ_SERVICE_AREAS = [
  "Parsippany", "Basking Ridge", "Madison", "Livingston",
  "Montville", "Bernardsville", "Florham Park", "East Hanover",
  "Rockaway", "Morristown", "Short Hills", "Summit",
] as const;

function ContactCard({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 bg-gradient-to-br from-navy/[0.03] via-gold/[0.06] to-navy/[0.03] border border-gold/15 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(13,21,38,0.1)] hover:border-gold/30 hover:from-navy/[0.05] hover:via-gold/[0.1] hover:to-navy/[0.05]">
      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[0.72rem] font-bold tracking-[1.5px] uppercase text-gold mb-1">
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <ScrollReveal direction="left">
      <div>
        <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-normal text-navy leading-[1.2] -tracking-wide mb-5">
          We&apos;re Here to <em className="italic text-gold">Help</em>
        </h2>
        <p className="text-[0.92rem] text-body-2 leading-7 mb-4">
          When you decide to rent a car in Parsippany you will discover it has
          never been easier with American Elite Limousine. We provide 24/7
          service with affordable and reasonable rates with reliable chauffeurs.
        </p>
        <p className="text-[0.92rem] text-body-2 leading-7 mb-4">
          Our mission is to provide the most professional, courteous, effective
          and reliable service to our customers every time they visit us and
          request our transportation car services.
        </p>
        <p className="text-[0.92rem] text-body-2 leading-7 mb-8">
          We offer clean non-smoking transportation Minivans, Lincoln Town Cars,
          and Luxury SUVs. Place a reservation online today or call us at{" "}
          <a href={`tel:${SITE.phoneRaw}`} className="text-gold font-semibold no-underline hover:underline">
            {SITE.phone}
          </a>{" "}
          and our customer service representatives in Parsippany will be glad to
          help you with your questions, quotes or schedule availability.
        </p>

        {/* Contact Cards */}
        <div className="space-y-4 mb-10">
          <ContactCard
            icon={<PhoneIcon className="w-5 h-5 text-gold" />}
            label="Phone"
          >
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="text-[0.95rem] font-semibold text-navy no-underline hover:text-gold transition-colors"
            >
              {SITE.phone}
            </a>
            <p className="text-[0.8rem] text-body-3 mt-0.5">
              Dispatch &amp; Operator assisted reservations
            </p>
          </ContactCard>

          <ContactCard
            icon={<MailIcon className="w-5 h-5 text-gold" />}
            label="Email"
          >
            <a
              href={`mailto:${SITE.email}`}
              className="text-[0.95rem] font-semibold text-navy no-underline hover:text-gold transition-colors block"
            >
              {SITE.email}
            </a>
          </ContactCard>

          <ContactCard
            icon={<MapPinIcon className="w-5 h-5 text-gold" />}
            label="Office Address"
          >
            <p className="text-[0.92rem] font-medium text-navy leading-6">
              {SITE.address}
            </p>
          </ContactCard>

          <ContactCard
            icon={<ClockIcon className="w-5 h-5 text-gold" />}
            label="Business Hours"
          >
            <p className="text-[0.92rem] font-medium text-navy">
              Dispatch:{" "}
              <span className="text-gold font-semibold">24/7 Available</span>
            </p>
            <p className="text-[0.85rem] text-body-2 mt-0.5">
              Office: 9AM &ndash; 5PM EST, Mon &ndash; Fri
            </p>
          </ContactCard>
        </div>

        {/* Services */}
        <div className="mb-10">
          <h3 className="font-heading text-[1.2rem] font-medium text-navy mb-4">
            We Proudly Provide Limo Services For
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {SERVICES.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2.5 text-[0.88rem] text-body-2"
              >
                <svg
                  className="w-4 h-4 text-gold shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="font-heading text-[1.2rem] font-medium text-navy mb-4">
            Service Areas
          </h3>
          <div className="flex flex-wrap gap-2">
            {NJ_SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 text-[0.82rem] text-body-2 bg-white border border-ivory-3 rounded-full px-3.5 py-1.5 hover:border-gold/30 hover:bg-gold/[0.04] transition-colors"
              >
                {area}, NJ
              </span>
            ))}
            <span className="inline-flex items-center text-[0.82rem] text-gold font-semibold px-3.5 py-1.5">
              + more areas
            </span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
