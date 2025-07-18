import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000",
  // baseURL: "https://admin-bimal-hospital.onrender.com",
  baseURL: import.meta.env.VITE_API_URL || "https://admin-bimal-hospital.onrender.com",  
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default instance;
