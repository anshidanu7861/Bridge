import axios from "axios";
import { config } from "@/constants/constants";

export const axiosConfig = axios.create({
  baseURL: `${config.SERVER_URL}/api/v1`,
});
