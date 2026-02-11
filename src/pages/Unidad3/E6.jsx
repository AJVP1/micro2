import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio6() {
  return (
    <ExerciseLayout number={6}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Suponga que usted tiene un riesgo de perder $L$ con probabilidad $p$ y
        que existe una compañía de seguros que ofrece un seguro actuarialmente
        justo (fair pricing), pero cuando la compañía de seguro tiene que cubrir
        la perdida, incurre en un costo de transacción de $c$ (en concepto de
        costo de la transferencia bancaria). Asuma que $u(x) = \ln (x)$.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Cuál es la póliza de equilibrio? ¿Cuánto se asegura usted?
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          En esta póliza de equilibrio, ¿es usted capaz de eliminar su riesgo?
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En caso de que pase el escenario malo, el pago que se recibe es $W - L +
        q - eq - c$, esto es, el dinero inicial menos la perdida, más el pago
        del seguro, menos la prima que se paga, menos el costo de la
        transacción. En caso de que pase el escenario bueno, el pago que se
        recibe es $W - eq$, esto es, el dinero inicial menos la prima que se
        paga.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Mi utilidad esperada sería:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E(u(x)) = (1-p) \cdot \ln (W - eq) + p \cdot \ln (W - L + q - eq -
        c)$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para maximizar esta utilidad, tengo que tomar la derivada con respecto a
        $q$ e igualarla a cero:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$\\frac{dE(u(x))}{dq} = \\frac{(1-p)(-e)}{W - eq} + \\frac{p(1-e)}{W - L + q - eq - c} = 0$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Empezamos a despejar $q$ de la ecuación:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\frac{p(1-e)}{W - L + q - eq - c} = \\frac{(1-p)(e)}{W - eq}$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ \\frac{p}{1-p} \\cdot \\frac{1}{W - L + q - eq - c} = \\frac{e}{1-e} \\cdot \\frac{1}{W - eq} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Como es un seguro actuarialmente seguro entonces $p=e$, es decir, la
        póliza se iguala la probabilidad de ocurrencia del siniestro
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ \\frac{1}{W - L + q - eq - c} = \\frac{1}{W - eq} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q = L + c $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por lo tanto, la póliza de equilibrio es $q = L + c$, es decir, el monto
        asegurado es igual a la perdida más el costo de la transacción.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Sí, dado que estoy indiferente del caso en donde ocurre el siniestro y
        el caso donde no ocurre el siniestro. Por lo tanto, si me da igual que
        pase o no el siniestro, he eliminado el riesgo.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio6;
