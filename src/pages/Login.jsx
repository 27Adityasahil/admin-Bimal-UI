import { useState } from "react";
import axios from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/admin/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/"); // Redirect to dashboard
    } catch (err) {
      alert("Login failed. Check credentials.");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ padding: "2rem" }}>
      <h2>Admin Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
