import { useEffect, useState } from "react";
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
import { useLoadingBar } from "../../hooks/useLoadingBar";
import "./styles.css";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout: logoutUser, user } = useAuth();

  const { ref } = useLoadingBar();

  const { user: userHook } = useAuth(); // Nuevo por Andres para llamar al Usuario
  const navigate = useNavigate();

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
    navigate("/");
  };

  return (
    <div className="fixed w-full font-lato">
      <nav className="relative">
        {/* NavBar horizontal */}
        <div className="left-0 top-0 w-full bg-[#2B1A4E] py-2 text-white">
          <div className="flex justify-between items-center px-4 relative">
            <div className="flex items-center">
              {/* Nuevo por Andres para llamar al Usuario */}
              {userHook && (
                <div className="text-[#ECBA3B] mr-4">
                  {userHook.firstName} {userHook.lastName}
                </div>
              )}
              <img
                src={menuOpen ? close1 : menu1}
                alt={menuOpen ? "Close" : "Menu"}
                className={`cursor-pointer mr-4 w-6 ${
                  !user ? "hidden" : "block"
                }`}
                onClick={toggleMenu}
              />
              {/* )} */}
              <img src={logo} alt="Logo" className={`h-8 w-36`} />
            </div>

            <div className={`flex gap-2 ${user ? "hidden " : "block "}`}>
              <Link
                to="/auth/login"
                className="text-[#ECBA3B] hover:bg-[#ECBA3B] underline hover:no-underline hover:text-white px-4 py-2 rounded-lg "
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/auth/register"
                className="text-[#ECBA3B] hover:bg-[#ECBA3B]  underline hover:no-underline hover:text-white px-4 py-2 rounded-lg "
              >
                Registrarse
              </Link>
            </div>

            {/* Profile is active */}
            <div
              className={`${
                user ? "block " : "hidden"
              } hidden pr-2 md:block absolute right-4`}
            >
              {user && "Bienvenido! : " + user?.user?.firstName}
            </div>
          </div>
        </div>
        <div className="flex relative">
          <div
            className={`h-screen bg-[#2B1A4E] menu-nav ${
              menuOpen ? "show" : "hide"
            } `}
          >
            <ul
              className={`flex flex-col p-3 h-screen relative ${
                !user ? "hidden" : "block"
              }`}
            >
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
                  to={"/profile/" + user?.user?.id}
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
                  to="/colaborators"
                  className="text-white"
                  onClick={closeMenu}
                >
                  <img
                    src={support}
                    alt="support"
                    className="inline-block w-6 mr-2"
                  />
                  <p>Colaboradores</p>
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
          <main className="grid w-full main-navbar overflow-y-scroll">
            <div
              ref={ref}
              className="loading h-1.5 w-[0%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-200 absolute z-40 top-50"
            ></div>
            <section className=" ">
              <Outlet />
            </section>
            <Footer />
          </main>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
