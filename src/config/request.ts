import axios from "axios";
import Cookies from "js-cookie";

export const request = axios.create({
  baseURL: "http://localhost:8000",
});

request.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers.Authorization = `Token ${token}`;  // Tokenni har bir so'rovga qo'shish
    }
    return config;
  },
  
  (error) => {
    return Promise.reject(error);
  }
);
