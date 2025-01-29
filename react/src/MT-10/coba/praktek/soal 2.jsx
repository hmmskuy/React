import { useState, useEffect } from 'react';

function CountLogger() {
  const [count, setCount] = useState(0);

  // Efek hanya dijalankan ketika nilai count berubah
  useEffect(() => {
    console.log(`Count berubah menjadi: ${count}`);
  }, [count]);

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold">Counter: {count}</h1>
      <button 
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => setCount(count + 1)}
      >
        Tambah
      </button>
    </div>
  );
}

export default CountLogger;
