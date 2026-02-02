import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio2() {
  return (
    <ExerciseLayout number={2}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "Juan acaba de comprar un billete de lotería clandestina. Va contento a su casa. Tiene $400$ en el bolsillo derecho y el billete en el bolsillo izquierdo. La lotería es de lo más extraña. Se sortea un numero (entero) del $1$ al $10$ en un bolillero con $10$ bolas (i.e. todos los números tienen igual probabilidad de salir). El billete promete pagar $1.200$ si sale un número igual o mayor a $6$ y nada, si sale un número menor o igual a $5$. Suponga que las preferencias de Juan están representadas por la siguiente función de Bernoulli $v(c) = \\sqrt{c}$. Si usted quiere comprarle el billete a Juan, ¿Cuál es el precio mínimo que Juan aceptaría?"
        }
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

export default Ejercicio2;
