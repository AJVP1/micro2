import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio6() {
  return (
    <ExerciseLayout number={6}>
      <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
      <p className="mt-2">
        Suponga que usted tiene un riesgo de perder $L$ con probabilidad $p$ y
        que existe una compañía de seguros que ofrece un seguro actuarialmente
        justo (fair pricing), pero cuando la compañía de seguro tiene que cubrir
        la perdida, incurre en un costo de transacción de $c$ (en concepto de
        costo de la transferencia bancaria). Asuma que $u(x) = \ln (x)$.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2">
          ¿Cuál es la póliza de equilibrio? ¿Cuánto se asegura usted?
        </li>
        <li className="mt-2">
          En esta póliza de equilibrio, ¿es usted capaz de eliminar su riesgo?
        </li>
      </ol>

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

export default Ejercicio6;
