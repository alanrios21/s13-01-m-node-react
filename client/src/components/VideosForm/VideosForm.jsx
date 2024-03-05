import { useState, useEffect } from "react";
import VideosMulti from "./VideosMulti";
import imgUpload from "../../assets/cargaVideos.png";
import { useParams } from "react-router-dom";
import { useUploadFromProfile } from "../../hooks/useUploadMultimedia";
import { MULTIMEDIA_TYPE } from "../../utils/constants";
import { getProfile } from "../../api/profile";
import { Skeleton } from "@mui/material";

const VideosForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const [isMySelf, setIsMySelf] = useState(
    JSON.parse(localStorage.getItem("user"))?.user?.id === params.id
  );

  const { handleFileChange, handleUpload } = useUploadFromProfile();

  useEffect(() => {
    getProfile(params.id)
      .then((data) => {
        setLoading(false);
        setVideos(data.videos);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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

  const doneCallback = (response) => {
    if (response) {
      setVideos([...videos, response]);
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

      {!loading ? (
        <VideosMulti videos={videos} />
      ) : (
        <div className="grid grid-cols-3 min-h-[60vh]  xl:grid-cols-3 md:grid-cols-2  xs:grid-cols-1  gap-4 mb-8 mt-8">
          <Skeleton animation="wave" height={340} width={`90%`} />
          <Skeleton animation="wave" height={340} width={`90%`} />
          <Skeleton animation="wave" height={340} width={`90%`} />
          <Skeleton animation="wave" height={340} width={`90%`} />
          <Skeleton animation="wave" height={340} width={`90%`} />
          <Skeleton animation="wave" height={340} width={`90%`} />
        </div>
      )}

      <input
        id="file-upload"
        type="file"
        onChange={(e) => handleFileChange(e, MULTIMEDIA_TYPE.VIDEO)}
        style={{ display: "none" }}
      />
      {isMySelf && (
        <div>
          <label htmlFor="file-upload" className="">
            <img
              src={imgUpload}
              alt="upload"
              className="w-20 h-20 inline-block"
            />
          </label>
          <button
            className="bg-[#2B1A4E] text-white rounded-md py-2 px-4 mt-2"
            onClick={() => {
              handleUpload(doneCallback);
            }}
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
        </div>
      )}
    </div>
  );
};

export default VideosForm;
