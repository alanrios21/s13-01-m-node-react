import React, { useState } from 'react';
import cargaVideos from '../../assets/cargaVideos.png';
import imgVideo1 from '../../assets/imgVideo1.png';
import imgVideo2 from '../../assets/imgVideo2.png';
import imgVideo3 from '../../assets/imgVideo3.png';
import imgVideo4 from '../../assets/imgVideo4.png';
import { httpInstance } from '../../api/httpInstance';

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
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-8 mt-8">
       <img src={imgVideo1} alt="Video1" className="w-full h-auto rounded-xl" />
       <img src={imgVideo2} alt="Video2" className="w-full h-auto rounded-xl" />
       <img src={imgVideo3} alt="Video3" className="w-full h-auto rounded-xl" />
       <img src={imgVideo4} alt="Video4" className="w-full h-auto rounded-xl" />
       <div className="flex justify-center mb-4 mt-4">
        <label htmlFor="file-upload">
          <img src={cargaVideos} alt="Cargar Video" />
        </label>
      </div>
      </div>  
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