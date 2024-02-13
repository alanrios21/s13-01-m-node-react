import { httpInstance } from "../httpInstance";

export const loginRequest = async (email, password) => {
  const response = await httpInstance.post("/auth/login", {
    email,
    password,
  });
  return response.data;
};

export const register = async (email, password) => {
  const response = await httpInstance.post("/auth/register", {
    email,
    password,
  });
  return response.data;
};
