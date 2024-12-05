// if statement 
function Test({ name, Benar}) {
    // if conditional 
    if (Benar) {
        return <li>{name} true</li>;
    }  else {
        return <li>{name} false</li>;
    }
}

export default function Conditional (){
    return (
        <div>
              <ul>
            <Test name="satu" Benar={false}/>
            <Test name="dua" Benar={true}/>
            <Test name="tiga" Benar={true}/>
        </ul>
        </div>
    );
}


// Ternary Operator
 function Test({ name, Benar}) {
    // ternary operator
    return <li>{Benar ? name + "true" : name + "false"}</li>;
 }

 function Test({ name, Benar}) {
    // ternary operator
    return (
        <li>
            {Benar
                ? name + "true"
                : name == "berlyva"
                 ? "my name is " + name
                 : name + "false"
            }
            <Test name="berlyva" Benar={false}/>
        </li>
    );
 }

//  Logical And 

// JSX  to Variable
let value;
if (isCheckList) {
    value= "benar";
}


