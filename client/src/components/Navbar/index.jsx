import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu1 from '../../assets/menu1.png';
import logo from '../../assets/logo.png';

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
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-black">
                  <Link to="/menu">Menu</Link>
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-black">
                  <Link to="/contenido">Contenido</Link>
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