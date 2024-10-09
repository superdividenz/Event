import React, { useState } from 'react';
import TableLayout from './components/TableLayout';
import Header from './components/Header';

const initialTables = [
  { id: 1, seats: [{ id: 1, isOccupied: false }, { id: 2, isOccupied: true }], isSelected: false },
  { id: 2, seats: [{ id: 1, isOccupied: false }, { id: 2, isOccupied: false }], isSelected: false },
  { id: 3, seats: [{ id: 1, isOccupied: false }, { id: 2, isOccupied: false }, { id: 3, isOccupied: false }], isSelected: false },
  { id: 4, seats: [{ id: 1, isOccupied: true }, { id: 2, isOccupied: true }, { id: 3, isOccupied: false }, { id: 4, isOccupied: false }], isSelected: false },
];

function App() {
  const [tables, setTables] = useState(initialTables);

  const handleTableSelect = (tableId) => {
    setTables(prevTables => 
      prevTables.map(table => 
        table.id === tableId ? {...table, isSelected: !table.isSelected} : table
      )
    );
  };

  return (
    <div className="App bg-gray-100 min-h-screen">
      <Header />
      <main className="p-4">
        <TableLayout tables={tables} onTableSelect={handleTableSelect} />
      </main>
    </div>
  );
}

export default App;