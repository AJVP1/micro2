import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio8() {
  return (
    <ExerciseLayout number={8}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Preocupados por la serie de lesiones que afectan al plantel de
        Independiente, Hilario y Fabian, dos arqueros deciden colaborar entre
        sí. La probabilidad de lesionarse es $0,5$ para cada uno. En el caso de
        que un jugador se lesiona, su cotización baja considerablemente. Hilario
        tiene un valor de $100.000$ en condiciones normales y $25.000$ lesionado
        y Fabian, $70.000$ y $40.000$, respectivamente. El preparador físico,
        Kenny, les comenta que conoce un caso de dos jugadores que para
        minimizar riesgos decidieron compartir ganancias. Existen $2$ casos. Uno
        en el que solo colaboran repartiendo las ganancias en partes iguales en
        el caso que uno de ellos se lesione, y otro en el que comparten las
        ganancias en partes iguales sin importar lo que suceda. Decida en que
        caso van a colaborar suponiendo que sus funciones de utilidad son $u(x)
        = \ln (x)$.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de Hilario sin colaborar es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(x)] = 0,5 \cdot \ln(25.000) + 0,5 \cdot \ln(100.000) \approx
        10,82$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de Fabian sin colaborar es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(x)] = 0,5 \cdot \ln(40.000) + 0,5 \cdot \ln(70.000) \approx
        11,16$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Tenemos que calcular las probabilidades de cada escenario con el plan.
      </p>
      <ul className="list-disc list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Ninguno tiene un accidente: $0,5 \cdot 0,5 = 0,25$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Solo Hilario tiene un accidente: $0,5 \cdot 0,5 = 0,25$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Solo Fabian tiene un accidente: $0,5 \cdot 0,5 = 0,25$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Ambos tienen un accidente: $0,5 \cdot 0,5 = 0,25$.
        </li>
      </ul>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora tenemos que calcular los pagos de cada uno con el plan de
        compartir ganancias solo en caso de lesión de uno de ellos.
      </p>
      <ul className="list-disc list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Ninguno tiene un accidente: Hilario $100.000$ y Fabian $70.000$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Solo Hilario tiene un accidente: ambos se llevan $(25.000 + 70.000)/2
          = 47.500$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Solo Fabian tiene un accidente: ambos se llevan $(100.000 + 40.000)/2
          = 70.000$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Ambos tienen un accidente: Hilario $25.000$ y Fabian $40.000$.
        </li>
      </ul>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora tenemos que calcular los pagos de cada uno con el plan de
        compartir ganancias independientemente de lo que suceda.
      </p>
      <ul className="list-disc list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Ninguno tiene un accidente: ambos se llevan $(100.000+70.000)/2 =
          85.000$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Solo Hilario tiene un accidente: ambos se llevan $(25.000 + 70.000)/2
          = 47.500$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Solo Fabian tiene un accidente: ambos se llevan $(100.000 + 40.000)/2
          = 70.000$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Ambos tienen un accidente: ambos se llevan $(25.000 + 40.000)/2 =
          32.500$.
        </li>
      </ul>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de Hilario con el plan de compartir ganancias solo
        en caso de lesión de uno de ellos es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(x)] = 0,25 \cdot \ln(100.000) + 0,25 \cdot \ln(47.500) + 0,25
        \cdot \ln(70.000) + 0,25 \cdot \ln(25.000) \approx 10,89$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de Fabian con el plan de compartir ganancias solo
        en caso de lesión de uno de ellos es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(x)] = 0,25 \cdot \ln(70.000) + 0,25 \cdot \ln(47.500) + 0,25 \cdot
        \ln(70.000) + 0,25 \cdot \ln(40.000) \approx 10,92$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de Hilario con el plan de compartir ganancias sin
        importar lo que suceda es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(x)] = 0,25 \cdot \ln(85.000) + 0,25 \cdot \ln(85.000) + 0,25 \cdot
        \ln(85.000) + 0,25 \cdot \ln(32.500) \approx 10,92$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de Fabian con el plan de compartir ganancias sin
        importar lo que suceda es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(x)] = 0,25 \cdot \ln(85.000) + 0,25 \cdot \ln(47.500) + 0,25 \cdot
        \ln(70.000) + 0,25 \cdot \ln(32.500) \approx 10,92$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por ultimo, tenemos que comparar las utilidades esperadas de cada plan
        con las utilidades esperadas sin colaborar para decidir que plan es
        mejor para cada uno.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En el caso en que dividen solo cuando uno tiene un accidente. Para
        Hilario, la utilidad esperada con el plan es $10,89$ y sin el plan es
        $10,82$, por lo tanto, Hilario se beneficia de colaborar con este plan.
        Para Fabian, la utilidad esperada con el plan es $10,92$ y sin el plan
        es $11,16$, por lo tanto, Fabian no se beneficia de colaborar con este
        plan.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En el caso en que dividen siempre. Para Hilario, la utilidad esperada
        con el plan es $10,92$ y sin el plan es $10,82$, por lo tanto, Hilario
        se beneficia de colaborar con este plan. Para Fabian, la utilidad
        esperada con el plan es $10,92$ y sin el plan es $11,16$, por lo tanto,
        Fabian no se beneficia de colaborar con este plan.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por lo tanto, Hilario se beneficiaría de colaborar con cualquiera de los
        dos planes, mientras que Fabian no se beneficiaría de colaborar con
        ninguno de los dos planes. Dado que Fabian no se beneficia de colaborar
        con ninguno de los dos planes, entonces no colaborarán entre sí.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio8;
