const CreateUser = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        role:"customer",
        avatar:"https://i.imgur.com/LD004Qs.jpeg", 
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const {name , value } = e.target;
        setFormData((prev) => ({...prev , [name]:value}));
    };
}

const handleCreateUser = (e) => {
    e.preventDefault();

    // menambahkan data baru  ke API  dengan format yang diminta
    const newUser ={
        ...formData,
        creationAt: new Date().toISOString(), // Menambahkan timestamp saat pembuatan
        updatedAt: new Date().toISOString(), // Menambahkan timestamp saat pembuatan
    };

    axios 
    .post("https: //api.escuelajs.co/api/v1/users/", newUser)
    .then ((response) => setMessage('User created: ${response.data.name}'))
    .catch ((error) => setMessage ('Error: ${error.message}'));

    setFormData({
        name: "",
        email: "",
        password: "",
        role: "customer",
        avatar: "https://i.imgur.com/LD004Qs.jpeg",
    });
    


    return(
        <div>
            <h2 className="bg-blue-500 w-40 ml-2 mt-2 mb-4">Create User</h2>
            <Link to="/" className=" bg-red-300 w-1/2 mx-auto mb-2">
            Back to Login
            </Link>
        <form action="{handleCreateUser}">
            <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
             />
             <input
              type="email"
              name="email"
              value={formData.name}
              onChange={handleChange}
              placeholder="Email"
              required
              />
              <input 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
               />
               <button type="submit">Create User</button>
        </form>
        {message && <p>{message}</p>}
        </div>
    )
};       
