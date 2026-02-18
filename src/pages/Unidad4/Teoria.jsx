// importamos Link para navegacion interna
import { Link, Outlet } from "react-router-dom";
// importamos MathJax para formulas matematicas
import { MathJax } from "better-react-mathjax";

const Unidad4 = () => {
  return (
    <MathJax>
      <section className="bg-[#fafafa] max-w-270 mx-auto p-6">
        <h2 className="text-4xl font-bold text-center text-[#1d2554] mt-6">
          Juegos dinámicos con información completa
        </h2>

        <h3 className="text-2xl font-semibold text-[#1d2554] mt-6">Teoría</h3>
        <hr />

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>
            Definición de estrategia en juegos dinámicos con información
            completa
          </strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Una estrategia en juegos dinámicos con información completa es un plan
          completo de acción, es decir, que haría el jugador en cada toma de
          decisión (cada nodo).
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$ \\begin{cases}s_1= \\{ \\text{accion}_{t=1},\\; \\text{accion}_{t=2},\\; \\ldots,\\; \\text{accion}_{t=n} \\}\\\\ s_2= \\{ \\text{accion}_{t=1},\\; \\text{accion}_{t=2},\\; \\ldots,\\; \\text{accion}_{t=n} \\}\\\\ \\quad\\vdots  \\\\ s_n= \\{ \\text{accion}_{t=1},\\; \\text{accion}_{t=2},\\; \\ldots,\\; \\text{accion}_{t=n} \\} \\end{cases} $$"
          }
        </p>
        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Aplicación al juego del cien pies</strong>
        </h4>
        <img
          className="w-150 rounded mx-auto block mt-4"
          src="/src/assets/cien-pies.png"
          alt="juego del cien pies"
        />
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Se resuelve por “inducción hacia atrás”, es decir, ver que haría cada
          jugador en cada nodo de decisión comenzando por el final.
        </p>
        <ul className="list-disc pl-5 mt-2 text-sm sm:text-base md:text-lg">
          <li>
            El jugador 2 decidiría terminar el juego en su tercer nodo de
            decisión.
          </li>
          <li>
            El jugador 1 decidiría terminar el juego en su tercer nodo de
            decisión dado que el jugador 2 terminaría el juego.
          </li>
          <li>
            El jugador 2 decidiría terminar el juego en su segundo nodo de
            decisión dado que el jugador 1 terminaría el juego después.
          </li>
          <li>
            El jugador 1 terminaría el juego dado que el jugador 2 terminaría el
            juego después.
          </li>
          <li>
            El jugador 2 terminaría el juego dado que el jugador 1 terminaría el
            juego después.
          </li>
          <li>
            El jugador 1 terminaría el juego dado que el jugador 2 terminaría el
            juego después.
          </li>
        </ul>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Es decir, en equilibrio
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$ \\begin{cases}s_1= \\{ T; T; T \\} \\\\ s_2= \\{ T; T; T \\}  \\end{cases} $$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Esta es la solución del juego y es un equilibrio de Nash.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Juego de negociación con ofertas alternadas</strong>
        </h4>
        <img
          className="w-150 rounded mx-auto block mt-4"
          src="/src/assets/alternados.png"
          alt="juego del cien pies"
        />
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Resolviendo por inducción hacia atrás:
        </p>
        <ul className="list-disc pl-5 mt-2 text-sm sm:text-base md:text-lg">
          <li>
            En el último nodo $J2$ acepta si $p_3 ≥ 0$; por lo que $J1$ ofrecerá
            un $p_3 = 0$.
          </li>
          <li>
            En el siguiente nodo $J1$ acepta si $p_2 ≥ 2,5$; por lo que $J2$
            ofrecerá un $p_2 = 2,5$.
          </li>
          <li>
            En el siguiente nodo $J2$ acepta si $p_1 ≥ 2,5$; por lo que $J1$
            ofrecerá un $p_1 = 2,5$.
          </li>
        </ul>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Es decir, en equilibrio:
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$ \\begin{cases}s_1= \\{ p_1 = 2,5; \\; acepta; \\; p_3 = 0 \\} \\\\ s_2= \\{ acepta; \\; p_2 = 2,5; \\; acepta \\}  \\end{cases} $$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Nota: si se llega a una solución por inducción hacia atrás, entonces
          esta será un equilibrio perfecto en subjuegos.
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          En este juego hay otros equilibrios de Nash pero que no son equilibrio
          perfecto en subjuegos dado que contienen amenazas no creíbles.
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$ \\begin{cases}s_1= \\{ p_1 = 0; \\; rechaza; \\; p_3 = 0 \\} \\\\ s_2= \\{ acepta; \\; p_2 = 5; \\; acepta \\}  \\end{cases} $$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          En este caso no hay desviaciones unilaterales. Tendría que no solo
          cambiar $p_2 = 2,5$ sino que también tendría que cambiar la segunda
          acción del jugador $1$ a aceptar. Por lo tanto, el jugador $2$
          recibiría un pago de $0$ igual que en el último nodo de decisión y el
          jugador $1$ obtiene un pago mayor que en los otros escenarios. No hay
          incentivos a desviarse.
        </p>

        {/* Practica */}
        <h3 className="text-2xl font-semibold text-[#1d2554] mt-6">Práctica</h3>
        <hr />
        <ul className="flex gap-2 flex-wrap">
          <Link
            to={`/juegos-dinamicos-informacion-completa/ejercicio-1`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 1
          </Link>
          <Link
            to={`/juegos-dinamicos-informacion-completa/ejercicio-2`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 2
          </Link>
          <Link
            to={`/juegos-dinamicos-informacion-completa/ejercicio-3`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 3
          </Link>
          <Link
            to={`/juegos-dinamicos-informacion-completa/ejercicio-4`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 4
          </Link>
          <Link
            to={`/juegos-dinamicos-informacion-completa/ejercicio-5`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 5
          </Link>
          <Link
            to={`/juegos-dinamicos-informacion-completa/ejercicio-6`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 6
          </Link>
          <Link
            to={`/juegos-dinamicos-informacion-completa/ejercicio-7`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 7
          </Link>
          <Link
            to={`/juegos-dinamicos-informacion-completa/ejercicio-8`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 8
          </Link>
          <Link
            to={`/juegos-dinamicos-informacion-completa/ejercicio-9`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 9
          </Link>
          <Link
            to={`/juegos-dinamicos-informacion-completa/ejercicio-10`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 10
          </Link>
          <Link
            to={`/juegos-dinamicos-informacion-completa/ejercicio-11`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 11
          </Link>
        </ul>
        <Outlet />
        <hr className="mt-6" />
        <h3 className="text-2xl font-semibold text-[#1d2554] mt-4">Contacto</h3>
        <p className="mt-2 mb-6">
          Para alguna modificación o sugerencia, por favor mandar mail a{" "}
          <a
            href="mailto:armando.charal1998@gmail.com"
            className=" text-[#1d2554] hover:text-[#374785] underline hover:no-underline"
          >
            armando.charal1998@gmail.com
          </a>
          .
        </p>
      </section>
    </MathJax>
  );
};

export default Unidad4;
