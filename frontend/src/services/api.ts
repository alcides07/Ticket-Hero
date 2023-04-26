import axios from "axios";
export const headers = {
    'Authorization': 'Token ' + localStorage.getItem("token")
};
export const api = axios.create(
    {baseURL:'http://localhost:8000'}
)
export const getToken = () =>
  localStorage.getItem("token");

api.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  });