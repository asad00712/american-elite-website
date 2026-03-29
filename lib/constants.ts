export const SITE = {
  name: "LIMOUSINE",
  nameSuffix: ".COM",
  phone: "888-999-LIMO",
  email: "info@limousine.com",
  emailAlt: "res@limousine.com",
  address: "36-01 37th Avenue, Long Island City, New York, NY 11101",
  tagline: "Luxury Ground Travel · 600+ Cities · 60+ Countries",
} as const;
import lincoln1 from '@/public/lincoln1.png';
import lincoln2 from '@/public/suv1.png';
import lincoln3 from '@/public/14pass.png';

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/fleet" },
  { label: "Cities", href: "/cities" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Airport Car & Limo Services", href: "/services/airport" },
      { label: "Corporate & Local Transportation", href: "/services/corporate" },
      { label: "Party Transportation", href: "/services/party" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
] as const;

export const TRUST_STATS = [
  { value: "600+", label: "Cities Worldwide" },
  { value: "60+", label: "Countries Covered" },
  { value: "98%", label: "On-Time Guarantee" },
  { value: "4.9★", label: "Average Rating" },
] as const;

export const HERO_CHIPS = [
  "All-Inclusive Pricing",
  "Vetted Drivers",
  "24/7 Dispatch",
  "Flight Tracking",
] as const;

export const FEATURES = [
  {
    icon: "🌍",
    title: "Worldwide Coverage",
    description:
      "Available in over 600 cities across 60 countries. From New York to Dubai, Tokyo to London — our network ensures premium transportation anywhere on the planet.",
    link: "600+ cities",
  },
  {
    icon: "🤝",
    title: "Partners & Affiliates",
    description:
      "Every partner in our network is rigorously licensed, vetted, and fully insured. We work exclusively with professional operators running their own modern, well-maintained fleets.",
    link: "Verified operators",
  },
  {
    icon: "💰",
    title: "All-Inclusive Pricing",
    description:
      "No hidden fees or surprise charges at drop-off. Every quote includes gratuity, tolls, and fees — fully confirmed before you book. What you see is exactly what you pay.",
    link: "Transparent rates",
  },
] as const;

export const FLEET_VEHICLES = [
  {
    name: "Executive Sedan",
    description: "Premium sedans for solo travelers and small groups. Ideal for airport transfers and corporate meetings.",
    image: lincoln1,
    capacity: "1–3 Pax",
    tags: ["WiFi", "Water Bottle", "Climate Ctrl"],
  },
  {
    name: "Luxury SUV",
    description: "Spacious SUVs for families and small groups who need extra comfort and generous luggage capacity.",
    image: lincoln2,
    capacity: "1–6 Pax",
    tags: ["Leather Seats", "USB Ports", "Extra Luggage"],
  },
  {
    name: "Sprinter Van",
    description: "Mercedes Sprinters for mid-size groups. Perfect for corporate shuttles, hotel transfers, and city tours.",
    image: lincoln3,
    capacity: "7–14 Pax",
    tags: ["Captain Seats", "WiFi", "AV System"],
  },
] as const;

export const CITY_PILLS = [
  { flag: "🇺🇸", name: "New York" },
  { flag: "🇺🇸", name: "Los Angeles" },
  { flag: "🇺🇸", name: "Chicago" },
  { flag: "🇺🇸", name: "Miami" },
  { flag: "🇺🇸", name: "Las Vegas" },
  { flag: "🇬🇧", name: "London" },
  { flag: "🇫🇷", name: "Paris" },
  { flag: "🇦🇪", name: "Dubai" },
  { flag: "🇯🇵", name: "Tokyo" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🇩🇪", name: "Berlin" },
  { flag: "🇮🇹", name: "Rome" },
  { flag: "🇨🇦", name: "Toronto" },
  { flag: "🇦🇺", name: "Sydney" },
  { flag: "🇪🇸", name: "Barcelona" },
  { flag: "🇳🇱", name: "Amsterdam" },
] as const;

export const CITY_CARDS = [
  {
    name: "New York",
    info: "JFK · LGA · EWR — Manhattan, Brooklyn, Queens",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=700&q=80",
  },
  {
    name: "Dubai",
    info: "DXB · DWC — Downtown, Marina, Palm Jumeirah",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=700&q=80",
  },
  {
    name: "London",
    info: "LHR · LGW · STN — Westminster, City, Canary Wharf",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&q=80",
  },
] as const;

export const COVERAGE_STATS = [
  { value: "600+", label: "Cities Worldwide" },
  { value: "60+", label: "Countries Served" },
  { value: "24/7", label: "Dispatch Support" },
  { value: "100%", label: "Insured Partners" },
] as const;

export const COVERAGE_FEATURES = [
  {
    icon: "✈️",
    title: "Airport Transfers",
    description: "Meet & greet at all major international airports. Flight tracking included — we're always there when you land.",
  },
  {
    icon: "🏢",
    title: "Corporate Travel",
    description: "Dedicated accounts for businesses with centralized billing, professional invoicing, and account managers.",
  },
  {
    icon: "🎓",
    title: "Group & Event Travel",
    description: "Weddings, conferences, sports teams, school trips. We coordinate entire fleets for any scale of event.",
  },
  {
    icon: "🏨",
    title: "Hotel & Resort Shuttles",
    description: "Point-to-point or scheduled loop services for hospitality clients and resort properties.",
  },
] as const;

export const APP_FEATURES = [
  "Instant booking with real-time confirmation",
  "Live GPS driver tracking from pickup to drop-off",
  "Modify or cancel reservations anytime, anywhere",
  "Digital receipts and corporate expense reports",
  "24/7 in-app support and dispatch chat",
] as const;

export const TESTIMONIALS = [
  {
    text: "Best ground transportation I've used across 40+ countries. The driver met me at baggage claim with a sign — absolute class. Will never use anyone else.",
    name: "James Whitfield",
    role: "CEO, Whitfield Capital · New York",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    featured: false,
  },
  {
    text: "We coordinated 12 vehicles across 3 days in Chicago for our annual conference. Every single pickup was flawless. The all-inclusive pricing made our budget planning so easy.",
    name: "Sarah Chen",
    role: "Events Director, TechSummit · Chicago",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    featured: true,
  },
  {
    text: "Used Limousine.com for a week of client meetings in Dubai. The SUV was immaculate, driver professional and discreet. Confirmed pricing before booking was a huge plus.",
    name: "Omar Al-Rashid",
    role: "Investment Director · Dubai, UAE",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    featured: false,
  },
] as const;

export const VEHICLE_OPTIONS = [
  "Any Vehicle",
  "Sedan (1–3 passengers)",
  "SUV (1–6 passengers)",
  "Sprinter Van (7–14)",
  "Charter Bus (15–55)",
  "Stretch Limousine",
] as const;

export const FOOTER_SERVICES = [
  "Airport Transfers",
  "Corporate Travel",
  "One-Way Transfers",
  "Hourly Charters",
  "Event Transportation",
  "Hotel Shuttles",
] as const;

export const FOOTER_COMPANY = [
  "About Limousine.com",
  "Partners & Affiliates",
  "Become a Partner",
  "Careers",
  "Press & Media",
  "Privacy Policy",
] as const;
