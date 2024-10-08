import { useState } from 'react';

const SeatSelection = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);

  // Add the seats array here
  const seats = [
    ['A1', 'A2', 'A3', 'A4'],  // Row 1
    ['B1', 'B2', 'B3', 'B4'],  // Row 2
    ['C1', 'C2', 'C3', 'C4'],  // Row 3
  ];

  // Handle selecting a seat
  const handleSelectSeat = (seat) => {
    setSelectedSeat(seat);
  };

  return (
    <div className="seating-chart">
      <h1>Select your seat</h1>
      <div className="seat-grid">
        {seats.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((seat) => (
              <div
                key={seat}
                className={`seat ${selectedSeat === seat ? 'selected' : ''}`}
                onClick={() => handleSelectSeat(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        ))}
      </div>
      {selectedSeat && <p>Selected Seat: {selectedSeat}</p>}
    </div>
  );
};

export default SeatSelection;
