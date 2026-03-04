import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio17() {
  return (
    <ExerciseLayout number={17}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En el campeonato mundial de piedra papel y tijera desarrollado en EE. UU
        el mes pasado, los jugadores debían pagar US$ 100 por cada juego que
        jugaban. El ganador de ese juego se llevaba el pozo y el perdedor, nada.
        Encuentre todos los equilibrios de Nash en ese juego.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Colocando el juego en forma matricial y eligiendo las mejores respuestas
      </p>
      <GameTable
        player1Strategies={["Piedra", "Papel", "Tijera"]}
        player2Strategies={["Piedra", "Papel", "Tijera"]}
        payoffs={[
          [
            "($0;0$)",
            "($-100;\\textcolor{red}{100}$)",
            "($\\textcolor{red}{100};-100$)",
          ],
          [
            "($\\textcolor{red}{100};-100$)",
            "($0;0$)",
            "($-100;\\textcolor{red}{100}$)",
          ],
          [
            "($-100;\\textcolor{red}{100}$)",
            "($\\textcolor{red}{100};-100$)",
            "($0;0$)",
          ],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        No hay equilibrio de Nash en estrategias puras. Tenemos que averiguar si
        hay equilibrio en estrategias mixtas. Para esto, igualamos los pagos
        esperados de cada jugador. Para el jugador 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_1(Piedra; q_1)] = E[u_1(Papel; q_2)] = E[u_1(Tijera; q_3)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 0(q_1) + 100(q_2) + (-100)(q_3) = (-100)(q_1) + 0(q_2) + 100(q_3) =
        100(q_1) + (-100)(q_2) + 0(q_3) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 100q_2 - 100q_3 = -100q_1 + 100q_3 = 100q_1 - 100q_2 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        De la primera igualdad:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 100q_2 - 100q_3 = -100q_1 + 100q_3 \implies q_1 = 2q_3 - q_2 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        De la segunda igualdad:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ -100q_1 + 100q_3 = 100q_1 - 100q_2 \\implies q_1 = \\frac{ q_2 + q_3 }{2} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Igualando las dos expresiones para $q_1$:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 4q_3 - 2q_2 = q_2 + q_3 \implies q_3 = q_2 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Reemplazando en la expresión para $q_1$:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ q_1 = 2q_3 - q_2 \implies q_1 = q_2$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Reemplazando en la condición de que las probabilidades suman 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ q_1 + q_2 + q_3 = 1 \implies 3q_1 = 1 \implies q_1 = \frac{1}
        {3} = q_2 = q_3$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el jugador 2:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_2(p_1; Piedra)] = E[u_2(p_2; Papel)] = E[u_2(p_3; Tijera)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 0(p_1) + 100(p_2) + (-100)(p_3) = (-100)(p_1) + 0(p_2) + 100(q_3) =
        100(p_1) + (-100)(p_2) + 0(q_3) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 100p_2 - 100p_3 = -100p_1 + 100p_3 = 100p_1 - 100p_2 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        De la primera igualdad:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 100p_2 - 100p_3 = -100p_1 + 100p_3 \implies p_1 = 2p_3 - p_2 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        De la segunda igualdad:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ -100p_1 + 100p_3 = 100p_1 - 100p_2 \\implies p_1 = \\frac{ p_2 + p_3 }{2} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Igualando las dos expresiones para $p_1$:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 4p_3 - 2p_2 = p_2 + p_3 \implies p_3 = p_2 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Reemplazando en la expresión para $p_1$:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ p_1 = 2p_3 - p_2 \implies p_1 = p_2$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Reemplazando en la condición de que las probabilidades suman 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ p_1 + p_2 + p_3 = 1 \implies 3p_1 = 1 \implies p_1 = \frac{1}
        {3} = p_2 = p_3$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El equilibrio de Nash en estrategias mixtas es: $ \\{ (\\frac{1}{3}, \\frac{1}{3}, \\frac{1}{3}), (\\frac{1}{3}, \\frac{1}{3}, \\frac{1}{3}) \\}$."
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio17;
