import { FLEET_VEHICLES } from "@/lib/constants";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { VehicleCard } from "./vehicle-card";

const EXTENDED_VEHICLES = [
  ...FLEET_VEHICLES.map((v) => ({
    name: v.name,
    description: v.description,
    image: v.image,
    capacity: v.capacity,
    features:
      v.name === "Executive Sedan"
        ? ["WiFi", "Water Bottle", "Climate Control", "Leather Seats", "USB Charging", "Flight Tracking"]
        : v.name === "Luxury SUV"
          ? ["Leather Seats", "USB Ports", "Extra Luggage", "Climate Control", "WiFi", "Privacy Partition"]
          : v.name === "Sprinter Van"
            ? ["Captain Seats", "WiFi", "AV System", "USB Ports", "Climate Control", "Tinted Windows"]
            : ["Restroom", "WiFi", "PA System", "Reclining Seats", "Overhead Storage", "Climate Control"],
  }))
];

export function VehicleGrid() {
  return (
    <section className="py-20 px-[5%] bg-ivory-2">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXTENDED_VEHICLES.map((vehicle, i) => (
            <ScrollReveal key={vehicle.name} delay={i * 0.1}>
              <VehicleCard
                name={vehicle.name}
                description={vehicle.description}
                image={vehicle.image}
                capacity={vehicle.capacity}
                features={vehicle.features}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
