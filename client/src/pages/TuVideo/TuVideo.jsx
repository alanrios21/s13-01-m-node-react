import { useState, useEffect } from "react";
// import ImgMusic from '../../assets/imgVideo.png';
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "./TuVideo.css";
import { httpInstance } from "../../api/httpInstance";

const TuVideo = () => {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  useEffect(() => {
    console.log("filePreview:", filePreview);
  }, [filePreview]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFilePreview(URL.createObjectURL(selectedFile));
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    // Enviar el archivo al endpoint
    httpInstance
      .post("http://localhost:5173/videos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud al servidor");
        }
        return response.blob();
      })
      .then((blob) => {
        if (blob instanceof Blob) {
          const previewURL = URL.createObjectURL(blob);
          setFilePreview(previewURL);
          setFile(null);
        } else {
          console.error("El objeto no es un Blob válido:", blob);
        }
      })
      .catch((error) => {
        console.error("Error al subir el archivo:", error);
      });
  };

  return (
    <div>
      <div className="contenedor-video">
        <div className="title-video">
          <h1>Tus videos</h1>
        </div>
        <div className="subtitle-video">
          <h1>Videos</h1>
        </div>
        <div className="img-container">
          {/* Mostrar la previsualización del archivo */}
          {filePreview && (
            <img
              src={filePreview}
              alt="Vista previa del video"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </div>

        <div className="p-container">
          <p>
            <PlayCircleIcon className="icon-video"></PlayCircleIcon>106
            Reproducciones
          </p>
        </div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Subir Archivo</button>
      </div>
    </div>
  );
};

export default TuVideo;
