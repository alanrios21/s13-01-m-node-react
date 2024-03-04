import { httpInstance } from "../httpInstance";

const onUploadProgress = (event, callback) => {
  const percentCompleted = Math.round((event.loaded * 100) / event.total);
  callback(percentCompleted);
};

export const uploadVideo = async (formData, callback) => {
  try {
    const response = await httpInstance.post(
      "/multimedia/upload/video",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
        onUploadProgress: (event) => onUploadProgress(event, callback),
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Error uploading file");
  }
};

export const uploadImage = async (formData, callback) => {
  try {
    const response = await httpInstance.post(
      "/multimedia/upload/image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
        onUploadProgress: (event) => onUploadProgress(event, callback),
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Error uploading file");
  }
};
