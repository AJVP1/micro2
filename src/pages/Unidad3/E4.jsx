import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En Trenquelauquen existe un taller mecánico que, asociado con estudios
        de abogados, toman causas de choques entre automotores. Este estudio le
        da un monto de dinero a la persona que lleva un caso al momento de
        presentarlo y luego ellos se quedan con los beneficios del juicio (la
        ventaja para el damnificado del choque es que puede reparar el auto
        ahora mismo sin tener que esperar que se decida si el seguro le paga y
        cuanto). Asuma que Juan, un amigo del barrio, tiene preferencias dadas
        por $\ln(x)$, el auto chocado vale $5.000$ en el mercado y la
        compensación, en caso de que la obtenga, será de $10.000$. La
        probabilidad de que se gane el juicio es $0,5$.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Cuál sería una prima justa? Justifique su respuesta.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Estaría Juan dispuesto a aceptar un monto de $5.000$ pesos y dejar
          que el estudio se lleve las ganancias del juicio? Justifique
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Sí, porque tiene jugadores (el jugador 1 y el jugador 2), tiene
        estrategias (cara o ceca), y tiene pagos ($1$ y $0$). De forma matricial
        quedaría:
      </p>
      <GameTable
        player1Strategies={["Cara", "Ceca"]}
        player2Strategies={["Acertó", "No Acertó"]}
        payoffs={[
          ["($1;-1$)", "($0;0$)"],
          ["($1;-1$)", "($0;0$)"],
        ]}
      />
    </ExerciseLayout>
  );
}

export default Ejercicio4;
