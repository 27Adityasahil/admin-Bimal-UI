import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import BlogForm from "./pages/BlogForm";
import BlogList from "./pages/BlogList";
import EditBlog from "./pages/EditBlog";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/blogs" element={
          <ProtectedRoute>
            <BlogList />
          </ProtectedRoute>
        } />
        <Route path="/admin/blog/new" element={
          <ProtectedRoute>
            <BlogForm />
          </ProtectedRoute>
        } />
        <Route path="/blogs/edit/:id" element={
          <ProtectedRoute>
            <EditBlog />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
};

export default App;
