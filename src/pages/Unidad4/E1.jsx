import ExerciseLayout from "../../components/layout/ExerciseLayout";

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
        La esperanza del pago es:
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio1;
