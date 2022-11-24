import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.10.132:5000",
});

export default api;
