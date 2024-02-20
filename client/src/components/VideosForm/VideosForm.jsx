import React from 'react';
import cargaVideos from '../../assets/cargaVideos.png';
import {useState} from 'react';
import axios from 'axios';

const VideosForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('video', selectedFile);

      const response = await axios.post('http://localhost:3001/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      console.log('URL del video cargado:', response.data.videoUrl);
    } catch (error) {
      console.error('Error al cargar el video:', error);
    }
  };

  return (
    <div className='ml-4'>
      <h1 className='text-xl font-bold mt-2'>Contenido multimedia</h1>
      <h2 className='font-bold mt-4'>Videos</h2>
      <p className='mt-2'>Cada video es una oportunidad para contar tu historia de una manera visualmente emocionante. 
        Sigue compartiendolos y lleva tu musica a nuevos niveles de creatividad y expresion</p>
      <label htmlFor="file-upload">
        <img src={cargaVideos} alt="Cargar Video" onClick={() => document.getElementById('file-upload').click()} />
      
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button className='bg-[#2B1A4E] text-white rounded-md py-2 px-4 mt-2' onClick={handleUpload}>Subir</button>
    </div>
  );
}

export default VideosForm;