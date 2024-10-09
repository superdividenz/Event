// App.js
import React, { useState } from 'react';
import TableLayout from './components/TableLayout';
import Header from './components/Header';
import SpeakerInfo from './components/SpeakerInfo';
import MapModal from './components/MapModal';
import FlyerModal from './components/FlyerModal';

const initialTables = Array.from({ length: 60 }, (_, tableIndex) => {
  const seats = Array.from({ length: 10 }, (_, seatIndex) => ({
    id: seatIndex + 1,
    isOccupied: false
  }));
  
  // Randomly occupy 2 seats per table
  const occupiedSeats = new Set();
  while (occupiedSeats.size < 2) {
    occupiedSeats.add(Math.floor(Math.random() * 10));
  }
  occupiedSeats.forEach(seatIndex => {
    seats[seatIndex].isOccupied = true;
  });

  return {
    id: tableIndex + 1,
    seats,
    isSelected: false
  };
});

function App() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);

  const handleTableSelect = (tableId) => {
    // This function will be called by TableLayout component
    console.log(`Table ${tableId} selected`);
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <Header 
        onOpenMap={() => setIsMapModalOpen(true)}
        onOpenFlyer={() => setIsFlyerModalOpen(true)}
      />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <TableLayout initialTables={initialTables} onTableSelect={handleTableSelect} />
        <SpeakerInfo />
      </main>
      <MapModal isOpen={isMapModalOpen} onClose={() => setIsMapModalOpen(false)} />
      <FlyerModal isOpen={isFlyerModalOpen} onClose={() => setIsFlyerModalOpen(false)} />
    </div>
  );
}

export default App;