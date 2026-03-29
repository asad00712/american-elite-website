"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  className?: string;
}

export function DatePicker({ className }: DatePickerProps) {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(
          "flex h-11 w-full items-center justify-between rounded-md border border-ivory-3 bg-ivory px-3.5 text-[0.9rem] text-body transition-colors hover:border-gold/40 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/30 focus-visible:outline-none",
          !date && "text-body-3",
          className
        )}
      >
        {date ? format(date, "MMM d, yyyy") : "Select date..."}
        <CalendarIcon className="h-4 w-4 text-body-3" />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-auto p-0 bg-white border border-ivory-3 shadow-xl"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            setDate(d);
            setOpen(false);
          }}
          disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
