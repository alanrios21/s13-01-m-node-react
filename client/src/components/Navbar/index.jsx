import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import menu1 from "../../assets/menu1.png";
import logo from "../../assets/logo.png";
import inicio from "../../assets/inicio.png";
import perfil from "../../assets/perfil.png";
import explorar from "../../assets/explorar.png";
import crowd from "../../assets/crowd.png";
import settings from "../../assets/settings.png";
import support from "../../assets/support.png";
import exit1 from "../../assets/exit1.png";
import close1 from "../../assets/close1.png";
import { useAuth } from "../../hooks/useAuth";
import { logout } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout: logoutUser, user } = useAuth();
  const navigate = useNavigate();
  // const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleAuthMenu = async () => {
    if (!user) {
      console.log("No user");
      navigate("/auth/login");
      return;
    }

    closeMenu();
    await logout();
    logoutUser();
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsLargeScreen(window.innerWidth > 1024);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <div className="fixed w-full">
      <nav className="relative">
        <div className="left-0 top-0 w-full bg-[#2B1A4E] py-2 text-white">
          <div className="flex justify-between items-center px-4">
            <div className="flex  items-center">
              {/* {isLargeScreen ? null : ( */}
              <img
                src={menuOpen ? close1 : menu1}
                alt={menuOpen ? "Close" : "Menu"}
                className="cursor-pointer mr-4 w-6"
                onClick={toggleMenu}
              />
              {/* )} */}
              <img src={logo} alt="Logo" className={`h-8 w-36`} />
            </div>
          </div>
        </div>
        <div className="flex relative">
          <div
            className={`h-screen bg-[#2B1A4E] menu-nav ${
              menuOpen ? "show" : "hide"
            } `}
          >
            <ul className="flex flex-col p-3 h-screen relative">
              <li className="py-2">
                <Link to="/" className="text-white" onClick={closeMenu}>
                  <img
                    src={inicio}
                    alt="Inicio"
                    className="inline-block w-6 mr-2"
                  />
                  <p>Inicio</p>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/profile/fill"
                  className="text-white"
                  onClick={closeMenu}
                >
                  <img
                    src={perfil}
                    alt="Perfil"
                    className="inline-block w-6 mr-2"
                  />
                  <p> Perfil</p>
                </Link>
              </li>
              <li className="py-2">
                <Link to="/explorar" className="text-white" onClick={closeMenu}>
                  <img
                    src={explorar}
                    alt="Videos"
                    className="inline-block w-6 mr-2"
                  />
                  <p>Explorar</p>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/Crowdfounding"
                  className="text-white"
                  onClick={closeMenu}
                >
                  <img
                    src={crowd}
                    alt="crowd"
                    className="inline-block w-6 mr-2"
                  />
                  <p>Crowdfounding</p>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/Configuracion"
                  className="text-white"
                  onClick={closeMenu}
                >
                  <img
                    src={settings}
                    alt="settings"
                    className="inline-block w-6 mr-2"
                  />
                  <p>Configuración</p>
                </Link>
              </li>
              <li className="py-2">
                <Link to="/support" className="text-white" onClick={closeMenu}>
                  <img
                    src={support}
                    alt="support"
                    className="inline-block w-6 mr-2"
                  />
                  <p>Soporte</p>
                </Link>
              </li>
              <li className="py-2 absolute bottom-12">
                <button
                  className={"text-[red] " + "outline-none border-none"}
                  onClick={handleAuthMenu}
                >
                  <img
                    src={exit1}
                    alt="exit"
                    className="inline-block w-6 mr-2"
                  />
                  <p> {user ? "Cerrar " : "Iniciar "} sesión</p>
                </button>
              </li>
            </ul>
          </div>
          <main className="grid w-full h-screen overflow-y-scroll">
            <section className="w-3/4 m-auto">
              <Outlet />
            </section>
          </main>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
