import React, { useState } from 'react';
import TableLayout from './components/TableLayout';
import Header from './components/Header';
import Tagline from './components/Tagline';
import SpeakerInfo from './components/SpeakerInfo';
import MapModal from './components/MapModal';
import FlyerModal from './components/FlyerModal';

const initialTables = [
  { id: 1, seats: [{ id: 1, isOccupied: false }, { id: 2, isOccupied: true }], isSelected: false },
  { id: 2, seats: [{ id: 1, isOccupied: false }, { id: 2, isOccupied: false }], isSelected: false },
  { id: 3, seats: [{ id: 1, isOccupied: false }, { id: 2, isOccupied: false }, { id: 3, isOccupied: false }], isSelected: false },
  { id: 4, seats: [{ id: 1, isOccupied: true }, { id: 2, isOccupied: true }, { id: 3, isOccupied: false }, { id: 4, isOccupied: true }], isSelected: true },
];

function App() {
  const [tables, setTables] = useState(initialTables);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);

  const handleTableSelect = (tableId) => {
    setTables(prevTables => 
      prevTables.map(table => 
        table.id === tableId ? {...table, isSelected: !table.isSelected} : table
      )
    );
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <Header 
        onOpenMap={() => setIsMapModalOpen(true)}
        onOpenFlyer={() => setIsFlyerModalOpen(true)}
      />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Tagline />
        <TableLayout tables={tables} onTableSelect={handleTableSelect} />
        <SpeakerInfo />
      </main>
      <MapModal isOpen={isMapModalOpen} onClose={() => setIsMapModalOpen(false)} />
      <FlyerModal isOpen={isFlyerModalOpen} onClose={() => setIsFlyerModalOpen(false)} />
    </div>
  );
}

export default App;