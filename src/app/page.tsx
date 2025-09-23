import QRPreview from "../components/QRPreview";
import TemplateSelector from "../components/TemplateSelector";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* Sticky QR Preview */}
      <QRPreview />

      {/* Scrollable content */}
      <section className="flex-1 p-4 space-y-6">
        {/* Horizontal Template Selector */}
        <TemplateSelector />

        {/* Example buttons */}
        <div className="flex justify-between mt-6">
          <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
            Save Changes
          </button>
        </div>
      </section>
    </main>
  );
}
