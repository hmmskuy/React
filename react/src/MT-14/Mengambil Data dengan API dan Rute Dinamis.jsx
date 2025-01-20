import axios from "axios";
import { useEffect, useState } from "react";

function PostDetail(){
    const { id } = userParams();
    const [post,setpost] = useState(null);
    useEffect(() => {
        axios
        .get (`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then (({ data }) => setpost(data))
        .catch(console.error);
    }, [id]);
    console.log (post);
    
    if (!post) {
        return <p>loading...</p>;
    }
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700">{post.body}</p>
        </div>
    );
}
