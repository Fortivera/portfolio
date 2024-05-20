import React from "react";

type GlassyComponentProps = {
  // Define your props here, if necessary
};

const GlassyComponent: React.FC<GlassyComponentProps> = (props) => {
  return (
    <div className="relative rounded-lg border border-[#2f2f2f] bg-opacity-20 bg-gradient-to-b from-[#3f3f42] to-[#28242f] p-6 backdrop-blur-md">
      <h1 className="text-lg font-semibold text-white">
        Add translucent modals
      </h1>
      <p className="text-purple-200">
        We should bring the glass effect to the app
      </p>
      {/* ... other component parts */}
      <button className="mt-4 rounded bg-purple-600/75 px-4 py-2 font-bold text-white hover:bg-purple-800/75">
        Save issue
      </button>
    </div>
  );
};

export default GlassyComponent;
