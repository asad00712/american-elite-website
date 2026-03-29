import { AirportHero } from "@/components/services/airport/airport-hero";
import { AirportContent } from "@/components/services/airport/airport-content";

export default function AirportServicePage() {
  return (
    <>
      <AirportHero />

      <section className="py-20 px-[5%] bg-ivory">
        <div className="max-w-250 mx-auto">
          <AirportContent />
        </div>
      </section>
    </>
  );
}
