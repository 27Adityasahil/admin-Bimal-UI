// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/blogs">Manage Blogs</Link></li>
        <li><Link to="/admin/blog/new">Create New Blog</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
