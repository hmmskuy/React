import axios from "axios";

const UpdateUser = () => {
  const [userId, setUserID] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar: "",
  });
  const [message, setMessage] = useState("");

  // Fungsi untuk menangani perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleupdateUser = (e) => {
    e.preventDefault();

    // Mengirim data ke API untuk meperbarui pengguna
    axios
      .put(`https://api.escuelajs.co/api/v1/users/${userId}`, formData)
      .then((response) => setMessage("User updated: ${response.data.name}"))
      .catch((error) => setMessage("Error: updating user:  ${error.message}"));

    // Reset form
    setUserId("");
    setFormData({
      name: "",
      email: "",
      avatar: "",      
    });
    <form onSubmit =(handleUpdateUser)>
  input
  </form>
  };
};
