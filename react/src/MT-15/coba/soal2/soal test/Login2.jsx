import { useState } from "react";
import axios from "axios";

const SimpleUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [responsData, setResponsData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name,
        email,
      })
      .then((response) => {
        setResponsData(response.data);
        setError(null); // Reset error jika berhasil
      })
      .catch((error) => {
        setError(error.message);
        setResponsData(null); // Reset responsData jika gagal
      });
  };

  return (
    <div>
      <h1>Simple User Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Conditional Rendering */}
      {responsData && (
        <div>
          <h2>Response From Server:</h2>
          <pre>{JSON.stringify(responsData, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleUserForm;