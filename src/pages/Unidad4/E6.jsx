import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
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
        La esperanza del pago es:
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
