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
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Tenemos que ver la tabla de pagos y analizar las posibles elecciones. Si
        el jugador 2 elige $A$, la mejor respuesta del jugador 1 es $D$ (pago de
        $9$). Si el jugador 2 elige $B$, la mejor respuesta del jugador 1 es $B$
        (pago de $3$). Si el jugador 2 elige $C$, la mejor respuesta del jugador
        1 es $B$ (pago de $2$). Si el jugador 2 elige $D$, la mejor respuesta
        del jugador 1 es $C$ (pago de $5$). Visto en la tabla:
      </p>
      <GameTable
        player1Strategies={["A", "B", "C", "D"]}
        player2Strategies={["A", "B", "C", "D"]}
        payoffs={[
          ["($5;2$)", "($2;6$)", "($1;4$)", "($0;4$)"],
          [
            "($0;0$)",
            "$(\\textcolor{red}{3};2$)",
            "$(\\textcolor{red}{2};1$)",
            "($1;1$)",
          ],
          ["($7;0$)", "($2;2$)", "($1;5$)", "$(\\textcolor{red}{5};1$)"],
          ["($\\textcolor{red}{9};5$)", "($1;3$)", "($0;2$)", "($4;8$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Primero marcamos las mejores respuestas de los jugadores en la matriz de
        pagos:
      </p>
      <GameTable
        player1Strategies={["A", "B", "C", "D"]}
        player2Strategies={["A", "B", "C", "D"]}
        payoffs={[
          ["($5;2$)", "$(2;\\textcolor{red}{6}$)", "($1;4$)", "($0;4$)"],
          [
            "($0;0$)",
            "$(\\textcolor{red}{3};\\textcolor{red}{2}$)",
            "$(\\textcolor{red}{2};1$)",
            "($1;1$)",
          ],
          [
            "($7;0$)",
            "($2;2$)",
            "$(1;\\textcolor{red}{5}$)",
            "$(\\textcolor{red}{5};1$)",
          ],
          [
            "($\\textcolor{red}{9};5$)",
            "($1;3$)",
            "($0;2$)",
            "$(4;\\textcolor{red}{8}$)",
          ],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Podemos observar que los pagos de la columna correspondiente a la
        estrategia $A$ del jugador 2 son siempre menores que los pagos de la
        columna $D$. Es decir:
      </p>
      <ul className="list-disc ml-4 md:ml-10">
        <li className="mt-2 text-sm sm:text-base md:ml-6">
          La estrategia $A$ del jugador 2 es estrictamente dominada por la
          estrategia $D$ (ya que $D$ le da un mayor pago sin importar lo que
          juegue el jugador 1). Por lo tanto, podemos eliminar la estrategia $A$
          del jugador 2.
        </li>
      </ul>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Después de eliminar la estrategia estrictamente dominada, la matriz de
        pagos queda como sigue:
      </p>
      <GameTable
        player1Strategies={["A", "B", "C", "D"]}
        player2Strategies={["B", "C", "D"]}
        payoffs={[
          ["$(2;\\textcolor{red}{6}$)", "($1;4$)", "($0;4$)"],
          [
            "$(\\textcolor{red}{3};\\textcolor{red}{2}$)",
            "$(\\textcolor{red}{2};1$)",
            "($1;1$)",
          ],
          ["($2;2$)", "$(1;\\textcolor{red}{5}$)", "$(\\textcolor{red}{5};1$)"],
          ["($1;3$)", "($0;2$)", "$(4;\\textcolor{red}{8}$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora, la estrategia $D$ del jugador 1 es estrictamente dominada por la
        estrategia $C$. Por lo tanto, podemos eliminar la estrategia $D$ del
        jugador 1. Quedando la matriz de pagos como sigue:
      </p>
      <GameTable
        player1Strategies={["A", "B", "C"]}
        player2Strategies={["B", "C", "D"]}
        payoffs={[
          ["$(2;\\textcolor{red}{6}$)", "($1;4$)", "($0;4$)"],
          [
            "$(\\textcolor{red}{3};\\textcolor{red}{2}$)",
            "$(\\textcolor{red}{2};1$)",
            "($1;1$)",
          ],
          ["($2;2$)", "$(1;\\textcolor{red}{5}$)", "$(\\textcolor{red}{5};1$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora podemos ver que la estrategia $D$ del jugador 2 es estrictamente
        dominada por la estrategia $B$. Por lo tanto, podemos eliminar la
        estrategia $D$ del jugador 2. Quedando la matriz de pagos como sigue:
      </p>
      <GameTable
        player1Strategies={["A", "B", "C"]}
        player2Strategies={["B", "C"]}
        payoffs={[
          ["$(2;\\textcolor{red}{6}$)", "($1;4$)"],
          [
            "$(\\textcolor{red}{3};\\textcolor{red}{2}$)",
            "$(\\textcolor{red}{2};1$)",
          ],
          ["($2;2$)", "$(1;\\textcolor{red}{5}$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora podemos ver que la estrategia $A$ del jugador 1 es estrictamente
        dominada por la estrategia $B$. Por lo tanto, podemos eliminar la
        estrategia $A$ del jugador 1. Quedando la matriz de pagos como sigue:
      </p>
      <GameTable
        player1Strategies={["B", "C"]}
        player2Strategies={["B", "C"]}
        payoffs={[
          [
            "$(\\textcolor{red}{3};\\textcolor{red}{2}$)",
            "$(\\textcolor{red}{2};1$)",
          ],
          ["($2;2$)", "$(1;\\textcolor{red}{5}$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora podemos ver que la estrategia $C$ del jugador 1 es estrictamente
        dominada por la estrategia $B$. Por lo tanto, podemos eliminar la
        estrategia $C$ del jugador 1. Quedando la matriz de pagos como sigue:
      </p>
      <GameTable
        player1Strategies={["B"]}
        player2Strategies={["B", "C"]}
        payoffs={[
          [
            "$(\\textcolor{red}{3};\\textcolor{red}{2}$)",
            "$(\\textcolor{red}{2};1$)",
          ],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por ultimo, la estrategia $C$ del jugador 2 es estrictamente dominada
        por la estrategia $B$. Por lo tanto, podemos eliminar la estrategia $C$
        del jugador 2. Quedando la matriz de pagos como sigue:
      </p>
      <GameTable
        player1Strategies={["B"]}
        player2Strategies={["B"]}
        payoffs={[["$(\\textcolor{red}{3};\\textcolor{red}{2}$)"]]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El resultado del juego sería que cada jugador elige la estrategia {($J_1, J_2$)}={($B, B$)} con pagos {($3;2$)}."
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 3:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El equilibrio de Nash ocurre cuando ambos jugadores eligen la estrategia
        $B$, ya que ninguno de los dos jugadores puede mejorar su pago cambiando
        unilateralmente su estrategia. Por lo tanto, el equilibrio de Nash es
        ($B, B$) con pagos ($3;2$).
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio17;
