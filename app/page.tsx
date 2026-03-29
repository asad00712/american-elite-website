import { Topbar } from "@/components/layout/topbar";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Features } from "@/components/sections/features";
import { Fleet } from "@/components/sections/fleet";
import { Cities } from "@/components/sections/cities";
import { Coverage } from "@/components/sections/coverage";
import { AppSection } from "@/components/sections/app-section";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Features />
      <Fleet />
      <Cities />
      <Coverage />
      {/* <AppSection /> */}
      <Testimonials />
      <CtaBanner />
    </>
  );
}
