"use client";
import QRPreviewHeader from "@/components/QRPreviewHeader";
import QRPreview from "@/components/QRPreview";
import Header from "@/components/Header";
import PageContent from "@/components/PageContent";

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
      <PageContent />
    </main>
  );
}
