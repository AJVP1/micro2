import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio22() {
  return (
    <ExerciseLayout number={22}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Dos firmas, $A$ y $B$, deciden simultáneamente si extienden sus negocios
        a la Argentina. Si ambas firmas entran al país, la competencia es tan
        feroz que obtienen pérdidas de $100$ millones. Si solo una entra, gana
        $300$ millones y la otra no entra, nada. Si ninguna entra, ambas
        obtienen cero.
      </p>

      <ol className="list-decimal text-lg mt-4 pl-8">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Describa la forma normal del juego (note que es un juego de suma cero
          o fija)
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre todos los equilibrios de Nash
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Considere ahora que si la firma $A$ entra al mercado y $B$ no lo hace,
          $A$ gana $400$ millones, pero la situación es inversa, $B$ sigue
          ganando $300$ millones, como antes.
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1.</p>
      <GameTable
        player1Strategies={["Entrar", "No entrar"]}
        player2Strategies={["Entrar", "No entrar"]}
        payoffs={[
          ["($-100; -100$)", "($300; 0$)"],
          ["($0; 300$)", "($0; 0$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Eligiendo las mejores respuestas
      </p>
      <GameTable
        player1Strategies={["Entrar", "No entrar"]}
        player2Strategies={["Entrar", "No entrar"]}
        payoffs={[
          ["($-100; -100$)", "($\\textcolor{red}{300}; \\textcolor{red}{0}$)"],
          ["($\\textcolor{red}{0}; \\textcolor{red}{300}$)", "($0; 0$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Los equilibrios de Nash son: $(Entrar; Entrar)$ y $(No entrar; No
        entrar)$.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para encontrar las estrategias mixtas, igualamos los pagos esperados de
        cada jugador. Para el jugador 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_1(Entrar; q)] = E[u_1(No entrar; q)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ (-100)(q) + (300)(1-q) = 0(q) + 0(1-q) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 300 - 400q = 0 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$q=\frac{3}
        {4}$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el jugador 2:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_2(p; Entrar)] = E[u_2(p; No entrar)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ (-100)(p) + (300)(1-p) = 0(p) + 0(1-p) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ -400p + 300 = 0 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$p=\frac{3}
        {4}$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El equilibrio de Nash en estrategias mixtas es: $ \\{ (\\frac{3}{4}, \\frac{1}{4}), (\\frac{3}{4}, \\frac{1}{4}) \\}$."
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 3.</p>
      <GameTable
        player1Strategies={["Entrar", "No entrar"]}
        player2Strategies={["Entrar", "No entrar"]}
        payoffs={[
          ["($-100; -100$)", "($\\textcolor{red}{400}; \\textcolor{red}{0}$)"],
          ["($\\textcolor{red}{0}; \\textcolor{red}{300}$)", "($0; 0$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el jugador $2$ no se modifica las probabilidades en mixtas,
        mientras que para el jugador $1$:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_1(Entrar; q)] = E[u_1(No entrar; q)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ (-100)(q) + (400)(1-q) = 0(q) + 0(1-q) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 400 - 500q = 0 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$q=\frac{4}
        {5}$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El equilibrio de Nash en estrategias mixtas es: $ \\{ (\\frac{4}{5}, \\frac{1}{5}), (\\frac{3}{4}, \\frac{1}{4}) \\}$."
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio22;
