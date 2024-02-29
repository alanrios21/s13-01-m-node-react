import { register } from "../../../api/auth/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    collaborator: "yes",
    passwordConfirm: "",
    error: "",
    loading: false,
    showPassword: false,
  });

  const clearError = () => {
    setTimeout(() => {
      setFormData({ ...formData, error: "" });
    }, 2000);
  };

  const validateForm = () => {
    const { email, password, firstName, lastName, collaborator } = formData;
    if (password !== formData.passwordConfirm) {
      setFormData({ ...formData, error: "Las contraseñas no coinciden" });
      clearError();
      return false;
    }

    if (!email || !password || !firstName || !lastName || !collaborator) {
      setFormData({ ...formData, error: "Todos los campos son obligatorios" });
      clearError();
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const { email, password, firstName, lastName, collaborator } = formData;
    setFormData({ ...formData, loading: true });

    try {
      const user = await register({
        email,
        password,
        firstName,
        lastName,
        collaborator,
      });
      setFormData({ ...formData, loading: false });
      if (user) navigate("/auth/login");
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
  };

  return (
    <>
      <div className="w-72 bg-white p-4 rounded-md">
        <form>
          <h2 className="text-secondary font-semibold text-xl mt-8">
            Crea tu usuario
          </h2>
          <div className="form-group mt-3">
            <label className="text-rp-gray text-sm">Nombre</label>
            <div className="border rounded-md px-3 py-1 mt-1">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control w-full border-none outline-none"
                placeholder="Correo electronico"
              ></input>
            </div>
          </div>
          <div className="form-group mt-3">
            <label className="text-rp-gray text-sm">Apellido</label>
            <div className="border rounded-md px-3 py-1 mt-1">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control w-full border-none outline-none"
                placeholder="Correo electronico"
              ></input>
            </div>
          </div>
          <div className="form-group mt-3">
            <label className="text-rp-gray text-sm">
              Ingresa tu correo electronico
            </label>
            <div className="border rounded-md px-3 py-1 mt-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control w-full border-none outline-none"
                placeholder="Correo electronico"
              ></input>
            </div>
          </div>
          <div className="form-group mt-3">
            <label className="text-rp-gray text-sm">
              Ingresa tu contraseña
            </label>
            <div className="border rounded-md pl-3 pr-8 py-1 flex relative">
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
          </div>
          <div className="form-group mt-3">
            <label className="text-rp-gray text-sm">
              Reingresa tu contraseña
            </label>
            <div className="border rounded-md pl-3 pr-8 py-1 flex relative">
              <input
                type={formData.showPassword ? "text" : "password"}
                name="passwordConfirm"
                value={formData.passwordConfirm}
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
            <div>
              <label className="text-rp-gray text-sm mt-3">
                Deseas ser colaborador?
              </label>
              <div className="border rounded-md px-3 py-1 mt-1">
                <select
                  name="collaborator"
                  value={formData.collaborator}
                  onChange={handleChange}
                  className="form-control w-full border-none outline-none"
                >
                  <option value="yes">Si</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>
          <div className="h-5 text-rp-error">
            {formData.error && <div className="">{formData.error}</div>}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn bg-secondary text-white w-full mt-3 rounded-lg py-1.5 font-semibold outline-none"
          >
            {formData.loading ? "Loading..." : "Registrarse"}
          </button>
          <div className="w-full relative grid place-items-center h-7 mt-4">
            <div className="h-[0.5px] w-full bg-gray-500"></div>
            <p className="text-sm text-rp-gray px-1 top-[2px] bg-white absolute">
              otras opciones de inicio de registro
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <div className="border rounded-md h-9 pl-3 pr-8 py-1 flex justify-center gap-2 cursor-pointer">
              <img src="/google.svg" alt="" className=" left-2" />
              <p className="text-rp-gray">Registrate con Google</p>
            </div>
            <div className="border rounded-md h-9 pl-3 pr-8 py-1 flex justify-center gap-2 cursor-pointer">
              <img src="/facebook.svg" alt="" className=" left-2" />
              <p className="text-rp-gray">Registrate con Facebook</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
