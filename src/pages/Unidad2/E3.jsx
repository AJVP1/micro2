import { MathJax } from "better-react-mathjax";

function Ejercicio3() {
  return (
    <MathJax>
      <section className="bg-[#fafafa] mx-auto p-6">
        <h2 className="text-4xl text-center text-[#1d2554] mt-6">
          Ejercicio 3
        </h2>
        <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
        <p className="mt-2">
          Leandro tira una moneda al aire, cae en su mano y rápidamente la tapa.
          A continuación, lo invita a participar en el siguiente juego. Usted
          (que no vio que salió) tiene que elegir cara o ceca, luego el destapa
          la moneda. Si acertó le paga 1 y si perdió 0. Suponga que la moneda no
          está trucada y que Leandro no hace nada para engañarlo. ¿Existe alguna
          consideración estratégica? ¿Es esto un “juego” de acuerdo a lo visto
          en clase?
        </p>
        <h3 className="text-2xl font-semibold mt-4">Solución</h3>
        <p className="mt-2">
          Sí, porque tiene jugadores (el jugador 1 y el jugador 2), tiene
          estrategias (cara o ceca), y tiene pagos ($1$ y $0$). De forma
          matricial quedaría:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <thead><tr>
            <th className="border border-black p-3"></th>
            <th className="border border-black p-3" colSpan="3">
              J2
            </th>
          </tr>
          </thead>
          <tbody><tr>
            <th className="border border-black p-3" rowSpan="3">
              <div className="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th className="border border-black p-3">Estrategias</th>
            <th className="border border-black p-3">Acertó</th>
            <th className="border border-black p-3">No Acertó</th>
          </tr>


          <tr>
            <th className="border border-black p-3">Cara</th>
            <td className="border border-black p-3">($1;-1$)</td>
            <td className="border border-black p-3">($0;0$)</td>
          </tr>


          <tr>
            <th className="border border-black p-3">Ceca</th>
            <td className="border border-black p-3">($1;-1$)</td>
            <td className="border border-black p-3">($0;0$)</td>
          </tr>

          
          </tbody>
        </table>
      </section>
    </MathJax>
  );
}

export default Ejercicio3;
