"use client";

import { Info } from "lucide-react";
import { useState } from "react";

interface TooltipProps {
  text: string;
}

export default function Tooltip({ text }: TooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Tooltip trigger button */}
      <button
        type="button"
        aria-label="More information"
        aria-describedby={open ? "tooltip-content" : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((prev) => !prev)} // works for mobile tap
        className="p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Info className="w-5 h-5 text-gray-600" />
      </button>

      {/* Tooltip content */}
      {open && (
        <div
          id="tooltip-content"
          role="tooltip"
          className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 p-2 bg-gray-900 text-white text-sm rounded-md shadow-lg z-50"
        >
          {text}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      )}
    </div>
  );
}
