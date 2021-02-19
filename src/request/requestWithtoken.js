import axios from "axios";
import { config } from "../redux/config";
// import { _logout } from "utils/globalFunction";
/**
 * Request Wrapper with default success/error actions
 */
const requestWithToken = (options) => {
  /**
   * Create an Axios Client with defaults
   */
  const token = JSON.parse(localStorage.getItem("token"));
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer`;
  }
  const client = axios.create({
    baseURL: config.API_URL,
    headers: headers,
  });
  const onSuccess = (response) => {
    return response.data;
  };
  return client(options).then(onSuccess).catch();
};

export default requestWithToken;
