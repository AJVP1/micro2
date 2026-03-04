import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio25() {
  return (
    <ExerciseLayout number={25}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Imagine un juego donde usted es el jugador 1 y se le da la posibilidad
        de participar en un juego con el jugador $2$. La mecánica del juego es
        la siguiente: se va a lanzar una moneda al aire y se le pide que apueste
        que va a salir. Si acierta, el jugador $2$ le paga a usted $1$ de su
        bolsillo; si no acierta, usted le paga $1$ al jugador $2$. El juego
        puede representarse de la siguiente forma normal:
      </p>
      <GameTable
        player1Strategies={["Cara", "Ceca"]}
        player2Strategies={["Cara", "Ceca"]}
        payoffs={[
          ["($1;-1$)", "($-1;1$)"],
          ["($-1;1$)", "($1;-1$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Se pide hallar los equilibrios de Nash del juego.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Eligiendo las mejores respuestas:
      </p>
      <GameTable
        player1Strategies={["Cara", "Ceca"]}
        player2Strategies={["Cara", "Ceca"]}
        payoffs={[
          ["($\\textcolor{red}{1};-1$)", "($-1;\\textcolor{red}{1}$)"],
          ["($-1;\\textcolor{red}{1}$)", "($\\textcolor{red}{1};-1$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        No hay equilibrios de Nash en puras estrategias. Buscamos equilibrios en
        estrategias mixtas. Para esto igualamos los pagos esperados de cada
        jugador. Para el jugador 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_1(Cara; q)] = E[u_1(Ceca; q)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 1(q) + (-1)(1-q) = (-1)(q) + 1(1-q) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 2(q) - 1 = -2(q) + 1 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$q=\frac{1}
        {2}$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el jugador 2:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_2(p; Cara)] = E[u_2(p; Ceca)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ (-1)(p) + 1(1-p) = 1(p) + (-1)(1-p) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ -2p + 1 = 2p - 1 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$p=\frac{1}
        {2}$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El equilibrio de Nash en estrategias mixtas es: $ \\{ (\\frac{1}{2}, \\frac{1}{2}), (\\frac{1}{2}, \\frac{1}{2}) \\}$."
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio25;
