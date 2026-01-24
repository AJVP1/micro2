import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio7() {
  return (
    <ExerciseLayout number={7}>
      <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
      <p className="mt-2">
        Paul y John son dos habitantes de la ciudad de Buenos Aires. Ambos
        tienen la misma función de utilidad, $u(x) = \ln (x)$. La probabilidad
        de tener un accidente de transito en dicha ciudad es de $0,3$. El
        Bentley de Paul vale $10.000$ pero si tiene un accidente, su valor se
        reduce a $2.000$. Por otro lado, el Aston Martin de John vale $20.000$
        pero si tiene un accidente, su valor es de $5.000$. Cansado de sentirse
        estafados por las compañías de seguro, planean colaborar entre ellos. En
        el caso de que solo uno de ellos tenga un accidente, dividirán la
        riqueza de ambos en partes iguales. ¿Se llevará a cabo este plan?
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

export default Ejercicio7;
