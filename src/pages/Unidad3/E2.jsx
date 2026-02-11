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
      <p className="mt-2 text-sm sm:text-base md:text-lg">Datos:</p>
      <ul className="list-disc list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          $c_0 = 400$ (consumo inicial de Juan)
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          $c_1 = 400 + 1.200 = 1.600$ (consumo de Juan si gana la lotería)
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          $p = 0,5$ (probabilidad de ganar la lotería)
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          {"La función de Bernoulli de Juan es $v(c) = \\sqrt{c}$."}
        </li>
      </ul>

      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El valor esperado de la lotería es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$E[v(c)] = 0,5 \\cdot \\sqrt{400} + 0,5 \\cdot \\sqrt{1.600} = 10 + 20 = 30$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El monto que deja indiferente entre jugar la lotería o no es la renta
        equivalente cierta, es decir, el monto tal que le de la misma utilidad
        que la utilidad esperada, pero con un 100% de probabilidad. Es decir, el
        monto $x$ tal que $v(x) = E[v(c)]$:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\sqrt{x} = 30 \\implies x = 30^2 = 900$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Dado que Juan recibe $400$ independientemente de la loteria, entonces el
        monto mínimo que Juan aceptaría por el billete de la lotería es
        $900-400=500$. Si le ofrecen menos de $500$, entonces no le conviene
        vender el billete, porque prefiere quedarse con el billete y jugar la
        lotería, que le da una utilidad esperada de $30$, a vender el billete
        por un monto menor a $500$, que le daría una utilidad menor a $30$.
        Podemos verificar esto último calculando la utilidad de vender el
        billete por un monto menor a $500$, por ejemplo, $400$:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$v(800) = \\sqrt{800} \\approx 28,28 < 30$$"}
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio2;
