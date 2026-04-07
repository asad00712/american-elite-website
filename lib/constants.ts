import lincoln1 from "@/public/lincoln1.png";
import lincoln2 from "@/public/suv1.png";
import lincoln3 from "@/public/14pass.png";

export const SITE = {
  name: "AMERICAN ELITE",
  nameSuffix: " LIMOUSINE",
  phone: "(973) 917-4949",
  phoneRaw: "9739174949",
  email: "americanelitelimousine@gmail.com",
  address: "Based in New Jersey",
  city: "Parsippany, NJ",
  tagline: "Professional Limousine Service · 24/7 · NJ & TriState Area",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/fleet" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Airport Car & Limo Services", href: "/services/airport" },
      { label: "Corporate & Local Transportation", href: "/services/corporate" },
      { label: "Party Transportation", href: "/services/party" },
    ],
  },
  { label: "Service Areas", href: "/cities" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const TRUST_STATS = [
  { value: "24/7", label: "Available" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "On-Time Rate" },
  { value: "4.9★", label: "Client Rating" },
] as const;

export const HERO_CHIPS = [
  "Affordable Rates",
  "Professional Chauffeurs",
  "24/7 Available",
  "Flight Tracking",
] as const;

export const FEATURES = [
  {
    icon: "globe" as const,
    title: "TriState Area Coverage",
    description:
      "Serving all of New Jersey and the TriState area. From Parsippany to Newark Airport, JFK, LaGuardia. We cover every major destination in NJ, NY, and beyond.",
    link: "NJ & TriState",
  },
  {
    icon: "chauffeur" as const,
    title: "Licensed & Insured",
    description:
      "All our chauffeurs are professionally trained, licensed, and fully insured. We operate a clean, well-maintained fleet of Lincoln Town Cars, SUVs, and Luxury Minivans.",
    link: "Professional drivers",
  },
  {
    icon: "dollar" as const,
    title: "Affordable & Transparent",
    description:
      "Reasonable rates with no hidden fees or surprise charges. Get a quote upfront before you book. What we quote is what you pay. Available 24 hours a day, 7 days a week.",
    link: "Get a quote",
  },
];

export const FLEET_VEHICLES = [
  {
    name: "Lincoln Town Car",
    description:
      "American Elite Limousine is one of the newest & largest limo operators in New Jersey. For a ride anywhere in comfort and style, choose from our wide range of chauffeur driven cars.",
    image: lincoln1,
    capacity: "1–3 Pax",
    tags: ["Leather Seats", "Climate Ctrl", "Tinted Windows"],
  },
  {
    name: "Luxury SUV",
    description:
      "Comfortable SUV seating with premium entertainment features. Perfect for airport transfers, corporate travel, and special occasions with extra luggage space.",
    image: lincoln2,
    capacity: "1–6 Pax",
    tags: ["DVD Player", "Surround Sound", "Fiber Optic Lighting"],
  },
  {
    name: "14 Passenger Van",
    description:
      "Spacious passenger vans for group travel. Available in black with tinted rear windows. Ideal for corporate shuttles, airport transfers, and group outings.",
    image: lincoln3,
    capacity: "Up to 14 Pax",
    tags: ["Spacious", "Luggage Room", "Tinted Windows"],
  },
] as const;

export const SERVICE_AREAS = [
  "Parsippany",
  "Newark",
  "Morristown",
  "Jersey City",
  "Hoboken",
  "Short Hills",
  "Edison",
  "Ridgewood",
  "Livingston",
  "Paterson",
  "Princeton",
  "Atlantic City",
] as const;

export const AIRPORT_SERVICES = [
  { name: "Newark Liberty (EWR)", area: "Newark, NJ" },
  { name: "John F. Kennedy (JFK)", area: "Queens, NY" },
  { name: "LaGuardia (LGA)", area: "Queens, NY" },
  { name: "All Major Airports", area: "TriState Area" },
] as const;

export const COVERAGE_STATS = [
  { value: "15+", label: "Years in Business" },
  { value: "24/7", label: "Availability" },
  { value: "3", label: "Major Airports" },
  { value: "100%", label: "Licensed & Insured" },
] as const;

export const COVERAGE_FEATURES = [
  {
    icon: "plane",
    title: "Airport Transfers",
    description:
      "Reliable service to and from Newark (EWR), JFK, and LaGuardia (LGA). Flight tracking included. We monitor your arrival.",
  },
  {
    icon: "building",
    title: "Corporate Travel",
    description:
      "On-time corporate transportation for business meetings, conferences, and executive travel throughout NJ and NY.",
  },
  {
    icon: "party",
    title: "Special Events",
    description:
      "Weddings, proms, bachelor/bachelorette parties, concerts, and sporting events. Travel in style for any occasion.",
  },
  {
    icon: "car",
    title: "Local & Long Distance",
    description:
      "Whether it's a ride across town or a long-distance trip, we provide comfortable and reliable transportation.",
  },
] as const;

export const TESTIMONIALS = [
  {
    text: "Have been using them for a while now. Very professional and prompt service, reasonable fares, and nice clean cars. Great for airport pickup and drop-off.",
    name: "Sathya Srinivasan",
    role: "Parsippany, NJ",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    featured: false,
  },
  {
    text: "Best limousine service in New Jersey! Always on time, drivers are professional and courteous. Their rates are very reasonable compared to others. Highly recommended.",
    name: "Michael Rodriguez",
    role: "Basking Ridge, NJ",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    featured: true,
  },
  {
    text: "Used American Elite for my daughter's prom and they were fantastic. The car was spotless, driver was early, and the whole experience was first class. Will definitely use again.",
    name: "Jennifer Walsh",
    role: "Madison, NJ",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    featured: false,
  },
] as const;

export const VEHICLE_OPTIONS = [
  "Any Vehicle",
  "Lincoln Town Car (1–3 passengers)",
  "SUV (1–6 passengers)",
  "14 Passenger Van",
  "Luxury Minivan",
] as const;

export const FOOTER_SERVICES = [
  "Airport Transportation",
  "Corporate Transportation",
  "Business Accounts",
  "Party Limos",
  "Wedding Transportation",
  "Long Distance Travel",
] as const;

export const FOOTER_COMPANY = [
  "About Us",
  "Our Fleet",
  "Service Areas",
  "Careers",
  "Privacy Policy",
  "Terms of Service",
] as const;
