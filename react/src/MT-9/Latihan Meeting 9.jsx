// Memeperbarui state menggunakan Array
import { useState } from "react"; 

const SimpleNameList = () => { 
    const [names, setNames] = useState(["Alice" , "Bob"]);

    return (
        <div>
            <h2>Daftar Nama :</h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <button  onClick={() => setNames([...names, "Charlie"])}
                className="px-4 py-2 bg-blue-500 text-white rounded"
                >
            Tambah Nama
            </button>
        </div>
    );
};

export default SimpleNameList;

// Memeperbarui state menggunakan Map
const UpdateStateWithMap = () => {
    const [user, setUsers] = useState([
        { id: 1, name: "Alice", active:false },
        { id: 2, name: "Bob", active:false },
        { id: 3, name: "Charlie", active:false },
    ]);

    const toggleActive = (id) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };
}