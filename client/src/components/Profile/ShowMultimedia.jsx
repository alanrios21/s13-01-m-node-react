import boton from "../../assets/Add multimedia.png";
import { Link } from "react-router-dom";
import { MULTIMEDIA_TYPE } from "../../utils/constants";

export const ShowMultimedia = ({ title, link, items, type, onChange }) => {
  const typeVideo = (arr) => {
    if (!arr || arr.length === 0) return <p>No hay videos</p>;
    return arr.map((item, index) => (
      <div key={index} className="min-w-32 h-32 flex rounded-lg ">
        <video
          className="w-32 h-32 object-cover rounded-lg"
          src={item.url}
          controls
        ></video>
      </div>
    ));
  };

  const typeImage = (arr) => {
    if (!arr || arr.length === 0) return <p>No hay imágenes</p>;
    return arr.map((item, index) => (
      <div key={index}>
        <img src={item} alt={link} />
      </div>
    ));
  };

  return (
    <section className="lg:w-3/4 max-w-1/4 m-auto mt-6 overflow-hidden">
      <div className="flex justify-between">
        <p className="font-medium">{title}</p>{" "}
        <p className="underline font-semibold text-secondary">
          <Link to={link}>Ver todo</Link>
        </p>
      </div>
      <div className="flex mt-4 overflow-hidden">
        <label htmlFor="file-upload" className="flex items-center min-w-20">
          <input
            id="file-upload"
            type="file"
            onChange={(e) => onChange(e, type)}
            style={{ display: "none" }}
          />
          <img className="block w-16 h-16" src={boton} alt="icono musical" />
        </label>
        <div className="flex gap-6 max-w-80 w-80 lg:max-w-max overflow-hidden ">
          {type === MULTIMEDIA_TYPE.VIDEO && typeVideo(items)}
          {type === MULTIMEDIA_TYPE.IMAGE && typeImage(items)}
        </div>
      </div>
    </section>
  );
};
