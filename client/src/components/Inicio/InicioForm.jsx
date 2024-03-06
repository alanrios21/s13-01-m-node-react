import { Link } from "react-router-dom";
import VideosVistos from "./VideosVistos";
import MusicaMas from "./MusicaMas";
import Colaboradores from "./Colaboradores";
import { useAuth } from "./../../hooks/useAuth";
import { useState, useEffect } from "react";
import { getCollaborators } from "../../api/collaborator";
import { Skeleton } from "@mui/material";

const InicioForm = () => {
  const { user } = useAuth();

  const [colaboradores, setColaboradores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCollaborators().then((data) => {
      setLoading(false);
      setColaboradores(data);
    });
  }, []);

  const collabSkeleton = () => {
    return (
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mb-8 mt-4 ">
        <div className="m-auto">
          <Skeleton variant="rounded" height={120} width={115} />
          <Skeleton variant="text" height={20} width={115} />
        </div>
        <div className="m-auto">
          <Skeleton variant="rounded" height={120} width={115} />
          <Skeleton variant="text" height={20} width={115} />
        </div>
        <div className="m-auto">
          <Skeleton variant="rounded" height={120} width={115} />
          <Skeleton variant="text" height={20} width={115} />
        </div>
        <div className="m-auto">
          <Skeleton variant="rounded" height={120} width={115} />
          <Skeleton variant="text" height={20} width={115} />
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <h1 className="text-xl mt-8 mb-12">
          En RoundPeople, tendrás acceso a una amplia selección de videos y
          música de artistas, además de la oportunidad de colaborar a través de
          nuestra plataforma
        </h1>
        <div className="flex justify-between items-center">
          <h1 className="text-xl mt-4 mb-1">Ver mis videos</h1>
          <Link
            to={`/videos/${user?.user?.id}`}
            className="text-[#9F1B64] underline"
          >
            Ver más
          </Link>
        </div>
        <VideosVistos />
        <div className="flex justify-between items-center">
          <h2 className="text-xl mt-4 mb-1">La música más escuchada...</h2>
          <Link to="/demos" className="text-[#9F1B64] underline">
            Ver más
          </Link>
        </div>
        <MusicaMas />
        <div className="flex justify-between items-center">
          <h1 className="text-xl mt-4 mb-1">En busca de Colaboraciones </h1>
          <Link to="/" className="text-[#9F1B64] underline">
            Ver más
          </Link>
        </div>
        {loading && collabSkeleton()}
        <Colaboradores colaboradores={colaboradores.slice(0, 4)} />

        <div className="items-center">
          <h2 className="text-xl mt-4 mb-1">Novedades</h2>
          <div className="flex justify-center items-center bg-[#450BB8] text-white p-4 mt-4 rounded-md mb-8">
            <div className="text-center">
              <p className="mb-2">
                Ahora puedes ser parte de la creación apoyando proyectos o
                artistas a través de nuestra función de crowdfounding.
              </p>
              <Link to="/Crowdfounding" className="text-white hover:font-bold">
                Descubrí como 👉
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InicioForm;
