import React, { useState, useEffect } from 'react';

const Counter = () => {
  // State untuk menyimpan angka
  const [count, setCount] = useState(0);

  // useEffect tanpa dependency array (akan dijalankan setiap kali komponen dirender ulang)
  useEffect(() => {
    console.log('Efek dijalankan!');
  });

  // Fungsi untuk menangani penambahan angka
  const handleClick = () => {
    setCount(count + 1);
  };

  const Counter = () => {
    // State untuk menyimpan angka
    const [count, setCount] = useState(0);
  
    // useEffect tanpa dependency array (akan dijalankan setiap kali komponen dirender ulang)
    useEffect(() => {
      console.log('Efek dijalankan!');
    });
  
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
  

  return (
    <div>
      <p>Angka: {count}</p>
      <button onClick={handleClick}>Tambah</button>
    </div>
  );
};

export default Counter;
