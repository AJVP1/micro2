import { MathJax } from "better-react-mathjax";

function Ejercicio7() {
  return (
    <MathJax>
      <section className="bg-[#fafafa] mx-auto p-6">
        <h2 className="text-4xl text-center text-[#1d2554] mt-6">
          Ejercicio 7
        </h2>
        <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
        <p className="mt-2">
          La batalla de los sexos. Los dos integrantes de un matrimonio tienen
          que elegir una actividad para el fin de semana. Las actividades
          disponibles son ir al cine o ir al teatro. La mujer prefiere el
          teatro, mientras que el hombre prefiere el cine. Para ambos es mejor
          ir juntos que separados, aunque sea para realizar la actividad que
          prefiere el conyugue.
        </p>
        <ol className="list-decimal text-lg mt-4 pl-8">
          <li className="mt-2">
            Formule la situación como un juego estratégico.
          </li>
          <li className="mt-2">
            Muestre que hay dos equilibrios de Nash en estrategias puras
          </li>
          <li className="mt-2">
            ¿Son los equilibrios hallados en b. eficientes en el sentido de
            Pareto?
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mt-4">Solución</h3>
        <p className="mt-2">
          Para el punto 1. La matriz de pagos es la siguiente:
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
            <td class="border border-black p-3">($3;1$)</td>
            <td class="border border-black p-3">($0;0$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">($0;0$)</td>
            <td class="border border-black p-3">($1;3$)</td>
          </tr>
        </table>
        <p>
          Para el punto 2. Seleccionamos las mejores respuestas para ambos
          jugadores.
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
              {"($\\textcolor{red}{3};\\textcolor{red}{1}$)"}
            </td>
            <td class="border border-black p-3">($0;0$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">($0;0$)</td>
            <td class="border border-black p-3">
              {"($\\textcolor{red}{1};\\textcolor{red}{3}$)"}
            </td>
          </tr>
        </table>
        <p>
          {
            "hay dos equilibrios de Nash en estrategias puras: $EN=\\{(A; A), (B; B)\\}$. En ambos casos, ningún jugador puede mejorar su pago cambiando unilateralmente su estrategia."
          }
        </p>
        <p className="mt-2">
          Para el punto 3. Sí, ambos equilibrios son eficientes en el sentido de
          Pareto, ya que no hay forma de mejorar la situación de un jugador sin
          empeorar la del otro.
        </p>
      </section>
    </MathJax>
  );
}

export default Ejercicio7;
