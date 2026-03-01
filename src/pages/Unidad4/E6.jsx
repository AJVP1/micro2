import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio6() {
  return (
    <ExerciseLayout number={6}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Considere el juego de Cournot jugado por dos firmas que eligen
        simultáneamente cantidades $q_i$ y con función de pagos:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ \pi_i(q_i, q_j) = P(Q) q_i - c q_i $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Donde</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">$$ P(Q) = 1 - Q $$</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ Q = q_1 + q_2 $$
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Compute la función mejor respuesta para la firma $i$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre el equilibrio de Nash del juego para el caso en que:
          $c_1=\frac{1}
          {2}, c_2 = \frac{1}
          {3}$
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Ahora considere el juego extendido con dos periodos. En el primer
          periodo, el jugador $1$ elige si gasta un monto $K$ fijo para acceder
          a una tecnología que reduce su costo marginal a $\frac{1}
          {3}$. En el segundo periodo las dos firmas juegan el juego de Cournot
          donde el costo de la firma $1$ es $\frac{1}
          {2}$ o $\frac{1}
          {3}$ dependiendo de la decisión de la etapa previa. El costo de la
          firma $2$ es siempre $\frac{1}
          {3}$.
        </li>
        <ol>
          <li className="mt-2 text-sm sm:text-base md:text-lg">
            Defina un equilibrio subjuego perfecto para esta interacción
            estratégica.
          </li>
          <li className="mt-2 text-sm sm:text-base md:text-lg">
            Encuentre el equilibrio subjuego perfecto para distintos valores de
            $K$.
          </li>
          <li className="mt-2 text-sm sm:text-base md:text-lg">
            Explique la siguiente frase: “En este juego el efecto estratégico
            estimula la inversión”.
          </li>
        </ol>
      </ol>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Maximizando la función de pagos para la firma $i$:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ \\max_{q_i} \\; q_i (1 - q_i - q_j) - c_i q_i $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Condiciones de primer orden:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 1 - 2q_i - q_j - c_i = 0 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        De donde se obtiene la función mejor respuesta de la firma $i$:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_i = \\frac{1 - c_i - q_j}{2} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Reemplazando los costos en las funciones mejor respuesta, se obtiene:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ q_1 = \\frac{1 - \\frac{1}{2} - q_2}{2} = \\frac{\\frac{1}{2} - q_2}{2} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ q_2 = \\frac{1 - \\frac{1}{3} - q_1}{2} = \\frac{\\frac{2}{3} - q_1}{2} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Reemplazando la función mejor respuesta de la firma $2$ en la función
        mejor respuesta de la firma $1$, se obtiene:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_1 = \\frac{\\frac{1}{2} - \\frac{\\frac{2}{3} - q_1}{2}}{2} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_1^* = \\frac{1}{9} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Reemplazando el valor de $q_1^*$ en la función mejor respuesta de la
        firma $2$, se obtiene:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_2 = \\frac{\\frac{2}{3} - \\frac{1}{9}}{2} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_2^* = \\frac{5}{18} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El precio de mercado es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ p = 1 - q_1^* - q_2^* = 1 - \\frac{1}{9} - \\frac{5}{18} = \\frac{11}{18} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El beneficio para la firma $1$ es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ \\pi_1 = q_1^*(p  - c_1) = \\frac{1}{9}  (\\frac{11}{18} - \\frac{1}{2}) = \\frac{1}{9}  \\frac{2}{18} = \\frac{2}{162} = \\frac{1}{81} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 3.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Haciendo inducción hacia atrás, el último en elegir sería el jugador
        $2$, y este tendrá la siguiente función de reacción
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_2 = \\frac{1 - c_2 - q_1}{2}$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_2 = \\frac{1 - \\frac{1}{3} - q_1}{2}$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_2 = \\frac{\\frac{2}{3} - q_1}{2}$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El jugador $1$ anticipando la función de reacción del jugador $2$, va a
        elegir su cantidad para maximizar su beneficio:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ \\max_{q_1} \\; q_1 (1 - q_1 - \\frac{\\frac{2}{3} - q_1}{2}) - c_1 q_1 - K $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ \\max_{q_1} \\; q_1 (\\frac{2}{3} - \\frac{q_1}{2} ) - \\frac{q_1}{3} - K $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Condiciones de primer orden:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ \\frac{2}{3} - q_1 - \\frac{1}{3} = 0 $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_1^* = \\frac{1}{3} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Reemplazando el valor de $q_1^*$ en la función de reacción del jugador
        $2$, se obtiene:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_2^* = \\frac{\\frac{2}{3} - \\frac{1}{3}}{2} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_2^* = \\frac{1}{6} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El precio de mercado es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ p = 1 - q_1^* - q_2^* = 1 - \\frac{1}{3} - \\frac{1}{6} = \\frac{1}{2} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El beneficio para la firma $1$ es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ \\pi_1 = q_1^*(p  - c_1) - K = \\frac{1}{3}  (\\frac{1}{2} - \\frac{1}{3}) - K = \\frac{1}{18} - K $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La firma $1$ va a invertir en la tecnología si el beneficio de hacerlo
        es mayor que el beneficio de no hacerlo, es decir, si
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ \\frac{1}{18} - K > \\frac{1}{81} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ K < \\frac{5}{162} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por lo tanto, el efecto estratégico estimula la inversión, ya que el
        jugador $1$ va a invertir en la tecnología siempre que el costo de
        hacerlo sea menor que el beneficio adicional que obtiene al ser el líder
        en el juego de Cournot.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio6;
