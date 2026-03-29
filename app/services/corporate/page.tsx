import { CorporateHero } from "@/components/services/corporate/corporate-hero";
import { CorporateContent } from "@/components/services/corporate/corporate-content";

export default function CorporateServicePage() {
  return (
    <>
      <CorporateHero />

      <section className="py-20 px-[5%] bg-ivory">
        <div className="max-w-250 mx-auto">
          <CorporateContent />
        </div>
      </section>
    </>
  );
}
