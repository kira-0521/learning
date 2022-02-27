import axios, { AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:8888/api",
});

export default axiosClient;
