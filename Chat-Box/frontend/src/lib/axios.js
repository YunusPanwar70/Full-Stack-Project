// axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api", // 👈 match your backend route
  withCredentials: true, // 🔥 crucial for sending cookies/session
});
