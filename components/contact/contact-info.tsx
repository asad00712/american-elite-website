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
  "Concert / Event Transport",
] as const;

const SERVICE_AREAS = [
  { flag: "🇺🇸", city: "New York" },
  { flag: "🇺🇸", city: "Los Angeles" },
  { flag: "🇺🇸", city: "Chicago" },
  { flag: "🇺🇸", city: "Miami" },
  { flag: "🇺🇸", city: "Las Vegas" },
  { flag: "🇬🇧", city: "London" },
  { flag: "🇦🇪", city: "Dubai" },
  { flag: "🇯🇵", city: "Tokyo" },
  { flag: "🇸🇬", city: "Singapore" },
  { flag: "🇨🇦", city: "Toronto" },
  { flag: "🇦🇺", city: "Sydney" },
  { flag: "🇫🇷", city: "Paris" },
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
    <div className="flex items-start gap-4 bg-white border border-ivory-3 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(13,21,38,0.08)] hover:border-gold/20">
      <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
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
        <p className="text-[0.92rem] text-body-2 leading-7 mb-8">
          Limousine.com provides premium chauffeured ground transportation 24
          hours a day, 7 days a week. Whether you need an airport transfer,
          corporate travel, or a special event vehicle, our team is ready to
          assist you with booking, quotes, and any questions.
        </p>

        {/* Contact Cards */}
        <div className="space-y-4 mb-10">
          <ContactCard
            icon={<PhoneIcon className="w-5 h-5 text-gold" />}
            label="Phone"
          >
            <a
              href="tel:8889995466"
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
            <a
              href={`mailto:${SITE.emailAlt}`}
              className="text-[0.85rem] text-body-2 no-underline hover:text-gold transition-colors block mt-0.5"
            >
              {SITE.emailAlt}
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
            Our Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
            {SERVICE_AREAS.map((area) => (
              <span
                key={area.city}
                className="inline-flex items-center gap-1.5 text-[0.82rem] text-body-2 bg-white border border-ivory-3 rounded-full px-3.5 py-1.5 hover:border-gold/30 hover:bg-gold/[0.04] transition-colors"
              >
                {area.flag} {area.city}
              </span>
            ))}
            <span className="inline-flex items-center text-[0.82rem] text-gold font-semibold px-3.5 py-1.5">
              +600 more cities
            </span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
