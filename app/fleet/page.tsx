import { FleetHero } from "@/components/fleet/fleet-hero";
import { FleetIntro } from "@/components/fleet/fleet-intro";
import { VehicleGrid } from "@/components/fleet/vehicle-grid";
import { FleetCta } from "@/components/fleet/fleet-cta";

export default function FleetPage() {
  return (
    <>
      <FleetHero />
      <FleetIntro />
      <VehicleGrid />
      <FleetCta />
    </>
  );
}
