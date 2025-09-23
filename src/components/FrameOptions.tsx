"use client";

import { useState } from "react";

export default function FrameOptions() {
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("SCAN ME");

  const handleChange = (newColor: string, newText: string) => {
    setColor(newColor);
    setText(newText);
  };

  return (
    <div
      className="mt-4 overflow-scroll flex gap-3"
      role="region"
      aria-label="Frame customization options"
    >
      {/* Frame Color Option */}
      <div className="flex gap-1 flex-col min-w-[140px] border border-gray-200 p-2 rounded">
        <label
          htmlFor="frameColor"
          className="text-xs font-bold text-gray-600 w-full"
        >
          Frame Color:
        </label>
        <div className="flex gap-3 border border-gray-300 rounded py-1 px-2">
          <span
            className="text-sm text-gray-700"
            aria-live="polite"
            aria-atomic="true"
          >
            {color}
          </span>
          <input
            id="frameColor"
            type="color"
            value={color}
            onChange={(e) => handleChange(e.target.value, text)}
            className="w-5 h-6 p-0 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Select frame color"
          />
        </div>
      </div>

      {/* Frame Text Option */}
      <div className="flex gap-1 flex-col border border-gray-200 p-2 rounded">
        <label htmlFor="frameText" className="text-xs font-bold text-gray-600">
          Frame Text:
        </label>
        <input
          id="frameText"
          type="text"
          value={text}
          onChange={(e) => handleChange(color, e.target.value)}
          className="flex-1 border border-gray-300 px-2 py-1 rounded text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Enter frame text"
        />
      </div>
    </div>
  );
}
