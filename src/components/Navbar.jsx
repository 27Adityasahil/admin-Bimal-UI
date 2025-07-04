// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "1rem", background: "#f0f0f0", marginBottom: "2rem" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Dashboard</Link>
      <Link to="/blogs" style={{ marginRight: "1rem" }}>Blogs</Link>
      <Link to="/admin/blog/new" style={{ marginRight: "1rem" }}>New Blog</Link>
      {token && <button onClick={logout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
