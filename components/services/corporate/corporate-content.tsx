import Image from "next/image";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { SITE } from "@/lib/constants";
import type { SVGProps } from "react";
import LimousineHorizontal from '@/public/LimousineHorizontal.png';

type IconProps = SVGProps<SVGSVGElement>;

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
            src={LimousineHorizontal}
            alt="Luxury sedan for corporate transportation"
            width={800}
            height={450}
            className="w-full h-[280px] md:h-[340px] object-cover rounded-xl"
          />
        </div>
        <h2 className="font-heading text-[1.7rem] md:text-[2rem] font-medium text-navy mb-4">
          Corporate &ndash; Local Services
        </h2>
        <p className="text-[0.95rem] text-body-2 leading-7 mb-4">
          Being on time is really important nowadays that&apos;s why at American
          Elite Limousine this is our first priority. Arrive to your business
          meeting with our clean and well-maintained fleets of Limousines, Luxury
          Sedans, SUV and Luxury Minivans.
        </p>
        <p className="text-[0.95rem] text-body-2 leading-7 mb-4">
          We deliver quality, personalized and unique corporate service in the
          Parsippany Area. We handle everything in the most professional manner
          so you can travel with the comfort and luxury you deserve.
        </p>
        <p className="text-[0.95rem] text-body-2 leading-7">
          Since our Corporate Limousine and Luxury sedan services are available
          in the New Jersey Area you can trust our professional chauffeurs with
          the most demanding arrangements. We are available 24/7.
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
          <div className="bg-gradient-to-br from-navy/[0.03] via-gold/[0.06] to-navy/[0.03] rounded-xl border border-gold/15 p-5 shadow-[0_4px_20px_rgba(13,21,38,0.05)]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center">
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
          <div className="bg-gradient-to-br from-navy/[0.03] via-gold/[0.06] to-navy/[0.03] rounded-xl border border-gold/15 p-5 shadow-[0_4px_20px_rgba(13,21,38,0.05)]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center">
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
          Discounted Rates applies for Corporate Limousine based on the service
          frequency. Call us today at{" "}
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="text-gold font-semibold no-underline hover:underline"
          >
            {SITE.phone}
          </a>{" "}
          and Make your Reservation to start enjoying the unique and world class
          service of American Elite Limousine.
        </p>
      </ScrollReveal>
    </div>
  );
}
