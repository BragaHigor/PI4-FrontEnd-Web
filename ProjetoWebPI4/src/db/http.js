import axios from "axios";

const token = async () => {
   return (await localStorage.getItem("token_API")) || null;
};

const http = axios.create({
   baseURL: "https://pi-4-server.vercel.app/api/v1",
});

http.interceptors.request.use(
   async (config) => {
      config.headers.Authorization = `Bearer ${await token()}`;
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

export default http;
