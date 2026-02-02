// importamos Link para navegacion interna
import { Link, Outlet } from "react-router-dom";
// importamos MathJax para formulas matematicas
import { MathJax } from "better-react-mathjax";
// importamos componente de tabla de juegos
import GameTable from "../../components/ui/GameTable";

const Unidad2 = () => {
  return (
    <MathJax>
      <section className="bg-[#fafafa] max-w-270 mx-auto p-3 sm:p-4 md:p-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1d2554] mt-6">
          Juegos Estáticos con información completa
        </h2>

        <h3 className="text-xl sm:text-2xl font-semibold text-[#1d2554] mt-6">
          Teoría
        </h3>
        <hr />

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Elementos</strong>
        </h4>
        <ul className="list-disc text-sm sm:text-lg mt-4 pl-4 sm:pl-6 md:pl-8">
          <li>
            {
              "Jugadores: diremos que el jugador $i$ pertenece al conjunto de jugadores $I$."
            }
          </li>
          <li>
            {
              "Estrategias: diremos que el jugador $i$ toma la estrategia $s_i$ de un conjunto de estrategias $S_i$."
            }
          </li>
          <li>
            {
              "Pagos: diremos que el jugador $i$ recibe de pago $u_i(s_i, s_{-i})$ dada su elección $s_i$ y la elección de los demás jugadores $s_{-i}$."
            }
          </li>
        </ul>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Ejemplo del dilema del prisionero</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base">
          Veamos el siguiente juego llamado <em>dilema del prisionero</em>.
        </p>

        <GameTable
          player1Strategies={["Callar", "Confesar"]}
          player2Strategies={["Callar", "Confesar"]}
          payoffs={[
            ["($0;0$)", "($-4;1$)"],
            ["($1;-4$)", "($-2;-2$)"],
          ]}
        />

        <p className="mt-4 text-sm sm:text-base">
          {
            "Se tienen dos jugadores, es decir, $I = \\{1, 2\\}$. Cada jugador tiene dos estrategias: $S_1 = \\{Callar, Confesar\\}$ y $S_2 = \\{Callar, Confesar\\}$. Cada jugador recibe un pago dependiendo de las estrategias elegidas por ambos jugadores, como se muestra en la tabla anterior."
          }
        </p>

        <h4 className="mt-6 text-sm sm:text-base md:text-lg">
          <strong>Concepto de Estrategia Estrictamente Dominada</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base">
          {
            "Una estrategia $s_i \\in S_i$ se dice que es estrictamente dominada si existe otra estrategia $s_i' \\in S_i$ tal que para cualquier combinación de estrategias de los demás jugadores $s_{-i} \\in S_{-i}$ se cumple que:"
          }
        </p>
        <p className="mt-2 text-center text-sm sm:text-base">
          {
            "$$u_i(s_i', s_{-i}) > u_i(s_i, s_{-i}) \\quad \\forall s_{-i} \\in S_{-i}$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base">
          En criollo: una estrategia domina estrictamente a otra solo si siempre
          es mejor, sin importar lo que hagan los demás jugadores.
        </p>

        <h4 className="mt-6 text-sm sm:text-base md:text-lg">
          <strong>Aplicación al dilema del prisionero</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base">
          El primer jugador va a decidir confesar cuando el segundo jugador
          decida confesar, y decidirá confesar cuando el segunda jugador decida
          callar. Viendolo en la tabla:
        </p>

        <GameTable
          player1Strategies={["Callar", "Confesar"]}
          player2Strategies={["Callar", "Confesar"]}
          payoffs={[
            ["($0;0$)", "($-4;1$)"],
            ["($\\textcolor{red}{1}; -4)$", "($\\textcolor{red}{-2}; -2)$"],
          ]}
        />

        <p className="mt-2 text-sm sm:text-base">
          El segundo jugador va a decidir confesar cuando el primero confiese; y
          decidirá confesar cuando el primero decida callar.
        </p>

        <GameTable
          player1Strategies={["Callar", "Confesar"]}
          player2Strategies={["Callar", "Confesar"]}
          payoffs={[
            ["($0;0$)", "($-4;\\textcolor{red}{1}$)"],
            ["($1;-4$)", "($-2;\\textcolor{red}{-2}$)"],
          ]}
        />

        <p className="mt-2 text-sm sm:text-base">
          En el dilema del prisionero, la estrategia $Confesar$ domina
          estrictamente a la estrategia $Callar$ para ambos jugadores, ya que
          independientemente de lo que haga el otro jugador, $Confesar$ siempre
          ofrece un pago mayor que $Callar$.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Definición de Racionalidad</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base">
          Un jugador es racional si no elige estrategias estrictamente
          dominadas. Para el caso anterior del dilema del prisionero, diríamos
          que los jugadores 1 y 2 son racionales si no escojen callar.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Otro caso de dilema del prisionero</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base">
          Cambiando un poco el juego pasado:
        </p>
        <GameTable
          player1Strategies={["Callar", "Confesar"]}
          player2Strategies={["Callar", "Confesar"]}
          payoffs={[
            ["($1;0$)", "($-4;1$)"],
            ["($1;-4$)", "($-2;-2$)"],
          ]}
        />

        <p className="mt-2 text-sm sm:text-base">
          Veamos que pasa para el primer jugador. Si el jugador 2 escoge
          $Callar$, el jugador 1 es indifirente entre $Callar$ y $Confesar$.
          Mientras que si el jugador 2 escoge $Confesar$, el jugador 1 prefiere
          $Confesar$. Viendolo en la tabla:
        </p>
        <GameTable
          player1Strategies={["Callar", "Confesar"]}
          player2Strategies={["Callar", "Confesar"]}
          payoffs={[
            ["($\\textcolor{red}{1};0$)", "($-4;1$)"],
            ["($\\textcolor{red}{1};-4$)", "($\\textcolor{red}{-2};-2$)"],
          ]}
        />

        <p className="mt-2 text-sm sm:text-base">
          Por lo tanto, ahora la estrategia $Callar$ no es estrictamente
          dominada por la estrategia $Confesar$ para el jugador 1.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Herramienta de Eliminación de EED</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base">
          La idea es eliminar estrategias estrictamente dominadas para
          simplificar el análisis del juego y suponiendo que la racionalidad es
          un conocimiento común.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Aplicación de la herramienta al caso anterior</strong>
        </h4>
        <p className="text-sm sm:text-base">
          Sabemos que el jugador 2 es racional, por lo tanto, nunca va a elegir
          la estrategia callar, así que pasamos a sacar esa columna, quedando el
          juego reducido:
        </p>

        <GameTable
          player1Strategies={["Callar", "Confesar"]}
          player2Strategies={["Confesar"]}
          payoffs={[["($-4;1$)"], ["($-2, -2 $)"]]}
        />

        <p className="mt-2 text-sm sm:text-base">
          Ahora, al primer jugador tendrá que decidir entre $Callar$ o
          $Confesar$, que viendo la matriz de pagos podemos ver que $Callar$ es
          EED por la estrategia $Confesar$, por lo que podemos quitar la fila de
          $Callar$, quedando el juego reducido:
        </p>

        <GameTable
          player1Strategies={["Confesar"]}
          player2Strategies={["Confesar"]}
          payoffs={[["($-2, -2 $)"]]}
        />

        <p className="text-sm sm:text-base">
          Llegamos al resultado donde ambos jugadores confesarán.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Definición de Equilibrio de Nash</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base">
          {
            "Un perfil de estrategias $s^* = (s_i^*, s_{-i}^*)$ es un equilibrio de Nash si para cada jugador $i \\in I$ se cumple que:"
          }
        </p>
        <p className="mt-2 text-center text-sm sm:text-base">
          {
            "$$u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) \\quad \\forall s_i \\in S_i$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Es decir, ningún jugador puede mejorar su pago cambiando
          unilateralmente su estrategia.
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Nota: el equilibrio es sobre un perfil de estrategias, es decir, un
          equilibrio de Nash es un vector que contenga todas las decisiones de
          cada jugador tal que nadie quiera cambiar de estrategia.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>
            Equilibrio de Nash aplicado al juego "guerra de los sexos"
          </strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base">
          Los dos integrantes de un matrimonio tienen que elegir una actividad
          para el fin de semana. Las actividades disponibles son ir al cine o ir
          al teatro. La mujer prefiere el teatro, mientras que el hombre
          prefiere el cine. Para ambos es mejor ir juntos que separados, aunque
          sea para realizar la actividad que prefiere el cónyuge.
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Representandolo en una tabla:
        </p>
        <GameTable
          player1Strategies={["T", "C"]}
          player2Strategies={["T", "C"]}
          payoffs={[
            ["($3; 1$)", "($0; 0$)"],
            ["($0; 0$)", "($1; 3$)"],
          ]}
        />

        <p className="mt-2 text-sm sm:text-base">
          Vemos que escogería en primer jugador dada la elección del segundo.
        </p>
        <GameTable
          player1Strategies={["T", "C"]}
          player2Strategies={["T", "C"]}
          payoffs={[
            ["($\\textcolor{red}{3}; 1$)", "($0; 0$)"],
            ["($0; 0$)", "($\\textcolor{red}{1}; 3$)"],
          ]}
        />

        <p className="text-sm sm:text-base">
          Ahora vemos que decide que el segundo jugador dada la elección del
          primero.
        </p>
        <GameTable
          player1Strategies={["T", "C"]}
          player2Strategies={["T", "C"]}
          payoffs={[
            ["($3; \\textcolor{red}{1}$)", "($0; 0$)"],
            ["($0; 0$)", "($1; \\textcolor{red}{3}$)"],
          ]}
        />
        <p className="mt-2 text-sm sm:text-base">
          Uniendo ambas elecciones en una misma tabla tenemos:
        </p>
        <GameTable
          player1Strategies={["T", "C"]}
          player2Strategies={["T", "C"]}
          payoffs={[
            ["($\\textcolor{red}{3}; \\textcolor{red}{1}$)", "($0; 0$)"],
            ["($0; 0$)", "($\\textcolor{red}{1}; \\textcolor{red}{3}$)"],
          ]}
        />
        <p className="mt-2 text-sm sm:text-base">
          {
            "Por lo tanto, tenemos dos equilibrios de Nash en este juego: $EN = \\{(T; T), (C; C)\\}$. Dado que en estos puntos, ningún jugador tiene incentivos a desviarse."
          }
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>
            Ejemplo de Equilibrio de Nash aplicado al juego de "combinación de
            centavos"
          </strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base">
          Dos jugadores deben elegir simultáneamente entre mostrar cara o cruz
          en una moneda. Si ambos muestran cara, el jugador 1 gana 1 unidad y el
          jugador 2 pierde 1 unidad. Si ambos muestran cruz, el jugador 1 gana 1
          unidad y el jugador 2 pierde 1 unidad. Si uno muestra cara y el otro
          cruz, el jugador 2 gana 1 unidad y el jugador 1 pierde 1 unidad.
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Representandolo en una tabla:
        </p>
        <GameTable
          player1Strategies={["A", "B"]}
          player2Strategies={["A", "B"]}
          payoffs={[
            ["($1; -1$)", "($-1; 1$)"],
            ["($-1; 1$)", "($1; -1$)"],
          ]}
        />
        <p className="mt-2 text-sm sm:text-base">
          Analizando las mejores respuestas de cada jugador, el jugador 1
          siempre prefiere elegir distinto que el jugador 2, y el jugador 2
          siempre prefiere elegir igual al jugador 1. Por lo tanto, no hay un
          equilibrio de Nash en estrategias puras en este juego. Viendolo en la
          tabla:
        </p>
        <GameTable
          player1Strategies={["A", "B"]}
          player2Strategies={["A", "B"]}
          payoffs={[
            ["($\\textcolor{red}{1}; -1$)", "$(-1; \\textcolor{red}{1})$"],
            ["$(-1; \\textcolor{red}{1})$", "($\\textcolor{red}{1}; -1$)"],
          ]}
        />
        <p className="text-sm sm:text-base">
          Por lo tanto, tenemos un juego que no tiene equilibrios de Nash en
          estrategias puras y tampoco se puede resolver con Estrategias
          Estrictamente Dominantes.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Definición de Estrategia Mixta</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base">
          Una estrategia mixta para un jugador es una distribución de
          probabilidad sobre sus estrategias puras. Es decir, en lugar de elegir
          una estrategia específica, el jugador asigna una probabilidad a cada
          una de sus estrategias puras y selecciona una estrategia de acuerdo
          con esa distribución.
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Por ejemplo, si un jugador tiene dos estrategias puras $A$ y $B$, una
          estrategia mixta podría ser elegir $A$ con una probabilidad del 70% y
          $B$ con una probabilidad del 30%.
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>
            Definición de Equilibrio de Nash con estrategias mixtas
          </strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base">
          Un perfil de estrategias mixtas es un equilibrio de Nash si ningún
          jugador puede mejorar su pago esperado cambiando unilateralmente su
          estrategia mixta, dado las estrategias mixtas de los demás jugadores.
        </p>
        <p className="mt-2 text-center text-sm sm:text-base">
          {
            "$$E[u_i(\\sigma_i^*, \\sigma_{-i}^*)] \\geq E[u_i(\\sigma_i, \\sigma_{-i}^*)] \\quad \\forall \\sigma_i$$"
          }
        </p>

        <p className="mt-2 text-sm sm:text-base">
          {
            "Donde $E[u_i(\\sigma_i, \\sigma_{-i})]$ es el pago esperado del jugador $i$ cuando juega la estrategia mixta $\\sigma_i$ y los demás jugadores juegan las estrategias mixtas $\\sigma_{-i}$."
          }
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Aplicación al juego de "combinación de centavos"</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base">
          Recordemos que no había equilibrio de Nash en estrategias puras en
          este juego. Y la tabla de pagos era:
        </p>
        <GameTable
          player1Strategies={["A", "B"]}
          player2Strategies={["A", "B"]}
          payoffs={[
            ["($1; -1$)", "($-1; 1$)"],
            ["($-1; 1$)", "($1; -1$)"],
          ]}
        />

        <p className="text-sm sm:text-base">
          Para encontrar el equilibrio de Nash en estrategias mixtas, debemos
          determinar las probabilidades con las que cada jugador elige sus
          estrategias puras de manera que ninguno tenga incentivos para
          desviarse unilateralmente. Podemos escribir la utilidad esperada del
          jugador 1 de la siguiente manera:
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {
            "$$E[u_1(p, q)] = p \\cdot E[u_1(A, q)] + (1-p) \\cdot E[u_1(B, q)]$$ "
          }
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Donde $E[u_1(A, q)]$ es la utilidad esperada del jugador 1 cuando
          elige $A$ y el jugador 2 elige su estrategia mixta con probabilidad
          $q$. Similarmente, $E[u_1(B, q)]$ es la utilidad esperada del jugador
          1 cuando elige $B$ dada la estrategia mixta del otro jugador.
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Calculando estas utilidades esperadas:
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {"$$E[u_1(A, q)] = 1 \\cdot q + (-1) \\cdot (1-q) = 2q - 1$$"}
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {"$$E[u_1(B, q)] = (-1) \\cdot q + 1 \\cdot (1-q) = 1 - 2q$$"}
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Entonces, la utilidad esperada del jugador 1 es:
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {
            "$$E[u_1(p, q)] = p \\cdot (2q - 1) + (1-p) \\cdot (1 - 2q) = (4q - 2)p + (1 - 2q)$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base">
          De manera similar, podemos escribir la utilidad esperada del jugador 2
          como:
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {"$$E[u_2(p, q)] = q \\cdot E(A, p) + (1-q) \\cdot E(B, p)$$"}
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Calculando estas utilidades esperadas:
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {"$$E(A, p) = p \\cdot (-1) + (1-p) \\cdot 1 = 1 - 2p$$"}
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {"$$E(B, p) = p \\cdot 1 + (1-p) \\cdot (-1) = 2p - 1$$"}
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Entonces, la utilidad esperada del jugador 2 es:
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {
            "$$E[u_2(p, q)] = q \\cdot (1 - 2p) + (1-q) \\cdot (2p - 1) = (4p - 2)q + (1 - 2p)$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Para encontrar el equilibrio de Nash, debemos encontrar las
          probabilidades $p$ y $q$ que maximizan las utilidades esperadas de
          ambos jugadores. Esto ocurre cuando las derivadas parciales de las
          utilidades esperadas con respecto a $p$ y $q$ son iguales a cero:
        </p>

        <p className="mt-2 text-sm sm:text-base">
          {
            "$$\\frac{\\partial E[u_1(p, q)]}{\\partial p} = 4q - 2 = 0 \\quad \\Rightarrow \\quad q = \\frac{1}{2}$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {
            "$$\\frac{\\partial E[u_2(p, q)]}{\\partial q} = 4p - 2 = 0 \\quad \\Rightarrow \\quad p = \\frac{1}{2}$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {
            "Por lo tanto, el equilibrio de Nash en estrategias mixtas es que ambos jugadores elijan A y B con una probabilidad del 50%. Es decir, el perfil de estrategias mixtas de equilibrio de Nash es $(p^*, q^*) = \\left(\\frac{1}{2}, \\frac{1}{2}\\right)$."
          }
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Aplicación al juego de "guerra de los sexos"</strong>
        </h4>
        <p className="mt-2 text-sm sm:text-base">
          El juego tiene la siguiente tabla
        </p>
        <GameTable
          player1Strategies={["T", "C"]}
          player2Strategies={["T", "C"]}
          payoffs={[
            ["($3; 1$)", "($0; 0$)"],
            ["($0; 0$)", "($1; 3$)"],
          ]}
        />
        <p className="mt-2 text-sm sm:text-base">
          Siguiendo un procedimiento similar al del juego de combinación de
          centavos, podemos definir las estrategias mixtas para ambos jugadores.
          Sea $p$ la probabilidad de que el jugador 1 elija T y $1-p$ la
          probabilidad de que elija C. Sea $q$ la probabilidad de que el jugador
          2 elija T y $1-q$ la probabilidad de que elija C.
        </p>
        <p className="mt-2 text-sm sm:text-base">
          La utilidad esperada del jugador 1 es:
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {
            "$$E[u_1(p, q)] = p \\cdot E[u_1(T, q)] + (1-p) \\cdot E[u_1(C, q)]$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Calculando estas utilidades esperadas:
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {"$$E[u_1(T, q)] = q \\cdot 3 + (1-q) \\cdot 0 = 3q$$"}
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {"$$E[u_1(C, q)] = q \\cdot 0 + (1-q) \\cdot 1 = 1 - q$$"}
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Entonces, la utilidad esperada del jugador 1 es:
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {
            "$$E[u_1(p, q)] = p \\cdot 3q + (1-p) \\cdot (1 - q) = (4q - 1)p + (1 - q)$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base">
          De manera similar, la utilidad esperada del jugador 2 es:
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {
            "$$E[u_2(p, q)] = q \\cdot E[u_2(T, p)] + (1-q) \\cdot E[u_2(C, p)]$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Calculando estas utilidades esperadas:
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {"$$E[u_2(T, p)] = p \\cdot 1 + (1-p) \\cdot 0 = p$$"}
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {"$$E[u_2(C, p)] = p \\cdot 0 + (1-p) \\cdot 3 = 3(1 - p)$$"}
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Entonces, la utilidad esperada del jugador 2 es:
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {
            "$$E[u_2(p, q)] = q \\cdot p + (1-q) \\cdot 3(1 - p) = (4p - 3)q + 3(1 - p)$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Para encontrar el equilibrio de Nash, debemos encontrar las
          probabilidades $p$ y $q$ que maximizan las utilidades esperadas de
          ambos jugadores. Esto ocurre cuando las derivadas parciales de las
          utilidades esperadas con respecto a $p$ y $q$ son iguales a cero:
        </p>

        <p className="mt-2 text-sm sm:text-base">
          {
            "$$\\frac{\\partial E[u_1(p, q)]}{\\partial p} = 4q - 1 = 0 \\quad \\Rightarrow \\quad q = \\frac{1}{4}$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {
            "$$\\frac{\\partial E[u_2(p, q)]}{\\partial q} = 4p - 3 = 0 \\quad \\Rightarrow \\quad p = \\frac{3}{4}$$"
          }
        </p>
        <p className="mt-2 text-sm sm:text-base">
          {
            "Por lo tanto, el equilibrio de Nash en estrategias mixtas es que el jugador 1 elija $T$ con una probabilidad del 75% y $C$ con una probabilidad del 25%, mientras que el jugador 2 elija $T$ con una probabilidad del 25% y $C$ con una probabilidad del 75%. Es decir, el perfil de estrategias mixtas de equilibrio de Nash es $(p^*, q^*) = \\left(\\frac{3}{4}, \\frac{1}{4}\\right)$."
          }
        </p>

        <h4 className="mt-4 text-sm sm:text-base md:text-lg">
          <strong>Que vimos?</strong>
        </h4>
        <ul className="list-disc text-sm sm:text-lg mt-4 pl-4 sm:pl-6 md:pl-8">
          <li>
            Un juego consiste de tres elementos: jugadores, estrategias y pagos.
          </li>
          <li>
            Definición de Estrategias Estrictamente Dominantes (EED) y cómo
            aplicarlas para simplificar el análisis de un juego.
          </li>
          <li>
            Equilibrio de Nash en estrategias puras y cómo identificarlo en una
            matriz de pagos.
          </li>
          <li>
            Proceso: Buscar mejores respuestas para cada jugador. Estas nos
            pueden dar un indicio de cuales son EED. Verificar EED. Buscar
            equilibrios donde las mejores respuestas coincidan.
          </li>
          <li>
            Estrategias mixtas y cómo encontrar equilibrios de Nash en
            estrategias mixtas.
          </li>
        </ul>

        {/* Practica */}
        <h3 className="text-xl sm:text-2xl font-semibold text-[#1d2554] mt-6">
          Práctica
        </h3>
        <hr />
        <ul className="flex gap-2 flex-wrap">
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-1`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 1
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-2`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 2
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-3`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 3
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-4`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 4
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-5`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 5
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-6`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 6
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-7`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 7
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-8`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 8
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-9`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 9
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-10`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 10
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-11`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 11
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-12`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 12
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-13`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 13
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-14`}
            className="bg-[#1d2554] text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-sm sm:text-base rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 14
          </Link>
        </ul>
        <Outlet />
        <hr className="mt-6" />
        <h3 className="text-xl sm:text-2xl font-semibold text-[#1d2554] mt-4">
          Contacto
        </h3>
        <p className="mt-2 mb-6 text-sm sm:text-base">
          Para alguna modificación o sugerencia, por favor mandar mail a{" "}
          <a
            href="mailto:armando.charal1998@gmail.com"
            className=" text-[#1d2554] hover:text-[#374785] underline hover:no-underline"
          >
            armando.charal1998@gmail.com
          </a>
        </p>
      </section>
    </MathJax>
  );
};

export default Unidad2;
