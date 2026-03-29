import { ScrollReveal } from "@/components/sections/scroll-reveal";

export function FleetIntro() {
  return (
    <section className="py-20 px-[5%] bg-ivory">
      <div className="max-w-[800px] mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold mb-4">
            <span className="w-7 h-0.5 bg-gold shrink-0" />
            What We Offer
            <span className="w-7 h-0.5 bg-gold shrink-0" />
          </div>
          <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-normal text-navy leading-[1.2] -tracking-wide mb-6">
            Vehicle <em className="italic text-gold">Options</em>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="text-[0.95rem] text-body-2 leading-8">
            At Limousine.com, we maintain a diverse fleet of premium vehicles to
            meet every ground transportation need. From executive sedans for
            airport transfers to full-size charter buses for large groups, every
            vehicle in our network is maintained to the highest standards of
            safety, cleanliness, and comfort. With service across 600+ cities
            worldwide, our professional chauffeurs and modern fleet are ready to
            deliver a first-class experience — whether you are traveling for
            business, a special event, or leisure.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
