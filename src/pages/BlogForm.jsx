import React, { useState } from "react";
import axios from "../services/api";
import LexicalEditor from "../components/LexicalEditor";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/blogs", { title, content, imageUrl });
      alert("Blog posted successfully!");
      setTitle(""); setContent(""); setImageUrl("");
    } catch (err) {
      alert("Failed to post blog.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <LexicalEditor value={content} onChange={setContent} />
        <input type="text" placeholder="Image URL (optional)" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default BlogForm;
