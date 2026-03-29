"use client";

import { useState } from "react";
import { ClockIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const HOURS = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);
const MINUTES = Array.from({ length: 12 }, (_, i) =>
  String(i * 5).padStart(2, "0")
);
const PERIODS = ["AM", "PM"] as const;

export function TimePicker({ className }: { className?: string }) {
  const [hour, setHour] = useState<string | null>(null);
  const [minute, setMinute] = useState("00");
  const [period, setPeriod] = useState<"AM" | "PM">("AM");
  const [open, setOpen] = useState(false);

  const hasSelection = hour !== null;
  const display = hasSelection ? `${hour}:${minute} ${period}` : null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(
          "flex h-11 w-full items-center justify-between rounded-md border border-ivory-3 bg-ivory px-3.5 text-[0.9rem] text-body transition-colors hover:border-gold/40 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/30 focus-visible:outline-none",
          !hasSelection && "text-body-3",
          className
        )}
      >
        {display || "Select time..."}
        <ClockIcon className="h-4 w-4 text-body-3" />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-auto p-0 bg-white border border-ivory-3 shadow-xl [&_*]:outline-none"
      >
        <div className="flex">
          {/* Hours column */}
          <div className="flex flex-col">
            <div className="px-3 py-2 text-[0.68rem] font-bold tracking-wider uppercase text-body-3 text-center border-b border-ivory-3">
              Hour
            </div>
            <div className="flex flex-col overflow-y-auto h-[200px] tp-scroll">
              {HOURS.map((h) => (
                <button
                  key={h}
                  onClick={() => setHour(h)}
                  className={cn(
                    "px-4 py-2 text-[0.85rem] font-medium border-none cursor-pointer transition-colors text-center min-w-[56px] outline-none",
                    hour === h
                      ? "bg-gold text-white"
                      : "bg-white hover:bg-ivory-2 text-body"
                  )}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-ivory-3" />

          {/* Minutes column */}
          <div className="flex flex-col">
            <div className="px-3 py-2 text-[0.68rem] font-bold tracking-wider uppercase text-body-3 text-center border-b border-ivory-3">
              Min
            </div>
            <div className="flex flex-col overflow-y-auto h-[200px] tp-scroll">
              {MINUTES.map((m) => (
                <button
                  key={m}
                  onClick={() => setMinute(m)}
                  className={cn(
                    "px-4 py-2 text-[0.85rem] font-medium border-none cursor-pointer transition-colors text-center min-w-[56px] outline-none",
                    minute === m
                      ? "bg-gold text-white"
                      : "bg-white hover:bg-ivory-2 text-body"
                  )}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-ivory-3" />

          {/* AM/PM column */}
          <div className="flex flex-col">
            <div className="px-3 py-2 text-[0.68rem] font-bold tracking-wider uppercase text-body-3 text-center border-b border-ivory-3">
              &nbsp;
            </div>
            <div className="flex flex-col">
              {PERIODS.map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={cn(
                    "px-4 py-2 text-[0.85rem] font-semibold border-none cursor-pointer transition-colors text-center min-w-[52px] outline-none",
                    period === p
                      ? "bg-gold text-white"
                      : "bg-white hover:bg-ivory-2 text-body"
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-ivory-3 px-3 py-2">
          <span className="text-[0.85rem] font-semibold text-gold">
            {hasSelection ? display : "00:00"}
          </span>
          <button
            onClick={() => setOpen(false)}
            className="h-7 px-4 rounded-md bg-gold text-white text-[0.78rem] font-bold border-none cursor-pointer hover:bg-gold-2 transition-colors outline-none"
          >
            OK
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
