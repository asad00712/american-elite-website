import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { WhyChooseUs } from "@/components/contact/why-choose-us";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-20 px-[5%] bg-ivory">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
}
