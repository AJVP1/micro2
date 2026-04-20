import ExerciseLayout from "../../components/layout/ExerciseLayout";
import ej5Img from "../../assets/ej5-multiples.png";
import ej5Img2 from "../../assets/ej5-multiples-2.png";

function Ejercicio5() {
  return (
    <ExerciseLayout number={5}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Quemar las naves. La Armada $1$ (del país $1$) debe decidir si atacar o
        no a la Armada $2$ (del país $2$), que está ocupando una isla situada
        entre los dos países. Si hay un ataque, la Armada $2$ puede pelear ($F$)
        o retroceder ($R$) al continente a través de un puente que comunica a la
        isla con el país $2$. Por supuesto, si la Armada $1$ no ataca, la Armada
        $2$ continuará ocupando la isla, mientras que, si la Armada $1$ ataca y
        la Armada $2$ retrocede, la Armada $1$ será la nueva ocupante. Cada
        armada prefiere ocupar la isla antes que no ocuparla, pero pelear es el
        peor resultado para ambas armadas, independientemente de quién se quede
        con la isla.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Modele esta situación como un juego en forma extensiva, asignando
          pagos consistentes con la descripción dada más arriba.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre el equilibrio perfecto en subjuegos.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Muestre que el país $2$ ganaría si pudiese destruir el puente,
          eliminando de esta forma la opción de retirarse si la isla es atacada.
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Tenemos tres tipos de pagos, $a$; $b$; $c$, tal que a es el pago por
        ocupar la isla, $b$ es el pago por no ocupar la isla, y $c$ es el pago
        por pelear; es decir $a$ &gt; $b$ &gt; $c$. El juego en forma extensiva
        se puede representar de la siguiente manera
      </p>
      <img
        className="w-150 rounded mx-auto block mt-4"
        src={ej5Img}
        alt="Árbol de decisiones para el juego de las naves"
      />

      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Haciendo inducción hacia atrás. El jugador $2$ va a preferir Retroceder
        antes que Pelear, dada esta decisión, el jugador $1$ va a preferir
        Atacar antes que No Atacar. El equilibrio de Nash perfecto en subjuegos
        es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ ENPS = \\begin{cases} s_1 = \\{ A \\}, \\\\ s_2= \\{ R \\}  \\end{cases} $$"
        }
      </p>

      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 3.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Si el país $2$ destruye el puente, el juego se vuelve el siguiente:
      </p>
      <img
        className="w-150 rounded mx-auto block mt-4"
        src={ej5Img2}
        alt="Árbol de decisiones para el juego de las naves sin puente"
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Al eliminar la opción de poder retirarse para el jugador $2$, al jugador
        $1$ tendría que elegir entre el pago $b$ o el pago $c$, por lo tanto, el
        jugador $1$ decidiría No Atacar la isla siendo el nuevo equilibrio de
        Nash perfecto en subjuegos:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ ENPS = \\begin{cases} s_1 = \\{ NA \\}, \\\\ s_2= \\{ P \\}  \\end{cases} $$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio5;
