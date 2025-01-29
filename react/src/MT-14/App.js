import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

const router = createBrowserRouter([
  {
    path: '/books',
    element: <BookList />,
  },
  {
    path: '/books/:id',
    element: <BookDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
