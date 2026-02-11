import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "Juan tiene una acción de una compañía que se liquida a fin de año y $10$ pesos en su bolsillo. Al liquidarse, Juan obtiene un monto $k$ o $q$, dependiendo de lo que ocurra en el proceso de liquidación, con probabilidades $(1 - p)$ y $p$, respectivamente, donde $k > q$. La empresa en cuestión cotiza en bolsa y Juan tiene la siguiente posibilidad: el Banco Subsay le permite asegurarse pagando un monto fijo $s$ hoy (una prima). En caso de no obtener $k$, el banco lo compensa dándole $f = k - q$."
        }
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "Suponga que Juan tiene preferencias sobre loterías que están representadas por una función de Bernoulli $u(x) = \\sqrt{x}$. ¿Cuál es el máximo valor para la variable $s$ tal que Juan acepte el contrato a futuro que ofrece el Banco Subsay?"
          }
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "Responda el punto anterior pero ahora suponga que las preferencias de Juan se representan con la función de Bernoulli $u(x) = 2 + 3\\sqrt{x}$."
          }
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de Juan con la acción sin aceptar la posibilidad
        del banco es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$E[u(x)] = (1 - p) \\cdot \\sqrt{10 + k} + p \\cdot \\sqrt{10 + q}$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de Juan con la acción aceptando la posibilidad del
        banco es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$E[u(x)] = (1 - p) \\cdot \\sqrt{10 + k - s} \\; + \\; p \\cdot \\sqrt{10 + q + f - s}$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$(1 - p) \\cdot \\sqrt{10 + k - s} \\; + \\; p \\cdot \\sqrt{10 + k - s}$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\sqrt{10 + k - s}$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Igualando las utilidades esperadas tal que el cliente esté indiferente
        entre aceptar o no el contrato del banco:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$(1 - p) \\cdot \\sqrt{10 + k} + p \\cdot \\sqrt{10 + q} = \\sqrt{10 + k - s}$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Despejando $s$:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$10 + k -s = [(1 - p) \\cdot \\sqrt{10 + k} + p \\cdot \\sqrt{10 + q} \\;  ]^2$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ s = 10 + k - [(1 - p) \\cdot \\sqrt{10 + k} + p \\cdot \\sqrt{10 + q} \\;  ]^2$$"
        }
      </p>

      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de Juan con la acción sin aceptar la posibilidad
        del banco es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$E[u(x)] = (1 - p) \\cdot (2 + 3\\sqrt{10 + k}) + p \\cdot (2 + 3\\sqrt{10 + q})$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de Juan con la acción aceptando la posibilidad del
        banco es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$E[u(x)] = (1 - p) \\cdot (2 + 3\\sqrt{10 + k - s}) \\; + \\; p \\cdot (2 + 3\\sqrt{10 + q + f - s})$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$(1 - p) \\cdot (2 + 3\\sqrt{10 + k - s}) \\; + \\; p \\cdot (2 + 3\\sqrt{10 + k - s})$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$2 + 3\\sqrt{10 + k - s}$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Igualando las utilidades esperadas tal que el cliente esté indiferente
        entre aceptar o no el contrato del banco:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$(1 - p) \\cdot (2 + 3\\sqrt{10 + k} \\; ) + p \\cdot (2 + 3\\sqrt{10 + q} \\; ) = 2 + 3\\sqrt{10 + k - s}$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Despejando $s$:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$10 + k - s = \\left(\\frac{(1 - p) \\cdot (2 + 3\\sqrt{10 + k} \\; ) + p \\cdot (2 + 3\\sqrt{10 + q} \\; ) - 2}{3}\\right)^2$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$s = 10 + k - \\left(\\frac{(1 - p) \\cdot (2 + 3\\sqrt{10 + k} \\; ) + p \\cdot (2 + 3\\sqrt{10 + q} \\; ) - 2}{3}\\right)^2$$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio3;
