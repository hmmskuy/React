import axios from "axios"; 
import { useEffect } from "react";
function CobaAxios() {
    const [posts, setPosts] = useState([]); 
    useEffect (() =>{
        axios
        .get("https://fakestoreapi.com/products")
        .then ((response)=> {
            setPost(response.data);
        })
        .catch((error) => {
        console.error("Error fetching data:", error);
        }, []);
        }, [posts]);
    return (
       <div>
        <ul>
            {posts.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
       </div>
    );
}