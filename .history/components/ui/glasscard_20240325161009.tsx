import React from 'react';

type GlassyComponentProps = {
    // define your props here
};

const GlassyComponent: React.FC<GlassyComponentProps> = (props) => {
    return (
        <div className="relative p-6 border rounded-lg backdrop-blur-md bg-opacity-20 border-gray-200 bg-white/10">
            <h1 className="text-lg font-semibold">Add translucent modals</h1>
            <p>We should bring the glass effect to the app</p>
            {/* The rest of your component */}
            <button className="mt-4 bg-blue-500/75 hover:bg-blue-700/75 text-white font-bold py-2 px-4 rounded">
                Save issue
            </button>
        </div>
    );
};

export default GlassyComponent;
