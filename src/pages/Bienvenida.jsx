// importamos Link de react-router-dom
import { Link } from "react-router-dom";

// importamos los módulos desde el archivo JSON
import modulos from "../data/modulos.json";

const Bienvenida = () => {
  return (
    <section className="bg-[#fafafa] max-w-237 mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mt-6">Microeconomía 2</h1>
      <p className="text-center text-2xl italic">Daniel Aromi</p>
      <p className="mx-auto text-lg mt-10 text-justify">
        La materia estudia cómo interactúan los agentes económicos cuando
        existen interdependencias estratégicas, incertidumbre e información
        imperfecta. Su eje central es la teoría de juegos, aplicada a problemas
        de coordinación, incentivos y fallas de mercado.
      </p>

      <h2 className="mt-6 text-[#1d2554] font-semibold">Unidades:</h2>
      <nav className="flex gap-4 mt-4 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-[#1d2554] [&::-webkit-scrollbar-thumb]:rounded-full">
        {modulos.map((modulo) => (
          <Link
            to={modulo.link}
            key={modulo.id}
            className="bg-white p-4 rounded shadow-sm border-t-4 border-[#1d2554] hover:shadow-xl hover:border-[#C5A059] min-w-60 pb-4"
          >
            <h3 className="flex items-center text-base mb-4 text-[#1d2554] h-12.5 hyphens-auto wrap-break-word">
              {modulo.titulo}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed hyphens-auto wrap-break-word">
              {modulo.descripcion}
            </p>
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default Bienvenida;
