import { MathJax } from "better-react-mathjax";

function Ejercicio1() {
  return (
    <MathJax>
      <section className="bg-[#fafafa] mx-auto p-6">
        <h2 className="text-4xl text-center text-[#1d2554] mt-6">
          Ejercicio 1
        </h2>
        <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
        <p className="mt-2">Usted es el jugador 1 en el siguiente juego</p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="5">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="5">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">A</th>
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
            <th class="border border-black p-3">D</th>
          </tr>

          <tr>
            <th class="border border-black p-3">A</th>
            <td class="border border-black p-3">($5;2$)</td>
            <td class="border border-black p-3">($2;6$)</td>
            <td class="border border-black p-3">($1;4$)</td>
            <td class="border border-black p-3">($0;4$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">($0;0$)</td>
            <td class="border border-black p-3">($3;2$)</td>
            <td class="border border-black p-3">($2;1$)</td>
            <td class="border border-black p-3">($1;1$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">C</th>
            <td class="border border-black p-3">($7;0$)</td>
            <td class="border border-black p-3">($2;2$)</td>
            <td class="border border-black p-3">($1;5$)</td>
            <td class="border border-black p-3">($5;1$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">D</th>
            <td class="border border-black p-3">($9;5$)</td>
            <td class="border border-black p-3">($1;3$)</td>
            <td class="border border-black p-3">($0;2$)</td>
            <td class="border border-black p-3">($4;8$)</td>
          </tr>
        </table>
        <p className="mt-2">
          $A, B, C, D$ son las estrategias que pueden elegir tanto el jugador 1
          como el jugador 2. Los numeros en las celdas son los pagos
          correspondientes.
        </p>
        <ol className="list-decimal text-lg mt-4 pl-8">
          <li className="mt-2">Qué elegiría jugar? $A, B, C,$ o $D$?</li>
          <li className="mt-2">
            Utilice el criterio de Eliminación de Estrategias Estrictamente
            Dominadas, puede predecir cual será el resultado del juego?
          </li>
          <li className="mt-2">Cuál es el equilibrio de Nash?</li>
        </ol>
        <h3 className="text-2xl font-semibold mt-4">Solución</h3>
        <p className="mt-2">Para el punto 1:</p>
        <p className="mt-2">
          Tenemos que ver la tabla de pagos y analizar las posibles elecciones.
          Si el jugador 2 elige $A$, la mejor respuesta del jugador 1 es $D$
          (pago de $9$). Si el jugador 2 elige $B$, la mejor respuesta del
          jugador 1 es $B$ (pago de $3$). Si el jugador 2 elige $C$, la mejor
          respuesta del jugador 1 es $B$ (pago de $2$). Si el jugador 2 elige
          $D$, la mejor respuesta del jugador 1 es $C$ (pago de $5$). Visto en
          la tabla:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="5">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="5">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">A</th>
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
            <th class="border border-black p-3">D</th>
          </tr>

          <tr>
            <th class="border border-black p-3">A</th>
            <td class="border border-black p-3">($5;2$)</td>
            <td class="border border-black p-3">($2;6$)</td>
            <td class="border border-black p-3">($1;4$)</td>
            <td class="border border-black p-3">($0;4$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">($0;0$)</td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};2$)"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{2};1$)"}
            </td>
            <td class="border border-black p-3">($1;1$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">C</th>
            <td class="border border-black p-3">($7;0$)</td>
            <td class="border border-black p-3">($2;2$)</td>
            <td class="border border-black p-3">($1;5$)</td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{5};1$)"}
            </td>
          </tr>

          <tr>
            <th class="border border-black p-3">D</th>
            <td class="border border-black p-3">
              {"($\\textcolor{red}{9};5$)"}
            </td>
            <td class="border border-black p-3">($1;3$)</td>
            <td class="border border-black p-3">($0;2$)</td>
            <td class="border border-black p-3">($4;8$)</td>
          </tr>
        </table>
        <p className="mt-2">Para el punto 2:</p>
        <p className="mt-2">
          Primero marcamos las mejores respuestas de los jugadores en la matriz
          de pagos:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="5">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="5">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">A</th>
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
            <th class="border border-black p-3">D</th>
          </tr>

          <tr>
            <th class="border border-black p-3">A</th>
            <td class="border border-black p-3">($5;2$)</td>
            <td class="border border-black p-3">
              {"$(2;\\textcolor{red}{6}$)"}
            </td>
            <td class="border border-black p-3">($1;4$)</td>
            <td class="border border-black p-3">($0;4$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">($0;0$)</td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};\\textcolor{red}{2}$)"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{2};1$)"}
            </td>
            <td class="border border-black p-3">($1;1$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">C</th>
            <td class="border border-black p-3">($7;0$)</td>
            <td class="border border-black p-3">($2;2$)</td>
            <td class="border border-black p-3">
              {"$(1;\\textcolor{red}{5}$)"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{5};1$)"}
            </td>
          </tr>

          <tr>
            <th class="border border-black p-3">D</th>
            <td class="border border-black p-3">
              {"($\\textcolor{red}{9};5$)"}
            </td>
            <td class="border border-black p-3">($1;3$)</td>
            <td class="border border-black p-3">($0;2$)</td>
            <td class="border border-black p-3">
              {"$(4;\\textcolor{red}{8}$)"}
            </td>
          </tr>
        </table>
        <p className="mt-2">
          Podemos observar que los pagos de la columna correspondiente a la
          estrategia $A$ del jugador 2 son siempre menores que los pagos de la
          columna $D$. Es decir:
        </p>
        <ul className="list-disc ml-10">
          <li className="mt-2 ml-6">
            La estrategia $A$ del jugador 2 es estrictamente dominada por la
            estrategia $D$ (ya que $D$ le da un mayor pago sin importar lo que
            juegue el jugador 1). Por lo tanto, podemos eliminar la estrategia
            $A$ del jugador 2.
          </li>
        </ul>
        <p className="mt-2">
          Después de eliminar las estrategias estrictamente dominadas, la matriz
          de pagos queda como sigue:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="4">
              J2
            </th>
          </tr>

          <tr>
            <th class="border border-black p-3" rowspan="5">
              <div class="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th class="border border-black p-3">Estrategias</th>
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
            <th class="border border-black p-3">D</th>
          </tr>

          <tr>
            <th class="border border-black p-3">A</th>
            <td class="border border-black p-3">
              {"$(2;\\textcolor{red}{6}$)"}
            </td>
            <td class="border border-black p-3">($1;4$)</td>
            <td class="border border-black p-3">($0;4$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};\\textcolor{red}{2}$)"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{2};1$)"}
            </td>
            <td class="border border-black p-3">($1;1$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">C</th>
            <td class="border border-black p-3">($2;2$)</td>
            <td class="border border-black p-3">
              {"$(1;\\textcolor{red}{5}$)"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{5};1$)"}
            </td>
          </tr>

          <tr>
            <th class="border border-black p-3">D</th>
            <td class="border border-black p-3">($1;3$)</td>
            <td class="border border-black p-3">($0;2$)</td>
            <td class="border border-black p-3">
              {"$(4;\\textcolor{red}{8}$)"}
            </td>
          </tr>
        </table>
        <p className="mt-2">
          Ahora, la estrategia $D$ del jugador 1 es estrictamente dominada por
          la estrategia $C$. Por lo tanto, podemos eliminar la estrategia $D$
          del jugador 1. Quedando la matriz de pagos como sigue:
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
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
            <th class="border border-black p-3">D</th>
          </tr>

          <tr>
            <th class="border border-black p-3">A</th>
            <td class="border border-black p-3">
              {"$(2;\\textcolor{red}{6}$)"}
            </td>
            <td class="border border-black p-3">($1;4$)</td>
            <td class="border border-black p-3">($0;4$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};\\textcolor{red}{2}$)"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{2};1$)"}
            </td>
            <td class="border border-black p-3">($1;1$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">C</th>
            <td class="border border-black p-3">($2;2$)</td>
            <td class="border border-black p-3">
              {"$(1;\\textcolor{red}{5}$)"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{5};1$)"}
            </td>
          </tr>
        </table>
        <p className="mt-2">
          Ahora podemos ver que la estrategia $D$ del jugador 2 es estrictamente
          dominada por la estrategia $B$. Por lo tanto, podemos eliminar la
          estrategia $D$ del jugador 2. Quedando la matriz de pagos como sigue:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <tr>
            <th class="border border-black p-3"></th>
            <th class="border border-black p-3" colspan="3">
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
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
          </tr>

          <tr>
            <th class="border border-black p-3">A</th>
            <td class="border border-black p-3">
              {"$(2;\\textcolor{red}{6}$)"}
            </td>
            <td class="border border-black p-3">($1;4$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};\\textcolor{red}{2}$)"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{2};1$)"}
            </td>
          </tr>

          <tr>
            <th class="border border-black p-3">C</th>
            <td class="border border-black p-3">($2;2$)</td>
            <td class="border border-black p-3">
              {"$(1;\\textcolor{red}{5}$)"}
            </td>
          </tr>
        </table>
        <p className="mt-2">
          Ahora podemos ver que la estrategia $A$ del jugador 1 es estrictamente
          dominada por la estrategia $B$. Por lo tanto, podemos eliminar la
          estrategia $A$ del jugador 1. Quedando la matriz de pagos como sigue:
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
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};\\textcolor{red}{2}$)"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{2};1$)"}
            </td>
          </tr>

          <tr>
            <th class="border border-black p-3">C</th>
            <td class="border border-black p-3">($2;2$)</td>
            <td class="border border-black p-3">
              {"$(1;\\textcolor{red}{5}$)"}
            </td>
          </tr>
        </table>
        <p className="mt-2">
          Ahora podemos ver que la estrategia $C$ del jugador 1 es estrictamente
          dominada por la estrategia $B$. Por lo tanto, podemos eliminar la
          estrategia $C$ del jugador 1. Quedando la matriz de pagos como sigue:
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
            <th class="border border-black p-3">B</th>
            <th class="border border-black p-3">C</th>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};\\textcolor{red}{2}$)"}
            </td>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{2};1$)"}
            </td>
          </tr>
        </table>
        <p className="mt-2">
          Por ultimo, la estrategia $C$ del jugador 2 es estrictamente dominada
          por la estrategia $B$. Por lo tanto, podemos eliminar la estrategia
          $C$ del jugador 2. Quedando la matriz de pagos como sigue:
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
            <th class="border border-black p-3">B</th>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">
              {"$(\\textcolor{red}{3};\\textcolor{red}{2}$)"}
            </td>
          </tr>
        </table>
        <p className="mt-2">
          {
            "El resultado del juego sería que cada jugador elige la estrategia {($J_1, J_2$)}={($B, B$)} con pagos {($3;2$)}."
          }
        </p>
        <p className="mt-2">Para el punto 3:</p>
        <p className="mt-2">
          El equilibrio de Nash ocurre cuando ambos jugadores eligen la
          estrategia $B$, ya que ninguno de los dos jugadores puede mejorar su
          pago cambiando unilateralmente su estrategia. Por lo tanto, el
          equilibrio de Nash es ($B, B$) con pagos ($3;2$).
        </p>
      </section>
    </MathJax>
  );
}

export default Ejercicio1;
