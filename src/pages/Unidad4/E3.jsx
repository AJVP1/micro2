import ExerciseLayout from "../../components/layout/ExerciseLayout";

function Ejercicio3() {
  return (
    <ExerciseLayout number={3}>
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
        La maximización del beneficio para la seguidora es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ \\max_{q_2} \\; q_2 (24 - q_1 - q_2) - cq_2 $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Condiciones de primer orden:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ 24 - q_1 - 2q_2 - c = 0 $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        De donde se obtiene la función de reacción de la seguidora:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_2 = \\frac{24 - q_1 - c}{2} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La maximización del beneficio para el líder es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ \\max_{q_1} \\; q_1 (24 - q_1 - q_2) - cq_1 $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Pero dado que la líder toma primero la decisión, esta decidirá
        internalizar la decisión de la seguidora tal que la seguidora este
        indiferente, quedando la maximización de la líder como
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ \\max_{q_1} \\;q_1 (24 - q_1 - \\frac{24 - q_1 - c}{2}) - cq_1 $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ \\max_{q_1} \\; q_1 (12 - \\frac{q_1}{2} + \\frac{c}{2}) - cq_1 $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Condiciones de primer orden:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ 12 - q_1 + \\frac{c}{2} - c = 0 $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_1^* = 12 + \\frac{c}{2} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Dada la elección de la líder, la seguidora decidirá
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ q_2^* = \\frac{24 - q_1^* - c}{2} = \\frac{24 - 12 - \\frac{c}{2} - c}{2} = \\frac{12 - \\frac{3c}{2}}{2} = 6 - \\frac{3c}{4} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El precio de mercado es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ P^* = 24 - q_1^* - q_2^* = 24 - (12 + \\frac{c}{2}) - (6 - \\frac{3c}{4}) = 6 + \\frac{c}{4} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Las ganancias de cada firma son:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ \\pi_1^* = q_1^* (P^* - c) = (12 + \\frac{c}{2})(6 + \\frac{c}{4} - c) = (12 + \\frac{c}{2})(6 - \\frac{3c}{4}) $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ \\pi_2^* = q_2^* (P^* - c) = (6 - \\frac{3c}{4})(6 + \\frac{c}{4} - c) = (6 - \\frac{3c}{4})(6 - \\frac{3c}{4}) $$"
        }
      </p>

      <hr className="my-6" />

      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En este caso, el gobierno decide de último. La maximización del gobierno
        viene por:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ \\max_t \\; tq_2 - \\frac{1}{2} t^2 $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Condiciones de primer orden:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_2 - t = 0 $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">{"$$ t = q_2 $$"}</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La maximización del beneficio para la seguidora es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ \\max_{q_2} q_2 (24 - q_1 - q_2) - cq_2 - tq_2 $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Integrando la decisión del gobierno, la maximización de la seguidora es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ \\max_{q_2} q_2 (24 - q_1 - q_2) - cq_2 - q_2^2 $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Condiciones de primer orden:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ 24 - q_1 - 2q_2 - c - 2q_2 = 0 $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        De donde se obtiene la función de reacción de la seguidora:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_2 = \\frac{24 - q_1 - c}{4} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La maximización del beneficio para el líder es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ \\max_{q_1} \\; q_1 (24 - q_1 - q_2) - cq_1 $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Integrando la decisión de la seguidora, la maximización del líder es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ \\max_{q_1} \\; q_1 (24 - q_1 - \\frac{24 - q_1 - c}{4}) - cq_1 $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Condiciones de primer orden:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ 24 - 2q_1 - \\frac{24 - 2q_1 - c}{4} - c = 0 $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        De donde se obtiene la cantidad producida por el líder:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_1^* = 12 - \\frac{c}{2} $$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Reemplazando en la función de reacción de la seguidora, se obtiene su
        cantidad producida:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ q_2^* = \\frac{24 - q_1^* - c}{4} = \\frac{24 - 12 + \\frac{c}{2} - c}{4} = \\frac{12 - \\frac{c}{2}}{4} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El impuesto aplicado por el gobierno es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ t^* = q_2^* = \\frac{12 - \\frac{c}{2}}{4} $$"}
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio3;
