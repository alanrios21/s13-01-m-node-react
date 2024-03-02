import { httpInstance } from "../httpInstance";

export const uploadVideo = async (formData) => {
  try {
    const response = await httpInstance.post(
      "/multimedia/upload/video",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Error uploading file");
  }
};

export const uploadImage = async (formData) => {
  try {
    const response = await httpInstance.post(
      "/multimedia/upload/image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Error uploading file");
  }
};
