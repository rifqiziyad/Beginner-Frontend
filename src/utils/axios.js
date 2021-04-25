import axios from "axios";
require("dotenv").config();

const axiosApiIntances = axios.create({
  baseURL: "http://localhost:3001/api/v1/",
});

export default axiosApiIntances;
