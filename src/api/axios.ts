import axios from "axios";
const BASE_URL = "http://localhost:3000/";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    // "Content-Type": "text/html; charset=utf-8",
    "Content-Type": "application/json",
  },
});
