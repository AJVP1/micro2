import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En Trenquelauquen existe un taller mecánico que, asociado con estudios
        de abogados, toman causas de choques entre automotores. Este estudio le
        da un monto de dinero a la persona que lleva un caso al momento de
        presentarlo y luego ellos se quedan con los beneficios del juicio (la
        ventaja para el damnificado del choque es que puede reparar el auto
        ahora mismo sin tener que esperar que se decida si el seguro le paga y
        cuanto). Asuma que Juan, un amigo del barrio, tiene preferencias dadas
        por $\ln(x)$, el auto chocado vale $5.000$ en el mercado y la
        compensación, en caso de que la obtenga, será de $10.000$. La
        probabilidad de que se gane el juicio es $0,5$.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Cuál sería una prima justa? Justifique su respuesta.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Estaría Juan dispuesto a aceptar un monto de $5.000$ pesos y dejar
          que el estudio se lleve las ganancias del juicio? Justifique
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          ¿A partir de cual monto Juan estaría dispuesto a dejar que el estudio
          se lleve las ganancias?
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La prima justa es igual al producto entre el monto que paga el siniestro
        y la probabilidad de que ocurra el escenario malo
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$P = 0,5 \cdot 10.000 = 5.000$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Si no deja que el estudio se lleve las ganancias, entonces Juan tendría
        una utilidad:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E(u(x)) = 0,5 \cdot \ln(10.000) + 0,5 \cdot \ln(15.000) \approx 9,06$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Si recibe el monto de $5.000$ y deja que el estudio se lleve las
        ganancias, entonces Juan tendría una utilidad:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E(u(x)) = \ln(10.000) \approx 9,21$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por lo tanto, Juan aceptaría recibir $5.000$ y dejar que el estudio se
        lleve las ganancias.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 3.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para que Juan esté dispuesto a dejar que el estudio se lleve las
        ganancias del juicio, la utilidad esperada de pagar la prima debe ser
        mayor o igual a la utilidad esperada de no pagar el seguro, es decir:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$\ln(5.000 + P) \ge 9,06$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$5.000 + P \\ge e^{9,06}$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">$$P \ge 3.604$$</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Resolviendo para $P$ obtenemos que Juan estaría dispuesto a que el
        estudio se lleve las ganancias si el monto que le pagan es mayor o igual
        a $3.604$.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
