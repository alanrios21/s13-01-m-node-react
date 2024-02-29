export const ProfileNetworksForm = () => {
  return (
    <>
      <section className="mt-8">
        <h2>Redes Sociales</h2>
        <p>
          Añade tus redes sociales para que los otros artistas puedan contactar
          contigo y así lograr una exitosa colaboración.
        </p>

        <div className="flex items-center gap-2 mt-4">
          <p className="text-sm md:text-base w-20">Instagram</p>
          <input
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            type="text"
            name=""
            id=""
            placeholder="Ingresa el link de tu perfil"
          />
        </div>

        <div className="flex items-center gap-2 mt-4">
          <p className="text-sm md:text-base w-20">Facebook</p>
          <input
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            type="text"
            name=""
            id=""
            placeholder="Ingresa el link de tu perfil"
          />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <p className="text-sm md:text-base w-20">Youtube</p>
          <input
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            type="text"
            name=""
            id=""
            placeholder="Ingresa el link de tu canal"
          />
        </div>
      </section>
    </>
  );
};
