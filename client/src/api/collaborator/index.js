import { httpInstance } from "../httpInstance";

export const getCollaborators = async () => {
  try {
    const response = await httpInstance.get("/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
