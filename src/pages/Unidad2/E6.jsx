import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio6() {
  return (
    <ExerciseLayout number={6}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Dos firmas rivales están por lanzar un producto similar. Si ambas lanzan
        el producto al mismo tiempo, cada una obtendrá ganancias por 40.000. Si
        solo una firma lo lanza, podrá ejercer su poder de mercado y obtener
        100.000, mientras que la otra obtiene 0. Si ninguna lo lanza, ambas
        pierden 50.000 (por los costos en desarrollo del producto).
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Represente este juego en forma extensiva.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Represente este juego en forma normal.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Se puede resolver por el criterio de dominancia?
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre todos los equilibrios de Nash.
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1.</p>

      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <GameTable
        player1Strategies={["A", "B"]}
        player2Strategies={["A", "B"]}
        payoffs={[
          ["($40.000;40.000$)", "($100.000;0$)"],
          ["($0;100.000$)", "($-50.000;-50.000$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 3.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Podemos ver que la estrategia $A$ domina a la estrategia $B$ para ambos
        jugadores. Por lo tanto, podemos eliminar la estrategia $B$ para ambos
        jugadores dejando el juego reducido solo a las estrategias $A$. Por lo
        que sí se puede resolver por el criterio de dominancia.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 4.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Marcando las mejores respuestas para los jugadores:
      </p>
      <GameTable
        player1Strategies={["A", "B"]}
        player2Strategies={["A", "B"]}
        payoffs={[
          [
            "($\\textcolor{red}{40.000};\\textcolor{red}{40.000}$)",
            "($\\textcolor{red}{100.000};0$)",
          ],
          ["($0;\\textcolor{red}{100.000}$)", "($-50.000;-50.000$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Podemos ver que el único equilibrio de Nash es cuando ambos jugadores
        eligen la estrategia $A$, ya que no tienen incentivos para desviarse
        unilateralmente.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio6;
