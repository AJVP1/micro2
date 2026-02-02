import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio11() {
  return (
    <ExerciseLayout number={11}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Un individuo puede elegir entre $2$ acciones. La acción $A$, que tiene
        un valor de $140$ en alza y $10$ en baja, o la B, que vale $50$ y $30$.
        La probabilidad de que suba es igual a $0,5$. Si su función de utilidad
        es $u(x) = \ln (x)$:
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Cuál elige en caso de que solo pudiera elegir una acción?
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Si pudiese elegir mitad de cada uno, lo haría?
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

export default Ejercicio11;
