
import React from "react";
import tecladista from "../../assets/tecladista 2.png"
import boton from "../../assets/Add multimedia.png"

export const Profile = () => {
  return (
    <>
      {/* Sección Tu perfil sobre ti */}
      <div className="p-8">
        <h2>Tu perfil</h2>
        <p>Sobre ti</p>
        <div className="flex justify-center items-center">
          <img className="rounded-full" src={tecladista} alt="perfil músical" />
        </div>
        <textarea
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Escribe una breve biografía..."
          rows="5"
        ></textarea>
        <p className="text-sm md:text-base">¿Cual es tu género musical?</p>
        <p>
          <input
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            type="text"
            name=""
            id=""
            placeholder="Ej.: Rock, Pop, Folk"
          />
        </p>
        <p className="text-sm md:text-base">¿Que instrumentos dominas?</p>
        <p>
          <input
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            type="text"
            name=""
            id=""
            placeholder="Ej.: Batería, guitarra, bajo"
          />
        </p>
        <p className="text-sm md:text-base">Influencia musical</p>
        <p>
          <input
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            type="text"
            name=""
            id=""
            placeholder="Ej.: Batería, guitarra, bajo"
          />
        </p>
        <div className="flex justify-center items-center pt-4">
          <button className="bg-[#e4e4e4] p-2 w-full md:w-1/3 rounded-lg text-slate-50">Guardar cambios</button>
        </div>
      </div>

      {/* Sección Contenido Multimedia */}

      <div className="p-8">
        <h2>Contenido Multimedia </h2>
        <h2>Demos</h2>
        <p className="text-sm md:text-base"><img className="inline" src={boton} alt="icono musical" /> ¡Haz que tu perfil cobre vida con tu mejor material! </p>
        <h2>Videos</h2>
        <p className="text-sm md:text-base"><img className="inline" src={boton} alt="icono musical" /> Añade  demos y que tu núsica inspire</p>
        <h2>Fotos</h2>
        <p className="text-sm md:text-base"><img className="inline" src={boton} alt="icono musical" /> Comparte fotos de tu día a día.</p>
        <div className="flex justify-center items-center">
          <button className="bg-[#e4e4e4] p-2 w-full md:w-1/3 rounded-lg text-slate-50">Guardar cambios</button>
        </div>
      </div>
      
    </>
  );
};
