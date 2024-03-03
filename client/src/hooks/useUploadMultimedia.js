import { uploadImage, uploadVideo } from "../api/multimedia";
import { MULTIMEDIA_TYPE } from "../utils/constants";
import { useLoadingBar } from "./useLoadingBar";
import { useState } from "react";

export const useUploadFromProfile = () => {
  const { setProgress, clear } = useLoadingBar();

  const [formData, setFormData] = useState(new FormData());
  const [type, setType] = useState("");

  /**
   * handleFileChange
   * @param {object} event
   * @param {string} type Multimedia type
   * @returns {void}
   */
  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (!file) return;

    setType(type);
    formData.append(type, file);
  };

  /**
   * handleUpload
   * @param {function} done Callback function
   * @returns {Promise<object>} Response from the server
   */
  const handleUpload = async (done) => {
    if (type === MULTIMEDIA_TYPE.VIDEO) {
      const response = await uploadVideo(formData, (progress) => {
        setProgress(progress);
        if (progress === 100) {
          setFormData(new FormData());
          setType("");
        }
      });
      done(response);
      clear();
      return response;
    }
    if (type === MULTIMEDIA_TYPE.IMAGE) {
      const response = await uploadImage(formData, (progress) => {
        setProgress(progress);
        if (progress === 100) {
          setFormData(new FormData());
          setType("");
        }
      });
      done(response);
      clear();
      return response;
    }
  };

  return {
    handleFileChange,
    handleUpload,
  };
};
