import ExerciseLayout from "../../components/layout/ExerciseLayout";

function Ejercicio12() {
  return (
    <ExerciseLayout number={12}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "Asuma que hay $N$ potenciales firmas que consideran entrar al mercado de un determinado bien. Si una firma no entra, obtiene un pago de 10 independientemente de lo que haga el resto. Si entra, obtiene $10 + 2(7 − m)$ donde $m$ es la cantidad de firmas que entran al mercado."
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Encuentre todos los equilibrios de Nash en estrategias puras. Ayuda:
        note que lo relevante es cuantas firmas entran al mercado y no quienes
        son. ¿Qué le dice esto respecto a la posibilidad de que se coordinen
        solo esa cantidad de firmas?
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Podemos buscar la cantidad de firmas que se necesitan que entren para
        que el pago sea nulo o negativo. Por un lado, tenemos el beneficio de
        entrar al mercado, y por el otro lado el beneficio de no entrar al
        mercado.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$10+2(7 - m)=10 \Rightarrow 2(7 - m)=0 \Rightarrow m=7$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora tenemos que pensar en varios escenarios:
      </p>
      <ul className="list-disc mt-2 pl-8">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "si $m < 6$, las firmas que están adentro no tienen incentivos a salir ya que su pago es como mínimo 14 que es mayor a 10. Y las firmas que están afuera tienen incentivos a entrar ya que su pago sería como mínimo 12 que es mayor a 10."
          }
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "si $m = 6$, las firmas que están adentro no tienen incentivos a salir ya que su pago es como mínimo 12 que es mayor a 10. Y las firmas que están afuera no tienen incentivos a entrar ya que su pago es 10 que sería el mismo pago que recibirían si entraran."
          }
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "si $m = 7$, las firmas que están adentro no tienen incentivos a salir ya que su pago es 10 que sería el mismo pago que recibirían si salieran. Y las firmas que están afuera no tienen incentivos a entrar ya que su pago sería como máximo 8 que es menor a 10."
          }
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "si $m > 7$, las firmas que están adentro tienen incentivos a salir ya que su pago es menor a 10. Y las firmas que están afuera no tienen incentivos a entrar ya que su pago sería menor a 10."
          }
        </li>
      </ul>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por lo tanto, los equilibrios de Nash en estrategias puras son: $m=6$ y
        $m=7$. Ya que en ambos casos las firmas no tienen incentivos a cambiar
        su estrategia.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio12;
