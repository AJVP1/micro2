import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio7() {
  return (
    <ExerciseLayout number={7}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Paul y John son dos habitantes de la ciudad de Buenos Aires. Ambos
        tienen la misma función de utilidad, $u(x) = \ln (x)$. La probabilidad
        de tener un accidente de transito en dicha ciudad es de $0,3$. El
        Bentley de Paul vale $10.000$ pero si tiene un accidente, su valor se
        reduce a $2.000$. Por otro lado, el Aston Martin de John vale $20.000$
        pero si tiene un accidente, su valor es de $5.000$. Cansado de sentirse
        estafados por las compañías de seguro, planean colaborar entre ellos. En
        el caso de que solo uno de ellos tenga un accidente, dividirán la
        riqueza de ambos en partes iguales. ¿Se llevará a cabo este plan?
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En este ejericio, Paul y John tienen que comparar la utilidad esperada
        de llevar a cabo el plan, contra la utilidad esperada de no llevar a
        cabo el plan.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de Paul sin el plan es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(x)] = 0,3 \cdot \ln(2.000) + 0,7 \cdot \ln(10.000) \approx 8,72$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de John sin el plan es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(x)] = 0,3 \cdot \ln(5.000) + 0,7 \cdot \ln(20.000) \approx 9,48$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora tenemos que calcular las probabilidades de cada escenario con el
        plan.
      </p>
      <ul className="list-disc list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Ninguno tiene un accidente: $0,7 \cdot 0,7 = 0,49$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Solo Paul tiene un accidente: $0,3 \cdot 0,7 = 0,21$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Solo John tiene un accidente: $0,7 \cdot 0,3 = 0,21$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Ambos tienen un accidente: $0,3 \cdot 0,3 = 0,09$.
        </li>
      </ul>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Y las riquezas en cada estado son:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Ninguno tiene un accidente: Paul $10.000$ y John $20.000$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Solo Paul tiene un accidente: cada uno obtiene $(2.000 + 20.000) / 2 =
          11.000$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Solo John tiene un accidente: cada uno obtiene $(10.000 + 5.000) / 2 =
          7.500$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Ambos tienen un accidente: Paul $2.000$ y John $5.000$.
        </li>
      </ul>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de Paul con el plan es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(x)] = 0,49 \cdot \ln(10.000) + 0,21 \cdot \ln(11.000) + 0,21 \cdot
        \ln(7.500) + 0,09 \cdot \ln(2.000) \approx 9,02$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de John con el plan es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(x)] = 0,49 \cdot \ln(20.000) + 0,21 \cdot \ln(11.000) + 0,21 \cdot
        \ln(7.500) + 0,09 \cdot \ln(5.000) \approx 9,44$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "  Ahora comparamos las utilidades esperadas de cada uno con el plan, contra las utilidades esperadas de cada uno sin el plan. Para Paul, $9,02 > 8,72$, por lo tanto, le conviene llevar a cabo el plan. Para John, $9,44 < 9,48$, por lo tanto, no le conviene llevar a cabo el plan. Dado que a John no le conviene llevar a cabo el plan, entonces el plan no se llevará a cabo."
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio7;
