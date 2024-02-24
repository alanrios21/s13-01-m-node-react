import { httpInstance } from "../httpInstance";

export const loginRequest = async (email, password) => {
  const response = await httpInstance.post("/login", {
    email,
    password,
  });
  return response.data;
};

export const register = async ({
  email,
  password,
  firstName,
  lastName,
  collaborator,
}) => {
  const response = await httpInstance.post("/users/newuser", {
    firstName,
    lastName,
    email,
    password,
    collaborator,
  });
  return response.data;
};

export const logout = async () => {
  const response = await httpInstance.post("/logout");
  return response.data;
};
