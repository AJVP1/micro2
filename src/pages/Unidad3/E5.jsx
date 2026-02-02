import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio5() {
  return (
    <ExerciseLayout number={5}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Juan quiere comprar un flat-TV, para lo cual lleva varios años ahorrando
        plata. Salió un nuevo modelo, llamado Flat-Flat, que no es tan delgado
        como los otros, pero es mucho más barato. Él está dispuesto a pagar
        hasta $10.000$ por un buen TV, pero si las probabilidades de que falle
        antes del año son altas, no quiere pagar más de $5.000$. Juan no tiene
        ni idea si este nuevo producto es de los buenos o de los que se rompen
        antes del año, pero leyó en una revista de electrónica que el $75\%$ de
        los nuevos productos lanzados al mercado en este año fallan antes del
        año. Un poco cansado de esperar, ha decidido comprarlo si logra un
        precio menor a $6.000$ pesos por el Flat-Flat TV. Para tomar su
        decisión, Juan analiza si los pagos esperados superan los beneficios
        esperados. ¿Le parece esta conclusión verdadera o falsa? ¿Por qué?
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

export default Ejercicio5;
