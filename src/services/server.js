import axios from "axios";
import serverConfig from "../data/configs.json";

export const server = axios.create({
  baseURL: serverConfig.userUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
