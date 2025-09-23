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
    >
      {/* QR Code */}
      <div className="p-3 outline-6 outline-offset-2 outline-black rounded">
        <QRCodeCanvas
          value="https://example.com"
          size={160}
          data-testid="qr-code"
        />
      </div>
      {/* CTA button */}
      <button
        className="mt-3 bg-black text-white px-4 py-2 rounded-full text-sm"
        onClick={() => {}}
      >
        <span className="bg-white">A</span>
        GET THE APP
      </button>

      {/* Status */}
      <div className="mt-2 text-xs text-green-700 bg-green-100 px-3 py-1">
        Scannability: Excellent
      </div>
    </div>
  );
}
