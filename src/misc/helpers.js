import axios from "axios";

const helpers = {
  url: axios.create({
    baseURL: "http://127.0.0.1/api",
    headers: { "Content-Type": "application/json" }
  })
};

export default helpers;