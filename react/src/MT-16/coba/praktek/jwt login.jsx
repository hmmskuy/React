import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginMas = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      })
      .then((response) => {
        // Simpan token ke localStorage jika login berhasil
        localStorage.setItem("authToken", response.data.token);

        // Redirect ke halaman produk
        navigate("/product");
      })
      .catch((error) => {
        setError("Login gagal! Silakan periksa username dan password Anda.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-700">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Silakan login untuk mengakses akun Anda
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              className="block text-sm font-semibold text-gray-600 mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-3 border rounded-full text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-semibold text-gray-600 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border rounded-full text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300"
          >
            Login
          </button>
        </form>

        {error && (
          <div className="mt-4 text-center text-red-600">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginMas;