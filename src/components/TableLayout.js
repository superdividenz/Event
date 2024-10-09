// TableLayout.js
import React, { useState, useEffect } from 'react';
import Table from './Table';

const TableLayout = ({ initialTables, onTableSelect }) => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    if (Array.isArray(initialTables)) {
      setTables(initialTables);
    }
  }, [initialTables]);

  const handleOrder = (tableId, orderedSeats) => {
    setTables(prevTables => 
      prevTables.map(table => 
        table.id === tableId
          ? {
              ...table,
              seats: table.seats.map((seat, index) => 
                index < orderedSeats ? { ...seat, isOccupied: true } : seat
              )
            }
          : table
      )
    );
  };

  if (!Array.isArray(tables) || tables.length === 0) {
    return <div>No tables available</div>;
  }

  return (
    <div className="table-layout grid grid-cols-12 gap-x-1 gap-y-2 p-1">
      {tables.map(table => (
        <Table 
          key={table.id}
          id={table.id}
          seats={table.seats}
          isSelected={table.isSelected}
          onSelect={onTableSelect}
          onOrder={(orderedSeats) => handleOrder(table.id, orderedSeats)}
        />
      ))}
    </div>
  );
};

export default TableLayout;