import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio11() {
  return (
    <ExerciseLayout number={11}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Un individuo puede elegir entre $2$ acciones. La acción $A$, que tiene
        un valor de $140$ en alza y $10$ en baja, o la B, que vale $50$ y $30$.
        La probabilidad de que suba es igual a $0,5$. Si su función de utilidad
        es $u(x) = \ln (x)$:
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Cuál elige en caso de que solo pudiera elegir una acción?
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Si pudiese elegir mitad de cada uno, lo haría?
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Si escoge la acción $A$, su utilidad esperada es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(x)] = 0,5 \cdot \ln(140) + 0,5 \cdot \ln(10) \approx 3,62$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Si escoge la acción $B$, su utilidad esperada es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(x)] = 0,5 \cdot \ln(50) + 0,5 \cdot \ln(30) \approx 3,65$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por lo tanto, el individuo elegiría la acción $B$.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Si el individuo pudiese elegir mitad de cada uno, entonces su utilidad
        esperada sería:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(x)] = 0,5 \cdot \ln(70+25=95) + 0,5 \cdot \ln(5+15=20) \approx
        3,77$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por lo tanto, el individuo elegiría mitad de cada uno, ya que su
        utilidad esperada es mayor que la utilidad esperada de elegir solo una
        de las acciones.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio11;
