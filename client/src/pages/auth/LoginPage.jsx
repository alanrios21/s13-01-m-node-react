import { LoginForm } from "../../components/Auth/Login/LoginForm";
import { Header } from "../../components/Header/Header";
import { LogoText } from "../../components/LogoText/LogoText";

export const LoginPage = () => {
  return (
    <main className=" bg-primary font-lato  text-white">
      <Header />
      {/* Columns Container */}
      <div className="md:flex md:justify-center  ">
        {/* left column container */}
        <div className="hidden md:block  md:w-1/2  ">
          <LogoText />
        </div>

        {/* right column container */}
        <div className="w-full md:w-1/2 md:flex md:items-center">
          {/* Login Component */}
          <div className="w-full p-4">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
};
