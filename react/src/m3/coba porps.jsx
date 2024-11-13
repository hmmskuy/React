function ChildComponent() {
  return (
    <div>
      <h1>Child Component</h1>
      <p> Ini adalah child component</p>
    </div>
  );
}

function ChildComponent({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default function ParentComponent() {
  return (
    <>
      <ChildComponent title="ini title" description="ini description" />
    </>
  );
}

function ChildComponent({ title ="Coba judul" , description="coba description",age=24}){
    return(
        <>
        <ChildComponent />
        </>
    );
}

function Image({ src, alt, size}){
    return(
        <>
        <img src={src} alt={alt}  style={{ width: size, height: size}} />
        </>
    );
}
function ChildComponent ({ title, description, age, ...props}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{age}</p>
            <Image {...props} />
        </div>
    );
}

export default function ParentComponent () {
    return(
        <>
        <ChildComponent
        title="TItle"
        description="Description"
        age={20}
        src="../../public/cobaReact.png"
        size="100px"
        />
        </>
    );
}


function Children({ children}) {
    return <div>{children}</div>;
        <Children>
            <ChildComponent
                title="TItle"
                description="Description"
                age={20}
                src="../../public/cobaReact.png"
                alt="cobaReact"
                size="100px"
                ></ChildComponent>
        </Children>
}

function Children({ children}) {
    return <div style={{ backgroundColor: "red"}}>{children}</div>
}