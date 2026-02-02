import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "Juan tiene una acción de una compañía que se liquida a fin de año y $10$ pesos en su bolsillo. Al liquidarse, Juan obtiene un monto $k$ o $q$, dependiendo de lo que ocurra en el proceso de liquidación, con probabilidades $(1 - p)$ y $p$, respectivamente, donde $k > q$. La empresa en cuestión cotiza en bolsa y Juan tiene la siguiente posibilidad: el Banco Subsay le permite asegurarse pagando un monto fijo $s$ hoy (una prima). En caso de no obtener $k$, el banco lo compensa dándole $f = k - q$."
        }
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "Suponga que Juan tiene preferencias sobre loterías que están representadas por una función de Bernoulli $u(x) = \\sqrt{x}$. ¿Cuál es el máximo valor para la variable $s$ tal que Juan acepte el contrato a futuro que ofrece el Banco Subsay?"
          }
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "Responda el punto anterior pero ahora suponga que las preferencias de Juan se representan con la función de Bernoulli $u(x) = 2 + 3\\sqrt{x}$."
          }
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Sí, porque tiene jugadores (el jugador 1 y el jugador 2), tiene
        estrategias (cara o ceca), y tiene pagos ($1$ y $0$). De forma matricial
        quedaría:
      </p>
      <GameTable
        player1Strategies={["Cara", "Ceca"]}
        player2Strategies={["Acertó", "No Acertó"]}
        payoffs={[
          ["($1;-1$)", "($0;0$)"],
          ["($1;-1$)", "($0;0$)"],
        ]}
      />
    </ExerciseLayout>
  );
}

export default Ejercicio3;
