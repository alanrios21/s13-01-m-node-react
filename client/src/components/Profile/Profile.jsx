import tecladista from "../../assets/tecladista 2.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileNetworksForm } from "./ProfileNetworksForm";
import {
  musical_genre,
  instruments,
  MULTIMEDIA_TYPE,
} from "../../utils/constants";
import { useAuth } from "../../hooks/useAuth";
import { ShowProfileNetworks } from "./ShowProfileNetworks";
import { ShowMultimedia } from "./ShowMultimedia";
import { getProfile, updateProfile } from "../../api/profile";

export const Profile = () => {
  const { user: authUser } = useAuth();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const params = useParams();
  const [isMySelf, setIsMySelf] = useState(true);
  const [btnText, setBtnText] = useState({
    btn1: "Guardar cambios",
    btn2: "Guardar cambios",
  });

  const [textError, setTextError] = useState({
    error1: "",
    error2: "",
  });

  const [formData, setFormData] = useState({
    profileImage: tecladista,
    about: "",
    musicalGenre: "",
    instruments: "",
    musicalInfluence: "",
  });

  useEffect(() => {
    setIsMySelf(authUser?.user.id === params.id);

    getProfile(params.id).then((data) => {
      setUser(data);
      setFormData({
        profileImage: data.profileImage,
        about: data.about,
        musicalGenre: data.musical_genre,
        instruments: data.instruments,
        musicalInfluence: data.musical_influence,
      });
    });
  }, [authUser, params.id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    try {
      setBtnText({ ...btnText, btn1: "Guardando..." });
      const response = await updateProfile(user.id, formData);
      setBtnText({ ...btnText, btn1: "Guardar cambios" });
      setUser(response.data);
    } catch (error) {
      setBtnText({ ...btnText, btn1: "Guardar cambios" });
    }
  };

  return (
    <>
      <section className="lg:w-3/4 m-auto ">
        {/* Sección Tu perfil sobre ti */}
        <div className="p-8 overflow-x-hidden">
          {isMySelf ? (
            <>
              <h2 className="font-bold">Tu perfil</h2>
              <p>Sobre ti</p>
            </>
          ) : (
            <h2 className="font-bold">Perfil de {user?.firstName}</h2>
          )}

          <div className="flex flex-col items-center">
            <img
              className="w-32 h-32 rounded-full mb-4 shrink-0 object-cover object-center"
              src={formData.profileImage}
              alt="perfil músical"
            />
            {!isMySelf && (
              <ShowProfileNetworks ig={user?.ig} fb={user?.fb} yt={user?.yt} />
            )}
          </div>
          <textarea
            className="block p-2.5 w-full mt-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Escribe una breve biografía..."
            rows="5"
            name="about"
            value={formData.about}
            disabled={!isMySelf}
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
              disabled={!isMySelf}
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
              disabled={!isMySelf}
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
              disabled={!isMySelf}
              placeholder="Ej.: Batería, guitarra, bajo"
              value={formData.musicalInfluence}
            />
          </p>
          {isMySelf && <ProfileNetworksForm />}

          <div className="flex justify-center items-center pt-4 mt-10  w-80 m-auto md:w-full">
            {isMySelf && (
              <button className="bg-secondary p-2 w-full md:w-1/3 rounded-lg text-slate-50">
                {btnText.btn1}
              </button>
            )}
          </div>
        </div>

        {/* Sección Contenido Multimedia */}

        <div className="p-8">
          <h2 className="font-semibold text-lg">Contenido Multimedia </h2>
          {isMySelf && (
            <h3>¡Haz que tu perfil cobre vida con tu mejor material!</h3>
          )}

          <div>
            <ShowMultimedia
              title={"Demos"}
              type={MULTIMEDIA_TYPE.VIDEO}
              items={user?.videos}
            ></ShowMultimedia>
          </div>

          <div>
            <ShowMultimedia
              title={"Videos"}
              type={MULTIMEDIA_TYPE.VIDEO}
              items={user?.videos}
            ></ShowMultimedia>
          </div>

          <div>
            <ShowMultimedia
              title={"Fotos"}
              type={MULTIMEDIA_TYPE.IMAGE}
              items={user?.images}
            ></ShowMultimedia>
          </div>

          <div className="flex justify-center items-center mt-10 pb-10 w-80 m-auto md:w-full">
            {isMySelf && (
              <button className="bg-secondary p-2 w-full md:w-1/3 rounded-lg text-slate-50">
                Guardar cambios
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
