import {createBrowserRouter, RouterProvider, useParams } from "react-router-dom";

const router = createBrowserRouter([
        {
        path:"/",
        element:<DetailProduct/>,
    },
    {
        path:":id",
        element:<DetailProduct/>
    },
]);

function DetailProduct() {
    const {id} = useParams();
    return(
        <div>
        <h1>Detail produk</h1>
        <p>ID produk: {123}</p>
        </div>
    );
}

function CobaUserParams(){
    return (
        <>
        <RouterProvider router={router} />
        </>
    );
}


