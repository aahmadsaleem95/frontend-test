function OptionButtons() {
  return (
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
  );
}

export default OptionButtons;
