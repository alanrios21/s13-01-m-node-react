import React from "react";
import InicioForm from "../../components/Inicio/InicioForm";
import Footer from "../../components/Footer/Footer";

const Inicio = () => {
  return (
    <div>
      <div className="w-3/4 m-auto">
        <InicioForm />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Inicio;
