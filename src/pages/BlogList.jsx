import { useEffect, useState } from "react";
import axios from "../services/api";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("/api/blogs").then(res => setBlogs(res.data.blogs));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>All Blogs</h2>
      <Link to="/admin/blog/new">+ New Blog</Link>
      {blogs.map(blog => (
        <div key={blog._id} style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}>
          <h3>{blog.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 100) + "..." }} />
          {blog.imageUrl && <img src={blog.imageUrl} alt="" style={{ width: "150px" }} />}
          <p><Link to={`/blogs/edit/${blog._id}`}>Edit</Link></p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
