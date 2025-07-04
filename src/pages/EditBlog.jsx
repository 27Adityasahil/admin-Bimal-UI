import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/api";
import { uploadToCloudinary } from "../services/cloudinary";
import LexicalEditor from "../components/LexicalEditor";

const EditBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({ title: "", content: "", imageUrl: "" });
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    axios.get(`/api/blogs/${id}`).then((res) => setBlog(res.data.blog));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    let imageUrl = blog.imageUrl;

    if (newImage) {
      imageUrl = await uploadToCloudinary(newImage);
    }

    await axios.put(
      `/api/blogs/${id}`,
      { ...blog, imageUrl },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    alert("Blog updated!");
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Blog</h2>
      <input value={blog.title} onChange={(e) => setBlog({ ...blog, title: e.target.value })} />
      {/* <ReactQuill value={blog.content} onChange={(val) => setBlog({ ...blog, content: val })} /> */}
      <LexicalEditor value={blog.content} onChange={(val) => setBlog({ ...blog, content: val })} />

      <input type="file" onChange={(e) => setNewImage(e.target.files[0])} />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditBlog;
