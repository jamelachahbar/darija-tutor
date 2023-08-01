export const setToken = (token) => {
  localStorage.setItem("token", token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeToken = () => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
};

export const getToken = () => {
  return localStorage.getItem("token");
};
