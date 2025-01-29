import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const fetchBooks = async () => {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=react"
  );
  const data = await response.json();
  return data.items || [];
};

const fetchBookDetail = async (id) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}`
  );
  if (!response.ok) throw new Error("Book not found");
  return await response.json();
};

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks()
      .then(setBooks)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading books...</p>;

  return (
    <div>
      <h1>Daftar Buku React</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        {books.map((book) => (
          <div key={book.id} style={{ border: "1px solid #ccc", padding: "16px" }}>
            <h2>{book.volumeInfo.title}</h2>
            <p>Penulis: {book.volumeInfo.authors?.join(", ") || "Tidak diketahui"}</p>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            )}
            <Link to={`/books/${book.id}`} style={{ marginTop: "8px", display: "inline-block" }}>
              <button>Lihat Detail</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookDetail(id)
      .then(setBook)
      .catch(() => setError("Buku tidak ditemukan."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading detail buku...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{book.volumeInfo.title}</h1>
      <p>Penulis: {book.volumeInfo.authors?.join(", ") || "Tidak diketahui"}</p>
      <p>
        Deskripsi: {book.volumeInfo.description || "Tidak ada deskripsi untuk buku ini."}
      </p>
      {book.volumeInfo.imageLinks?.thumbnail && (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      )}
      <Link to="/books">
        <button>Kembali ke Daftar Buku</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
};

export default App;