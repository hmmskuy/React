// Pengunaan useState menggunakan tipe data number
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Inisialisasi state dengan tipe data number (nilai awal 0)

  const increment = () => setCount(count + 1); // Menambah nilai count
  const decrement = () => setCount(count - 1); // Mengurangi nilai count
  const reset = () => setCount(0); // Mengatur ulang nilai count ke 0

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurangi</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;