import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio21() {
  return (
    <ExerciseLayout number={21}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Los jugadores $1$ y $2$ juegan el siguiente juego:
      </p>
      <GameTable
        player1Strategies={["Arriba", "Abajo"]}
        player2Strategies={["Izquierda", "Derecha"]}
        payoffs={[
          ["($a;b$)", "($c;3$)"],
          ["($d;1$)", "($e;2$)"],
        ]}
      />

      <ol className="list-decimal text-lg mt-4 pl-8">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre todos los valores de los parámetros para los cuales el
          jugador $1$ va a jugar Arriba independientemente de los que haga el
          jugador $2$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre todos los valores de los parámetros para los cuales
          $(Arriba; Izquierda)$ es un equilibrio de Nash.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre todos los valores de los parámetros para los cuales
          $(Arriba; Izquierda)$ es el único equilibrio de Nash en estrategias
          puras.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre todos los valores de los parámetros para los cuales existe
          al menos un equilibrio de Nash donde solo el jugador 2 utiliza
          estrategias puras.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Todos los parámetros son distintos y $(Arriba; Izquierda)$ y $(Abajo;
          Derecha)$ son equilibrios de Nash. Encuentre todos los equilibrios de
          Nash restantes.
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 1. Los valores son aquellos tales que $a &ge; d$; $c &ge;
        e$.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 2. Los valores son aquellos tales que $a &ge; d$; $b &ge;
        3$; $c &ge; e$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 3. Los valores son aquellos tales que $a &ge; d$; $c &gt;
        e$; $b &ge; 3$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 4.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Si el jugador $2$ siempre escoge Derecha se puede traducir como que está
        escogiendo una pura, es decir $q = 0$, y para que esto suceda tiene que
        pasar que $b &lt; 3$.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para que el jugador $1$ este indiferente entre $(Arriba;Derecha)$ y
        $(Abajo;Derecha)$, los parámetros tienen que valer $c = e$.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 5.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En estrategias puras, para que (Arriba;Izquierda) sea un equilibrio de
        Nash se tiene que dar que a &gt; d y b &gt; 3. Para que (Abajo;Derecha)
        sea un equilibrio de Nash se tiene que dar que e &gt; c.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En estrategias mixtas, tenemos que igualar los pagos esperados de cada
        jugador. Para el jugador 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_1(Arriba; q)] = E[u_1(Abajo; q)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ a(q) + c(1-q) = d(q) + e(1-q) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ (a-c)q + c = (d-e)q + e $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q = \\frac{e-c}{a-d+e-c} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el jugador 2:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_2(p; Izquierda)] = E[u_2(p; Derecha)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ b(p) + 1(1-p) = 3(p) + 2(1-p) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ bp + 1 - p = p + 2 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ p = \\frac{1}{b-2} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El equilibrio de Nash en estrategias mixtas es: $ \\{ (\\frac{1}{b-2}, 1 - \\frac{1}{b-2}), (\\frac{e-c}{a-d+e-c}, 1 - \\frac{e-c}{a-d+e-c} \\}$."
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio21;
