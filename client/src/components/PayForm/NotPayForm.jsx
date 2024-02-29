import React from "react";
import { Link } from "react-router-dom";

const NotPayForm = () => {

  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center">
      <p className="font-bold font-roboto text-2xl text-[#000]">
        Metodo de pago no habilitado
      </p>
      <Link to="/crowdfounding">
        <button className="btn btn-info bg-[#2B1A4E] font-roboto text-white px-4 py-1 rounded-[5px]">Volver</button>
      </Link>
    </div>
  );
};

export default NotPayForm;
