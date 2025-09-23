"use client";

import { useState } from "react";

interface FrameOptionsProps {
  onChange: (options: { color: string; text: string }) => void;
}

export default function FrameOptions({ onChange }: FrameOptionsProps) {
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("SCAN ME");

  const handleChange = (newColor: string, newText: string) => {
    setColor(newColor);
    setText(newText);
    onChange({ color: newColor, text: newText });
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center gap-3">
        <label htmlFor="frameColor" className="text-sm font-medium">
          Frame Color:
        </label>
        <input
          id="frameColor"
          type="color"
          value={color}
          onChange={(e) => handleChange(e.target.value, text)}
          className="w-10 h-8 p-0 border rounded"
        />
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="frameText" className="text-sm font-medium">
          Frame Text:
        </label>
        <input
          id="frameText"
          type="text"
          value={text}
          onChange={(e) => handleChange(color, e.target.value)}
          className="flex-1 border px-2 py-1 rounded"
        />
      </div>
    </div>
  );
}
