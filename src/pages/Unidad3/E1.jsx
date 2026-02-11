import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En una localidad bonaerense, la probabilidad de que en una temporada
        llueva es de $0,6$. Un productor de soja, cuya función de utilidad es
        $U(x) = \ln (x)$, obtiene $10.000$ por su cosecha cuando es una
        temporada de lluvias y $2.000$ cuando no lo es.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Obtenga la esperanza, la utilidad esperada y la renta equivalente
          cierta.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Si una compañía de seguros le ofrece un seguro contra sequias a una
          tasa de $0,5$ (por cada peso asegurado le paga $50$ centavos), ¿Cuál
          es el monto por el cual se asegura?
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La esperanza del pago es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[x] = 0,6 \cdot 10.000 + 0,4 \cdot 2.000 = 6.000 + 800 = 6.800$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[U(x)] = 0,6 \cdot \ln(10.000) + 0,4 \cdot \ln(2.000) \approx 8,566$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La renta equivalente cierta es el monto $x$ tal que $U(x) = E[U(x)]$:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\ln(x) = 8,566 \\implies x = e^{8,566} \\approx 5.260$$"}
      </p>

      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El cliente tendrá que pagar un monto de $0,5x$ a la compañía de seguros,
        y en cambio, cuando haya sequias la compañía le pagará al cliente un
        $x$.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El pago del cliente en caso de que llueva será $10.000$ de lo que
        obtiene normalmente sin seguro, menos el coste del seguro $0,5x$, es
        decir, $10.000 - 0,5x$. Mientras, el pago del cliente en caso de que no
        llueva será de $2.000$ que es lo que normalmente obtendría sin seguro,
        más $x$ que le paga el seguro, menos $0,5x$ que es el coste del seguro.
        Es decir, $2.000 + x - 0,5x = 2.000 + 0,5x$.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada con el seguro es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[U(x)] = 0,6 \cdot \ln(10.000 - 0,5x) + 0,4 \cdot \ln(2.000 + 0,5x)$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Si el cliente quiere maximizar su utilidad, entonces debe elegir el
        monto $x$ que maximice la utilidad esperada. Para esto, derivamos la
        función de utilidad esperada con respecto a $x$ y la igualamos a cero:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$\\frac{d}{dx} E[U(x)] = 0,6 \\cdot \\frac{-0,5}{10.000 - 0,5x} + 0,4 \\cdot \\frac{0,5}{2.000 + x} = 0$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Resolviendo esta ecuación, obtenemos el monto $x$ que el cliente debería
        asegurar.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\frac{-0,6}{10.000 - 0,5x} + \\frac{0,4}{2.000 + x} = 0$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\frac{0,6}{10.000 - 0,5x} = \\frac{0,4}{2.000 + x}$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$1.200 + 0,3x = 4.000$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">{"$$x = 5.600$$"}</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por lo tanto, el cliente debería asegurar un monto de $5.600$.
        Adicionalmente, podemos calcular la utilidad esperada con este monto
        asegurado para verificar que es mayor que la utilidad esperada sin
        seguro.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad sería entonces:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[U(5.600)] = 0,6 \cdot \ln(10.000 - 0,5 \cdot 5.600) + 0,4 \cdot
        \ln(2.000 + 0,5 \cdot 5.600)$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[U(5.600)] \approx 8,71$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Como $8,71$ es mayor que la utilidad esperada sin seguro ($8,51$), el
        cliente se beneficia de contratar el seguro con un monto asegurado de
        $5.600$.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
