import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio27() {
  return (
    <ExerciseLayout number={27}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Usted se encuentra en la final de Champions League. Después de los 120
        minutos el partido está empatado, por lo que toca definir por penales y
        es su turno de patear. Es una tanda de penales medio rara y se define
        solo por un tiro de penal. El arquero, que pertenece al equipo rival,
        puede tirarse para la derecha $(D)$, para la izquierda $(I)$ o no
        moverse $(C)$. Usted puede patear para la derecha $(D)$, la izquierda
        $(I)$ o al centro $(C)$. Las posibilidades de que usted anote el gol y
        consiga la victoria dependen de cada una de las combinaciones de tiros y
        atajadas, que son las siguientes:
      </p>
      <GameTable
        player1Strategies={["D", "C", "I"]}
        player2Strategies={["D", "C", "I"]}
        payoffs={[
          ["($0;10$)", "($0;70$)", "($0;90$)"],
          ["($0;40$)", "($0;10$)", "($0;20$)"],
          ["($0;90$)", "($0;20$)", "($0;30$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad de los jugadores está dada por la probabilidad de ganar el
        partido multiplicada por la alegría que les produce ganar, que es 10
        para todos los casos.
      </p>

      <ol className="list-decimal text-lg mt-4 pl-8">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Represente el juego en forma normal.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre las estrategias dominadas en puras para cada jugador.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          De las estrategias que sobreviven a la EIEED plantear el equilibrio en
          estrategias mixtas.
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
    </ExerciseLayout>
  );
}

export default Ejercicio27;
