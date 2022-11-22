import axios from "axios";
const api = axios.create({
  baseURL: "https://localhost:7090",
});
export default api;