import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio16() {
  return (
    <ExerciseLayout number={16}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En el siguiente juego simultaneo, donde $a, b &gt; 1$:
      </p>
      <GameTable
        player1Strategies={["U", "D"]}
        player2Strategies={["I", "D"]}
        payoffs={[
          ["($2a;b$)", "($a;4b$)"],
          ["($a;3b$)", "($3a;b$)"],
        ]}
      />

      <ol className="list-decimal text-lg mt-4 pl-8">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre todos los equilibrios de Nash.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Si tuviese que apostar por un resultado del juego, ¿por cuál
          apostaría?
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Eligiendo las mejores respuestas:
      </p>
      <GameTable
        player1Strategies={["U", "D"]}
        player2Strategies={["I", "D"]}
        payoffs={[
          ["($\\textcolor{red}{2a};b$)", "($a;\\textcolor{red}{4b}$)"],
          ["($a;\\textcolor{red}{3b}$)", "($\\textcolor{red}{3a};b$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        No hay equilibrio en estrategias puras, debemos averiguar en estrategias
        mixtas. Para esto, igualamos los pagos esperados de cada jugador. Para
        el jugador 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_1(U; q)] = E[u_1(D; q)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 2a(q) + a(1-q) = a(q) + 3a(1-q) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 2aq + a - aq = aq + 3a - 3aq $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ aq + a = 3a - 2aq $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">$$ 3aq = 2a $$</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ q = \frac{2}
        {3} $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el jugador 2:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_2(I; p)] = E[u_2(D; p)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ b(p) + 3b(1-p) = 4b(p) + b(1-p) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ bp + 3b - 3bp = 4bp + b - bp $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ -2bp + 3b = 3bp + b $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">$$ -5bp = -2b $$</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ p = \frac{2}
        {5} $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El equilibrio de Nash en estrategias mixtas es: $ \\{ (\\frac{2}{5}, \\frac{3}{5}), (\\frac{2}{3}, \\frac{1}{3}) \\}$."
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Apostaría por $(D, I)$ dado que es el resultado con más probabilidad que
        salga.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio16;
