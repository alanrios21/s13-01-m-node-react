import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu1 from '../../assets/menu1.png';
import logo from '../../assets/logo.png';
import inicio from '../../assets/inicio.png';
import perfil from '../../assets/perfil.png';
import music from '../../assets/music.png';
import video from '../../assets/video.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-[#2B1A4E] text-white">
      <div className="flex items-center relative" onMouseLeave={closeMenu}>
        <div className='relative'>
          <img src={menu1} alt="Menu" className="cursor-pointer" onClick={toggleMenu} />
          {menuOpen && (
            <div className="absolute top-full left-0 bg-[#2B1A4E] shadow-md" onMouseLeave={closeMenu}>
              <ul className="flex flex-col p-2">
                <li className="px-4 py-2 cursor-pointer hover:bg-black">
                  <Link to="/Inicio">
                    <img src={inicio} alt="Inicio" className="mr-2" />
                    Inicio
                  </Link>
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-black">
                  <Link to="/perfil">
                    <img src={perfil} alt="Perfil" className="mr-2" />
                    Perfil
                  </Link>
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-black">
                  <Link to="/videos">
                    <img src={video} alt="Videos" className="mr-2" />
                    Videos
                  </Link>
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-black">
                  <Link to="/music">
                    <img src={music} alt="Musica" className="mr-2" />
                    Musica
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center ml-4">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;