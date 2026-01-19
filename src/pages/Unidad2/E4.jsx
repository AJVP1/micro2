import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
      <p className="mt-2">
        Dada la siguiente familia parametrizada de juegos estratégicos de 2
        jugadores:
      </p>
      <GameTable
        player1Strategies={["A", "B", "C"]}
        player2Strategies={["D", "E"]}
        payoffs={[
          ["($a;b$)", "($c;2$)"],
          ["($1;1$)", "($1;0$)"],
          ["($3;2$)", "($0;1$)"],
        ]}
      />
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
      <GameTable
        player1Strategies={["A", "B", "C"]}
        player2Strategies={["D"]}
        payoffs={[["($a;b$)"], ["($1;1$)"], ["($3;2$)"]]}
      />
      <p className="mt-2">
        {
          "Ahora para el jugador 1, $a > 3$ para poder eliminar las otras dos estrategias. Quedando el juego:"
        }
      </p>
      <GameTable
        player1Strategies={["A"]}
        player2Strategies={["D"]}
        payoffs={[["($a;b$)"]]}
      />
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
    </ExerciseLayout>
  );
}

export default Ejercicio4;
