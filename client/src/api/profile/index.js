import { httpInstance } from "../httpInstance";

export const getProfile = async (id) => {
  const response = await httpInstance.get(`/users/${id}`);
  return response.data;
};

export const updateProfile = async (id, data) => {
  const response = httpInstance.put(`/users/update/${id}`, data);
  return response.data;
};
