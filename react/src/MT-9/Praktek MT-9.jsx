import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Produk A', price: 20000 },
  { id: 2, name: 'Produk B', price: 30000 },
  { id: 3, name: 'Produk C', price: 50000 },
];

const Card = ({ product, updateTotal }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
    updateTotal(product.price);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateTotal(-product.price);
    }
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 w-64 m-4 bg-white">
      <img
        src={"https://via.placeholder.com/300x200"}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">Harga: Rp {product.price.toLocaleString('id-ID')}</p>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Kurang
        </button>
        <span className="text-xl font-bold">{quantity}</span>
        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Tambah
        </button>
      </div>
      <p className="text-gray-800 mt-4">Total: Rp {(quantity * product.price).toLocaleString('id-ID')}</p>
    </div>
  );
};

const Card2= () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotal = (amount) => {
    setTotalPrice((prevTotal) => prevTotal + amount);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Rincian Harga Produk</h1>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <Card key={product.id} product={product} updateTotal={updateTotal} />
        ))}
      </div>
      <h2 className="text-xl font-bold mt-8">Total Harga: Rp {totalPrice.toLocaleString('id-ID')}</h2>
    </div>
  );
};

export default Card2;
