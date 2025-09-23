"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function QRPreview() {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm p-4 flex flex-col items-center">
      {/* QR Code */}
      <QRCodeCanvas value="https://example.com" size={160} />

      {/* CTA button */}
      <button className="mt-3 bg-black text-white px-4 py-2 rounded-lg text-sm">
        GET THE APP
      </button>

      {/* Status */}
      <div className="mt-2 text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full">
        Scannability: Excellent
      </div>
    </div>
  );
}
