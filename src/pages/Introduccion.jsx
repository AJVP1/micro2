import modulos from "../data/modulos.json";

const Introduccion = () => {
  return (
    <section className="bg-[#fafafa] max-w-237 mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-[#1d2554] mt-6">
        Introducción a la materia
      </h1>
      <h2 className="mt-6 text-[#1d2554] font-semibold">
        Material obligatorio:
      </h2>
      <ul className="list-disc text-lg mt-4 pl-8">
        <li>Gibbons, "Game Theory for Applied Economists"</li>
        <li>Mas-Colell, Whinston y Green, "Microeconomic Theory"</li>
      </ul>

      <h2 className="mt-6 text-[#1d2554] font-semibold">
        Problemas a tratar durante la materia:
      </h2>
      <ul className="list-disc text-lg mt-4 pl-8">
        <li>Problema de la credibilidad</li>
        <li>Problema de las profesias autocumplidas</li>
        <li>Problema de equilibrios multiples</li>
        <li>Problemas de cooperación/colusión implícita</li>
        <li>Problema de la confianza/colapso del mercado</li>
      </ul>

      <h2 className="mt-6 text-[#1d2554] font-semibold">
        Programa de la materia
      </h2>
      <ul className="list-decimal text-lg mt-4 pl-8">
        {modulos.map((modulo) => (
          <li key={modulo.id} className="mt-1">
            <h3 className="text-base">{modulo.titulo}</h3>
          </li>
        ))}
      </ul>
      <p className="mt-3">
        Del 1-3 se trata de juegos de un solo momento e información completa;
        del 4-6 se trata de juegos de varios momentos e información completa; el
        7 es juegos de un solo momento e información incompleta; del 8-10 son
        juegos de varios momentos e información incompleta.
      </p>
    </section>
  );
};

export default Introduccion;
