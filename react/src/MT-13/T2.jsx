import axios from "axios";
import { useState, useEffect } from "react";

export default function AxiosStore() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const updateCart = (title, price, change) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[title]?.quantity || 0;
      const newQuantity = currentQuantity + change;
      if (newQuantity <= 0) {
        const { [title]: _, ...rest } = prevCart;
        return rest;
      }
      return { ...prevCart, [title]: { price, quantity: newQuantity } };
    });
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Shopping Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ShoppingCard
            key={product.id}
            title={product.title}
            price={product.price}
            src={product.image}
            description={product.description}
            quantity={cart[product.title]?.quantity || 0}
            onUpdate={updateCart}
          />
        ))}
      </div>
    </div>
  );
}

function ShoppingCard({ title, price, src, description, quantity, onUpdate }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50">
      <img src={src} alt={title} className="w-full h-40 object-contain rounded-t-md mb-2" />
      <div className="flex-grow">
        <h2 className="text-sm font-semibold truncate text-blue-900">{title}</h2>
        <p className="text-gray-700 text-sm">Harga: Rp.{price}</p>
        <p className="text-gray-700 text-sm">Quantity: {quantity}</p>
        <p className="text-gray-700 text-sm">Total: Rp.{quantity * price}</p>
        <p className="text-gray-600 text-xs mt-1 truncate">{description}</p>
      </div>
      <div className="flex justify-between mt-2">
        <button className="bg-blue-500 text-white w-1/3 py-1 text-xs rounded-md hover:bg-blue-600" onClick={() => onUpdate(title, price, 1)}>
          Tambah
        </button>
        <button className="bg-red-500 text-white w-1/3 py-1 text-xs rounded-md hover:bg-red-600" onClick={() => onUpdate(title, price, -1)}>
          Kurang
        </button>
      </div>
    </div>
  );
}
