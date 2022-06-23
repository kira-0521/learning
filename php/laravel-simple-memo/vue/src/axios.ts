import axios, { AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:8888",
    xsrfHeaderName: "X-CSRF-Token",
    withCredentials: true,
});

export default axiosClient;
