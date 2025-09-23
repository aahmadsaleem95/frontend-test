"use client";
import QRPreviewHeader from "@/components/QRPreviewHeader";
import QRPreview from "@/components/QRPreview";
import TemplateSelector from "@/components/TemplateSelector";
import Header from "@/components/Header";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      {/* Non Sticky QR Part */}
      <QRPreviewHeader />

      {/* Sticky QR Preview */}
      <QRPreview />

      {/* Scrollable content */}
      <section className="flex-1 p-4 space-y-6">
        {/* Reset Button */}
        <div className="flex justify-center pb-3">
          <button
            className="flex px-4 py-2 rounded-full border border-black bg-white text-gray-800 font-bold uppercase shadow"
            onClick={() => {}}
          >
            <Image src="restart-svg.svg" alt="Restart" width={25} height={25} />
            Reset Design
          </button>
        </div>
        {/* Horizontal Template Selector */}
        <TemplateSelector />

        {/* Example buttons */}
        <div className="text-sm sticky bottom-4 z-40 flex justify-between mt-6 bg-white p-3 border-gray-200 border shadow rounded-md">
          <button
            className="px-4 py-2 rounded-full border border-blue-600 bg-white text-blue-600 font-bold uppercase"
            onClick={() => {}}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-full bg-blue-600 text-white uppercase font-bold"
            onClick={() => {}}
          >
            Save Changes
          </button>
        </div>
      </section>
    </main>
  );
}
