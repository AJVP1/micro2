import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio28() {
  return (
    <ExerciseLayout number={28}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Considere un juego de movida simultanea con $2$ jugadores. Cada jugador
        elige entre dos estrategias: $A$ o $B$. Si todos los jugadores eligen
        $A$, el pago de cada jugador es $0$. Si al menos un jugador elige $B$,
        el pago de un jugador que elige $A$ es $1$ y el de uno que elige $B$ es
        $1/2$.
      </p>
      <GameTable
        player1Strategies={["A", "B", "C", "D"]}
        player2Strategies={["A", "B", "C", "D"]}
        payoffs={[
          ["($5;2$)", "($2;6$)", "($1;4$)", "($0;4$)"],
          ["($0;0$)", "($3;2$)", "($2;1$)", "($1;1$)"],
          ["($7;0$)", "($2;2$)", "($1;5$)", "($5;1$)"],
          ["($9;5$)", "($1;3$)", "($0;2$)", "($4;8$)"],
        ]}
      />

      <ol className="list-decimal text-lg mt-4 pl-8">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre el equilibrio simétrico en estrategias mixtas.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Obtenga una expresión para el pago esperado por cada jugador en el
          caso en que todos los jugadores eligen $B$ con igual probabilidad
          $(p)$. Resuelva el problema de maximizar esta función eligiendo el
          valor de $p$. Compare la solución con lo encontrado en $a$.
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1:</p>
    </ExerciseLayout>
  );
}

export default Ejercicio28;
