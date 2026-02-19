import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Silencio canibalístico. En una tribu de una pequeña y desconocida isla
        vivían 10 pequeños y hambrientos caníbales. Sentados en un pequeño y
        perfecto circulo alrededor de un prisionero de guerra, tenían que
        decidir que hacer con el prisionero. Obviamente, porque son caníbales y
        tienen hambre, ellos prefieren desayunarse al prisionero, pero si un
        caníbal se come a un prisionero, el mismo se torna ahora una presa
        tentadora para sus compañeros caníbales (¡esta más gordo!) y el se
        vuelve ahora el prisionero de guerra. Secuencialmente a cada uno de los
        caníbales se le da la oportunidad de elegir comerse al prisionero o no.
        Si alguien se lo come, el extravagante rito de decisión secuencial
        comienza nuevamente. Todos los caníbales en la ronda prefieren
        estrictamente comerse al prisionero y mantenerse vivos (lo óptimo) a
        quedarse hambrientos, y prefieren estrictamente quedarse hambrientos a
        comer y ser comido. Si al final de la ronda ninguno de los caníbales se
        comió al prisionero, entonces lo liberan y se vuelve feliz a su casa un
        poco asustado.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Si entendieron correctamente el concepto de inducción hacia atrás del
          ENPS, ¿se va el prisionero a su casa?
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          La tribu, como todas las tribus, tiene un jefe, y el jefe, como todos
          los jefes, manda. Este jefe es el primero en la cadena en decidir si
          se come al prisionero o no, pero además, como es el jefe, tiene el
          derecho de invitar a otros pequeños caníbales de pequeñas islas
          cercanas al gran festín. Asuma que las islas son tantas, y los vecinos
          caníbales tantos que en realidad el jefe puede elegir cualquier
          cantidad de invitados desde 1 hasta infinito. ¿Cuántos vecinos
          caníbales invitara el jefe caníbal al desayuno canibalístico?
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
