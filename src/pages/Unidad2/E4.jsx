import { MathJax } from "better-react-mathjax";

function Ejercicio4() {
  return (
    <MathJax>
      <section className="bg-[#fafafa] mx-auto p-6">
        <h2 className="text-4xl text-center text-[#1d2554] mt-6">
          Ejercicio 4
        </h2>
        <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
        <p className="mt-2">
          Dada la siguiente familia parametrizada de juegos estratégicos de 2
          jugadores:
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
            <th className="border border-black p-3" rowSpan="4">
              <div className="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th className="border border-black p-3">Estrategias</th>
            <th className="border border-black p-3">D</th>
            <th className="border border-black p-3">E</th>
          </tr>


          <tr>
            <th className="border border-black p-3">A</th>
            <td className="border border-black p-3">($a;b$)</td>
            <td className="border border-black p-3">($c;2$)</td>
          </tr>


          <tr>
            <th className="border border-black p-3">B</th>
            <td className="border border-black p-3">($1;1$)</td>
            <td className="border border-black p-3">($1;0$)</td>
          </tr>


          <tr>
            <th className="border border-black p-3">C</th>
            <td className="border border-black p-3">($3;2$)</td>
            <td className="border border-black p-3">($0;1$)</td>
          </tr>

          
          </tbody>
        </table>
        <p>Indique para que valores de $a, b, c$:</p>
        <ol className="list-decimal list-inside mt-2">
          <li>$A$ es una estrategia estrictamente dominada.</li>
          <li>$E$ no es una estrategia estrictamente dominada.</li>
          <li>
            ($A, D$) es un equilibrio es estrategias estrictamente dominantes.
          </li>
          <li>($A, D$) es un equilibrio de Nash.</li>
        </ol>

        <h3 className="text-2xl font-semibold mt-4">Solución</h3>
        <p className="mt-2">Para el punto 1.</p>
        <p className="mt-2">
          {
            "Para que $A$ sea una estrategia estrictamente dominada por $B$, debe cumplirse que $a < 1$ y $c < 1$. Mientras que para que $A$ sea una estrategia estrictamente dominada por $C$, debe cumplirse que $a < 3$ y $c < 0$. Por lo tanto, para que $A$ sea una estrategia estrictamente dominada por cualquier otra estrategia, debe cumplirse que $a < 1$ y $c < 0$."
          }
        </p>
        <p className="mt-2">Para el punto 2.</p>
        <p className="mt-2">
          Para que $E$ no sea una estrategia estrictamente dominada, debe
          cumplirse que $b \le 2$.
        </p>
        <p className="mt-2">Para el punto 3.</p>
        <p className="mt-2">
          Para que ($A, D$) sea un equilibrio es estrategias estrictamente
          dominantes podemos comenzar analizando las condiciones para que $A$ y
          $D$ sean estrategias estrictamente dominantes para los jugadores 1 y 2
          respectivamente.
        </p>
        <p className="mt-2">
          {
            "Para el jugador 2 tenemos que eliminar la estrategia $E$, por lo tanto $b > 2$, quedando el juego:"
          }
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <thead><tr>
            <th className="border border-black p-3"></th>
            <th className="border border-black p-3" colSpan="2">
              J2
            </th>
          </tr>
          </thead>
          <tbody><tr>
            <th className="border border-black p-3" rowSpan="4">
              <div className="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th className="border border-black p-3">Estrategias</th>
            <th className="border border-black p-3">D</th>
          </tr>


          <tr>
            <th className="border border-black p-3">A</th>
            <td className="border border-black p-3">($a;b$)</td>
          </tr>


          <tr>
            <th className="border border-black p-3">B</th>
            <td className="border border-black p-3">($1;1$)</td>
          </tr>


          <tr>
            <th className="border border-black p-3">C</th>
            <td className="border border-black p-3">($3;2$)</td>
          </tr>

          
          </tbody>
        </table>
        <p className="mt-2">
          {
            "Ahora para el jugador 1, $a > 3$ para poder eliminar las otras dos estrategias. Quedando el juego:"
          }
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <thead><tr>
            <th className="border border-black p-3"></th>
            <th className="border border-black p-3" colSpan="2">
              J2
            </th>
          </tr>
          </thead>
          <tbody><tr>
            <th className="border border-black p-3" rowSpan="2">
              <div className="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th className="border border-black p-3">Estrategias</th>
            <th className="border border-black p-3">D</th>
          </tr>


          <tr>
            <th className="border border-black p-3">A</th>
            <td className="border border-black p-3">($a;b$)</td>
          </tr>

          
          </tbody>
        </table>
        <p className="mt-2">
          {
            "Por lo tanto, para que ($A, D$) sea un equilibrio en estrategias estrictamente dominantes, debe cumplirse que $a > 3$ y $b > 2$."
          }
        </p>
        <p className="mt-2">Para el punto 4.</p>
        <p className="mt-2">
          Se tiene que cumplir que $a \ge 3$ y $b \ge 2$. Así ningun jugador
          tiene incentivos al desvio.
        </p>
      </section>
    </MathJax>
  );
}

export default Ejercicio4;
