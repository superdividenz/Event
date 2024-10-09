import React from 'react';

const Table = ({ id, seats, isSelected, onSelect }) => {
  return (
    <div 
      className={`table relative w-48 h-48 cursor-pointer transition-all ${isSelected ? 'scale-105' : ''}`} 
      onClick={() => onSelect(id)}
    >
      {/* Circular table */}
      <div className={`absolute inset-0 rounded-full bg-yellow-700 border-4 ${isSelected ? 'border-blue-500' : 'border-gray-300'}`}></div>
      
      {/* Seats */}
      {seats.map((seat, index) => {
        const angle = (index / seats.length) * 2 * Math.PI;
        const x = 50 + 40 * Math.cos(angle);
        const y = 50 + 40 * Math.sin(angle);
        return (
          <div 
            key={seat.id} 
            className={`absolute w-6 h-6 rounded-full ${seat.isOccupied ? 'bg-red-500' : 'bg-green-500'}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          ></div>
        );
      })}
      
      {/* Table number */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-lg font-bold">Table {id}</span>
      </div>
    </div>
  );
};

export default Table;