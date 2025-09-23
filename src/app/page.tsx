"use client";
import QRPreviewHeader from "@/components/QRPreviewHeader";
import QRPreview from "@/components/QRPreview";
import TemplateSelector from "@/components/TemplateSelector";
import Header from "@/components/Header";
import Image from "next/image";

export default function HomePage() {
  return (
    <main
      className="flex flex-col min-h-screen bg-gray-50"
      role="main"
      aria-label="QR Code customization home page"
    >
      {/* Header */}
      <Header />

      {/* Non Sticky QR Part */}
      <QRPreviewHeader />

      {/* Sticky QR Preview */}
      <QRPreview />

      {/* Scrollable content */}
      <section
        className="flex-1 p-4 space-y-6"
        aria-label="QR customization options"
      >
        {/* Reset Button */}
        <div className="flex justify-center pb-3">
          <button
            className="flex px-4 py-2 rounded-full border border-black bg-white text-gray-800 font-bold uppercase shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => {}}
            aria-label="Reset design to default"
          >
            <Image
              src="restart-svg.svg"
              alt="Restart"
              aria-hidden="true"
              width={25}
              height={25}
            />
            <span className="ml-2">Reset Design</span>
          </button>
        </div>

        {/* Horizontal Template Selector */}
        <TemplateSelector />

        {/* Example buttons */}
        <div
          className="text-sm sticky bottom-4 z-40 flex justify-between mt-6 bg-white p-3 border-gray-200 border shadow rounded-md"
          role="group"
          aria-label="Action buttons"
        >
          <button
            className="px-4 py-2 rounded-full border border-blue-600 bg-white text-blue-600 font-bold uppercase focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => {}}
            aria-label="Cancel and discard changes"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-full bg-blue-600 text-white uppercase font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => {}}
            aria-label="Save your changes"
          >
            Save Changes
          </button>
        </div>
      </section>
    </main>
  );
}
