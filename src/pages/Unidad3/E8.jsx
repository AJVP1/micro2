import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio8() {
  return (
    <ExerciseLayout number={8}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Preocupados por la serie de lesiones que afectan al plantel de
        Independiente, Hilario y Fabian, dos arqueros deciden colaborar entre
        sí. La probabilidad de lesionarse es $0,5$ para cada uno. En el caso de
        que un jugador se lesiona, su cotización baja considerablemente. Hilario
        tiene un valor de $100.000$ en condiciones normales y $25.000$ lesionado
        y Fabian, $70.000$ y $40.000$, respectivamente. El preparador físico,
        Kenny, les comenta que conoce un caso de dos jugadores que para
        minimizar riesgos decidieron compartir ganancias. Existen $2$ casos. Uno
        en el que solo colaboran repartiendo las ganancias en partes iguales en
        el caso que uno de ellos se lesione, y otro en el que comparten las
        ganancias en partes iguales sin importar lo que suceda. Decida en que
        caso van a colaborar suponiendo que sus funciones de utilidad son $u(x)
        = \ln (x)$.
      </p>

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

export default Ejercicio8;
