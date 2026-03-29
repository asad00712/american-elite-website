import Image from "next/image";
import Link from "next/link";

interface VehicleCardProps {
  name: string;
  description: string;
  image: any;
  capacity: string;
  features: string[];
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-gold shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function VehicleCard({
  name,
  description,
  image,
  capacity,
  features,
}: VehicleCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-ivory-3 transition-all duration-[350ms] hover:-translate-y-[5px] hover:shadow-[0_20px_60px_rgba(13,21,38,0.12)] group flex flex-col">
      {/* Image */}
      <div className="h-[270px] overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
        <div className="absolute bottom-3 right-3 bg-gold text-white text-[0.75rem] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          {capacity}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-[1.3rem] font-medium text-navy mb-2">
          {name}
        </h3>
        <p className="text-[0.88rem] text-body-2 leading-7 mb-5">
          {description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-[0.84rem] text-body-2"
            >
              <CheckIcon />
              {feature}
            </div>
          ))}
        </div>

        {/* Book Now */}
        <div className="mt-auto pt-4 border-t border-ivory-3">
          <Link
            href="/contact"
            className="group/btn inline-flex items-center gap-2 bg-navy text-white px-6 py-2.5 rounded-[5px] text-[0.85rem] font-semibold no-underline hover:bg-gold hover:shadow-[0_6px_20px_rgba(184,144,46,0.4)] transition-all"
          >
            Book Now
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
