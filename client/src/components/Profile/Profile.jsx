import tecladista from "../../assets/tecladista 2.png";
import boton from "../../assets/Add multimedia.png";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileNetworksForm } from "./ProfileNetworksForm";
import { musical_genre, instruments } from "../../utils/constants";

export const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState(
    user
      ? {
          profileImage: user.user.profileImage,
          about: user.user.about,
          musicalGenre: user.user.musical_genre,
          instruments: user.user.instruments,
          musicalInfluence: user.user.musical_influence,
        }
      : {
          profileImage: tecladista,
          about: "",
          musicalGenre: "",
          instruments: "",
          musicalInfluence: "",
        }
  );

  if (!user) {
    navigate("/");
  }

  const handleChange = (e, prop) => {
    console.log("e", e);
    if (prop) {
      console.log("prop", prop);
      setFormData({ ...formData, [prop]: e });
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="lg:w-3/4 m-auto ">
        {/* Sección Tu perfil sobre ti */}
        <div className="p-8">
          <h2 className="font-bold">Tu perfil</h2>
          <p>Sobre ti</p>
          <div className="flex flex-col items-center">
            <div className="max-w-32 max-h-32 rounded-full overflow-hidden">
              <img
                className="w-40 h-40  mb-4 shrink-0 object-cover object-center"
                src={formData.profileImage}
                alt="perfil músical"
              />
            </div>
          </div>
          <textarea
            className="block p-2.5 w-full mt-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Escribe una breve biografía..."
            rows="5"
            name="about"
            value={formData.about}
            onChange={handleChange}
          />
          <p className="text-sm mt-8 md:text-base">
            ¿Cual es tu género musical?
          </p>
          <p>
            <select
              className="block mt-3  p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              type="text"
              name="musicalGenre"
              id=""
              placeholder="Ej.: Rock, Pop, Folk"
              value={formData.musicalGenre}
              onChange={(e) => handleChange(e)}
            >
              {musical_genre.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </p>
          <p className="text-sm md:text-base mt-8">
            ¿Que instrumentos dominas?
          </p>
          <p>
            <select
              className="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              type="text"
              name="instruments"
              id=""
              placeholder="Ej.: Batería, guitarra, bajo"
              value={formData.instruments}
              onChange={(e) => handleChange(e)}
            >
              {instruments.map((instrument) => (
                <option key={instrument} value={instrument}>
                  {instrument}
                </option>
              ))}
            </select>
          </p>
          <p className="text-sm mt-8 md:text-base">Influencia musical</p>
          <p>
            <input
              className="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              type="text"
              name=""
              id=""
              placeholder="Ej.: Batería, guitarra, bajo"
              value={formData.musicalInfluence}
            />
          </p>
          <ProfileNetworksForm />
          <div className="flex justify-center items-center pt-4 mt-10">
            <button className="bg-[#e4e4e4] p-2 w-full md:w-1/3 rounded-lg text-slate-50">
              Guardar cambios
            </button>
          </div>
        </div>

        {/* Sección Contenido Multimedia */}

        <div className="p-8">
          <h2>Contenido Multimedia </h2>
          <h2>Demos</h2>
          <p className="text-sm md:text-base">
            <img className="inline" src={boton} alt="icono musical" /> ¡Haz que
            tu perfil cobre vida con tu mejor material!{" "}
          </p>
          <h2>Videos</h2>
          <p className="text-sm md:text-base">
            <img className="inline" src={boton} alt="icono musical" /> Añade
            demos y que tu núsica inspire
          </p>
          <h2>Fotos</h2>
          <p className="text-sm md:text-base">
            <img className="inline" src={boton} alt="icono musical" /> Comparte
            fotos de tu día a día.
          </p>
          <div className="flex justify-center items-center mt-10 pb-10">
            <button className="bg-[#e4e4e4] p-2 w-full md:w-1/3 rounded-lg text-slate-50">
              Guardar cambios
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
