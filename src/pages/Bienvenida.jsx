const Bienvenida = () => {
  const modulos = [
    {
      id: 1,
      titulo: "Introducción",
      descripcion:
        "Problemas a tratar durante la materia. Programa de la materia. Material obligatorio.",
      link: "#",
    },
    {
      id: 2,
      titulo: "Juegos estaticos con informacion completa",
      descripcion:
        "Elementos. Dilema del prisionero. Equilibrio de Nash. Estrategia estrictamente dominada. Definición de racionalidad. Estrategias mixtas.",
      link: "#",
    },
    {
      id: 3,
      titulo: "Decisiones bajo incertidumbre",
      descripcion:
        "Aversión al riesgo. Utilidad esperada. Monto equivalente cierto. Coeficiente Arrow-Pratt. Compra de un seguro.",
      link: "#",
    },
    {
      id: 4,
      titulo: "Juegos dinámicos con información completa",
      descripcion:
        "Estrategia en juegos dinámicos. Conjunto informativo. Subjuego. Equilibrio de Nash en subjuegos. Juegos repetidos. Estrategias gatillo",
      link: "#",
    },
    {
      id: 5,
      titulo: "Externalidades",
      descripcion:
        "Definición. Ejemplo de la Piscifactoría. Producción de Planificador. Impuesto pigouviano. Derechos de propiedad. Teorema de Coase.",
      link: "#",
    },
    {
      id: 6,
      titulo: "Bienes públicos",
      descripcion:
        "Definición. Ejemplo del faro. Problema del polizón. Solución de Samuelson. Mecanismo de Vickrey-Clarke-Groves.",
      link: "#",
    },
  ];

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
          <div
            key={modulo.id}
            className="bg-white p-4 rounded shadow-sm border-t-4 border-[#1d2554] hover:shadow-xl hover:border-[#C5A059] min-w-60 pb-4"
          >
            <h3 className="flex items-center text-base mb-4 text-[#1d2554] h-12.5 hyphens-auto wrap-break-word">
              {modulo.titulo}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed hyphens-auto wrap-break-word">
              {modulo.descripcion}
            </p>
          </div>
        ))}
      </nav>
    </section>
  );
};

export default Bienvenida;
