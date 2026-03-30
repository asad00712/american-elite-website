import { SITE } from "@/lib/constants";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import Link from "next/link";

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function FleetCta() {
  return (
    <section className="py-20 px-[5%] bg-navy">
      <div className="max-w-[800px] mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold-3 justify-center mb-4">
            <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
            Let Us Help
            <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
          </div>
          <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-normal text-white leading-[1.2] -tracking-wide mb-4">
            Need Help <em className="italic text-gold-3">Choosing?</em>
          </h2>
          <p className="text-[1rem] text-white/50 leading-7 mb-8 max-w-[550px] mx-auto">
            Not sure which vehicle is right for your trip? Our experienced team
            is available around the clock to help you select the perfect vehicle
            for your group size, occasion, and budget.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2.5 bg-white/[0.08] border border-white/[0.12] text-white px-7 py-3.5 rounded-[5px] text-[0.9rem] font-semibold no-underline hover:bg-white/[0.14] hover:border-gold/30 transition-all"
            >
              <PhoneIcon />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3.5 rounded-[5px] text-[0.9rem] font-semibold no-underline hover:bg-gold-2 hover:shadow-[0_6px_20px_rgba(184,144,46,0.4)] transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
