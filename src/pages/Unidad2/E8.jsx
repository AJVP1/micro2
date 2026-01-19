import { MathJax } from "better-react-mathjax";

function Ejercicio8() {
  return (
    <MathJax>
      <section className="bg-[#fafafa] mx-auto p-6">
        <h2 className="text-4xl text-center text-[#1d2554] mt-6">
          Ejercicio 8
        </h2>
        <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
        <p className="mt-2">
          Considere un juego de dos jugadores en el que cada uno debe anunciar
          simultáneamente un monto de 0, 50 o 100 pesos. Si los anuncios suman
          100 pesos o menos, entonces cada jugador se lleva el monto que eligió.
          En caso contrario, cada jugador debe pagar 10 pesos.
        </p>
        <ol className="list-decimal text-lg mt-4 pl-8">
          <li className="mt-2">Plantee el juego en forma extensiva.</li>
          <li className="mt-2">
            Determine si hay estrategias estrictamente dominadas
          </li>
          <li className="mt-2">
            Encuentre todas las estrategias racionalizables
          </li>
          <li className="mt-2">Encuentre todos los equilibrios de Nash</li>
        </ol>

        <h3 className="text-2xl font-semibold mt-4">Solución</h3>
        <p className="mt-2">
          1. El juego en forma extensiva puede representarse mediante un árbol
          de decisiones donde cada jugador elige entre las opciones 0, 50 o 100
          pesos simultáneamente. Cada combinación de elecciones lleva a un
          resultado con pagos correspondientes.
        </p>
        <p className="mt-2">2. Analizando las estrategias:</p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th className="border border-black p-3"></th>
            <th className="border border-black p-3" colSpan="4">
              J2
            </th>
          </tr>

          <tr>
            <th className="border border-black p-3" rowSpan="4">
              <div className="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th className="border border-black p-3">Estrategias</th>
            <th className="border border-black p-3">0</th>
            <th className="border border-black p-3">50</th>
            <th className="border border-black p-3">100</th>
          </tr>

          <tr>
            <th className="border border-black p-3">0</th>
            <td className="border border-black p-3">($0;0$)</td>
            <td className="border border-black p-3">($0;50$)</td>
            <td className="border border-black p-3">($0;100$)</td>
          </tr>

          <tr>
            <th className="border border-black p-3">50</th>
            <td className="border border-black p-3">($50;0$)</td>
            <td className="border border-black p-3">($50;50$)</td>
            <td className="border border-black p-3">($-10;-10$)</td>
          </tr>

          <tr>
            <th className="border border-black p-3">100</th>
            <td className="border border-black p-3">($100;0$)</td>
            <td className="border border-black p-3">($-10;-10$)</td>
            <td className="border border-black p-3">($-10;-10$)</td>
          </tr>
        </table>
        <p>
          Podemos ver que ninguna estrategia es estrictamente dominada. Cada
          elección puede ser la mejor respuesta a alguna elección del otro
          jugador.
        </p>

        <p className="mt-2">
          3. Dado que no hay estrategias estrictamente dominadas, todas las
          estrategias (0, 50, 100) son racionalizables para ambos jugadores.
        </p>
        <p className="mt-2">
          4. Los equilibrios de Nash se encuentran analizando las mejores
          respuestas de cada jugador a las elecciones del otro. Los equilibrios
          de Nash en este juego son:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th className="border border-black p-3"></th>
            <th className="border border-black p-3" colSpan="4">
              J2
            </th>
          </tr>

          <tr>
            <th className="border border-black p-3" rowSpan="4">
              <div className="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th className="border border-black p-3">Estrategias</th>
            <th className="border border-black p-3">0</th>
            <th className="border border-black p-3">50</th>
            <th className="border border-black p-3">100</th>
          </tr>

          <tr>
            <th className="border border-black p-3">0</th>
            <td className="border border-black p-3">($0;0$)</td>
            <td className="border border-black p-3">($0;50$)</td>
            <td className="border border-black p-3">
              {"($\\textcolor{red}{0};\\textcolor{red}{100}$)"}
            </td>
          </tr>

          <tr>
            <th className="border border-black p-3">50</th>
            <td className="border border-black p-3">($50;0$)</td>
            <td className="border border-black p-3">
              {"($\\textcolor{red}{50};\\textcolor{red}{50}$)"}
            </td>
            <td className="border border-black p-3">($-10;-10$)</td>
          </tr>

          <tr>
            <th className="border border-black p-3">100</th>
            <td className="border border-black p-3">
              {"($\\textcolor{red}{100};\\textcolor{red}{0}$)"}
            </td>
            <td className="border border-black p-3">($-10;-10$)</td>
            <td className="border border-black p-3">($-10;-10$)</td>
          </tr>
        </table>
        <p className="mt-2">
          Los equilibrios de Nash son ($0, 0$), ($0, 50$), ($50, 0$) y ($50,
          50$).
        </p>
      </section>
    </MathJax>
  );
}

export default Ejercicio8;
