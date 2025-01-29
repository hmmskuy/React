import React, { useState, useEffect } from "react";
 function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`count saat ini adalah ${count}`);
    },);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
        </div>
    );
}
// --------------------------------
function WithDependecy(params) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    useEffect(() => {
        console.log(`count berubah ${count}`);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
            <br />
            <input 
            type="text" 
            value={text}
            onChange={
                (e) => setText(e.target.value)
            }
            placeholder="masukkan text" 
            />
        </div>
    );
}
export default WithDependecy;