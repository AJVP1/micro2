import modulos from "../data/modulos.json";

const Introduccion = () => {
  return (
    <section className="bg-[#fafafa] max-w-237 mx-auto p-4 md:p-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d2554] text-center mt-4 md:mt-6">
        Introducción a la materia
      </h2>
      <h2 className="text-base md:text-lg lg:text-xl font-semibold text-[#1d2554] mt-4 md:mt-6">
        Material obligatorio:
      </h2>
      <ul className="list-disc text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8">
        <li className="mt-2 md:mt-3">
          Gibbons, "<em>Game Theory for Applied Economists</em>"
        </li>
        <li className="mt-2 md:mt-3">
          Mas-Colell, Whinston y Green, "<em>Microeconomic Theory</em>"
        </li>
        <li className="mt-2 md:mt-3">
          Varian, "<em>Intermediate Microeconomics</em>", fifth edition
        </li>
      </ul>

      <h2 className="text-base md:text-lg lg:text-xl mt-4 md:mt-6 text-[#1d2554] font-semibold">
        Problemas a tratar durante la materia:
      </h2>
      <ul className="list-disc text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Problema de la credibilidad
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Problema de las profesias autocumplidas
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Problema de equilibrios multiples
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Problemas de cooperación/colusión implícita
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Problema de la confianza/colapso del mercado
        </li>
      </ul>

      <h2 className="text-base md:text-lg lg:text-xl mt-4 md:mt-6 text-[#1d2554] font-semibold">
        Programa de la materia
      </h2>
      <ul className="list-decimal text-sm md:text-base lg:text-lg mt-3 md:mt-4 pl-6 md:pl-8">
        {modulos.map((modulo) => (
          <li key={modulo.id} className="mt-1">
            <h3 className="mt-2 text-sm sm:text-base md:text-lg">
              {modulo.titulo}
            </h3>
          </li>
        ))}
      </ul>
      <p className="text-sm md:text-base lg:text-lg mt-3 md:mt-4">
        Del 2-4 se trata de juegos de un solo momento e información completa;
        del 5-7 se trata de juegos de varios momentos e información completa; el
        8 es juegos de un solo momento e información incompleta; del 9-11 son
        juegos de varios momentos e información incompleta.
      </p>
    </section>
  );
};

export default Introduccion;
