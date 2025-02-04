import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AxiosStore from "./soal2back";
import { ProductDetail } from "./soal2back";

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <AxiosStore />,
  },
  {
    path: "/:id",
    element: <ProductDetail />,
  },
]);

// Main Component
function Axioshop() {
  return <RouterProvider router={router} />;
}

export default Axioshop;
