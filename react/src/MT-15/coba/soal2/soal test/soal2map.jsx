import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // Perbaiki impor useNavigate

export default function AxiosStore2() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
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

      return {
        ...prevCart,
        [title]: { price, quantity: newQuantity },
      };
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Hapus token dari localStorage
    navigate("/login"); // Arahkan ke halaman login
  };

  return (
    <div className="p-4">
      {/* Header dengan tombol logout */}
      <header className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Shopping Store</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </header>

      {/* Daftar produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ShoppingCard
            key={product.id}
            id={product.id}
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

function ShoppingCard({
  id,
  title,
  price,
  src,
  description,
  quantity,
  onUpdate,
}) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="border rounded-lg shadow-lg p-4 w-full flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
      <Link to={`/product/${id}`} className="text-inherit no-underline">
        <img
          src={src}
          alt={title}
          className="w-full h-60 object-contain rounded-t-lg"
        />
        <div className="py-2 flex-grow">
          <h2 className="text-md font-semibold">{title}</h2>
          <p className="text-gray-700">Harga: Rp.{price}</p>
          <p className="text-gray-700">Quantity: {quantity}</p>
          <p className="text-gray-700">Total: Rp.{quantity * price}</p>
        </div>
      </Link>

      <div className="flex justify-between mt-2">
        <button
          className="bg-blue-500 text-white w-1/3 py-2 rounded-md"
          onClick={() => onUpdate(title, price, 1)}
        >
          Tambah
        </button>
        <button
          className="bg-red-500 text-white w-1/3 py-2 rounded-md"
          onClick={() => onUpdate(title, price, -1)}
        >
          Kurang
        </button>
      </div>
    </div>
  );
}

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // Pastikan ini diimpor dengan benar
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.error("Error fetching product detail:", error));
  }, [id]);

  if (!product) {
    return (
      <p className="text-center text-gray-500 mt-4">
        Loading product details...
      </p>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {" "}
      {/* Menambahkan flex untuk memusatkan dan min-h-screen untuk memastikan tinggi layar penuh */}
      <div className="p-8 flex flex-col lg:flex-row items-center lg:items-start lg:gap-8 bg-gray-50 rounded-lg shadow-md max-w-5xl mx-auto">
        {/* Product Image */}
        <div className="w-full lg:w-1/3">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-contain rounded-lg shadow-sm"
          />
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 text-lg mb-4">Rp. {product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-gray-500 mb-4">Category: {product.category}</p>
          <p className="text-gray-500 mb-6">Rating: 4.5/5 (146 reviews)</p>

          {/* Size Selector */}
          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-2">Select Size:</p>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-blue-100 focus:bg-blue-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/product")} // Gunakan navigate dengan benar
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300"
            >
              Back to Home
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
              Add to Bag
            </button>
          </div>

          {/* Footer */}
          <p className="text-gray-500 mt-6 text-sm">
            Free shipping on all continental US orders.
          </p>
        </div>
      </div>
    </div>
  );
}