import React, { useState } from 'react';

function SimpleCalculator() {
  // Inisialisasi state untuk angka dan hasil
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);

  // Fungsi untuk menambah angka
  const add = () => setResult(number1 + number2);

  // Fungsi untuk mengurangi angka
  const subtract = () => setResult(number1 - number2);

  // Fungsi untuk mengalikan angka
  const multiply = () => setResult(number1 * number2);

  // Fungsi untuk membagi angka
  const divide = () => {
    if (number2 === 0) {
      setResult('Tidak bisa dibagi dengan 0'); // Menangani pembagian dengan 0
    } else {
      setResult(number1 / number2);
    }
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      
      {/* Input untuk angka pertama */}
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
        placeholder="Masukkan angka pertama"
      />
      <br />
      
      {/* Input untuk angka kedua */}
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(Number(e.target.value))}
        placeholder="Masukkan angka kedua"
      />
      <br />
      
      {/* Tombol untuk operasi */}
      <button onClick={add}>Tambah</button>
      <button onClick={subtract}>Kurang</button>
      <button onClick={multiply}>Kali</button>
      <button onClick={divide}>Bagi</button>

      {/* Menampilkan hasil operasi */}
      <h2>Hasil: {result !== null ? result : 'Silakan pilih operasi'}</h2>
    </div>
  );
}

export default SimpleCalculator;
