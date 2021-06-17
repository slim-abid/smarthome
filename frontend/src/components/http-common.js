import axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-type": "application/json"
  }
}); 