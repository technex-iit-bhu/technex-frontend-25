import React, { useState, useRef } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function DatePicker() {
  const [date, setDate] = useState(null);
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  
  const handleClickOutside = (event) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target)
    ) {
      setPopoverOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" w-full text-black niqqa">
        <div className="text-2xl mb-4 text-white">DOB</div>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Select a Date"
          value={date ? format(date, "PPP") : ""}
          readOnly
          onClick={() => setPopoverOpen(!isPopoverOpen)}
          className="bg-transparent border border-white px-4 py-1 text-2xl w-full text-white"
        />
        {isPopoverOpen && (
          <div
            ref={popoverRef}
            className="absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg mt-2"
          >
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              showOutsideDays
              className="border-0"
              classNames={{
                caption: "flex justify-center py-2 mb-4 relative items-center",
                caption_label: "text-sm font-medium text-gray-900",
                nav: "flex items-center",
                nav_button:
                  "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                nav_button_previous: "absolute left-1.5",
                nav_button_next: "absolute right-1.5",
                table: "w-full border-collapse",
                head_row: "flex font-medium text-gray-900",
                head_cell: "m-0.5 w-9 font-normal text-sm",
                row: "flex w-full mt-2",
                cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal",
                day_range_end: "day-range-end",
                day_selected:
                  "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                day_today: "rounded-md bg-gray-200 text-gray-900",
                day_outside:
                  "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                day_disabled: "text-gray-500 opacity-50",
                day_hidden: "invisible",
              }}
              components={{
                IconLeft: ({ ...props }) => (
                  <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                ),
                IconRight: ({ ...props }) => (
                  <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                ),
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
