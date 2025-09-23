"use client";

import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useState } from "react";

export default function QRPreview() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // check if page is scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-16 z-40 bg-gray-50 ${
        scrolled ? "shadow-md" : "shadow-none"
      } p-4 flex flex-col items-center`}
      role="region"
      aria-labelledby="qr-preview-title"
    >
      {/* QR Code */}
      <div
        className="p-3 outline-6 outline-offset-2 outline-black rounded"
        role="img"
        aria-label="QR code preview"
      >
        <QRCodeCanvas
          value="https://example.com"
          size={160}
          data-testid="qr-code"
        />
      </div>

      {/* CTA button */}
      <button
        className="mt-4 bg-black p-1 rounded-full flex gap-1 items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Download the app"
        onClick={() => {}}
      >
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
          <span className="bg-black py-0.5 text-xs rounded px-1 font-medium text-white">
            A
          </span>
        </div>
        <span id="qr-preview-title" className="text-xs text-white px-2">
          GET THE APP
        </span>
      </button>

      {/* Status */}
      <div
        className="mt-2 text-xs text-green-700 bg-green-100 px-3 py-1"
        role="status"
        aria-live="polite"
      >
        Scannability: Excellent
      </div>
    </div>
  );
}
