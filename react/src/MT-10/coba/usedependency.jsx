import { useEffect, useState } from "react";

function Withdepedency() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`NYALA`);
  }, [count2]);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <p>Count2 : {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Tambah</button>
    </div>
  );
}

export default Withdepedency;