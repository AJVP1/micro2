import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
      <p className="mt-2">
        Determine si los siguientes juegos pueden ser resueltos por la
        eliminación de estrategias estrictamente dominadas y encuentre
        equilibrio.
      </p>
      <p>a.</p>
      <GameTable
        player1Strategies={["Up", "Down"]}
        player2Strategies={["A", "B", "C"]}
        payoffs={[
          ["($4;10$)", "($3;0$)", "($1;3$)"],
          ["($0;0$)", "($2;10$)", "($1;3$)"],
        ]}
      />
      <p className="mt-2">b.</p>
      <GameTable
        player1Strategies={["A", "B", "C"]}
        player2Strategies={["A", "B", "C"]}
        payoffs={[
          ["($3;3$)", "($2;2$)", "($3;3$)"],
          ["($3;0$)", "($0;2$)", "($3;2$)"],
          ["($3;2$)", "($2;0$)", "($1;1$)"],
        ]}
      />
      <p className="mt-2">c.</p>
      <GameTable
        player1Strategies={["Up", "Down"]}
        player2Strategies={["A", "B", "C"]}
        payoffs={[
          ["($4;3$)", "($2;7$)", "($0;4$)"],
          ["($5;5$)", "($5;-1$)", "($-4;-2$)"],
        ]}
      />
      <h3 className="text-2xl font-semibold mt-4">Solución</h3>
      <p className="mt-2">
        Para el punto a. vemos la matriz de pagos y podríamos pensar que hay
        estrategias estrictamente dominadas porque el jugador 2 no escoge la
        opción C. Pero al analizar vemos que ninguna de las estrategias la
        dominan estrictamente.
      </p>
      <p className="mt-2">
        Mientras que para el jugador 1, vemos que en algún momento escoge
        ambas estrategias, por lo que ninguna de las dos domina estrictamente
        a la otra. Por lo tanto, no se puede resolver por eliminación iterada
        de estrategias dominadas.:
      </p>
      <p className="mt-2">Viendolo en la tabla:</p>
      <GameTable
        player1Strategies={["Up", "Down"]}
        player2Strategies={["A", "B", "C"]}
        payoffs={[
          [
            "$(\\textcolor{red}{4};\\textcolor{red}{10})$",
            "$(\\textcolor{red}{3};0$)",
            "$(\\textcolor{red}{1};3$)",
          ],
          ["($0;0$)", "$(2;\\textcolor{red}{10})$", "($\\textcolor{red}{1};3$)"],
        ]}
      />
      <p>
        Por ultimo, vemos que ambas mejores respuestas se coinciden en ($UP,
        A$), y después de analizarlo podemos observar que en este punto
        ninguno de los jugadores tiene incentivos para desviarse
        unilateralmente.
      </p>

      <p className="mt-2">
        Para el punto b. escogemos las mejores respuestas de ambos jugadores:
      </p>
      <GameTable
        player1Strategies={["A", "B", "C"]}
        player2Strategies={["A", "B", "C"]}
        payoffs={[
          [
            "$(\\textcolor{red}{3};\\textcolor{red}{3})$",
            "$(\\textcolor{red}{2};2$)",
            "$(\\textcolor{red}{3};\\textcolor{red}{3})$",
          ],
          [
            "$(\\textcolor{red}{3};0$)",
            "$(3;\\textcolor{red}{2})$",
            "$(\\textcolor{red}{3};\\textcolor{red}{2})$",
          ],
          [
            "$(\\textcolor{red}{3};\\textcolor{red}{3})$",
            "$(\\textcolor{red}{2};0$)",
            "($1;1$)",
          ],
        ]}
      />
      <p className="mt-2">
        Podemos ver que no se puede resolver por eliminación iterada de
        estrategias dominadas ya que no hay ninguna estrategia que sea
        estrictamente dominada por otra. Los equilibrios se encuentran en las
        siguientes combinaciones de estrategias: ($A, A$), ($A, C$), ($B, C$)
        y ($C, A$), ya que en estos puntos ninguno de los jugadores tiene
        incentivos para desviarse unilateralmente.
      </p>

      <p className="mt-2">
        Para el punto c. escogemos las mejores respuestas de ambos jugadores:
      </p>
      <GameTable
        player1Strategies={["Up", "Down"]}
        player2Strategies={["A", "B", "C"]}
        payoffs={[
          ["($4;3$)", "$(2;\\textcolor{red}{7})$", "$(\\textcolor{red}{0};4)$"],
          [
            "$(\\textcolor{red}{5};\\textcolor{red}{5})$",
            "$(\\textcolor{red}{5};-1)$",
            "($-4;-2$)",
          ],
        ]}
      />
      <p>
        Por un lado, podemos ver que las mejores respuestas coinciden ($Down,
        A$), y después de analizarla verificamos que en este punto ninguno de
        los jugadores tiene incentivos para desviarse unilateralmente. Ahora
        veamos si se puede resolver por eliminación iterada de estrategias
        dominadas.
      </p>
      <p>
        Podemos observar que la estrategia $C$ nunca es escogida por el
        jugador 2, y después de analizarlo podemos observar que la estrategia
        $C$ para el jugador 2 es dominada estrictamente por la estrategia $B$.
        Por lo tanto, podemos eliminar la estrategia $C$ para el jugador 2 y
        analizar el juego reducido. Quedando la matriz de pagos como:
      </p>
      <GameTable
        player1Strategies={["Up", "Down"]}
        player2Strategies={["A", "B"]}
        payoffs={[
          ["($4;3$)", "$(2;\\textcolor{red}{7})$"],
          [
            "$(\\textcolor{red}{5};\\textcolor{red}{5})$",
            "$(\\textcolor{red}{5};-1)$",
          ],
        ]}
      />
      <p>
        Ahora la estrategia $Up$ para el jugador 1 es estrictamente dominada
        por la estrategia $Down$. Por lo que podemos eliminar la estrategia
        $Up$ y analizar el juego reducido. Quedando la matriz de pagos como:
      </p>
      <GameTable
        player1Strategies={["Down"]}
        player2Strategies={["A", "B"]}
        payoffs={[
          [
            "$(\\textcolor{red}{5};\\textcolor{red}{5})$",
            "$(\\textcolor{red}{5};-1)$",
          ],
        ]}
      />
      <p>
        Por ultimo, podemos eliminar la estrategia $B$ para el jugador 2 ya
        que está siendo estrictamente dominada por la estrategia $A$. Quedando
        la matriz de pagos como:
      </p>
      <GameTable
        player1Strategies={["Down"]}
        player2Strategies={["A"]}
        payoffs={[["$(\\textcolor{red}{5};\\textcolor{red}{5})$"]]}
      />
    </ExerciseLayout>
  );
}

export default Ejercicio2;
