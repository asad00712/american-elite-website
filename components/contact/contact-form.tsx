"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/date-picker";

const inputStyles =
  "h-11 bg-ivory border-ivory-3 text-body placeholder:text-body-3 focus-visible:border-gold focus-visible:ring-gold/30 rounded-md";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <ScrollReveal direction="right">
      <div className="bg-white rounded-[14px] p-7 md:p-9 shadow-[0_12px_50px_rgba(13,21,38,0.08)] border border-ivory-3 border-t-[3px] border-t-gold lg:sticky lg:top-[90px]">
        <h3 className="font-heading text-[1.5rem] font-medium text-navy mb-1.5">
          Send Us a Request
        </h3>
        <p className="text-[0.85rem] text-body-3 mb-7">
          Fill out the form below and our team will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-[15px]">
          <FormField label="Full Name">
            <Input type="text" placeholder="Your full name..." required className={inputStyles} />
          </FormField>

          <FormField label="Email Address">
            <Input type="email" placeholder="your@email.com" required className={inputStyles} />
          </FormField>

          <FormField label="Phone Number">
            <Input type="tel" placeholder="(555) 123-4567" className={inputStyles} />
          </FormField>

          <FormField label="Preferred Date">
            <DatePicker />
          </FormField>

          <FormField label="Pickup Location">
            <Input type="text" placeholder="Enter pickup address or airport..." className={inputStyles} />
          </FormField>

          <FormField label="Drop Off Location">
            <Input type="text" placeholder="Enter drop-off destination..." className={inputStyles} />
          </FormField>

          <FormField label="Special Instructions / Request">
            <Textarea
              placeholder="Any special requirements, number of passengers, vehicle preference, etc."
              rows={4}
              className="bg-ivory border-ivory-3 text-body placeholder:text-body-3 focus-visible:border-gold focus-visible:ring-gold/30 rounded-md"
            />
          </FormField>

          <button
            type="submit"
            className={`w-full mt-2 py-[15px] border-none rounded-md text-[0.92rem] font-bold cursor-pointer tracking-wide uppercase transition-all duration-300 ${
              submitted
                ? "bg-gradient-to-br from-emerald-500 to-emerald-700 text-white"
                : "bg-gradient-to-br from-gold-2 to-gold text-white hover:shadow-[0_8px_28px_rgba(184,144,46,0.5)] hover:-translate-y-px"
            }`}
          >
            {submitted ? "\u2713 Request Sent Successfully!" : "Send Request"}
          </button>
        </form>
      </div>
    </ScrollReveal>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[0.7rem] font-bold tracking-[1.5px] uppercase text-body-3 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
