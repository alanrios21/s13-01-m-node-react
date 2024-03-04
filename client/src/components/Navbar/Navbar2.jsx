import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar2 = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#2B1A4E] py-2 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className={`h-8 w-36`} />
          </div>
          <div className="flex items-center">
            <div className="mr-4">
                <Link to="/auth/login" className="text-[#ECBA3B] underline inline-block py-1 px-2 rounded-md hover:bg-[#ECBA3B] hover:text-white">
                Iniciar sesión
                </Link>
            </div>
            <div>
                <Link to="/auth/register" className="text-[#ECBA3B] inline-block py-1 px-2 rounded-md hover:bg-[#ECBA3B] hover:text-white">
                Registrarse
                </Link>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;