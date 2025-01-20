import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch detail buku berdasarkan ID
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Buku tidak ditemukan');
        return response.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Buku tidak ditemukan.</p>;

  return (
    <div>
      <h1>{book.volumeInfo.title}</h1>
      <img
        src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
        alt={book.volumeInfo.title}
        style={{ width: '200px', height: 'auto' }}
      />
      <p><strong>Penulis:</strong> {book.volumeInfo.authors?.join(', ') || 'Tidak diketahui'}</p>
      <p><strong>Deskripsi:</strong> {book.volumeInfo.description || 'Tidak ada deskripsi untuk buku ini'}</p>
    </div>
  );
};

export default BookDetail;
