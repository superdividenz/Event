// Table.js
import React, { useState } from 'react';
import OrderModal from './OrderModal';

const Table = ({ id, seats, isSelected, onSelect }) => {
  const [showModal, setShowModal] = useState(false);

  const availableSeats = seats.filter(seat => !seat.isOccupied).length;

  return (
    <>
      <div 
        className={`table relative w-16 h-20 cursor-pointer transition-all ${isSelected ? 'scale-105' : ''}`} 
        onClick={() => setShowModal(true)}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className={`w-14 h-14 rounded-full bg-yellow-700 border relative ${isSelected ? 'border-blue-500' : 'border-gray-300'}`}>
            {seats.map((seat, index) => {
              const angle = ((index / seats.length) * 2 * Math.PI) - (Math.PI / 2); // Start from top
              const x = 50 + 47 * Math.cos(angle);
              const y = 50 + 47 * Math.sin(angle);
              return (
                <div 
                  key={seat.id} 
                  className={`absolute w-1.5 h-1.5 rounded-full ${seat.isOccupied ? 'bg-red-500' : 'bg-green-500'}`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                ></div>
              );
            })}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs font-bold">{id}</span>
            </div>
          </div>
          <div className="mt-1 text-xs font-semibold">
            {availableSeats} / {seats.length}
          </div>
        </div>
      </div>
      <OrderModal 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        tableId={id} 
        availableSeats={availableSeats}
        onOrder={(orderedSeats) => {
          // Handle the order here
          console.log(`Ordered ${orderedSeats} seats for table ${id}`);
          setShowModal(false);
        }}
      />
    </>
  );
};

export default Table;