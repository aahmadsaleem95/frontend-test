"use client";
import Image from "next/image";
import FrameOptions from "./FrameOptions";
import { useState } from "react";
import { templates } from "@/data/templates";

export default function TemplateSelector() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="bg-white p-3 border-gray-200 border shadow rounded-md">
      <h1 className="font-bold text-lg text-gray-800 mb-6">
        Start with a template
      </h1>
      <h2 className="text-gray-700 text-md font-bold mb-4">FRAME</h2>

      {/* Horizontal scroll container */}
      <div
        role="list"
        className="flex gap-3 overflow-x-auto pb-2 no-scrollbar"
        aria-label="Frame Templates"
      >
        {templates?.map((tpl) => (
          <div
            tabIndex={0}
            key={tpl.id}
            aria-label={tpl.label}
            onClick={() => setActiveId(tpl.id)}
            className={`flex-shrink-0 w-28 h-28 rounded flex items-center justify-center text-xs cursor-pointer transition-all bg-gray-100
              ${activeId === tpl.id && "border-3 border-blue-400"}`}
          >
            <Image
              src={`/${tpl.path}`}
              alt={`Frame${tpl.id}`}
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>

      {/* Example frame options */}
      <FrameOptions />
    </div>
  );
}
