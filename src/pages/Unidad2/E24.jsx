import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio24() {
  return (
    <ExerciseLayout number={24}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Existen dos firmas que han abierto un nuevo puesto de trabajo. Suponga
        además que las dos firmas ofrecen un salario diferente: la empresa $i$
        ofrece un salario $w_i$ tal que $\frac{1}
        {2} w_1 &le; w_2 &le; 2w_1$. Imagine que hay dos trabajadores, cada uno
        de ellos puede aplicar solo para uno de los trabajos. Los trabajadores,
        además, tienen que aplicar simultáneamente para el trabajo en la firma
        $1$ o para la firma $2$. Si solo un trabajador aplica para el empleo,
        ese trabajador es contratado, si dos trabajadores se presentan al mismo
        empleo solo se contrata a uno de ellos determinado al azar y el otro
        queda desempleado (recibe un pago de cero). Hallar el equilibrio de Nash
        de este juego, que puede ser representado de la siguiente forma normal:
      </p>
      <GameTable
        player1Strategies={["F1", "F2"]}
        player2Strategies={["F1", "F2"]}
        payoffs={[
          ["($\\frac{1}{2} w_1 ; \\frac{1}{2} w_1 $)", "($ w_1 ; w_2 $)"],
          ["($ w_2 ; w_1 $)", "($\\frac{1}{2} w_2 ; \\frac{1}{2} w_2$)"],
        ]}
      />

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Escogiendo las mejores respuestas
      </p>
      <GameTable
        player1Strategies={["F1", "F2"]}
        player2Strategies={["F1", "F2"]}
        payoffs={[
          [
            "($\\frac{1}{2} w_1 ; \\frac{1}{2} w_1 $)",
            "($ \\textcolor{red}{w_1} ; \\textcolor{red}{w_2} $)",
          ],
          [
            "($ \\textcolor{red}{w_2} ; \\textcolor{red}{w_1} $)",
            "($\\frac{1}{2} w_2 ; \\frac{1}{2} w_2$)",
          ],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"Los equilibrios de Nash en puras son $\\{ (F1, F2), (F2, F1) \\}$."}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Debemos averiguar en estrategias mixtas. Para esto, igualamos los pagos
        esperados de cada jugador. Para el jugador 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_1(F1; q)] = E[u_1(F2; q)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ \frac{1}
        {2} w_1 (q) + w_1 (1-q) = w_2 (q) + \frac{1}
        {2} w_2 (1-q) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ \frac{1}
        {2} w_1 q + w_1 - w_1 q = w_2 q + \frac{1}
        {2} w_2 - \frac{1}
        {2} w_2 q $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$q=\\frac{2 w_1 - w_2}{w_1 + w_2}$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el jugador 2:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_2(p; F1)] = E[u_2(p; F2)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ \frac{1}
        {2} w_1 (p) + w_1 (1-p) = w_2 (p) + \frac{1}
        {2} w_2 (1-p) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ \frac{1}
        {2} w_1 p + w_1 - w_1 p = w_2 p + \frac{1}
        {2} w_2 - \frac{1}
        {2} w_2 p $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$p=\\frac{2 w_1 - w_2}{w_1 + w_2}$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El equilibrio de Nash en estrategias mixtas es: $ \\{ (\\frac{2 w_1 - w_2}{w_1 + w_2}, 1 - \\frac{2 w_1 - w_2}{w_1 + w_2}), (\\frac{2 w_1 - w_2}{w_1 + w_2}, 1 - \\frac{2 w_1 - w_2}{w_1 + w_2}) \\}$."
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio24;
