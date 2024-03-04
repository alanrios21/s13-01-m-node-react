import React from 'react';
import { Link } from 'react-router-dom';
import VideosVistos from './VideosVistos';
import MusicaMas from './MusicaMas';
import Colaboradores from './Colaboradores';

const InicioForm2 = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <div className='p-8 mt-8 max-w-5xl'>
        <h1 className="text-xl mt-8 mb-12 text-center">En RoundPeople, tendrás acceso a una amplia selección de videos y música 
        de artistas, además de la oportunidad de colaborar a través de nuestra plataforma</h1>
        <div className="flex justify-between items-center">
          <h1 className="text-xl mt-4 mb-1">Los videos más vistos...</h1>
          <Link to="/auth/register" className="text-[#9F1B64] underline">Registrate para mas acceso</Link>
        </div>
        <VideosVistos />
        <div className="flex justify-between items-center">
          <h2 className="text-xl mt-4 mb-1">La música más escuchada...</h2>
        </div>
        <MusicaMas />
        <div className="flex justify-between items-center">
          <h1 className="text-xl mt-4 mb-1">En busca de Colaboraciones </h1>
        </div>
        <Colaboradores />
        <div className="items-center">
          <h2 className="text-xl mt-4 mb-1">Novedades</h2>
          <div className="flex justify-center items-center bg-[#450BB8] text-white p-4 mt-4 rounded-md mb-8">
            <div className="text-center">
              <p className="mb-2">Ahora puedes ser parte de la creación apoyando proyecto o 
                artistas a través de nuestra función de crowdfounding.</p>
              <Link to="/auth/register" className="text-white hover:font-bold">Registrate 👉</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioForm2;