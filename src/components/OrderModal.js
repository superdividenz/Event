// OrderModal.js
import React, { useState } from 'react';

const OrderModal = ({ show, onClose, tableId, availableSeats, onOrder }) => {
  const [seatsToOrder, setSeatsToOrder] = useState(1);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Order Seats for Table {tableId}</h2>
        <p className="mb-2">Available seats: {availableSeats}</p>
        <div className="mb-4">
          <label htmlFor="seatCount" className="block mb-1">Number of seats to order:</label>
          <input 
            type="number" 
            id="seatCount"
            min="1"
            max={availableSeats}
            value={seatsToOrder}
            onChange={(e) => setSeatsToOrder(Math.min(availableSeats, Math.max(1, parseInt(e.target.value) || 1)))}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button 
            onClick={() => onOrder(seatsToOrder)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={availableSeats === 0}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;