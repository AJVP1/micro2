const Introduccion = () => {
  return (
    <>
      <h2 className="mt-6 text-[#1d2554] font-semibold">
        Material obligatorio:
      </h2>
      <ul className="list-disc mx-auto text-lg mt-4 px-4 space-y-2">
        <li>Gibbons, "Game Theory for Applied Economists"</li>
        <li>Mas-Colell, Whinston y Green, "Microeconomic Theory"</li>
      </ul>

      <h3 className="mt-10">Problemas a tratar durante la materia:</h3>
      <ul className="list-none max-w-3xl mx-auto text-lg mt-4 px-4 space-y-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:content-['-'] [&>li]:before:absolute [&>li]:before:left-0">
        <li>Problema de la credibilidad</li>
        <li>Problema de las profesias autocumplidas</li>
        <li>Problema de equilibrios multiples</li>
        <li>Problemas de cooperación/colusión implícita</li>
        <li>Problema de la confianza/colapso del mercado</li>
      </ul>
    </>
  );
};

export default Introduccion;
