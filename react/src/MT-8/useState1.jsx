import React, { useState } from 'react';

function SortList() {
  const [numbers, setNumbers] = useState([5, 3, 8, 1]);

  // Fungsi untuk mengurutkan angka
  const sortNumbers = () => {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    setNumbers(sortedNumbers);
  };

  return (
    <div>
      <h1>Sorted Numbers</h1>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={sortNumbers}>Urutkan Angka</button>
    </div>
  );
}

export default SortList;
