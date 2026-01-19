import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio9() {
  return (
    <ExerciseLayout number={9}>
      <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
      <p className="mt-2">
        Conducta egoísta y altruista. Dos personas se suben a un colectivo.
        Hay dos lugares adyacentes varios. Cada persona debe decidir si
        sentarse o quedarse parada. Sentarse solo es más confortable que
        sentarse junto a otra persona, aunque esto último es más confortable
        que quedarse parado.
      </p>
      <ol className="list-decimal text-lg mt-4 pl-8">
        <li className="mt-2">
          Suponga que cada persona solo le importa su propio confort. Modele
          esta situación como un juego estratégico. ¿Este juego es equivalente
          al dilema del prisionero? Encuentre los equilibrios de Nash
        </li>
        <li className="mt-2">
          Suponga ahora que cada persona es altruista y ordena los resultados
          de acuerdo al confort de la otra persona. Además, por educación,
          prefiere quedarse parada que sentarse si la otra persona se queda
          parada. Modele esta situación como un juego estratégico. ¿Este juego
          es equivalente al "dilema del prisionero"? Encuentre los equilibrios
          de Nash.
        </li>
        <li className="mt-2">
          Compare el confort de la gente en ambos casos.
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mt-4">Solución</h3>
      <p className="mt-2">
        Para el punto 1. Contruyamos la matriz de pagos, el anunciado nos
        indica que lo mejor es estar sentado solo, luego sentado junto a otro
        y por último parado. Por lo tanto, la matriz de pagos es:
      </p>
      <GameTable
        player1Strategies={["S", "No S"]}
        player2Strategies={["S", "No S"]}
        payoffs={[
          ["($1;1$)", "($2;0$)"],
          ["($0;0$)", "($1;1$)"],
        ]}
      />
      <p>
        En el caso en que ambos se sienten supondremos un pago de 1 para cada
        uno. En el caso en que uno se siente y otro no supondremos un pago de
        2 para el que se sienta y 0 para el que no se sienta. Y por ultimo, en
        el caso en que ambos se queden parados supondremos un pago de 0 para
        cada uno.
      </p>
      <p className="mt-2">
        Colocando las mejores respuestas para ambos jugadores:
      </p>
      <GameTable
        player1Strategies={["S", "No S"]}
        player2Strategies={["S", "No S"]}
        payoffs={[
          [
            "($\\textcolor{red}{1};\\textcolor{red}{1}$)",
            "($\\textcolor{red}{2};0$)",
          ],
          ["($0;\\textcolor{red}{2}$)", "($0;0$)"],
        ]}
      />
      <p className="mt-2">
        Este caso no es parecido al dilema del prisionero, dado que este
        equilibrio es eficiente en el sentido de Pareto, es decir, no hay otra
        combinación de estrategias que mejore el pago de un jugador sin
        empeorar el pago del otro.
      </p>
      <p className="mt-2">
        Para el punto 2. Ahora modificaremos los pagos de la matriz tal que
        sentarse acompañado es mejor que sentarse solo, quedarse parados es
        mejor que sentarse, y sentarse solo es lo peor. Por lo que la matriz
        queda:
      </p>
      <GameTable
        player1Strategies={["S", "No S"]}
        player2Strategies={["S", "No S"]}
        payoffs={[
          ["($\\textcolor{red}{2};\\textcolor{red}{2}$)", "($0;0$)"],
          ["($0;0$)", "($\\textcolor{red}{1};\\textcolor{red}{1}$)"],
        ]}
      />
      <p>
        No es equivalente al dilema del prisionero ya que en este caso hay dos
        equilibrios de Nash. Siendo estos ($S, S$) y ($No S, No S$).
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio9;
