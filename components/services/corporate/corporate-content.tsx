import Image from "next/image";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { SITE } from "@/lib/constants";
import type { SVGProps } from "react";
import BlackCar from '@/public/BlackCar.png'

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
  "Dedicated Account Manager",
  "Centralized Billing & Invoicing",
  "Priority Scheduling",
  "Professional & Discreet Chauffeurs",
  "Real-Time Trip Updates",
  "Flexible Cancellation Policy",
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

export function CorporateContent() {
  return (
    <div className="space-y-14">
      {/* Intro Section */}
      <ScrollReveal>
        <div className="rounded-xl overflow-hidden mb-6">
          <Image
            src={BlackCar}
            alt="Luxury sedan for corporate transportation"
            width={800}
            height={450}
            className="w-full h-[280px] md:h-[340px] object-cover rounded-xl"
          />
        </div>
        <h2 className="font-heading text-[1.7rem] md:text-[2rem] font-medium text-navy mb-4">
          Corporate &amp; Local Services
        </h2>
        <p className="text-[0.95rem] text-body-2 leading-7 mb-4">
          Being on time is crucial in business — that&apos;s why at
          Limousine.com, punctuality is our first priority. Arrive at your
          business meeting with our clean and well-maintained fleets of
          Limousines, Luxury Sedans, SUVs, and Luxury Minivans.
        </p>
        <p className="text-[0.95rem] text-body-2 leading-7 mb-4">
          We deliver quality, personalized, and unique corporate service
          worldwide. We handle everything in the most professional manner so you
          can travel with the comfort and luxury you deserve.
        </p>
        <p className="text-[0.95rem] text-body-2 leading-7">
          Our corporate limousine and luxury sedan services are available in 600+
          cities worldwide. You can trust our professional chauffeurs with the
          most demanding arrangements. We are available 24/7.
        </p>
      </ScrollReveal>

      {/* Benefits Section */}
      <ScrollReveal>
        <SectionHeading>Why Choose Our Corporate Service</SectionHeading>
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

      {/* Our Rates Section */}
      <ScrollReveal>
        <SectionHeading>Our Rates</SectionHeading>
        <p className="text-[0.95rem] text-body-2 leading-7 mb-6">
          Our corporate rates are transparent and all-inclusive.
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
          Discounted rates available for corporate accounts based on service
          frequency. Call us at{" "}
          <a
            href="tel:8889995466"
            className="text-gold font-semibold no-underline hover:underline"
          >
            {SITE.phone}
          </a>{" "}
          to set up your corporate account.
        </p>
      </ScrollReveal>
    </div>
  );
}
