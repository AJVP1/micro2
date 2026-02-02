import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio10() {
  return (
    <ExerciseLayout number={10}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "Elección de portafolio. Los activos $A$ y $B$ cuestan $150$ cada uno. El valor que tendrán mañana depende del estado del mercado financiero. Asuma que existen solo dos estados posibles, $1$ y $2$. $A$ vale mañana $100$ o $200$ según se dé el estado $1$ o $2$, mientras que el activo $B$ vale $200$ o $100$, respectivamente. Un inversor tiene una riqueza inicial de $150$ y una función de utilidad dada por $v(c) = e^{-c}$ donde $c$ es consumo."
        }
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Formalice el problema del inversor
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Muestre que la restricción presupuestaria contingente puede ser
          expresada como $c_1 + c_2 = 300$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Si el inversor cree que el estado 1 ocurrirá con probabilidad $\pi$,
          muestre que su consumo óptimo en el estado $1$ viene dado por:
          {
            "$$c_1^* = 150 + \\frac{1}{2} \\ln \\left(\\frac{\\pi}{1-\\pi}\\right).$$"
          }
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Si $q_1$ es la cantidad de acciones que compra del activo $1$, muestre
          que $c_1 = 200 - 100q_1$. Obtenga una expresión para $q_1$ en función
          de $\pi$.
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

export default Ejercicio10;
