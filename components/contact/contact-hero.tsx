import { ScrollReveal } from "@/components/sections/scroll-reveal";

export function ContactHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563720223185-11003d516935?w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/92 to-navy/85" />
      </div>
      <div className="relative z-10 text-center px-[5%]">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2.5 text-[0.71rem] font-bold tracking-[3px] uppercase text-gold-3 justify-center mb-4">
            <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
            Get In Touch
            <span className="w-7 h-0.5 bg-gold-3/50 shrink-0" />
          </div>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-normal text-white leading-[1.15] -tracking-wide">
            Contact <em className="italic text-gold-3">Us</em>
          </h1>
          <p className="text-[1.05rem] text-white/55 mt-4 max-w-[540px] mx-auto leading-7">
            Get in touch with our team for reservations, quotes, or any
            questions
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
