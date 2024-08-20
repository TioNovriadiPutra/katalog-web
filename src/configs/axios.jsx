import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://172.16.3.198:6651/sandbox",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});
