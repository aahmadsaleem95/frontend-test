import Image from "next/image";
import TemplateSelector from "./TemplateSelector";
import OptionButtons from "./OptionButtons";

function PageContent() {
  return (
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

      {/* OptionButtons */}
      <OptionButtons />
    </section>
  );
}

export default PageContent;
