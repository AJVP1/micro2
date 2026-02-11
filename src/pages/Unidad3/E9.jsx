import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio9() {
  return (
    <ExerciseLayout number={9}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Charly, cuya $u(x) = 2x$, se encuentra un billete de lotería. Con una
        probabilidad de $0,1$ dicho billete le dará $50$, caso contrario, $10$.
        ¿Cuánto deberíamos pagarle a Charly para que este dispuesto a darnos el
        billete?
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La utilidad esperada de la lotería es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$E[u(c)] = 0,1 \cdot 2 \cdot 50 + 0,9 \cdot 2 \cdot 10 = 10 + 18 = 28$$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para encontrar el precio mínimo que Charly aceptaría por su billete de
        lotería, tenemos que encontrar el monto $x$ tal que $u(x) = E[u(c)]$.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">$$2x = 28$$</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">$$x = 14$$</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por lo tanto, deberíamos pagarle a Charly al menos $14$ para que esté
        dispuesto a vendernos el billete, ya que este es el valor que iguala su
        utilidad esperada con la utilidad segura de recibir $x$.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio9;
