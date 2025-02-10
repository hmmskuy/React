import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AxiosStore from "./soal2back";
import { ProductDetail } from "./soal2back";

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <AxiosStore />,
    // Ketika pengguna membuka path utama ("/"), komponen <AxiosStore /> akan dirender.
  },
  {
    path: "/:id",
    element: <ProductDetail />,
    // Path dengan parameter dinamis :id, yang memungkinkan menangkap nilai dari URL.
    // Nilai parameter :id dapat diakses dalam ProductDetail melalui useParams():
  },
]);

// Main Component
function Axioshop() {
  return <RouterProvider router={router} />; 
  // komponen yang berfungsi untuk merender sebuah elemn jsx <RouterProvider /> yang berasal react router
}

export default Axioshop;



// yang dimaksud dengan promise adalah untuk menangani operasi asynchronous  di javascript 