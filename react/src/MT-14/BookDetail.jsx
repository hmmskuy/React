import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch daftar buku dengan topik "React"
  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=react')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items || []); // Set buku atau array kosong jika tidak ada data
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Daftar Buku "React"</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              border: '1px solid #ccc',
              padding: '16px',
              borderRadius: '8px',
              width: '200px',
              textAlign: 'center',
            }}
          >
            {/* Gambar sampul buku */}
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
              alt={book.volumeInfo.title}
              style={{ width: '100%', height: 'auto' }}
            />

            {/* Judul buku */}
            <h3 style={{ fontSize: '16px', margin: '8px 0' }}>{book.volumeInfo.title}</h3>

            {/* Penulis buku */}
            <p style={{ fontSize: '14px', color: '#555' }}>
              Penulis: {book.volumeInfo.authors?.join(', ') || 'Tidak diketahui'}
            </p>

            {/* Tombol "Lihat Detail" */}
            <Link to={`/books/${book.id}`}>
              <button
                style={{
                  marginTop: '8px',
                  padding: '8px 12px',
                  background: '#007BFF',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Lihat Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
