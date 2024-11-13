import React from 'react';

// Komponen Greeting
const Greeting = ({ name, message }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>{message}</p>
    </div>
  );
};

// Komponen App sebagai komponen utama
const App1= () => {
  return (
    <div>
      <Greeting name="Alice" message="Welcome to React!" />
    </div>
  );
};




import React from 'react';

// Komponen UserProfile
const UserProfile = ({ username, age, location }) => {
  return (
    <div>
      <h2>Username: {username}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

// Komponen App sebagai komponen utama
const App = () => {
  const userinfo = {
    username: "johndoe",
    age: 25,
    location: "New York"
  };

  return (
    <div>
      <UserProfile {...userinfo} />
    </div>
  );
};

export default App;

