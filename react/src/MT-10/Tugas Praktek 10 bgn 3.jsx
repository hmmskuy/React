import React, { useState, useEffect } from 'react';

const TextLogger = () => {
  // Mengelola state untuk menyimpan nilai teks yang dimasukkan
  const [text, setText] = useState('');

  // Menggunakan useEffect untuk melacak perubahan pada nilai text
  useEffect(() => {
    if (text) {
      console.log(`Teks berubah menjadi: ${text}`);
    }
  }, [text]); // Efek hanya dijalankan ketika 'text' berubah

  // Fungsi untuk memperbarui teks menggunakan tombol "Update Teks"
  const handleUpdateText = () => {
    setText('Teks telah diperbarui');
  };

  return (
    <div>
      <h1>Text Logger</h1>
      {/* Input untuk memasukkan teks */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Menangani perubahan teks di input
        placeholder="Masukkan teks..."
      />
      {/* Menampilkan teks yang dimasukkan */}
      <p>{text}</p>
      {/* Tombol untuk memperbarui teks */}
      <button onClick={handleUpdateText}>Update Teks</button>
    </div>
  );
};

export default TextLogger;
