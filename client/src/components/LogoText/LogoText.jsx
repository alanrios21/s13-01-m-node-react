import React from "react";
import logoSingle from "../../assets/logo-single.png";

export const LogoText = () => {
  return (
    <div className="relative m-auto text-center text-6xl h-screen">
      <img
        className="h-64 shrink-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-40"
        src={logoSingle}
        alt="perfil músical"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h1 className="font-black m-8">COMPARTE</h1>
        <h1 className="m-8 ">
          TU <span className="font-black">PASION</span>
        </h1>
        <h1 className="m-8 ">
          <span className="font-black">POR</span>LA
          <span className="font-black inline">MUSICA</span>
        </h1>
      </div>
    </div>
  );
};
