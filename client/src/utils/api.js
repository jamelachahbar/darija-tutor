import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const registerUser = (userData) =>
  axios.post("/auth/register", userData);
export const loginUser = (credentials) =>
  axios.post("/auth/login", credentials);
// Add other API calls as needed
