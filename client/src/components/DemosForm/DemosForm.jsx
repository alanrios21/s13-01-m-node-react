import React, { useState } from 'react';
import { httpInstance } from '../../api/httpInstance';
import DemosMulti from './DemosMulti';
import cargaVideos from '../../assets/cargaVideos.png';

const DemosForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        console.error("No file selected");
        return;
      }
      
      const formData = new FormData();
      formData.append("video", selectedFile);

      const response = await httpInstance.post("/multimedia/upload/music", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials:true,
      });

      console.log("File uploaded successfully:", response.data);

    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className='ml-2 p-2 '>
      <h1 className='text-xl font-bold mt-2'>Contenido multimedia</h1>
      <h2 className='text-xl mt-4'>Demos</h2>
      <p className='mt-2'>Tu música tiene el poder de inspirar, emocionar y conectar. 
      Sigue compartiendo tus demos musicales y deja que el mundo descubra tu talento único!</p>
       <DemosMulti />
       <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        accept="video/mp4,video/x-m4v,video/*"
        style={{ display: 'none' }} 
      />
      <label htmlFor="file-upload">
        <img src={cargaVideos} alt="Cargar Video" />
      </label>
      <button 
        className='bg-[#2B1A4E] text-white rounded-md py-2 px-4 mt-2'
        onClick={handleUpload}
      >
        Subir
      </button>
    </div>
  );
}

export default DemosForm;