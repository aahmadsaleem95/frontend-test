"use client";

export default function QRPreviewHeader() {
  return (
    <div
      className="shadow-sm px-4 pt-16 text-center"
      role="region"
      aria-labelledby="qr-preview-heading"
    >
      <h1
        id="qr-preview-heading"
        className="text-3xl font-bold text-gray-900 text-center my-8"
      >
        Customize QR Code
      </h1>
      <h2
        className="text-lg font-semibold text-gray-700 uppercase tracking-wide inline-block pb-2"
        aria-label="QR Code Preview Section"
      >
        Preview
      </h2>
    </div>
  );
}
