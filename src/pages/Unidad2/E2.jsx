import { MathJax } from "better-react-mathjax";

function Ejercicio2() {
  return (
    <MathJax>
      <section className="bg-[#fafafa] mx-auto p-6">
        <h2 className="text-4xl text-center text-[#1d2554] mt-6">
          Ejercicio 2
        </h2>
        <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
        <p className="mt-2">
          Determine si los siguientes juegos pueden ser resueltos por la
          eliminación de estrategias estrictamente dominadas y encuentre
          equilibrio.
        </p>
        <p>a.</p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="4">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="4">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">A</th>
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
          </tr>

          <tr>
            <th class="border border-black p-3">Up</th>
            <td class="border border-black p-3">($4;10$)</td>
            <td class="border border-black p-3">($3;0$)</td>
            <td class="border border-black p-3">($1;3$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">Down</th>
            <td class="border border-black p-3">($0;0$)</td>
            <td class="border border-black p-3">($2;10$)</td>
            <td class="border border-black p-3">($1;3$)</td>
          </tr>
        </table>
        <p className="mt-2">b.</p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="4">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="4">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">A</th>
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
          </tr>

          <tr>
            <th class="border border-black p-3">A</th>
            <td class="border border-black p-3">($3;3$)</td>
            <td class="border border-black p-3">($2;2$)</td>
            <td class="border border-black p-3">($3;3$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">C</th>
            <td class="border border-black p-3">($3;0$)</td>
            <td class="border border-black p-3">($0;2$)</td>
            <td class="border border-black p-3">($3;2$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">C</th>
            <td class="border border-black p-3">($3;2$)</td>
            <td class="border border-black p-3">($2;0$)</td>
            <td class="border border-black p-3">($1;1$)</td>
          </tr>
        </table>
        <p className="mt-2">c.</p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="4">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="4">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">A</th>
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
          </tr>

          <tr>
            <th class="border border-black p-3">Up</th>
            <td class="border border-black p-3">($4;3$)</td>
            <td class="border border-black p-3">($2;7$)</td>
            <td class="border border-black p-3">($0;4$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">Down</th>
            <td class="border border-black p-3">($5;5$)</td>
            <td class="border border-black p-3">($5;-1$)</td>
            <td class="border border-black p-3">($-4;-2$)</td>
          </tr>
        </table>
        <h3 className="text-2xl font-semibold mt-4">Solución</h3>
        <p className="mt-2">
          Para el punto a. vemos la matriz de pagos y podríamos pensar que hay
          estrategias estrictamente dominadas porque el jugador 2 no escoge la
          opción C. Sin embargo, al analizar con más detalle, podemos ver que no
          hay estrategias dominantes para ninguno de los jugadores. Por lo
          tanto, no se puede resolver por eliminación de estrategias
          estrictamente dominadas.
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="4">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="4">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">A</th>
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
          </tr>

          <tr>
            <th class="border border-black p-3">Up</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{4};\\textcolor{red}{10})$"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};0$)"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{1};3$)"}
            </td>
          </tr>

          <tr>
            <th class="border border-black p-3">Down</th>
            <td class="border border-black p-3">($0;0$)</td>
            <td class="border border-black p-3">
              {"$(2;\\textcolor{red}{10})$"}
            </td>
            <td class="border border-black p-3">
              {"$(1;\\textcolor{red}{3})$"}
            </td>
          </tr>
        </table>
        <p>
          El equilibrio se da en ($UP, A$), ya que en este punto ninguno de los
          jugadores tiene incentivos para desviarse unilateralmente.
        </p>

        <p className="mt-2">
          Para el punto b. escogemos las mejores respuestas de ambos jugadores:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="4">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="4">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">A</th>
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
          </tr>

          <tr>
            <th class="border border-black p-3">A</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};\\textcolor{red}{3})$"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{2};2$)"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};\\textcolor{red}{3})$"}
            </td>
          </tr>

          <tr>
            <th class="border border-black p-3">C</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};0$)"}
            </td>
            <td class="border border-black p-3">
              {"$(3;\\textcolor{red}{2})$"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};\\textcolor{red}{2})$"}
            </td>
          </tr>

          <tr>
            <th class="border border-black p-3">C</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};\\textcolor{red}{3})$"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{2};0$)"}
            </td>
            <td class="border border-black p-3">($1;1$)</td>
          </tr>
        </table>
        <p className="mt-2">
          Podemos ver que no se puede resolver por eliminación iterada de
          estrategias dominadas ya que no hay ninguna estrategia que sea
          estrictamente dominada por otra. Los equilibrios se encuentran en las
          siguientes combinaciones de estrategias: ($A, A$), ($A, C$), ($B, C$)
          y ($C, A$), ya que en estos puntos ninguno de los jugadores tiene
          incentivos para desviarse unilateralmente.
        </p>

        <p className="mt-2">
          Para el punto c. escogemos las mejores respuestas de ambos jugadores:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="4">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="4">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">A</th>
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
          </tr>

          <tr>
            <th class="border border-black p-3">Up</th>
            <td class="border border-black p-3">($4;3$)</td>
            <td class="border border-black p-3">
              {"$(2;\\textcolor{red}{7})$"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{0};4)$"}
            </td>
          </tr>

          <tr>
            <th class="border border-black p-3">Down</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{5};\\textcolor{red}{5})$"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{5};-1)$"}
            </td>
            <td class="border border-black p-3">($-4;-2$)</td>
          </tr>
        </table>
        <p>
          Podemos ver que la estrategia $C$ para el jugador 2 es dominada
          estrictamente por la estrategia $B$. Por lo tanto, podemos eliminar la
          estrategia $C$ para el jugador 2 y analizar el juego reducido.
          Quedando la matriz de pagos como:
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
            <th class="border border-black p-3">Up</th>
            <td class="border border-black p-3">($4;3$)</td>
            <td class="border border-black p-3">
              {"$(2;\\textcolor{red}{7})$"}
            </td>
          </tr>

          <tr>
            <th class="border border-black p-3">Down</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{5};\\textcolor{red}{5})$"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{5};-1)$"}
            </td>
          </tr>
        </table>
        <p>
          Ahora la estrategia $Up$ para el jugador 1 es estrictamente dominada
          por la estrategia $Down$. Por lo que podemos eliminar la estrategia
          $Up$ y analizar el juego reducido. Quedando la matriz de pagos como:
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
            <th class="border border-black p-3">Down</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{5};\\textcolor{red}{5})$"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{5};-1)$"}
            </td>
          </tr>
        </table>
        <p>
          Por ultimo, podemos eliminar la estrategia $B$ para el jugador 2 ya
          que está siendo estrictamente dominada por la estrategia $A$. Quedando
          la matriz de pagos como:
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
            <th class="border border-black p-3">Down</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{5};\\textcolor{red}{5})$"}
            </td>
          </tr>
        </table>
        <p>
          El único equilibrio de Nash en estrategias puras es que el jugador 1
          elija $Down$ y el jugador 2 elija $A$.
        </p>
      </section>
    </MathJax>
  );
}

export default Ejercicio2;
