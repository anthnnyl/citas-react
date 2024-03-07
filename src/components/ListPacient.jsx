import Pacient from "./Pacient";

const ListPacient = ({ pacient, setPacients, deletePacient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacient && pacient.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacient.map((pacients) => (
            <Pacient 
              key={pacients.id} 
              pacients={pacients}
              setPacients={setPacients} 
              deletePacient={deletePacient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No se ha registrado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega un {""}
            <span className="text-indigo-600 font-bold">paciente</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListPacient;