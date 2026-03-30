import Image from "next/image";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { SITE } from "@/lib/constants";
import type { SVGProps } from "react";
import AirportImage from '@/public/airport_limousine.jpg'

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

function MoonIcon(props: IconProps) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

const BENEFITS = [
  "On-Time Pick Up",
  "Low Prices",
  "Professional & Polite Chauffeur",
  "Luggage Assistance",
  "Online Reservation",
  "Open 24/7",
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

export function AirportContent() {
  return (
    <div className="space-y-14">
      {/* Intro Section */}
      <ScrollReveal>
        <div className="rounded-xl overflow-hidden mb-6">
          <Image
            src={AirportImage}
            alt="Luxury limousine near airport"
            width={800}
            height={450}
            className="w-full h-[280px] md:h-[340px] object-cover rounded-xl"
          />
        </div>
        <h2 className="font-heading text-[1.7rem] md:text-[2rem] font-medium text-navy mb-4">
          Airport Car &ndash; Limo Service
        </h2>
        <p className="text-[0.95rem] text-body-2 leading-7">
          We know that after arriving to one of the Major Airports in the Tri
          State Area you might want to arrive to your final destination and
          relax for the rest of the day. At American Elite Limousine in
          Parsippany we provide a world class service for Airport
          Transportation. We offer a fast, efficient and reliable service from
          any Airport to your Destination. Check the benefits that you will
          obtain by using our Limousine and Taxi Services.
        </p>
      </ScrollReveal>

      {/* Benefits Section */}
      <ScrollReveal>
        <SectionHeading>Benefits</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 text-[0.92rem] text-body-2"
            >
              <CheckCircleIcon className="w-5 h-5 text-gold shrink-0" />
              {benefit}
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* One Way Trip Section */}
      <ScrollReveal>
        <SectionHeading>One Way Trip?</SectionHeading>
        <p className="text-[0.95rem] text-body-2 leading-7">
          If you&apos;re planning one way trip to the Airport or from the
          Airport to your final destination, you can count on American Elite
          Limousine to take care of you with our top notch Limousine and Taxi
          Service. You can usually make a reservation the day before you need
          our service, but if you need a quick taxi service, you can check
          availability through a phone call.
        </p>
      </ScrollReveal>

      {/* Our Rates Section */}
      <ScrollReveal>
        <SectionHeading>Our Rates</SectionHeading>
        <p className="text-[0.95rem] text-body-2 leading-7 mb-6">
          Price will vary according to the time you require our service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Standard Hours Card */}
          <div className="bg-white rounded-xl border border-ivory-3 p-5 shadow-[0_4px_20px_rgba(13,21,38,0.05)]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <ClockIcon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading text-[1.05rem] font-medium text-navy">
                Standard Hours
              </h3>
            </div>
            <p className="text-[0.88rem] text-body-2 leading-6">
              5:00 AM &ndash; 11:59 PM
            </p>
            <p className="text-[0.82rem] text-body-3 mt-1">
              Standard Rate Applies
            </p>
          </div>

          {/* Late Night Card */}
          <div className="bg-white rounded-xl border border-ivory-3 p-5 shadow-[0_4px_20px_rgba(13,21,38,0.05)]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                <MoonIcon className="w-5 h-5 text-navy" />
              </div>
              <h3 className="font-heading text-[1.05rem] font-medium text-navy">
                Late Night
              </h3>
            </div>
            <p className="text-[0.88rem] text-body-2 leading-6">
              12:00 AM &ndash; 5:00 AM
            </p>
            <p className="text-[0.82rem] text-body-3 mt-1">
              Rates May Vary
            </p>
          </div>
        </div>

        <p className="text-[0.95rem] text-body-2 leading-7">
          If you need our limousine and taxi transportation service in the
          Newark Airport, John F Kennedy and LaGuardia prices may vary. We are
          ready to provide our qualified service, give us a call at{" "}
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="text-gold font-semibold no-underline hover:underline"
          >
            {SITE.phone}
          </a>{" "}
          for price consultation.
        </p>
      </ScrollReveal>
    </div>
  );
}
