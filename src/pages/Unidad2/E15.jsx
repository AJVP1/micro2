import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio15() {
  return (
    <ExerciseLayout number={15}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Halle todos los equilibrios de Nash (en estrategias puras y mixtas) para
        los siguientes juegos simultáneos de dos jugadores:
      </p>

      <p className="mt-2 text-sm sm:text-base md:text-lg">a.</p>
      <GameTable
        player1Strategies={["T", "B"]}
        player2Strategies={["I", "D"]}
        payoffs={[
          ["($2;1$)", "($0;2$)"],
          ["($1;2$)", "($3;0$)"],
        ]}
      />

      <p className="mt-2 text-sm sm:text-base md:text-lg">b.</p>
      <GameTable
        player1Strategies={["U", "B", "J"]}
        player2Strategies={["I", "D", "H"]}
        payoffs={[
          ["($2;0$)", "($1;1$)", "($4;2$)"],
          ["($3;4$)", "($1;2$)", "($2;3$)"],
          ["($1;3$)", "($0;2$)", "($3;0$)"],
        ]}
      />

      <p className="mt-2 text-sm sm:text-base md:text-lg">c.</p>
      <GameTable
        player1Strategies={["U", "D"]}
        player2Strategies={["I", "D"]}
        payoffs={[
          ["($2;1$)", "($0;0$)"],
          ["($0;0$)", "($1;2$)"],
        ]}
      />

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto a.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Eligiendo las mejores respuestas:
      </p>
      <GameTable
        player1Strategies={["T", "B"]}
        player2Strategies={["I", "D"]}
        payoffs={[
          ["($\\textcolor{red}{2};1$)", "($0;\\textcolor{red}{2}$)"],
          ["($1;\\textcolor{red}{2}$)", "($\\textcolor{red}{3};0$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        No hay equilibrio en estrategias puras, debemos averiguar en estrategias
        mixtas. Para esto, igualamos los pagos esperados de cada jugador. Para
        el jugador 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_1(T; q)] = E[u_1(B; q)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 2(q) + 0(1-q) = 1(q) + 3(1-q) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 2(q) = -2(q) + 3 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$q=\frac{3}
        {4}$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el jugador 2:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_2(p; I)] = E[u_2(p; D)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 1(p) + 2(1-p) = 2(p) + 0(1-p) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ -p + 2 = 2(p) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$p=\frac{2}
        {3}$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El equilibrio de Nash en estrategias mixtas es: $ \\{ (\\frac{2}{3}, \\frac{1}{3}), (\\frac{3}{4}, \\frac{1}{4}) \\}$."
        }
      </p>

      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto b.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Eligiendo las mejores respuestas:
      </p>
      <GameTable
        player1Strategies={["U", "B", "J"]}
        player2Strategies={["I", "D", "H"]}
        payoffs={[
          [
            "($2;0$)",
            "($\\textcolor{red}{1};1$)",
            "($\\textcolor{red}{4};\\textcolor{red}{2}$)",
          ],
          [
            "($\\textcolor{red}{3};\\textcolor{red}{4}$)",
            "($\\textcolor{red}{1};2$)",
            "($2;3$)",
          ],
          ["($1;\\textcolor{red}{3}$)", "($0;2$)", "($3;0$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "Los equilibrios de Nash en estrategias puras son: $\\{ (U, H), (B, I) \\}$."
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora buscamos los equilibrios de Nash en estrategias mixtas. Para esto,
        primero, intentamos reducir el juego por EED. Podemos observar que la
        $J$ del primer jugador es estrictamente dominada por $U$ por lo que la
        eliminamos. El juego reducido es el siguiente:
      </p>
      <GameTable
        player1Strategies={["U", "B"]}
        player2Strategies={["I", "D", "H"]}
        payoffs={[
          ["($2;0$)", "($1;1$)", "($4;2$)"],
          ["($3;4$)", "($1;2$)", "($2;3$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora la estrategia $D$ del jugador 2 es estrictamente dominada por la
        estrategia $I$. Por lo tanto, podemos eliminar la estrategia $D$ del
        jugador 2. Quedando la matriz de pagos como sigue:
      </p>
      <GameTable
        player1Strategies={["U", "B"]}
        player2Strategies={["I", "H"]}
        payoffs={[
          ["($2;0$)", "($4;2$)"],
          ["($3;4$)", "($2;3$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ya no hay más estrategias estrictamente dominadas, por lo que pasamos a
        igualar los pagos esperados de cada jugador. Para el jugador 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_1(U; q)] = E[u_1(B; q)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 2(q) + 4(1-q) = 3(q) + 2(1-q) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ -2q + 4 = q + 2 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ q = \frac{2}
        {3} $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el jugador 2:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_2(p; I)] = E[u_2(p; H)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 0(p) + 4(1-p) = 2(p) + 3(1-p) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ -4(p) + 4 = -p + 3 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ p = \frac{1}
        {3} $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El equilibrio de Nash en estrategias mixtas es: $ \\{ (\\frac{1}{3}, \\frac{2}{3}), (\\frac{2}{3}, \\frac{1}{3}) \\}$."
        }
      </p>

      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto c.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Eligiendo las mejores respuestas:
      </p>
      <GameTable
        player1Strategies={["U", "D"]}
        player2Strategies={["I", "D"]}
        payoffs={[
          ["($\\textcolor{red}{2};\\textcolor{red}{1}$)", "($0;0$)"],
          ["($0;0$)", "($\\textcolor{red}{1};\\textcolor{red}{2}$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "Los equilibrios de Nash en estrategias puras son: $\\{ (U, I), (D, D) \\}$."
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora buscamos los equilibrios de Nash en estrategias mixtas. Para esto,
        igualamos los pagos esperados de cada jugador. Para el jugador 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_1(U; q)] = E[u_1(D; q)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 2(q) + 0(1-q) = 0(q) + 1(1-q) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">$$ 2q = -q + 1 $$</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ q = \frac{1}
        {3} $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el jugador 2:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_2(p; I)] = E[u_2(p; D)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 1(p) + 0(1-p) = 0(p) + 2(1-p) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">$$ p = -2p + 2 $$</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ p = \frac{2}
        {3} $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El equilibrio de Nash en estrategias mixtas es: $ \\{ (\\frac{2}{3}, \\frac{1}{3}), (\\frac{1}{3}, \\frac{2}{3}) \\}$."
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio15;
