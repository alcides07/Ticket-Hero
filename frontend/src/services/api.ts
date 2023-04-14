import axios from "axios";

export const headers = {
    'Authorization': 'Token ' + localStorage.getItem("token")
};

export const api = axios.create(
    {baseURL:'http://localhost:8000'}
)
