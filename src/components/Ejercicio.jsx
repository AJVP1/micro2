import { useParams } from "react-router-dom";
import ejercicios from "../data/ejercicios2.json";

function Ejercicio() {
  const { slug } = useParams();

  const ejercicio = ejercicios.find((ej) => ej.slug === slug);

  if (!ejercicio) {
    return <h2>Ejercicio no encontrado</h2>;
  }

  return (
    <section className="bg-[#fafafa] max-w-270 mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-[#1d2554] mt-6">
        {ejercicio.titulo}
      </h2>
      <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
      <p>{ejercicio.enunciado}</p>
      <h3 className="text-2xl font-semibold mt-4">Solución</h3>
      <p>{ejercicio.solucion}</p>
    </section>
  );
}

export default Ejercicio;
