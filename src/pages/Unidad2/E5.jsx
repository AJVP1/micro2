import { MathJax } from "better-react-mathjax";

function Ejercicio5() {
  return (
    <MathJax>
      <section className="bg-[#fafafa] mx-auto p-6">
        <h2 className="text-4xl text-center text-[#1d2554] mt-6">
          Ejercicio 5
        </h2>
        <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
        <p className="mt-2">
          Considere un juego del tipo "dilema del prisionero" con los siguientes
          pagos:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="3">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="3">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">A</th>
            <th class="border border-black p-3">B</th>
          </tr>

          <tr>
            <th class="border border-black p-3">A</th>
            <td class="border border-black p-3">($1;1$)</td>
            <td class="border border-black p-3">($10;0$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">($0;10$)</td>
            <td class="border border-black p-3">($5;5$)</td>
          </tr>
        </table>
        <ol className="list-decimal list-inside mt-2">
          <li>
            Encuentre todos los perfiles formados por estrategias puras que
            sobreviven al proceso de eliminación de estrategias estrictamente
            dominadas.
          </li>
          <li>
            Encuentre el único equilibrio de Nash. ¿Es óptimo en el sentido de
            Pareto?
          </li>
        </ol>
        <h3 className="text-2xl font-semibold mt-4">Solución</h3>
        <p className="mt-2">Para el punto 1.</p>
        <p>
          Podemos eliminar la estrategia $B$ para el jugador 1 ya que esta es
          estrictamente dominada por la estrategia $A$. Quedando el juego:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="3">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="2">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">A</th>
            <th class="border border-black p-3">B</th>
          </tr>

          <tr>
            <th class="border border-black p-3">A</th>
            <td class="border border-black p-3">($1;1$)</td>
            <td class="border border-black p-3">($10;0$)</td>
          </tr>
        </table>
        <p className="mt-2">
          Ahora podemos eliminar la estrategia $B$ para el jugador 2 ya que esta
          es estrictamente dominada por la estrategia $A$. Quedando el juego:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="2">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="2">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">A</th>
          </tr>

          <tr>
            <th class="border border-black p-3">A</th>
            <td class="border border-black p-3">($1;1$)</td>
          </tr>
        </table>
        <p className="mt-2">El perfil que sobrevive es ($A, A$).</p>
        <p className="mt-2">Para el punto 2.</p>
        <p className="mt-2">
          Seleccionando las mejores repuestas para ambos jugadores:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="3">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="3">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">A</th>
            <th class="border border-black p-3">B</th>
          </tr>

          <tr>
            <th class="border border-black p-3">A</th>
            <td class="border border-black p-3">
              {"($\\textcolor{red}{1};\\textcolor{red}{1}$)"}
            </td>
            <td class="border border-black p-3">
              {"($\\textcolor{red}{10};0$)"}
            </td>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">
              {"($0;\\textcolor{red}{10}$)"}
            </td>
            <td class="border border-black p-3">($5;5$)</td>
          </tr>
        </table>
        <p className="mt-2">
          El equilibrio de Nash es ($A; A$), y este no es optimo en el sentido
          de Pareto dado que los jugadores podrían cooperar y estar mejor los
          dos sin empeorar la situación del otro.
        </p>
      </section>
    </MathJax>
  );
}

export default Ejercicio5;
