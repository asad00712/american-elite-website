import Image from "next/image";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { SITE } from "@/lib/constants";
import type { SVGProps } from "react";
const PARTY_IMAGE = "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80";

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

const SPECIAL_EVENTS = [
  "Weddings",
  "Birthday",
  "Anniversary",
  "Sporting Events",
  "Bachelor Party",
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
            src={PARTY_IMAGE}
            alt="Luxury stretch limousine for party transportation"
            width={800}
            height={450}
            className="w-full h-[280px] md:h-[340px] object-cover rounded-xl"
          />
        </div>
        <h2 className="font-heading text-[1.7rem] md:text-[2rem] font-medium text-navy mb-4">
          Party Transportation
        </h2>
        <p className="text-[0.95rem] text-body-2 leading-7">
          Any day of the week is a good excuse to relax and enjoy with your
          friends. Are you planning to attend to an entertainment event with all
          your friends? No problem, at American Elite Limousine we will
          accommodate any size of group. Our fleet of Luxury Vehicles includes
          Sedans, SUVs, Minivans and Stretch Limousines.
        </p>
      </ScrollReveal>

      {/* Main Special Events We Cover */}
      <ScrollReveal>
        <SectionHeading>Main Special Events We Cover</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
          {SPECIAL_EVENTS.map((item) => (
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

      {/* CTA */}
      <ScrollReveal>
        <p className="text-[0.95rem] text-body-2 leading-7">
          Call us today at{" "}
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="text-gold font-semibold no-underline hover:underline"
          >
            {SITE.phone}
          </a>{" "}
          and make your reservation to start enjoying the unique and world class
          service of American Elite Limousine.
        </p>
      </ScrollReveal>
    </div>
  );
}
