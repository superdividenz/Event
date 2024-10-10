import React from 'react';

const MapModal = () => {
  const mapContainerStyle = { height: '400px', width: '100%' };
  const center = { lat: 0, lng: 0 }; // Set your desired latitude and longitude

  return (
    <div>
      <h2>Map Modal</h2>
      <div style={mapContainerStyle}>
        {/* Here you can implement your map component, using `center` to position it */}
        <p>Map would be centered at {center.lat}, {center.lng}</p>
        {/* Your map component goes here */}
      </div>
    </div>
  );
};

export default MapModal;
