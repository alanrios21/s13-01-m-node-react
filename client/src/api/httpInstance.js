import axios from "axios";

const httpInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

httpInstance.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem("user");
    if (user) {
      const { userSessionID } = JSON.parse(user);
      const { token } = JSON.parse(user);
      config.headers["X-User-ID"] = userSessionID;
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { httpInstance };
