import { MathJax } from "better-react-mathjax";

function Ejercicio6() {
  return (
    <MathJax>
      <section className="bg-[#fafafa] mx-auto p-6">
        <h2 className="text-4xl text-center text-[#1d2554] mt-6">
          Ejercicio 6
        </h2>
        <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
        <p className="mt-2">
          Dos firmas rivales están por lanzar un producto similar. Si ambas
          lanzan el producto al mismo tiempo, cada una obtendrá ganancias por
          40.000. Si solo una firma lo lanza, podrá ejercer su poder de mercado
          y obtener 100.000, mientras que la otra obtiene 0. Si ninguna lo
          lanza, ambas pierden 50.000 (por los costos en desarrollo del
          producto).
        </p>
        <ol className="list-decimal list-inside mt-2">
          <li className="pl-4">Represente este juego en forma extensiva.</li>
          <li className="pl-4">Represente este juego en forma normal.</li>
          <li className="pl-4">
            ¿Se puede resolver por el criterio de dominancia?
          </li>
          <li className="pl-4">Encuentre todos los equilibrios de Nash.</li>
        </ol>

        <h3 className="text-2xl font-semibold mt-4">Solución</h3>
        <p className="mt-2">Para el punto 1.</p>

        <p className="mt-2">Para el punto 2.</p>
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
            <td class="border border-black p-3">($40.000;40.000$)</td>
            <td class="border border-black p-3">($100.000;0$)</td>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">($0;100.000$)</td>
            <td class="border border-black p-3">($-50.000;-50.000$)</td>
          </tr>
        </table>
        <p>Para el punto 3.</p>
        <p className="mt-2">
          Podemos ver que la estrategia $A$ domina a la estrategia $B$ para
          ambos jugadores. Por lo tanto, podemos eliminar la estrategia $B$ para
          ambos jugadores dejando el juego reducido solo a las estrategias $A$.
          Por lo que sí se puede resolver por el criterio de dominancia.
        </p>
        <p className="mt-2">Para el punto 4.</p>
        <p className="mt-2">
          Marcando las mejores respuestas para los jugadores:
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
              {"($\\textcolor{red}{40.000};\\textcolor{red}{40.000}$)"}
            </td>
            <td class="border border-black p-3">
              {"($\\textcolor{red}{100.000};0$)"}
            </td>
          </tr>

          <tr>
            <th class="border border-black p-3">B</th>
            <td class="border border-black p-3">
              {"($0;\\textcolor{red}{100.000}$)"}
            </td>
            <td class="border border-black p-3">{"($-50.000;-50.000$)"}</td>
          </tr>
        </table>
        <p>
          Podemos ver que el único equilibrio de Nash es cuando ambos jugadores
          eligen la estrategia $A$, ya que no tienen incentivos para desviarse
          unilateralmente.
        </p>
      </section>
    </MathJax>
  );
}

export default Ejercicio6;
