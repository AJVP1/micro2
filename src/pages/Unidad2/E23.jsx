import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio23() {
  return (
    <ExerciseLayout number={23}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Dada la siguiente matriz de pagos:
      </p>
      <GameTable
        player1Strategies={["U", "D", "L", "R"]}
        player2Strategies={["U", "D", "L", "R"]}
        payoffs={[
          ["($0;15$)", "($3;3$)", "($0;-1$)", "($0;5$)"],
          ["($0;6$)", "($5;4$)", "($-5;3$)", "($0;-2$)"],
          ["($2;0$)", "($10;-5$)", "($4;2$)", "($1;1$)"],
          ["($1;0$)", "($-1;3$)", "($1;1$)", "($2;4$)"],
        ]}
      />

      <ol className="list-decimal text-lg mt-4 pl-8">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Compute las estrategias estrictamente dominadas y dominantes que
          tienen el jugador $1$ y el jugador $2$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre el/los equilibrios de Nash de este juego.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Utilice las estrategias que sobreviven a la eliminación iterativa de
          estrategias estrictamente dominadas para encontrar el equilibrio de
          Nash en estrategias mixtas. ¿Qué condición tiene que darse para que
          $(L; L)$ sea un equilibrio?
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el jugador $1$, $L$ domina estrictamente a $U$ y $D$. Para el
        jugador $2$, no hay estrategias estrictamente dominadas.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <GameTable
        player1Strategies={["U", "D", "L", "R"]}
        player2Strategies={["U", "D", "L", "R"]}
        payoffs={[
          ["($0;\\textcolor{red}{15}$)", "($3;3$)", "($0;-1$)", "($0;5$)"],
          ["($0;\\textcolor{red}{6}$)", "($5;4$)", "($-5;3$)", "($0;-2$)"],
          [
            "($\\textcolor{red}{2};0$)",
            "($\\textcolor{red}{10};-5$)",
            "($\\textcolor{red}{4};\\textcolor{red}{2}$)",
            "($1;1$)",
          ],
          [
            "($1;0$)",
            "($-1;3$)",
            "($1;1$)",
            "($\\textcolor{red}{2};\\textcolor{red}{4}$)",
          ],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El equilibrio de Nash en estrategias mixtas es: $ \\{ (L, L), (R, R) \\}$."
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 3.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Se pueden eliminar las primeras dos filas (serían las opciones $U$ y $D$
        para el jugador 1) dado que son dominadas por $L$.
      </p>
      <GameTable
        player1Strategies={["L", "R"]}
        player2Strategies={["U", "D", "L", "R"]}
        payoffs={[
          ["($2;0$)", "($10;-5$)", "($4;2$)", "($1;1$)"],
          ["($1;0$)", "($-1;3$)", "($1;1$)", "($2;4$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora se puede eliminar la primera columna y la segunda (seria la opción
        U y D para el segundo jugador) dado que son dominadas por R.
      </p>
      <GameTable
        player1Strategies={["L", "R"]}
        player2Strategies={["L", "R"]}
        payoffs={[
          ["($4;2$)", "($1;1$)"],
          ["($1;1$)", "($2;4$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ya no hay más estrategias estrictamente dominadas, por lo que pasamos a
        igualar los pagos esperados de cada jugador. Para el jugador 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_1(L; q)] = E[u_1(R; q)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 4(q) + 1(1-q) = 1(q) + 2(1-q) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 3q + 1 = 2 - q $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ q = \frac{1}
        {4} $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el jugador 2:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_2(p; L)] = E[u_2(p; R)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 2(p) + 1(1-p) = 1(p) + 4(1-p) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ p + 1 = 4 - 3p $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ p = \frac{3}
        {4} $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El equilibrio de Nash en estrategias mixtas es: $ \\{ (\\frac{3}{4}, \\frac{1}{4}), (\\frac{1}{4}, \\frac{3}{4}) \\}$."
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para que $(L; L)$ sea equilibrio se necesita que $p &ge; \frac{3}
        {4}$ y $q &ge; \frac{1}
        {4}$.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio23;
