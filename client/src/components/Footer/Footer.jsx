import React, { useState } from "react";
import LogoSingle from "../../assets/logo-single.png";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Add from "../../assets/add.svg"

const Footer = () => {
  const [buttonState1, setButtonState1] = useState(false)
  const [buttonState2, setButtonState2] = useState(false)
  return (
    <footer className="bg-primary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src={LogoSingle}
                className="h-8 me-3"
                alt="Roundpeople Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                ROUNDPEOPLE
              </span>
            </a>
          </div>
          {/* Footer Items Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            
            {/* First item */}
            
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">
                Sobre nosotros <button><img src={Add} alt="my image" onClick={() => setButtonState1(!buttonState1)} /></button>
              </h2>
              <ul className={`text-gray-500 ${buttonState1 ? `block` : `hidden`}`}>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Historia, Misión y Visión
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Second Item */}
            
            <div>
              <h2 className="mb-6 text-sm font-semibold  text-white">
                Términos y Privacidad <button><img src={Add} alt="my image" onClick={() => setButtonState2(!buttonState2)} /></button>
              </h2>
              <ul className={`text-gray-500 ${buttonState2 ? `block` : `hidden`}`}>
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Normas de la comunidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Términos y privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Social networks */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white">
              Nuestras redes sociales
            </h2>
            <div className="flex flex-row justify-around ">
              <div className="">
                <a href="#" className="hover:underline">
                  <img src={Instagram} alt="" />
                </a>
              </div>
              <div>
                <a href="#" className="hover:underline">
                  <img src={Facebook} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
