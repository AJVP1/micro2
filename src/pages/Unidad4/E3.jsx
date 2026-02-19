import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Considere un mercado con $2$ firmas donde existe un líder y un seguidor.
        La demanda agregada está dada por:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ P(Q) = 24 - Q $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ Q = q_1 + q_2 $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Todas las firmas tienen un costo marginal constante igual a $c$ y no
        tienen costos fijos. La secuencia es la siguiente: primero la fila $1$,
        el líder, elige $q_1$, luego la firma $2$ (seguidora) observa lo que
        produce la firma $1$ y elige cuanto producir.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre el equilibrio de Nash del mercado y sus ganancias asociadas.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Suponga que una vez ambas firmas lanzan su producción al mercado, el
          gobierno aplica un impuesto $t$ sobre las cantidades ofrecidas por la
          firma seguidora. El gobierno decide $t$ maximizando su función de
          utilidad, que viene dada por: <br />
          $$ U(t) = tq_2 - \frac{1}
          {2} t^2 $$ <br />
          Recompute los ENPS del juego.
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
