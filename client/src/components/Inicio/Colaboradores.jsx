import React from 'react';
import colaborador1 from '../../assets/colaborador1.jpg';
import colaborador2 from '../../assets/colaborador2.jpg';
import colaborador3 from '../../assets/colaborador3.jpg';
import colaborador4 from '../../assets/colaborador4.jpg';

const Colaboradores = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mb-8">
      <div className="flex flex-col mb-2">
        <img src={colaborador1} alt="Colaborador 1" className="h-[200px] w-[150px] rounded-2xl mb-2" />
        <p >Alicia Ledesma</p>
      </div>
      <div className="flex flex-col mb-2">
        <img src={colaborador2} alt="Colaborador 2" className="h-[200px] w-[150px] rounded-2xl mb-2" />
        <p >Julián Schauman</p>
      </div>
      <div className="flex flex-col mb-2 ">
        <img src={colaborador3} alt="Colaborador 3" className="h-[200px] w-[150px] rounded-2xl mb-2" />
        <p >Ismael Vargas</p>
      </div>
      <div className="flex flex-col mb-2">
        <img src={colaborador4} alt="Colaborador 4" className="h-[200px] w-[150px] rounded-2xl mb-2" />
        <p >Lucía Broer</p>
      </div>
    </div>
  );
}

export default Colaboradores;