import { LoginForm } from "../../components/Auth/Login/LoginForm";
// import { Header } from "../../components/Header/Header";
import logoSingle from "../../assets/logo-single.png";
import "./styles.css";

export const LoginPage = () => {
  return (
    <>
      <main className="p-4 bg-primary h-screen ">
        {/* <Header /> */}
        {/* Columns Container */}
        <div className="sm:block flex justify-center ">
          {/* left column container */}
          <div className="sm:hidden md:block text-white align-middle flex-auto w-2/3  ">
            <div className="relative m-auto text-center text-6xl p-4 font-lato h-screen">
              <img
                className="h-64 shrink-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-40"
                src={logoSingle}
                alt="perfil músical"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <h1 className="font-black m-8 z-10">COMPARTE</h1>
                <h1 className="m-8 z-10">
                  TU <span className="font-black">PASION</span>
                </h1>
                <h1 className="m-8 z-10">
                  <span className="font-black">POR</span> LA{" "}
                  <span className="font-black">MUSICA</span>
                </h1>
              </div>
            </div>
          </div>

          {/* right column container */}
          <div className=" md:w-1/3 md:flex  ">
          
            {/* Login Component */}
            <LoginForm />
          </div>
        </div>
      </main>
    </>
  );
};
