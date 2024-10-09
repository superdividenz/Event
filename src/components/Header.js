import React from 'react';

const Header = ({ onOpenMap, onOpenFlyer }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center md:text-left mb-2 md:mb-0">
          <h1 className="text-2xl font-bold">Alano Banquet 2024</h1>
           <h1 className="font-bold mb-1">
            Reserve Your Seat for an Unforgettable Experience!
          </h1>
        </div>
        <div className="flex items-center">
          <button 
            onClick={onOpenMap}
            className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm mr-2 hover:bg-blue-100 transition duration-300 ease-in-out"
          >
            Map
          </button>
          <button 
            onClick={onOpenFlyer}
            className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition duration-300 ease-in-out"
          >
            Flyer
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;