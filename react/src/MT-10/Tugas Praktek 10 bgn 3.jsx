import React, { useState, useEffect } from 'react';

const TextLogger = () => {
  // State untuk menyimpan nilai teks
  const [text, setText] = useState('');
  
  // useEffect untuk melacak perubahan nilai text
  useEffect(() => {
    console.log(`Teks berubah menjadi: ${text}`);
  }, [text]); // Efek hanya dijalankan ketika nilai text berubah

  // Fungsi untuk menangani perubahan input teks
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Fungsi untuk memperbarui teks sesuai dengan input
  const handleUpdateText = () => {
    setText(text); // Pembaruan teks dengan nilai saat ini
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Masukkan teks"
      />
      <p>{text}</p>
      <button onClick={handleUpdateText}>Update Teks</button>
    </div>
  );
};

export default TextLogger;
