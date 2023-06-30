import axios from "axios";

export default axios.create({
  baseURL: "https://l.study-link-demo.com",
  headers: { "Content-type": "application/json" }, //
});
