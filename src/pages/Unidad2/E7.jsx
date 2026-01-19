import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio7() {
  return (
    <ExerciseLayout number={7}>
      <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
      <p className="mt-2">
        La batalla de los sexos. Los dos integrantes de un matrimonio tienen
        que elegir una actividad para el fin de semana. Las actividades
        disponibles son ir al cine o ir al teatro. La mujer prefiere el
        teatro, mientras que el hombre prefiere el cine. Para ambos es mejor
        ir juntos que separados, aunque sea para realizar la actividad que
        prefiere el conyugue.
      </p>
      <ol className="list-decimal text-lg mt-4 pl-8">
        <li className="mt-2">
          Formule la situación como un juego estratégico.
        </li>
        <li className="mt-2">
          Muestre que hay dos equilibrios de Nash en estrategias puras
        </li>
        <li className="mt-2">
          ¿Son los equilibrios hallados en b. eficientes en el sentido de
          Pareto?
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mt-4">Solución</h3>
      <p className="mt-2">
        Para el punto 1. La matriz de pagos es la siguiente:
      </p>
      <GameTable
        player1Strategies={["A", "B"]}
        player2Strategies={["A", "B"]}
        payoffs={[
          ["($3;1$)", "($0;0$)"],
          ["($0;0$)", "($1;3$)"],
        ]}
      />
      <p>
        Para el punto 2. Seleccionamos las mejores respuestas para ambos
        jugadores.
      </p>
      <GameTable
        player1Strategies={["A", "B"]}
        player2Strategies={["A", "B"]}
        payoffs={[
          ["($\\textcolor{red}{3};\\textcolor{red}{1}$)", "($0;0$)"],
          ["($0;0$)", "($\\textcolor{red}{1};\\textcolor{red}{3}$)"],
        ]}
      />
      <p>
        {
          "hay dos equilibrios de Nash en estrategias puras: $EN=\\{(A; A), (B; B)\\}$. En ambos casos, ningún jugador puede mejorar su pago cambiando unilateralmente su estrategia."
        }
      </p>
      <p className="mt-2">
        Para el punto 3. Sí, ambos equilibrios son eficientes en el sentido de
        Pareto, ya que no hay forma de mejorar la situación de un jugador sin
        empeorar la del otro.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio7;
