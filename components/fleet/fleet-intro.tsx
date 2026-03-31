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

          <p className="text-[0.95rem] text-body-2 leading-8">
            At American Elite Limousine, we pride ourselves on offering
            a wide range of chauffeur driven cars, specially tailored to your very
            need. We offer clean non-smoking transportation including Lincoln Town
            Cars, Luxury SUVs, and 14 Passenger Vans. All vehicles are maintained
            to the highest standards, ensuring your safety and comfort at all times.
            Whether you&apos;re heading to the airport, a corporate meeting, or a
            special event, we have the perfect vehicle for you.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
