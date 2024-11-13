function App() {
  const title = "Coba JSX {}";
  const pargarph = "Lorem ipsum dolor sit amet.";
  const tema = {
    pargarph: {
      backgroundColor: "blue",
      color: "white",
    },
  };
  return (
    <>
      <div>
        <h1>coba react</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam omnis
          odit magni reprehenderit similique ut repellendus, voluptatibus dicta
          eius facere, modi provident consectetur adipisci sit excepturi
          reiciendis totam dolor officiis!
        </p>
      </div>
      <img src="cobaReact.png" alt="cobaReact" />
      <h1>Coba React</h1>
      <p>Lorem ipsum dolor sit amet.</p>

      <img src="cobaReact.png" alt="cobaFReact" />
      <h1 style={{ color: "red" }}>{title}</h1>
      <p className="testing" style={tema.pargarph}>
        {pargarph}
      </p>
      <img src="Hasilnya.png" alt="Hasilnya" />
    </>
  );
}

export default App;
