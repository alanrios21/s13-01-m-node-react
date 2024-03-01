import React, { useState } from 'react';
import { httpInstance } from '../../api/httpInstance';
import VideosMulti from './VideosMulti';

const VideosForm = () => {
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

      const response = await httpInstance.post("/multimedia/upload/video", formData, {
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
      <h2 className='text-xl mt-4'>Videos</h2>
      <p className='mt-2'>Cada video es una oportunidad para contar tu historia de una manera visualmente emocionante. 
        Sigue compartiéndolos y lleva tu música a nuevos niveles de creatividad y expresión</p>
       <VideosMulti />
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button 
        className='bg-[#2B1A4E] text-white rounded-md py-2 px-4 mt-2'
        onClick={handleUpload}
      >
        Subir
      </button>
    </div>
  );
}

export default VideosForm;