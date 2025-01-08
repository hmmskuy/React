import React, { useState, useEffect } from 'react';

const CountLogger = () => {
  // State untuk menyimpan angka
  const [count, setCount] = useState(0);

  // useEffect dengan array dependency berisi count
  useEffect(() => {
    console.log(`Count berubah menjadi: ${count}`);
  }, [count]); // Efek ini hanya dijalankan ketika count berubah

  // Fungsi untuk menangani penambahan angka
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Angka: {count}</p>
      <button onClick={handleClick}>Tambah</button>
    </div>
  );
};

export default CountLogger;
