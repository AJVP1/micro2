import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio26() {
  return (
    <ExerciseLayout number={26}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Imagine un juego del que participan dos jugadores: un principal que
        quiere que se realice una tarea y un agente que va a ser contratado para
        realizarla. El agente tiene dos posibilidades, realizar un esfuerzo para
        hacer la tarea $(W)$, en cuyo caso el agente recibe un pago de $w$ menos
        el esfuerzo que ha realizado $(g)$, o no realizar ningún esfuerzo $(S)$
        en cuyo caso recibe solamente el pago $w$. Si el agente no hace
        esfuerzo, el principal no recibe nada, pero igual tiene que pagar el
        salario $w$. Además, el principal tiene la posibilidad de controlar o no
        si el agente realiza el trabajo, pero para ello incurre en un costo $h$.
        Si encuentra al agente no realizando el esfuerzo, lo despide y no le
        paga el salario $w$. Esta situación se puede representar de forma normal
        de la siguiente manera:
      </p>
      <GameTable
        player1Strategies={["S", "W"]}
        player2Strategies={["I", "NI"]}
        payoffs={[
          ["($0;-h$)", "($w;-w$)"],
          ["($w-g;v-w-h$)", "($w-g;v-w$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Tal que $w &gt; g &gt; h &gt; 0$. Se pide hallar los equilibrios de Nash
        del juego.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Eligiendo las mejores respuestas:
      </p>
      <GameTable
        player1Strategies={["S", "W"]}
        player2Strategies={["I", "NI"]}
        payoffs={[
          ["($0;-h$)", "($w;-w$)"],
          ["($\\textcolor{red}{w-g};v-w-h$)", "($w-g;v-w$)"],
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

export default Ejercicio26;
