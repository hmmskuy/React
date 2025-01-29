// soal 1
import React, { useState, useEffect } from "react";
 function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log(`Effect dijalankan! ${count}`);
  }, [count]); // Tambahkan [count] agar efek hanya dijalankan saat count berubah
  

    return (
        <div className="flex justify-center items-center mt-20">
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">Tambah</button>
        </div>
    );
}
// soal 2
function CountLogger() { // Hapus params karena tidak digunakan
  const [count, setCount] = useState(0);

  useEffect(() => {
      console.log(`count berubah menjadi : ${count}`);
  }, [count]);

  return (
      <div className="flex justify-center items-center mt-20">
          <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tambah</button>
          <br />
      </div>
  );
}

// soal 3
function TextLogger() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
      console.log(`text berubah menjadi : ${text}`);
  }, [text]);

  return (
      <>
          <div className="flex justify-center items-center mt-20 py-2">
              <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder=" masukkan text"
              />
              <br />
          </div>
          <div>
              <button 
                  onClick={() => setCount(Number(text))}  // Konversi text ke number
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase mx-[45%] mt-2"
              >
                  perbarui data
              </button>
          </div>
      </>
  );
}
export default TextLogger;