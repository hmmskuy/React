import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Produk A', price: 20000, image: 'link_gambar_a.jpg' },
  { id: 2, name: 'Produk B', price: 30000, image: 'link_gambar_b.jpg' },
  { id: 3, name: 'Produk C', price: 50000, image: 'link_gambar_c.jpg' },
];

const Card = ({ product, updateTotal }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
    updateTotal(product.id, quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateTotal(product.id, quantity - 1);
    }
  };

  const totalPrice = quantity * product.price;

  return (
    <div className="border rounded-lg shadow-lg p-4 w-64 m-4 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2 text-blue-800">{product.name}</h2>
      <p className="text-gray-600">Harga: Rp {product.price.toLocaleString()}</p>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Kurang
        </button>
        <span className="text-xl font-bold text-blue-800">{quantity}</span>
        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Tambah
        </button>
      </div>
      <p className="text-gray-800 mt-4 font-semibold">Total Harga: Rp {totalPrice.toLocaleString()}</p>
    </div>
  );
};

const card23 = () => {
  const [totals, setTotals] = useState(products.reduce((acc, product) => {
    acc[product.id] = 0;
    return acc;
  }, {}));

  const updateTotal = (id, quantity) => {
    setTotals((prevTotals) => ({
      ...prevTotals,
      [id]: quantity,
    }));
  };

  const grandTotal = Object.entries(totals).reduce((sum, [id, quantity]) => {
    const product = products.find((product) => product.id === parseInt(id));
    return sum + quantity * (product ? product.price : 0);
  }, 0);

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 min-h-screen p-8">
      <div className="flex flex-wrap justify-center items-center">
        {products.map((product) => (
          <Card key={product.id} product={product} updateTotal={updateTotal} />
        ))}
      </div>
      <div className="w-full max-w-2xl mt-8 p-4 bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Rincian Total Harga</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="flex justify-between py-2 border-b">
              <span className="text-blue-800">{product.name} x {totals[product.id]}</span>
              <span className="text-gray-800">
                = Rp {(totals[product.id] * product.price).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
        <h3 className="text-lg font-bold mt-4 text-gray-800">Total Harga Keseluruhan: Rp {grandTotal.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default card23;
