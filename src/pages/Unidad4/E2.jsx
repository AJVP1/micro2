import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";
import ej2Img from "../../assets/ej2-multiples.png";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Liderazgo Stackelberg. Un líder de Stackelberg es un jugador que puede
        comprometerse a realizar una determinada acción, de forma tal que otros
        jugadores lo consideren un líder (en el sentido de que juego primero y
        los seguidores basan sus acciones en las acciones preferidas del líder).
        Por lo tanto, el liderazgo de Stackelberg es una suerte de poder que
        proviene de la capacidad de un jugador de comprometerse. Formalmente,
        considere el siguiente juego en forma normal:
      </p>
      <GameTable
        player1Strategies={["s1", "s2"]}
        player2Strategies={["t1", "t2"]}
        payoffs={[
          ["($0;2$)", "($3;0$)"],
          ["($2;1$)", "($1;3$)"],
        ]}
      />
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Suponga que el jugador fila elige primero, y el jugador columna
          observa la elección del jugador fila. Escriba el juego en forma
          extensiva, liste las estrategias de ambos jugadores, escriba el juego
          en forma normal para esta nueva situación y encuentre todos los
          equilibrios de Nash. ¿Cuáles de estos últimos son equilibrios de Nash
          perfectos en subjuegos?
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Comente sobre la frase: “la capacidad de comprometerse es una forma de
          poder”
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El juego en forma extensiva se puede representar con el siguiente árbol
        de decisiones:
      </p>
      <img
        className="w-150 rounded mx-auto block mt-4"
        src={ej2Img}
        alt="Árbol de decisiones para el juego del ladrón y el policía"
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El equilibrio perfecto en subjuegos es
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ ENPS = \\begin{cases} s_1 = \\{ S2 \\}, \\\\ s_2= \\{t_1, t_2 \\}  \\end{cases} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La forma normal para esta nueva situación dinámica es
      </p>
      <GameTable
        player1Strategies={["$S1$", "$S2$"]}
        player2Strategies={["$t_1 t_1$", "$t_1 t_2$", "$t_2 t_1$", "$t_2 t_2$"]}
        payoffs={[
          ["($0;2$)", "($0;2$)", "($3;0$)", "($3;0$)"],
          ["($2;1$)", "($1;3$)", "($2;1$)", "($1;3$)"],
        ]}
      />
    </ExerciseLayout>
  );
}

export default Ejercicio2;
