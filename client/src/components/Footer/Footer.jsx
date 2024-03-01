import React from "react";
import LogoSingle from "../../assets/logo-single.png"
import Instagram from "../../assets/instagram.svg"
import Facebook from "../../assets/facebook.svg"

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
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
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">
                Sobre nosotros
              </h2>
              <ul className="text-gray-500 ">
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
            <div>
              <h2 className="mb-6 text-sm font-semibold  text-white">
                Términos y Privacidad
              </h2>
              <ul className="text-gray-500 ">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline "
                  >
                    Normas de la comunidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Términos y privacidad
                  </a>
                </li>
              </ul>
            </div>
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
      </div>
    </footer>
  );
};

export default Footer;
