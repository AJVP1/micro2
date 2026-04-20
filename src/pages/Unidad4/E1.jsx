import ExerciseLayout from "../../components/layout/ExerciseLayout";
import ej1Img from "../../assets/ej1-multiples.png";
import ej1Img2 from "../../assets/ej1-multiples-2.png";

function Ejercicio1() {
  return (
    <ExerciseLayout number={1}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Un ladrón tiene la posibilidad de robar o no un banco. Si roba puede
        obtener un botín de 500. Cuando roba es detectado por un policía,
        potencialmente corrupto, que tiene la posibilidad de denunciarlo, en
        cuyo caso el ladrón pierde el botín y sufre un castigo de 100. El
        policía puede también ofrecerle un trato o rechazarlo, en cuyo caso es
        denunciado. El policía sufre una pérdida de 50 si no realiza la
        denuncia.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Plantee el juego en forma extensiva.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre el equilibrio resolviendo con inducción hacia atrás.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre el equilibrio resolviendo con inducción hacia atrás, si
          cambiamos el juego de manera tal que el que realiza de soborno es el
          ladrón y por lo tanto el policía puede aceptar o rechazar la oferta
          (en cuyo caso realiza la denuncia).
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Qué juego preferiría jugar el ladrón? ¿y el policía? Explique
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 1.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El juego en forma extensiva se puede representar con el siguiente árbol
        de decisiones:
      </p>
      <img
        className="w-150 rounded mx-auto block mt-4"
        src={ej1Img}
        alt="Árbol de decisiones para el juego del ladrón y el policía"
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Eligiendo las mejores respuestas. En la última etapa el policía va a
        ofrecer un $a_1 = 0$ tal que el ladrón este indiferente entre $Aceptar$
        o $No Aceptar$. En la etapa anterior el policía va a decidir ser
        corrupto y decidir ofrecer $a_1 = 0$. En la etapa anterior el ladrón va
        a estar indiferente entre $Robar$ y $No Robar$. Llegamos a dos
        equilibrios.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El primer equilibrio de Nash perfecto en subjuegos es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ ENPS = \\begin{cases} s_1 = \\{R, \\; A \\}, \\\\ s_2= \\{a_1 = 0 \\}  \\end{cases} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El segundo equilibrio de Nash perfecto en subjuegos es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ ENPS = \\begin{cases} s_1 = \\{NR, \\; A \\}, \\\\ s_2= \\{a_1 = 0 \\}  \\end{cases} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 3.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El juego en forma extensiva se puede representar con el siguiente árbol
        de decisiones:
      </p>
      <img
        className="w-150 rounded mx-auto block mt-4"
        src={ej1Img2}
        alt="Árbol de decisiones para el juego del ladrón y el policía"
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El jugador $1$ decidirá elegir un $a_1 = 0$ tal que el jugador dos este
        indiferente entre elegir $Aceptar$ o $No aceptar$. El jugador $2$
        decidirá hacer la denuncia dado que si no la hace estaría peor. Y el
        jugador $1$ decidirá $Robar$ el banco.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El equilibrio de Nash perfecto en subjuegos es
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ ENPS = \\begin{cases} s_1 = \\{R, \\; a_1 = 0 \\}, \\\\ s_2= \\{ D, A \\}  \\end{cases} $$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 4.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El ladrón preferiría jugar el segundo juego, ya que se lleva todo el
        botín.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
