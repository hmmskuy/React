import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/:id",
    element: <PostDetail />,
  },
]);

function PostDetail() {
  const { id } = useParams(); // Ambil parameter "id" dari URL
  const [post, setPost] = useState(null); // State untuk menyimpan data post

  useEffect(() => {
    // Fetch data post berdasarkan id
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => setPost(data))
      .catch(console.error); // Tangani error jika ada
  }, [id]); // Dependency array dengan "id"
  console.log(post);
  if (!post) {
    return <p>Loading...</p>; // Tampilkan pesan loading jika data belum tersedia
  }
  return (
    <div>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-lg">{post.body}</p>
    </div>
  );
}

function PostDetail2() {
  return <RouterProvider router={router} />;
}

export default PostDetail2;