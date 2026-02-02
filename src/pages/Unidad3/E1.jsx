import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En una localidad bonaerense, la probabilidad de que en una temporada
        llueva es de $0,6$. Un productor de soja, cuya función de utilidad es
        $U(x) = \ln (x)$, obtiene $10.000$ por su cosecha cuando es una
        temporada de lluvias y $2.000$ cuando no lo es.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Obtenga la esperanza, la utilidad esperada y la renta equivalente
          cierta.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Si una compañía de seguros le ofrece un seguro contra sequias a una
          tasa de $0,5$ (por cada peso asegurado le paga $50$ centavos), ¿Cuál
          es el monto por el cual se asegura?
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

export default Ejercicio1;
