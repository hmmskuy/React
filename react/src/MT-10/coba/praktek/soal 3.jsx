import { useState, useEffect } from 'react';

function TextLogger() {
  const [text, setText] = useState("");

  // Efek hanya dijalankan ketika nilai text berubah
  useEffect(() => {
    console.log(`Teks berubah menjadi: ${text}`);
  }, [text]);

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold mb-4">Lacak Perubahan Teks</h1>

      {/* Input teks */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Masukkan teks..."
        className="border border-gray-300 rounded px-2 py-1 mb-4 w-64"
      />

      {/* Tampilan teks */}
      <p className="mt-2 text-lg">Teks: {text}</p>

      {/* Tombol update teks */}
      <button
        onClick={() => setText(text)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Update Teks
      </button>
    </div>
  );
}

export default TextLogger;
