// importamos Link para navegacion interna
import { Link, Outlet } from "react-router-dom";
import GameTable from "../../components/ui/GameTable";
import cienPiesImg from "../../assets/cien-pies.png";
import alternados from "../../assets/alternados.png";
import conjuntoInformativo from "../../assets/conjunto-informativo.png";
import juegoRepetido from "../../assets/juego-repetido.png";
// importamos MathJax para formulas matematicas
import { MathJax } from "better-react-mathjax";
import ContactSection from "../../components/ui/ContactSection";

const Unidad4 = () => {
  const ejercicios = Array.from({ length: 11 }, (_, i) => i + 1);

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
          src={cienPiesImg}
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
          src={alternados}
          alt="juego con ofertas alternadas"
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

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Definición de conjunto informativo</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Conjunto de nodos que no pueden ser distinguidos por el jugador al
          momento de decidir una acción.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Definición de Subjuego</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Es una parte del juego original que parte de un nodo de decisión,
          incluye todas las ramas inferiores y no rompe ningún conjunto de
          información.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Definición de Subjuego</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Es un perfil de estrategias que elimina una amenaza no creíble, es
          decir, que en cada subjuego haya un equilibrio de Nash, es decir, en
          ningún escenario hay desviaciones unilaterales perfectas.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Aplicación de las definiciones anteriores</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Sea el siguiente juego: La primera empresa primero tiene que decidir
          si entrar o no entrar a un mercado. En caso de entrar, después tiene
          que decidir si colocar precios altos o bajos. La segunda empresa,
          después de la decisión de la primera empresa, tiene que decidir si
          colocar precios altos o bajos.
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          La segunda empresa solo puede ver si la primera empresa entró o no,
          pero no puede ver si colocó precios altos o bajos. Es decir, la
          primera empresa tiene información completa sobre el juego, mientras
          que la segunda empresa no tiene información completa sobre el juego.
        </p>
        <img
          className="w-150 rounded mx-auto block mt-4"
          src={conjuntoInformativo}
          alt="juego del cien pies"
        />
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          La línea punteada sería un conjunto de información, donde el jugador 2
          no puede ver si el jugador 1 coloco precios bajos o altos.
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Las estrategias de cada jugador son
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$ \\begin{cases}s_1= \\{ EB; \\; EA; \\; NB; \\; NA \\} \\\\ s_2= \\{ A; \\; B \\}  \\end{cases} $$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Para el primer jugador sería: entrar y colocar precios bajos, entrar y
          colocar precios altos, no entrar y colocar precios bajos, no entrar y
          colocar precios altos. Para el segundo jugador sería: colocar precios
          altos o colocar precios bajos.
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Buscando los equilibrios de Nash para el primer subjuego
        </p>
        <GameTable
          player1Strategies={["EA", "EB", "NB", "NA"]}
          player2Strategies={["A", "B"]}
          payoffs={[
            ["($\\textcolor{red}{2};\\textcolor{red}{5}$)", "($-3;-2$)"],
            ["($-2;-3$)", "($-1;\\textcolor{red}{-2}$)"],
            [
              "($0;\\textcolor{red}{10}$)",
              "($\\textcolor{red}{0};\\textcolor{red}{10}$)",
            ],
            [
              "($0;\\textcolor{red}{10}$)",
              "($\\textcolor{red}{0};\\textcolor{red}{10}$)",
            ],
          ]}
        />
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "Los equilibrios de Nash en este subjuego son $EdN = \\{ (EA; A)(NB; B)(NA; A) \\}$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Buscando los equilibrios de Nash para el segundo subjuego
        </p>
        <GameTable
          player1Strategies={["A", "B"]}
          player2Strategies={["A", "B"]}
          payoffs={[
            ["($\\textcolor{red}{2};\\textcolor{red}{5}$)", "($-3;-2$)"],
            ["($-2;-3$)", "($\\textcolor{red}{-1};\\textcolor{red}{-2}$)"],
          ]}
        />
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "Los equilibrios de Nash en este subjuego son $EdN = \\{ (A; A)(B; B) \\}$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "Los equilibrios de Nash perfectos en subjuegos para este juego son $ENPS = \\{ (EA; A)(NB; B) \\}$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Por qué la estrategia $(NB; B)$ es un equilibrio de Nash perfecto en
          subjuegos? Porque, aunque el $J1$ decida no entrar, en la segunda
          parte del juego van a seguir prefiriendo precios bajos.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Juegos repetidos, aplicación al dilema del prisionero</strong>
        </h4>
        <GameTable
          player1Strategies={["A", "B"]}
          player2Strategies={["A", "B"]}
          payoffs={[
            ["($2;2$)", "($0;3$)"],
            ["($3;0$)", "($1;1$)"],
          ]}
        />
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Suponiendo que el juego se repite una vez, es decir, hay dos tiempos
          $t = 1; 2$. El pago final para cada jugador es la suma de pagos en
          cada etapa. Escribiéndolo en forma extensiva y eligiendo las mejores
          respuestas
        </p>
        <img
          className="w-150 rounded mx-auto block mt-4"
          src={juegoRepetido}
          alt="juego de dilema del prisionero repetido"
        />
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          El jugador $2$ siempre escoge $B$ en cada uno de los subjuegos que
          vienen después del primero, es decir, la estrategia $A$ es una
          estrategia estrictamente dominada para el segundo jugador. Dado que
          primer jugador sabe que su rival tiene una estrategia estrictamente
          dominada, su mejor respuesta ante $B$ es elegir $B$ también. Es decir,
          la segunda que vez que jueguen el dilema del prisionero, ambos van a
          elegir la estrategia $B$ y como la información es completa saben esto
          desde el primer juego.
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Dado que en el segundo juego ambos eligen $B$, el jugador $2$ elegirá
          la estrategia $B$ en el primer juego. Y dado que el jugador $2$ jugará
          la estrategia $B$, el jugador $1$ decidirá elegir la estrategia $B$.
          es decir, por más que sea un juego dinámico de dos tiempos con
          conjuntos de información, como hay estrategias estrictamente dominadas
          se puede resolver por inducción hacia atrás.
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          En el equilibrio de Nash perfecto en Subjuegos cada jugador elige $B$,
          es decir:
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$ \\begin{cases}s_1= \\{ B; \\; B; \\; B; \\; B \\} \\\\ s_2= \\{ B; \\; B; \\; B; \\; B \\}  \\end{cases} $$"
          }
        </p>
        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Teorema "agregar nombre"</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Si $(1)$ el juego se repite en un numero finito de veces, y $(2)$ el
          juego en etapas tiene un único equilibrio de Nash. Entonces, en toda
          la historia del juego repetido van a elegir la acción del equilibrio
          de Nash del juego estático.
        </p>
        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>
            ¿Qué pasa si el juego se repite un numero indefinido de veces?
          </strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Se puede llegar a una cooperación implícita tal que no se juego el
          equilibrio de Nash del juego estático. Aplicado al dilema del
          prisionero
        </p>
        <GameTable
          player1Strategies={["A", "B"]}
          player2Strategies={["A", "B"]}
          payoffs={[
            ["($2;2$)", "($0;3$)"],
            ["($3;0$)", "($1;1$)"],
          ]}
        />
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          La función de pagos del jugador 1 va a tener la siguiente forma:
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$ u_1(s_1, s_2) = \\sum_{t=1}^{\\infty} \\delta^{t-1} u_1^t(\\alpha_1^t, \\alpha_2^t) $$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Es decir, la suma de los pagos de cada etapa dada la elección del
          jugador 1 y el jugador 2, multiplicado por un factor de descuento
          $\delta$. Análogamente para el jugador 2.
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Nota: vamos a separar lo siguiente, $s_i$ es la elección de
          estrategias del jugador $i$ en todo el juego, y $\alpha_i^t$ es la
          acción del jugador $i$ en el momento $t$.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>
            Herramienta de “estrategia tipo gatillo” para el dilema del
            prisionero
          </strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$ \\alpha_i^t = \\begin{cases} \\text{A si hemos decidido A hasta este momento} \\\\ \\text{B caso contrario}  \\end{cases} $$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Cuándo esta estrategia genera un equilibrio de Nash perfecto en
          subjuegos?
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Suponiendo que ambos juegan la estrategia tipo gatillo, cada uno
          obtendría lo siguiente en cada caso. Si nadie se desvío hasta ahora
          obtiene:
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {"$$2 + 2\\delta +  2\\delta^2 = ... =  \\frac{2}{1-\\delta} $$"}
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Si alguno se desvía en el primer momento, el que se desvió obtiene:
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$3 + \\delta +  \\delta^2 = ... =  3 + \\frac{\\delta}{1-\\delta} $$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Para que nadie se desvíe la utilidad tiene que ser mayor a el caso en
          que se desvía, es decir:
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {"$$ \\frac{2}{1-\\delta} \\ge 3 + \\frac{\\delta}{1-\\delta} $$"}
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {"$$ 2 \\ge 3 - 2\\delta $$"}
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {"$$ -1 \\ge - 2\\delta $$"}
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {"$$ \\delta \\ge \\frac{1}{2} $$"}
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Entonces si $\delta \ge \frac{1}
          {2}$ no hay incentivos al desvío unilateral. En este caso, la
          estrategia tipo gatillo sería un equilibrio de Nash perfecto en
          subjuegos.
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Nota: Para el caso donde ambos eligen $B$ al principio del juego, van
          a elegir siempre $B$ en los subsiguientes juegos. Este también es un
          equilibrio de Nash perfecto en subjuegos. Encontramos dos planes
          completos de acción tal que son equilibrios de Nash perfecto en
          subjuegos.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Demostración de la serie aritmética</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$ 2+ 2\\delta +  2\\delta^2 = 2(1 + \\delta + \\delta^2) = 2(\\sum_{i=0}^{\\infty} \\delta^i) $$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">Donde</p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$\\sum_{i=0}^{\\infty} \\delta^i = 1 + \\delta + \\delta^2 + ...  $$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$\\sum_{i=0}^{\\infty} \\delta^i = 1 + \\delta(1 + \\delta + \\delta^2 + ...)$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$\\sum_{i=0}^{\\infty} \\delta^i = 1 + \\delta(\\sum_{i=0}^{\\infty} \\delta^i)$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Pasando restando el segundo término
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$\\sum_{i=0}^{\\infty} \\delta^i - \\delta(\\sum_{i=0}^{\\infty} \\delta^i)  = 1$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {"$$(\\sum_{i=0}^{\\infty} \\delta^i)(1-\\delta)  = 1$$"}
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {"$$\\sum_{i=0}^{\\infty} \\delta^i  = \\frac{1}{1-\\delta}$$"}
        </p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">Entonces</p>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          {
            "$$ 2+ 2\\delta +  2\\delta^2 = 2(1 + \\delta + \\delta^2) = \\frac{2}{1-\\delta} $$"
          }
        </p>

        {/* Practica */}
        <h3 className="text-2xl font-semibold text-[#1d2554] mt-6">Práctica</h3>
        <hr />
        <ul className="flex gap-2 flex-wrap">
          {ejercicios.map((numero) => (
            <Link
              key={numero}
              to={`/juegos-dinamicos-informacion-completa/ejercicio-${numero}`}
              className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
            >
              {`Ejercicio ${numero}`}
            </Link>
          ))}
        </ul>
        <Outlet />

        <ContactSection />
      </section>
    </MathJax>
  );
};

export default Unidad4;
