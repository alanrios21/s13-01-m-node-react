import { loginRequest } from "../../../api/auth/index";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    showPassword: false,
  });

  const [bgColorActive, setbgColorActive] = useState(false);

  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      setFormData({ ...formData, error: "Todos los campos son obligatorios" });
      clearError();
      return false;
    }

    return true;
  };

  const clearError = () => {
    setTimeout(() => {
      setFormData({ ...formData, error: "" });
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const { email, password } = formData;
    setFormData({ ...formData, loading: true });

    try {
      const user = await loginRequest(email, password);

      if (user?.containErrors) {
        throw new Error("Credenciales incorrectas");
      }

      setFormData({ ...formData, loading: false });
      login(user);
      navigate("/");
    } catch (error) {
      setFormData({
        ...formData,
        loading: false,
        error: "Credenciales incorrectas",
      });
      clearError();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setbgColorActive((bgColorActive) => true);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md ">
        <form className="min-h[80vh] h-[88vh]">
          <h2 className="text-secondary font-semibold text-xl mt-8">
            Inicia Sesión
          </h2>
          <div className="form-group my-4">
            <label className="text-rp-gray text-sm">
              Ingresa tu correo electrónico
            </label>
            <div className="border rounded-md px-3 py-1 mt-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control w-full border-none outline-none text-rp-dark-gray"
                placeholder="Correo electronico"
              ></input>
            </div>
          </div>
          <div className="form-group my-4">
            <label className="text-rp-gray text-sm">
              Ingresa tu contraseña
            </label>
            <div className="border rounded-md pl-3 pr-8 py-1 flex relative text-rp-dark-gray">
              <input
                type={formData.showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control w-full border-none outline-none"
                placeholder="Contraseña"
              ></input>
              <div className="absolute right-2">
                {formData.showPassword ? (
                  <img
                    src="/eye.svg"
                    alt=""
                    onClick={() =>
                      setFormData({
                        ...formData,
                        showPassword: !formData.showPassword,
                      })
                    }
                  />
                ) : (
                  <img
                    src="/eye-off.svg"
                    alt=""
                    onClick={() =>
                      setFormData({
                        ...formData,
                        showPassword: !formData.showPassword,
                      })
                    }
                  />
                )}
              </div>
            </div>
            <div className="mt-1">
              <a href="#" className="text-secondary underline text-sm">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          <div className="h-5 text-rp-error">
            {formData.error && <div className="">{formData.error}</div>}
          </div>
          <div className="flex justify-center items-center mt-10 pb-10 m-auto w-full md:w-3/4">
            <button
              type="submit"
              onClick={handleSubmit}
              className={`btn ${
                bgColorActive ? `bg-secondary` : `bg-rp-white-gray`
              } text-white w-full md:w-3/4 mt-3 rounded-lg py-1.5 font-semibold outline-none`}
            >
              {formData.loading ? "Loading..." : "Ingresar"}
            </button>
          </div>

          <div className="w-full relative grid place-items-center h-7 mt-4">
            <div className="h-[0.5px] w-full bg-gray-500"></div>
            <p className="text-sm text-rp-gray px-1 top-[2px] bg-white absolute">
              Otras opciones de inicio de sesion
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <div className="border rounded-md h-9 pl-3 pr-8 py-1 flex justify-center gap-2 cursor-pointer">
              <img src="/google.svg" alt="" className=" left-2" />
              <p className="text-rp-gray">Ingresa con Google</p>
            </div>
            <div className="border rounded-md h-9 pl-3 pr-8 py-1 flex justify-center gap-2 cursor-pointer">
              <img src="/facebook.svg" alt="" className=" left-2" />
              <p className="text-rp-gray">Ingresa con Facebook</p>
            </div>
          </div>
          <p className="text-sm text-rp-gray px-1 top-[2px] bg-white text-center py-4">
            ¿No tienes cuenta?{" "}
            <Link className="text-secondary underline" to={"/auth/register"}>
              Regístrate
            </Link>
            {/* <span className="text-secondary underline"></span> */}
          </p>
        </form>
      </div>
    </>
  );
};
