import { FLEET_VEHICLES } from "@/lib/constants";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { VehicleCard } from "./vehicle-card";

const FEATURE_MAP: Record<string, string[]> = {
  "Lincoln Town Car": ["Leather Seats", "Climate Control", "Tinted Windows", "CD Player", "AM/FM Surround Sound", "Non-Smoking"],
  "Luxury SUV": ["Comfortable Seating", "Flat Screen TV's", "DVD Player", "CD Player with AM/FM Surround Sound", "Fiber Optic & Strobe Lighting", "Mirrored Fiber Optic Ceiling", "Bar with Built-in Ice Chests", "Static & Laser Light"],
  "14 Passenger Van": ["Passenger Capacity: 14", "Luggage Capacity: 4", "Colors Available: Black", "Tinted Rear Windows", "Climate Control", "Professional Driver"],
};

const EXTENDED_VEHICLES = FLEET_VEHICLES.map((v) => ({
  name: v.name,
  description: v.description,
  image: v.image,
  capacity: v.capacity,
  features: FEATURE_MAP[v.name] ?? v.tags as unknown as string[],
}));

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
