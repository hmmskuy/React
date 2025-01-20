import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookList from './components/BookList'; // Halaman daftar buku
import BookDetail from './components/BookDetail'; // Halaman detail buku

// Membuat rute dengan createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/books', // Rute untuk halaman daftar buku
    element: <BookList />, // Komponen untuk menampilkan daftar buku
  },
  {
    path: '/books/:id', // Rute untuk halaman detail buku, ID akan diterima sebagai parameter
    element: <BookDetail />, // Komponen untuk menampilkan detail buku berdasarkan ID
  },
]);

// Komponen utama aplikasi yang menggunakan RouterProvider untuk menyediakan rute
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
