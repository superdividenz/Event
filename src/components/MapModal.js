// MapModal.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 40.7128, // Replace with your venue's latitude
    lng: -74.0060 // Replace with your venue's longitude
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-3/4 max-w-3xl">
        <h2 className="text-xl font-bold mb-4">Venue Map</h2>
        <LoadScript googleMapsApiKey="AIzaSyBpLw7S1hnJ5ctmO1FLcyBX5AAA8RSziT8">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
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