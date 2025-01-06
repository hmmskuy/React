import React, { useState } from 'react';

function Counter() {
  // Inisialisasi state dengan nilai awal 0
  const [count, setCount] = useState(0);

  // Fungsi untuk menambah nilai counter
  const increment = () => setCount(count + 1);

  // Fungsi untuk mengurangi nilai counter
  const decrement = () => setCount(count - 1);

  // Fungsi untuk mereset nilai counter ke 0
  const reset = () => setCount(0);

  return (
    <div>
      {/* Menampilkan nilai counter */}
      <h1>Counter: {count}</h1>

      {/* Tombol untuk menambah nilai counter */}
      <button onClick={increment}>Tambah</button>

      {/* Tombol untuk mengurangi nilai counter */}
      <button onClick={decrement}>Kurang</button>

      {/* Tombol untuk mereset nilai counter */}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function LoginStatus() {
    // Inisialisasi state dengan nilai 'Logged out' secara default
    const [status, setStatus] = useState('Logged out');
  
    // Fungsi untuk login
    const login = () => setStatus('Logged in');
  
    // Fungsi untuk logout
    const logout = () => setStatus('Logged out');
  
    return (
      <div>
        {/* Menampilkan status login pengguna */}
        <h1>Status: {status}</h1>
  
        {/* Menampilkan tombol login jika status 'Logged out' */}
        {status === 'Logged out' ? (
          <button onClick={login}>Login</button>
        ) : (
          // Menampilkan tombol logout jika status 'Logged in'
          <button onClick={logout}>Logout</button>
        )}
      </div>
    );
  }
  

export default LoginStatus;

