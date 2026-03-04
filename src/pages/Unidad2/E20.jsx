import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio20() {
  return (
    <ExerciseLayout number={20}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Considere el siguiente juego, donde los puntos indican pagos
        irrelevantes para este ejercicio:
      </p>
      <GameTable
        player1Strategies={["U", "D", "L"]}
        player2Strategies={["U", "D", "L"]}
        payoffs={[
          ["($.;2$)", "($3;3$)", "($1;1$)"],
          ["($.;.$)", "($0;.$)", "($2;.$)"],
          ["($.;4$)", "($5;1$)", "($0;7$)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Demuestre que $A = (\frac{3}
        {4}, 0, \frac{1}
        {4})$ y $B = (0, \frac{1}
        {3}, \frac{2}
        {3})$ es un equilibrio de Nash en estrategias mixtas.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Revisar este ejercicio
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio20;
