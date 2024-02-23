import { httpInstance } from "../httpInstance";

export const loginRequest = async (email, password) => {
  const response = await httpInstance.post("/auth/login", {
    email,
    password,
  });
  return response.data;
};

export const register = async ({ email, password, firstName, lastName }) => {
  const response = await httpInstance.post("/users/newuser", {
    firstName,
    lastName,
    email,
    password,
  });
  return response.data;
};
