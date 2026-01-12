// importamos Link para navegacion interna
import { Link } from "react-router-dom";
// importamos los ejercicios de la unidad 2
import ejercicios from "../data/ejercicios2.json";

const Unidad2 = () => {
  return (
    <section className="bg-[#fafafa] max-w-270 mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-[#1d2554] mt-6">
        Juegos Estaticos con informacion completa
      </h2>

      <h2 className="text-2xl font-semibold text-[#1d2554] mt-6">Teoria</h2>
      <hr />

      <h2 className="text-2xl font-semibold text-[#1d2554] mt-6">Practica</h2>
      <hr />
      <ul className="flex gap-2">
        {ejercicios.map((ejercicio) => (
          <EjercicioLink key={ejercicio.id} ejercicio={ejercicio} />
        ))}
      </ul>
    </section>
  );
};

function EjercicioLink({ ejercicio }) {
  return (
    <Link
      to={`/juegos-estaticos-informacion-completa/${ejercicio.slug}`}
      className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
    >
      {ejercicio.titulo}
    </Link>
  );
}

export default Unidad2;
