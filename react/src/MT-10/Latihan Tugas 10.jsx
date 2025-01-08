//  Effect tanpa Dependency ( Jalankan Setiap Render)
import { useState } from "react";
import React, {useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState (0);
    
    useEffect(() => {
        console.log ('count saat ini: ${count}');
    });

    return (
        <div>
            <p> Count: {count}</p>
            <button onClick={() => setCount(count + 1)}> Tambah</button>
        </div>
    );
}

// EFek dengan Dependency ( Jalankan Saat Dependency Berubah )
function WithDependency(){
    const [ count, setCount] = useState(0);
    const [ text, setText] = useState("");

    useEffect(() => {
        console.log ('Count berubah: ${count}');
}, [count]); // Hanya akan di panggil Ulang jika 'count' berubah.

return (
    <div>
    <p> Count: {count}</p>
    <button onClick={() => setCount(count + 1)}> Tambah</button>
        <br />
    <input
     type="text" 
     value={text}
     onChange={(e) => setText(e.target.value)}
     placeholder="Ketik Sesuatu..."
     />
    </div>
);
}