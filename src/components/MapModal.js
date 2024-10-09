import React from 'react';

const MapModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Venue Map</h2>
        <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
          {/* Replace this with an actual map component or image */}
          <p>Map Placeholder</p>
        </div>
        <button 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MapModal;