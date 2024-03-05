import { Link } from "react-router-dom";

const Colaboradores = ({ colaboradores }) => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mb-8 mt-4">
      {colaboradores.map((colaborador) => (
        <Link
          to={`/profile/${colaborador.id}`}
          className="m-auto"
          key={colaborador.id}
        >
          <div className="flex flex-col mb-2" key={colaborador.id}>
            <img
              src={colaborador?.profileImage}
              className="h-[115px] w-[120px] rounded-2xl mb-2"
            />
            <p className="font-medium m-auto">{colaborador.firstName}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Colaboradores;
