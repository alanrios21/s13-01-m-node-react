import React, { useState } from "react";
import LogoSingle from "../../assets/logo-single.png";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Add from "../../assets/add.svg";

const Footer = () => {
  const [buttonState1, setButtonState1] = useState(false);
  const [buttonState2, setButtonState2] = useState(false);
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
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                ROUNDPEOPLE
              </span>
            </a>
          </div>
          {/* Footer Items Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 ">
            {/* First item */}

            <div className="mx-12 md:mx-0 md:text-center text-left">
              {/* drop-down button */}

              <div className="flex flex-row justify-between md:justify-center ">
                <h2 className="mb-6 text-sm font-semibold text-white">
                  Sobre nosotros
                </h2>

                <div>
                  <button className="md:hidden">
                    <img
                      src={Add}
                      alt="my image"
                      onClick={() => setButtonState1(!buttonState1)}
                    />
                  </button>
                </div>
              </div>

              <div
                className={`text-gray-500 md:block ${
                  buttonState1 ? `block` : `hidden`
                }`}
              >
                <div className="mb-4">
                  <a href="#" className="hover:underline">
                    Historia, Misión y Visión
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:underline">
                    Contacto
                  </a>
                </div>
              </div>
            </div>

            {/* Second Item */}

            <div className="mx-12 md:mx-0 md:text-center text-left">
              {/* drop-down button */}

              <div className="flex flex-row justify-between md:justify-center ">
                <h2 className="mb-6 text-sm font-semibold text-white">
                  Terminos y privacidad
                </h2>
                <div>
                  <button className="md:hidden">
                    <img
                      src={Add}
                      alt="my image"
                      onClick={() => setButtonState2(!buttonState2)}
                    />
                  </button>
                </div>
              </div>
              <ul
                className={`text-gray-500 md:block ${
                  buttonState2 ? `block` : `hidden`
                }`}
              >
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
          <div className="ml-12 md:ml-0">
            <h2 className="mb-6 text-sm font-semibold text-white">
              Nuestras redes sociales
            </h2>
            <div className="flex flex-row gap-4 md:justify-center">
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
