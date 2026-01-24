import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio9() {
  return (
    <ExerciseLayout number={9}>
      <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
      <p className="mt-2">
        Charly, cuya $u(x) = 2x$, se encuentra un billete de lotería. Con una
        probabilidad de $0,1$ dicho billete le dará $50$, caso contrario, $10$.
        ¿Cuánto deberíamos pagarle a Charly para que este dispuesto a darnos el
        billete?
      </p>

      <h3 className="text-2xl font-semibold mt-4">Solución</h3>
      <p className="mt-2">
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

export default Ejercicio9;
