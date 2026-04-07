import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { SITE } from "@/lib/constants";
import type { CityData } from "@/lib/cities-data";

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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

export function CityIntro({ city }: { city: CityData }) {
  return (
    <section className="py-20 px-[5%] bg-ivory">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-start">
        {/* Left: Text */}
        <ScrollReveal>
          <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.5rem)] font-normal text-navy leading-[1.2] -tracking-wide mb-6">
            Limo and Car Service in{" "}
            <em className="italic text-gold">{city.name}</em>
          </h2>
          <div className="space-y-4">
            {city.description.map((para, i) => (
              <p key={i} className="text-[0.95rem] text-body-2 leading-7">
                {para}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* Right: Benefits */}
        <ScrollReveal delay={0.15}>
          <div className="bg-gradient-to-br from-navy/[0.03] via-gold/[0.06] to-navy/[0.03] border border-gold/15 rounded-xl p-7">
            <h3 className="font-heading text-[1.3rem] font-medium text-navy mb-5">
              When you book our services, we guarantee:
            </h3>
            <div className="space-y-3.5">
              {city.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-[0.92rem] text-body-2"
                >
                  <CheckIcon className="w-5 h-5 text-gold shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-gold/15">
              <p className="text-[0.85rem] text-body-3">
                Call us at{" "}
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="text-gold font-semibold no-underline hover:underline"
                >
                  {SITE.phone}
                </a>{" "}
                to schedule your ride today.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
