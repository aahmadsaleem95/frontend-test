export default function TemplateSelector() {
  const templates = [
    { id: 1, label: "No Frame" },
    { id: 2, label: "Scan Me" },
    { id: 3, label: "Get App" },
    { id: 4, label: "Custom Text" },
  ];

  return (
    <div>
      <h2 className="text-sm font-medium mb-2">Frame</h2>

      {/* Horizontal scroll container */}
      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className="flex-shrink-0 w-28 h-28 border rounded-lg flex items-center justify-center text-xs bg-white shadow-sm"
          >
            {tpl.label}
          </div>
        ))}
      </div>

      {/* Example frame options */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-2">
          <label className="text-sm">Frame Color:</label>
          <input
            type="color"
            defaultValue="#000000"
            className="w-10 h-8 p-0 border"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm">Frame Text:</label>
          <input
            type="text"
            placeholder="SCAN ME"
            className="flex-1 border px-2 py-1 rounded"
          />
        </div>
      </div>
    </div>
  );
}
