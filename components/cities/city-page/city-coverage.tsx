import { ScrollReveal } from "@/components/sections/scroll-reveal";
import type { CityData } from "@/lib/cities-data";

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function CityCoverage({ city }: { city: CityData }) {
  return (
    <section className="py-20 px-[5%] bg-ivory-2">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: Nearby Areas */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold">
              <span className="w-7 h-0.5 bg-gold shrink-0" />
              Coverage Areas
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.5rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5 mb-6">
              We Also Serve Near{" "}
              <em className="italic text-gold">{city.name}</em>
            </h2>
            <p className="text-[0.92rem] text-body-2 leading-7 mb-6">
              In addition to {city.name}, our professional chauffeurs provide
              service throughout the surrounding areas. No matter where you are,
              we will pick you up and get you to your destination on time.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {city.nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="text-[0.82rem] px-4 py-2 rounded-full bg-white border border-ivory-3 text-body-2 font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Rates */}
          <ScrollReveal delay={0.15}>
            <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold">
              <span className="w-7 h-0.5 bg-gold shrink-0" />
              Our Rates
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.5rem)] font-normal text-navy leading-[1.2] -tracking-wide mt-3.5 mb-6">
              Transparent <em className="italic text-gold">Pricing</em>
            </h2>
            <p className="text-[0.92rem] text-body-2 leading-7 mb-6">
              Price will vary according to the time you require our service.
            </p>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-navy/[0.03] via-gold/[0.06] to-navy/[0.03] rounded-xl border border-gold/15 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center">
                    <ClockIcon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-heading text-[1.05rem] font-medium text-navy">
                    Standard Hours
                  </h3>
                </div>
                <p className="text-[0.88rem] text-body-2 leading-6">
                  5:00 AM to 11:59 PM
                </p>
                <p className="text-[0.82rem] text-body-3 mt-1">
                  Standard Rate Applies
                </p>
              </div>

              <div className="bg-gradient-to-br from-navy/[0.03] via-gold/[0.06] to-navy/[0.03] rounded-xl border border-gold/15 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center">
                    <MoonIcon className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="font-heading text-[1.05rem] font-medium text-navy">
                    Late Night
                  </h3>
                </div>
                <p className="text-[0.88rem] text-body-2 leading-6">
                  12:00 AM to 5:00 AM
                </p>
                <p className="text-[0.82rem] text-body-3 mt-1">
                  Rates May Vary
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
