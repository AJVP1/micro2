import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio4() {
  return (
    <ExerciseLayout number={4}>
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
        Escribiendo el juego en forma extensiva
      </p>
      <img
        className="w-150 rounded mx-auto block mt-4"
        src="/src/assets/ej4-multiples.png"
        alt="Árbol de decisiones para el juego los canibales"
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Si un jugador come recibe el pago de $a$, si es comido recibe el $0$, y
        si pasa hambre recibe el pago de $b$ tal que $a &gt; b$.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Posibles elecciones de cada canibal: Comer y no ser comido (mejor
        resultado), no comer y pasar hambre (segundo mejor resultado), comer y
        ser comido (peor resultado).
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Si quedaran 2 caníbales, el primero que coma se vuelve el nuevo
        prisionero y el otro lo comerá. Comer implica terminar siendo comido
        (peor que quedarse hambriento). Entonces con 2, nadie come.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Con 3 caníbales, El primero que coma deja un juego pasa a ser el nuevo
        prisionero con 2 caníbales, donde nadie comerá. Por lo tanto, quien coma
        con 3 sí sobrevive. Entonces con 3, el primero sí come.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Con 4 caníbales, Si el primero come, deja un juego con 3, donde el
        primero del nuevo ciclo sí comerá. Eso implica que quien comió
        inicialmente terminará siendo comido. Entonces con 4, nadie come.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Se observa el patrón: Número impar de caníbales, el primero come. Número
        par de caníbales, nadie come. Entonces con 10 caníbales, nadie come y el
        prisionero se va a su casa.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El jefe caníbal invita a un número impar de vecinos, asegurándose así de
        ser el primero en comer y sobrevivir al festín.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio4;
