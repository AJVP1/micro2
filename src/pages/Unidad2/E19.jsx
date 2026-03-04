import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio19() {
  return (
    <ExerciseLayout number={19}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Demuestre que en un juego del tipo Dilema del Prisionero no existe
        ningún equilibrio de Nash con estrategias mixtas.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Colocando el juego del Dilema del Prisionero
      </p>
      <GameTable
        player1Strategies={["Callar", "Confesar"]}
        player2Strategies={["Callar", "Confesar"]}
        payoffs={[
          ["(0,0)", "(-4,1)"],
          ["(1,-4)", "(-2,-2)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora buscamos los equilibrios de Nash en estrategias mixtas. Para esto,
        igualamos los pagos esperados de cada jugador. Para el jugador 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_1(Callar; q)] = E[u_1(Confesar; q)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 0(q) + (-4)(1-q) = 1(q) + (-2)(1-q) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 4q - 4 = 3q - 2 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">$$ q = 2 $$</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Como las probabilidades tienen que estar entre 0 y 1, demostramos que no
        hay equilibrio de Nash en estrategias mixtas para el juego del Dilema
        del prisionero. Esto se debe a que las estrategias puras dominan a las
        estrategias mixtas, es decir, cada jugador tiene una estrategia pura que
        le da un mejor resultado que cualquier combinación de estrategias
        mixtas. En el Dilema del Prisionero, la estrategia dominante para ambos
        jugadores es confesar, lo que hace que no haya incentivos para elegir
        una estrategia mixta.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio19;
