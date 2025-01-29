import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Menggunakan useEffect tanpa dependency array
  useEffect(() => {
    console.log('Efek dijalankan!');
  });

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold">Counter: {count}</h1>
      <button 
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Tambah
      </button>
    </div>
  );
}

export default Counter;
