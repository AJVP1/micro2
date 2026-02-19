import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
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
        La esperanza del pago es:
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
