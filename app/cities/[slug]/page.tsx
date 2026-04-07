import { notFound } from "next/navigation";
import { getCityBySlug, getAllCitySlugs } from "@/lib/cities-data";
import { CityHero } from "@/components/cities/city-page/city-hero";
import { CityIntro } from "@/components/cities/city-page/city-intro";
import { CityServices } from "@/components/cities/city-page/city-services";
import { CityCoverage } from "@/components/cities/city-page/city-coverage";
import { CityCta } from "@/components/cities/city-page/city-cta";
import type { Metadata } from "next";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: `Limousine Service in ${city.name}, NJ | American Elite Limousine`,
    description: `Professional limousine and car service in ${city.name}, New Jersey. Airport transfers, corporate travel, party transportation. Available 24/7. Call (973) 917-4949.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  return (
    <>
      <CityHero city={city} />
      <CityIntro city={city} />
      <CityServices city={city} />
      <CityCoverage city={city} />
      <CityCta city={city} />
    </>
  );
}
