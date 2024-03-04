import { useState } from "react";
import VideosMulti from "./VideosMulti";
import { uploadVideo } from "../../api/multimedia";
import { useLoadingBar } from "./../../hooks/useLoadingBar";
import imgUpload from "../../assets/cargaVideos.png";

const VideosForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { ref, setProgress, clear } = useLoadingBar();

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

      const response = uploadVideo(formData, (progress) => {
        setProgress(progress);
        if (progress === 100) clear();
      });

      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleDeleteSelectedVideos = async () => {
    try {
      setLoading(true);

      const response = await httpInstance.delete("/multimedia/delete/videos", {
        data: { selectedVideos },
      });

      console.log("Videos deleted successfully:", response.data);

      // Actualiza la lista de videos después de eliminar los seleccionados
      // Puedes implementar esto según tu lógica de actualización de datos.
    } catch (error) {
      console.error("Error deleting videos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ml-2 p-2 ">
      <h1 className="text-xl font-bold mt-2">Contenido multimedia</h1>
      <h2 className="text-xl mt-4">Videos</h2>
      <p className="mt-2">
        Cada video es una oportunidad para contar tu historia de una manera
        visualmente emocionante. Sigue compartiéndolos y lleva tu música a
        nuevos niveles de creatividad y expresión
      </p>
      <VideosMulti />

      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <button
        className="bg-[#2B1A4E] text-white rounded-md py-2 px-4 mt-2"
        onClick={handleUpload}
      >
        Subir
      </button>
      <button
        className="bg-red-500 text-white rounded-md py-2 px-4 mt-2 ml-2"
        onClick={handleDeleteSelectedVideos}
        disabled={selectedVideos.length === 0 || loading}
      >
        {loading ? "Eliminando..." : "Eliminar seleccionados"}
      </button>

      <label htmlFor="file-upload" className="">
        <img src={imgUpload} alt="upload" className="w-6 h-6 inline-block" />
      </label>
    </div>
  );
};

export default VideosForm;
