import Image from "next/image";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { SITE } from "@/lib/constants";
import type { SVGProps } from "react";
import PartyImage from '@/public/special_events_transportation.jpg'

type IconProps = SVGProps<SVGSVGElement>;

function CheckCircleIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function PartyPopperIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5.8 11.3 2 22l10.7-3.79" />
      <path d="M4 3h.01" />
      <path d="M22 8h.01" />
      <path d="M15 2h.01" />
      <path d="M22 20h.01" />
      <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
      <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.63-.69 1.03-1.27.93l-3.82-.66c-.89-.15-1.44-1.15-.99-1.93l.38-.65c.42-.72.17-1.64-.57-2.02a1.37 1.37 0 0 1-.65-1.8l.65-1.53" />
      <path d="M18 22s-3-2-3-5c0-2.5 2.5-3 3-1.5.5-1.5 3-1 3 1.5 0 3-3 5-3 5" />
    </svg>
  );
}

function ClockIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DollarIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </svg>
  );
}

const PERFECT_FOR = [
  "Birthday Celebrations",
  "Bachelor & Bachelorette Parties",
  "Prom Night",
  "Anniversary Celebrations",
  "Concerts & Sporting Events",
  "Night Out on the Town",
  "Wine Tours & Bar Hopping",
  "Wedding After-Parties",
];

const WHATS_INCLUDED = [
  "Premium Sound System",
  "LED / Fiber Optic Lighting",
  "Complimentary Ice & Cups",
  "Privacy Partition",
  "Professional Chauffeur",
  "Flexible Itinerary",
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-[4px] border-gold pl-4 mb-6">
      <h2 className="font-heading text-[1.5rem] md:text-[1.7rem] font-medium text-navy">
        {children}
      </h2>
    </div>
  );
}

export function PartyContent() {
  return (
    <div className="space-y-14">
      {/* Intro Section */}
      <ScrollReveal>
        <div className="rounded-xl overflow-hidden mb-6">
          <Image
            src={PartyImage}
            alt="Luxury stretch limousine for party transportation"
            width={800}
            height={450}
            className="w-full h-[280px] md:h-[340px] object-cover rounded-xl"
          />
        </div>
        <h2 className="font-heading text-[1.7rem] md:text-[2rem] font-medium text-navy mb-4">
          Party Transportation
        </h2>
        <p className="text-[0.95rem] text-body-2 leading-7 mb-4">
          Whether it&apos;s a birthday celebration, bachelor or bachelorette
          party, prom night, or any special occasion &mdash; Limousine.com has
          the perfect luxury vehicle to make your event truly memorable.
        </p>
        <p className="text-[0.95rem] text-body-2 leading-7 mb-4">
          Our party fleet includes stretch limousines, party buses, luxury SUVs,
          and premium sedans &mdash; all equipped with premium sound systems,
          ambient lighting, and spacious interiors designed for celebration.
        </p>
        <p className="text-[0.95rem] text-body-2 leading-7">
          We serve 600+ cities worldwide. Our professional chauffeurs ensure you
          and your guests travel safely while enjoying every moment of the
          celebration.
        </p>
      </ScrollReveal>

      {/* Perfect For Section */}
      <ScrollReveal>
        <SectionHeading>Perfect For</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
          {PERFECT_FOR.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-[0.92rem] text-body-2"
            >
              <PartyPopperIcon className="w-5 h-5 text-gold shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* What's Included Section */}
      <ScrollReveal>
        <SectionHeading>What&apos;s Included</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
          {WHATS_INCLUDED.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-[0.92rem] text-body-2"
            >
              <CheckCircleIcon className="w-5 h-5 text-gold shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Our Rates Section */}
      <ScrollReveal>
        <SectionHeading>Our Rates</SectionHeading>
        <p className="text-[0.95rem] text-body-2 leading-7 mb-6">
          Party transportation rates vary based on vehicle type, duration, and
          group size. All quotes are all-inclusive with no hidden fees.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Hourly Rates Card */}
          <div className="bg-white rounded-xl border border-ivory-3 p-5 shadow-[0_4px_20px_rgba(13,21,38,0.05)]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <DollarIcon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading text-[1.05rem] font-medium text-navy">
                Hourly Rates
              </h3>
            </div>
            <p className="text-[0.88rem] text-body-2 leading-6">
              Available for all party vehicles
            </p>
            <p className="text-[0.82rem] text-body-3 mt-1">
              Custom quotes based on fleet selection
            </p>
          </div>

          {/* Minimum Booking Card */}
          <div className="bg-white rounded-xl border border-ivory-3 p-5 shadow-[0_4px_20px_rgba(13,21,38,0.05)]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                <ClockIcon className="w-5 h-5 text-navy" />
              </div>
              <h3 className="font-heading text-[1.05rem] font-medium text-navy">
                Minimum Booking
              </h3>
            </div>
            <p className="text-[0.88rem] text-body-2 leading-6">
              3 hours for party buses
            </p>
            <p className="text-[0.82rem] text-body-3 mt-1">
              2 hours for limousines
            </p>
          </div>
        </div>

        <p className="text-[0.95rem] text-body-2 leading-7">
          For a custom party transportation quote, call us at{" "}
          <a
            href="tel:8889995466"
            className="text-gold font-semibold no-underline hover:underline"
          >
            {SITE.phone}
          </a>{" "}
          or book online.
        </p>
      </ScrollReveal>
    </div>
  );
}
