"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { TimePicker } from "@/components/ui/time-picker";
import { SITE, HERO_CHIPS, VEHICLE_OPTIONS } from "@/lib/constants";
import BannerImage from '@/public/BannerImage.png';

const TABS = ["One Way", "Hourly Trip"] as const;

const DURATION_OPTIONS = Array.from({ length: 23 }, (_, i) => `${i + 2} hours`);

export function Hero() {
  const [activeTab, setActiveTab] = useState<string>("One Way");
  const [booked, setBooked] = useState(false);

  const handleBook = () => {
    setBooked(true);
    setTimeout(() => setBooked(false), 3000);
  };

  return (
    <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-[60px] px-[5%] pt-[100px] pb-[60px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${BannerImage.src})`,
          backgroundPosition: "center 30%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(13,21,38,0.93) 0%, rgba(13,21,38,0.70) 55%, rgba(13,21,38,0.35) 100%)",
          }}
        />
      </div>

      {/* Left: Text */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2.5 text-[0.73rem] font-bold tracking-[3px] uppercase text-gold-3 mb-5">
          <span className="block w-7 h-px bg-gold-3/50" />
          Premium Limousine Service
          <span className="block w-7 h-px bg-gold-3/50" />
        </div>

        <h1 className="font-heading text-[clamp(2.6rem,5vw,4.8rem)] font-normal leading-[1.1] text-white mb-[18px] -tracking-wide">
          Your Ride,
          <br />
          <em className="italic text-gold-3">Our Pride.</em>
        </h1>

        <p className="text-[1.05rem] text-white/55 mb-9 tracking-wide">
          {SITE.tagline}
        </p>

        <div className="flex flex-wrap gap-3">
          {HERO_CHIPS.map((chip) => (
            <div
              key={chip}
              className="flex items-center gap-1.5 text-[0.8rem] text-white/50"
            >
              <span className="text-gold-3 font-bold">&#10003;</span> {chip}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Booking Form */}
      <div className="relative z-10">
        <div className="bg-white rounded-[14px] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.45)] border-t-[3px] border-gold">
          {/* Tabs */}
          <div className="flex bg-ivory-2 rounded-md p-1 mb-[22px]">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 border-none rounded text-[0.87rem] font-semibold cursor-pointer transition-all ${
                  activeTab === tab
                    ? "bg-navy text-white"
                    : "bg-transparent text-body-2"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Fields */}
          <div className="space-y-[13px]">
            {/* One Way: Pickup + Drop-off | Hourly: From */}
            <div>
              <label className="block text-[0.7rem] font-bold tracking-[1.5px] uppercase text-body-3 mb-1.5">
                {activeTab === "One Way" ? "Pickup Address" : "From"}
              </label>
              <Input
                type="text"
                placeholder={
                  activeTab === "One Way"
                    ? "Enter pickup address or airport..."
                    : "Enter from location..."
                }
                className="h-11 bg-ivory border-ivory-3 text-body placeholder:text-body-3 focus-visible:border-gold focus-visible:ring-gold/30 rounded-md"
              />
            </div>

            {activeTab === "One Way" ? (
              <div>
                <label className="block text-[0.7rem] font-bold tracking-[1.5px] uppercase text-body-3 mb-1.5">
                  Drop-Off Address
                </label>
                <Input
                  type="text"
                  placeholder="Enter drop-off destination..."
                  className="h-11 bg-ivory border-ivory-3 text-body placeholder:text-body-3 focus-visible:border-gold focus-visible:ring-gold/30 rounded-md"
                />
              </div>
            ) : (
              <div>
                <label className="block text-[0.7rem] font-bold tracking-[1.5px] uppercase text-body-3 mb-1.5">
                  Duration
                </label>
                <Select>
                  <SelectTrigger className="h-11 w-full bg-ivory border-ivory-3 text-body focus-visible:border-gold focus-visible:ring-gold/30 rounded-md">
                    <SelectValue placeholder="--Select--" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-ivory-3">
                    {DURATION_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Date + Time */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[0.7rem] font-bold tracking-[1.5px] uppercase text-body-3 mb-1.5">
                  Date
                </label>
                <DatePicker />
              </div>
              <div>
                <label className="block text-[0.7rem] font-bold tracking-[1.5px] uppercase text-body-3 mb-1.5">
                  Time
                </label>
                <TimePicker />
              </div>
            </div>

            {/* Vehicle Type - One Way only */}
            {activeTab === "One Way" && (
              <div>
                <label className="block text-[0.7rem] font-bold tracking-[1.5px] uppercase text-body-3 mb-1.5">
                  Vehicle Type
                </label>
                <Select>
                  <SelectTrigger className="h-11 w-full bg-ivory border-ivory-3 text-body focus-visible:border-gold focus-visible:ring-gold/30 rounded-md">
                    <SelectValue placeholder="Any Vehicle" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-ivory-3">
                    {VEHICLE_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <button
            onClick={handleBook}
            className={`w-full mt-4 py-[15px] border-none rounded-md text-[0.92rem] font-bold cursor-pointer tracking-wide uppercase transition-all ${
              booked
                ? "bg-gradient-to-br from-emerald-500 to-emerald-700 text-white"
                : "bg-gradient-to-br from-gold-2 to-gold text-white hover:shadow-[0_8px_28px_rgba(184,144,46,0.5)] hover:-translate-y-px"
            }`}
          >
            {booked
              ? "\u2713 Finding available vehicles..."
              : "Book Now \u2014 Get Instant Quote"}
          </button>
        </div>
      </div>
    </div>
  );
}
