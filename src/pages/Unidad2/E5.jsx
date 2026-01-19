import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio5() {
  return (
    <ExerciseLayout number={5}>
      <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
      <p className="mt-2">
        Considere un juego del tipo "dilema del prisionero" con los siguientes
        pagos:
      </p>
      <GameTable
        player1Strategies={["A", "B"]}
        player2Strategies={["A", "B"]}
        payoffs={[
          ["($1;1$)", "($10;0$)"],
          ["($0;10$)", "($5;5$)"],
        ]}
      />
      <ol className="list-decimal list-inside mt-2">
        <li>
          Encuentre todos los perfiles formados por estrategias puras que
          sobreviven al proceso de eliminación de estrategias estrictamente
          dominadas.
        </li>
        <li>
          Encuentre el único equilibrio de Nash. ¿Es óptimo en el sentido de
          Pareto?
        </li>
      </ol>
      <h3 className="text-2xl font-semibold mt-4">Solución</h3>
      <p className="mt-2">Para el punto 1.</p>
      <p>
        Podemos eliminar la estrategia $B$ para el jugador 1 ya que esta es
        estrictamente dominada por la estrategia $A$. Quedando el juego:
      </p>
      <GameTable
        player1Strategies={["A"]}
        player2Strategies={["A", "B"]}
        payoffs={[["($1;1$)", "($10;0$)"]]}
      />
      <p className="mt-2">
        Ahora podemos eliminar la estrategia $B$ para el jugador 2 ya que esta
        es estrictamente dominada por la estrategia $A$. Quedando el juego:
      </p>
      <GameTable
        player1Strategies={["A"]}
        player2Strategies={["A"]}
        payoffs={[["($1;1$)"]]}
      />
      <p className="mt-2">El perfil que sobrevive es ($A, A$).</p>
      <p className="mt-2">Para el punto 2.</p>
      <p className="mt-2">
        Seleccionando las mejores repuestas para ambos jugadores:
      </p>
      <GameTable
        player1Strategies={["A", "B"]}
        player2Strategies={["A", "B"]}
        payoffs={[
          [
            "($\\textcolor{red}{1};\\textcolor{red}{1}$)",
            "($\\textcolor{red}{10};0$)",
          ],
          ["($0;\\textcolor{red}{10}$)", "($5;5$)"],
        ]}
      />
      <p className="mt-2">
        El equilibrio de Nash es ($A; A$), y este no es optimo en el sentido
        de Pareto dado que los jugadores podrían cooperar y estar mejor los
        dos sin empeorar la situación del otro.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
