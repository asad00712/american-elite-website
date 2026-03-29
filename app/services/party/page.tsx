import { PartyHero } from "@/components/services/party/party-hero";
import { PartyContent } from "@/components/services/party/party-content";

export default function PartyServicePage() {
  return (
    <>
      <PartyHero />

      <section className="py-20 px-[5%] bg-ivory">
        <div className="max-w-250 mx-auto">
          <PartyContent />
        </div>
      </section>
    </>
  );
}
