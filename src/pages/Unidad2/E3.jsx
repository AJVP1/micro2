import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Leandro tira una moneda al aire, cae en su mano y rápidamente la tapa. A
        continuación, lo invita a participar en el siguiente juego. Usted (que
        no vio que salió) tiene que elegir cara o ceca, luego el destapa la
        moneda. Si acertó le paga 1 y si perdió 0. Suponga que la moneda no está
        trucada y que Leandro no hace nada para engañarlo. ¿Existe alguna
        consideración estratégica? ¿Es esto un "juego" de acuerdo a lo visto en
        clase?
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

export default Ejercicio3;
