import React from 'react';
import Table from './Table';

const TableLayout = ({ tables, onTableSelect }) => {
  return (
    <div className="table-layout grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {tables.map(table => (
        <Table 
          key={table.id}
          id={table.id}
          seats={table.seats}
          isSelected={table.isSelected}
          onSelect={onTableSelect}
        />
      ))}
    </div>
  );
};

export default TableLayout;