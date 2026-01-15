// importamos Link para navegacion interna
import { Link, Outlet } from "react-router-dom";
// importamos MathJax para formulas matematicas
import { MathJax } from "better-react-mathjax";

const Unidad2 = () => {
  return (
    <MathJax>
      <section className="bg-[#fafafa] max-w-270 mx-auto p-6">
        <h2 className="text-4xl font-bold text-center text-[#1d2554] mt-6">
          Juegos Estáticos con información completa
        </h2>

        <h3 className="text-2xl font-semibold text-[#1d2554] mt-6">Teoría</h3>
        <hr />

        <h4 className="mt-4">
          <strong>Elementos</strong>
        </h4>
        <ul className="list-disc text-lg mt-4 pl-8">
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

        <h4 className="mt-4">
          <strong>Ejemplo del dilema del prisionero</strong>
        </h4>
        <p className="mt-2">
          Veamos el siguiente juego llamado <em>dilema del prisionero</em>.
        </p>

        <table className="mt-4 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">Callar</td>
              <td className="border border-black p-3">Confesar</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">Callar</td>
              <td className="border border-black p-3 text-center">
                {"$(0; 0)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(-4; 1)$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">Confesar</td>
              <td className="border border-black p-3 text-center">
                {"$(1; -4)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(-2; -2)$"}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4">
          {
            "Se tienen dos jugadores, es decir, $I = \\{1, 2\\}$. Cada jugador tiene dos estrategias: $S_1 = \\{Callar, Confesar\\}$ y $S_2 = \\{Callar, Confesar\\}$. Cada jugador recibe un pago dependiendo de las estrategias elegidas por ambos jugadores, como se muestra en la tabla anterior."
          }
        </p>

        <h4 className="mt-6">
          <strong>Concepto de Estrategia Estrictamente Dominada</strong>
        </h4>
        <p className="mt-2">
          {
            "Una estrategia $s_i \\in S_i$ se dice que es estrictamente dominada si existe otra estrategia $s_i' \\in S_i$ tal que para cualquier combinación de estrategias de los demás jugadores $s_{-i} \\in S_{-i}$ se cumple que:"
          }
        </p>
        <p className="mt-2 text-center">
          {
            "$$u_i(s_i', s_{-i}) > u_i(s_i, s_{-i}) \\quad \\forall s_{-i} \\in S_{-i}$$"
          }
        </p>

        <h4 className="mt-6">
          <strong>Aplicación al dilema del prisionero</strong>
        </h4>
        <p className="mt-2">
          La idea es escoger la estrategia que maximice el pago para cada
          jugador, dado lo que el otro jugador elija.
        </p>
        <p className="mt-2">
          El primer jugador va a decidir confesar cuando el segundo jugador
          decida confesar, y decidirá confesar cuando el segunda jugador decida
          callar. Viendolo en la tabla:
        </p>

        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">Callar</td>
              <td className="border border-black p-3">Confesar</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">Callar</td>
              <td className="border border-black p-3 text-center">
                {"$(0; 0)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(-4; 1)$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">Confesar</td>
              <td className="border border-black p-3 text-center">
                {"$(\\textcolor{red}{1}; -4)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(\\textcolor{red}{-2}; -2)$"}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-2">
          El segundo jugador va a decidir confesar cuando el primero confiese; y
          decidirá confesar cuando el primero decida callar.
        </p>

        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">Callar</td>
              <td className="border border-black p-3">Confesar</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">Callar</td>
              <td className="border border-black p-3 text-center">
                {"$(0; 0)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(-4; \\textcolor{red}{1})$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">Confesar</td>
              <td className="border border-black p-3 text-center">
                {"$(1; -4)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(-2; \\textcolor{red}{-2})$"}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-2">
          En el dilema del prisionero, la estrategia "Confesar" es estrictamente
          dominada para ambos jugadores, ya que independientemente de lo que
          haga el otro jugador, "Confesar" siempre ofrece un pago mayor que
          "Callar".
        </p>

        <h4 className="mt-4">
          <strong>Definición de Racionalidad</strong>
        </h4>
        <p className="mt-2">
          Un jugador es racional si no elige estrategias estrictamente
          dominadas.
        </p>
        <p className="mt-2">
          Para el caso anterior del dilema del prisionero, diríamos que los
          jugadores 1 y 2 son racionales si no escojen callar.
        </p>

        <h4 className="mt-4">
          <strong>Otro caso de dilema del prisionero</strong>
        </h4>
        <p className="mt-2">Cambiando un poco el juego pasado:</p>
        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">Callar</td>
              <td className="border border-black p-3">Confesar</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">Callar</td>
              <td className="border border-black p-3 text-center">
                {"$(1; 0)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(-4; 1)$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">Confesar</td>
              <td className="border border-black p-3 text-center">
                {"$(1; -4)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(-2; -2)$"}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-2">
          Veamos que pasa para el primer jugador. Si el jugador 2 escoge callar,
          el jugador 1 es indifirente entre callar y confesar. Mientras que si
          el jugador 2 escoge confesar, el jugador 1 prefiere confesar. Viendolo
          en la tabla:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">Callar</td>
              <td className="border border-black p-3">Confesar</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">Callar</td>
              <td className="border border-black p-3 text-center">
                {"$(\\textcolor{red}{1}; 0)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(-4; 1)$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">Confesar</td>
              <td className="border border-black p-3 text-center">
                {"$(\\textcolor{red}{1}; -4)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(\\textcolor{red}{-2}; -2)$"}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-2">
          Mientras que para el segundo jugador se sigue mantiendo la EED
          (Estrategia Estrictamente Dominada).
        </p>

        <h4 className="mt-4">
          <strong>Herramienta de Eliminación de EED</strong>
        </h4>
        <p className="mt-2">
          La idea es eliminar estrategias estrictamente dominadas para
          simplificar el análisis del juego y suponiendo que la racionalidad es
          un conocimiento común.
        </p>

        <h4 className="mt-4">
          <strong>Aplicación de la herramienta al caso anterior</strong>
        </h4>
        <p>
          Sabemos que el jugador 2 es racional, por lo tanto, nunca va a elegir
          la estrategia callar, así que pasamos a sacar esa columna, quedando el
          juego reducido:
        </p>

        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">Confesar</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">Callar</td>
              <td className="border border-black p-3 text-center">
                {"$(-4; 1)$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">Confesar</td>
              <td className="border border-black p-3 text-center">
                {"$(-2; -2)$"}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-2">
          Ahora, al primer jugador tendrá que decidir entre callar o confesar,
          que viendo la matriz de pagos podemos ver que callar es EED por la
          estrategia confesar, por lo que podemos quitar la fila de callar,
          quedando el juego reducido:
        </p>

        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">Confesar</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">Confesar</td>
              <td className="border border-black p-3 text-center">
                {"$(-2; -2)$"}
              </td>
            </tr>
          </tbody>
        </table>
        <p>Llegamos al resultado donde ambos jugadores confesarán.</p>

        <h4 className="mt-4">
          <strong>Definición de Equilibrio de Nash</strong>
        </h4>
        <p className="mt-2">
          {
            "Un perfil de estrategias $s^* = (s_i^*, s_{-i}^*)$ es un equilibrio de Nash si para cada jugador $i \\in I$ se cumple que:"
          }
        </p>
        <p className="mt-2 text-center">
          {
            "$$u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) \\quad \\forall s_i \\in S_i$$"
          }
        </p>
        <p className="mt-2">
          Es decir, ningún jugador puede mejorar su pago cambiando
          unilateralmente su estrategia.
        </p>
        <p className="mt-2">
          Nota: el equilibrio es sobre un perfil de estrategias, es decir, un
          equilibrio de Nash es un vector que contenga todas las decisiones de
          cada jugador tal que nadie quiera cambiar de estrategia.
        </p>

        <h4 className="mt-4">
          <strong>
            Equilibrio de Nash aplicado al juego "guerra de los sexos"
          </strong>
        </h4>
        <p className="mt-2">
          Los dos integrantes de un matrimonio tienen que elegir una actividad
          para el fin de semana. Las actividades disponibles son ir al cine o ir
          al teatro. La mujer prefiere el teatro, mientras que el hombre
          prefiere el cine. Para ambos es mejor ir juntos que separados, aunque
          sea para realizar la actividad que prefiere el cónyuge.
        </p>
        <p className="mt-2">Representandolo en una tabla:</p>
        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">T</td>
              <td className="border border-black p-3">C </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">T</td>
              <td className="border border-black p-3 text-center">
                {"$(3; 1)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(0; 0)$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">C</td>
              <td className="border border-black p-3 text-center">
                {"$(0; 0)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(1; 3)$"}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-2">
          Vemos que escogería en primer jugador dada la elección del segundo.
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">T</td>
              <td className="border border-black p-3">C </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">T</td>
              <td className="border border-black p-3 text-center">
                {"$(\\textcolor{red}{3}; 1)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(0; 0)$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">C</td>
              <td className="border border-black p-3 text-center">
                {"$(0; 0)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(\\textcolor{red}{1}; 3)$"}
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          Ahora vemos que decide que el segundo jugador dada la elección del
          primero.
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">T</td>
              <td className="border border-black p-3">C </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">T</td>
              <td className="border border-black p-3 text-center">
                {"$(3; \\textcolor{red}{1})$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(0; 0)$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">C</td>
              <td className="border border-black p-3 text-center">
                {"$(0; 0)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(1; \\textcolor{red}{3})$"}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-2">
          Uniendo ambas elecciones en una misma tabla tenemos:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">T</td>
              <td className="border border-black p-3">C </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">T</td>
              <td className="border border-black p-3 text-center">
                {"$(\\textcolor{red}{3}; \\textcolor{red}{1})$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(0; 0)$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">C</td>
              <td className="border border-black p-3 text-center">
                {"$(0; 0)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(\\textcolor{red}{1}; \\textcolor{red}{3})$"}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          Por lo tanto, tenemos dos equilibrios de Nash en este juego: (T, T)
          y(C, C).
        </p>

        <h4 className="mt-4">
          <strong>
            Ejemplo de Equilibrio de Nash aplicado al juego de "combinación de
            centavos"
          </strong>
        </h4>
        <p className="mt-2">
          Dos jugadores deben elegir simultáneamente entre mostrar cara o cruz
          en una moneda. Si ambos muestran cara, el jugador 1 gana 1 unidad y el
          jugador 2 pierde 1 unidad. Si ambos muestran cruz, el jugador 1 gana 1
          unidad y el jugador 2 pierde 1 unidad. Si uno muestra cara y el otro
          cruz, el jugador 2 gana 1 unidad y el jugador 1 pierde 1 unidad.
        </p>
        <p className="mt-2">Representandolo en una tabla:</p>
        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">A</td>
              <td className="border border-black p-3">B</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">A</td>
              <td className="border border-black p-3 text-center">
                {"$(1; -1)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(-1; 1)$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">B</td>
              <td className="border border-black p-3 text-center">
                {"$(-1; 1)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(1; -1)$"}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          Analizando las mejores respuestas de cada jugador, el jugador 1
          siempre prefiere elegir distinto que el jugador 2, y el jugador 2
          siempre prefiere elegir igual al jugador 1. Por lo tanto, no hay un
          equilibrio de Nash en estrategias puras en este juego. Viendolo en la
          tabla:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">A</td>
              <td className="border border-black p-3">B</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">A</td>
              <td className="border border-black p-3 text-center">
                {"$(\\textcolor{red}{1}; -1)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(-1; \\textcolor{red}{1})$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">B</td>
              <td className="border border-black p-3 text-center">
                {"$(-1; \\textcolor{red}{1})$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(\\textcolor{red}{1}; -1)$"}
              </td>
            </tr>
          </tbody>
        </table>

        <h4>
          <strong>Definición de Estrategia Mixta</strong>
        </h4>
        <p className="mt-2">
          Una estrategia mixta para un jugador es una distribución de
          probabilidad sobre sus estrategias puras. Es decir, en lugar de elegir
          una estrategia específica, el jugador asigna una probabilidad a cada
          una de sus estrategias puras y selecciona una estrategia de acuerdo
          con esa distribución.
        </p>
        <p className="mt-2">
          Por ejemplo, si un jugador tiene dos estrategias puras A y B, una
          estrategia mixta podría ser elegir A con una probabilidad del 70% y B
          con una probabilidad del 30%.
        </p>

        <h4 className="mt-4">
          <strong>
            {" "}
            Definición de Equilibrio de Nash con estrategias mixtas
          </strong>
        </h4>
        <p className="mt-2">
          Un perfil de estrategias mixtas es un equilibrio de Nash si ningún
          jugador puede mejorar su pago esperado cambiando unilateralmente su
          estrategia mixta, dado las estrategias mixtas de los demás jugadores.
        </p>
        <p className="mt-2 text-center">
          {
            "$$E[u_i(\\sigma_i^*, \\sigma_{-i}^*)] \\geq E[u_i(\\sigma_i, \\sigma_{-i}^*)] \\quad \\forall \\sigma_i$$"
          }
        </p>

        <p className="mt-2">
          {
            "Donde $E[u_i(\\sigma_i, \\sigma_{-i})]$ es el pago esperado del jugador $i$ cuando juega la estrategia mixta $\\sigma_i$ y los demás jugadores juegan las estrategias mixtas $\\sigma_{-i}$."
          }
        </p>

        <h4 className="mt-4">
          <strong>Aplicación al juego de "combinación de centavos"</strong>
        </h4>
        <p className="mt-2">
          Recordemos que no había equilibrio de Nash en estrategias puras en
          este juego. Y la tabla de pagos era:
        </p>
        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">A</td>
              <td className="border border-black p-3">B</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">A</td>
              <td className="border border-black p-3 text-center">
                {"$(1; -1)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(-1; 1)$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">B</td>
              <td className="border border-black p-3 text-center">
                {"$(-1; 1)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(1; -1)$"}
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          Para encontrar el equilibrio de Nash en estrategias mixtas, debemos
          determinar las probabilidades con las que cada jugador elige sus
          estrategias puras de manera que ninguno tenga incentivos para
          desviarse unilateralmente. Podemos escribir la utilidad esperada del
          jugador 1 de la siguiente manera:
        </p>
        <p className="mt-2">
          {"$$E[u_i(p, q)] = p \\cdot E(A, q) + (1-p) \\cdot E(B, q)$$ "}
        </p>
        <p className="mt-2">
          Donde $E(A, q)$ es la utilidad esperada del jugador 1 cuando elige A y
          el jugador 2 elige su estrategia mixta con probabilidad $q$.
          Similarmente, $E(B, q)$ es la utilidad esperada del jugador 1 cuando
          elige B.
        </p>
        <p className="mt-2">Calculando estas utilidades esperadas:</p>
        <p className="mt-2">
          {"$$E(A, q) = q \\cdot 1 + (1-q) \\cdot (-1) = 2q - 1$$"}
        </p>
        <p className="mt-2">
          {"$$E(B, q) = q \\cdot (-1) + (1-q) \\cdot 1 = 1 - 2q$$"}
        </p>
        <p className="mt-2">Entonces, la utilidad esperada del jugador 1 es:</p>
        <p className="mt-2">
          {
            "$$E[u_1(p, q)] = p \\cdot (2q - 1) + (1-p) \\cdot (1 - 2q) = (4q - 2)p + (1 - 2q)$$"
          }
        </p>
        <p className="mt-2">
          De manera similar, podemos escribir la utilidad esperada del jugador 2
          como:
        </p>
        <p className="mt-2">
          {"$$E[u_2(p, q)] = q \\cdot E(A, p) + (1-q) \\cdot E(B, p)$$"}
        </p>
        <p className="mt-2">Calculando estas utilidades esperadas:</p>
        <p className="mt-2">
          {"$$E(A, p) = p \\cdot (-1) + (1-p) \\cdot 1 = 1 - 2p$$"}
        </p>
        <p className="mt-2">
          {"$$E(B, p) = p \\cdot 1 + (1-p) \\cdot (-1) = 2p - 1$$"}
        </p>
        <p className="mt-2">Entonces, la utilidad esperada del jugador 2 es:</p>
        <p className="mt-2">
          {
            "$$E[u_2(p, q)] = q \\cdot (1 - 2p) + (1-q) \\cdot (2p - 1) = (4p - 2)q + (1 - 2p)$$"
          }
        </p>
        <p className="mt-2">
          Para encontrar el equilibrio de Nash, debemos encontrar las
          probabilidades $p$ y $q$ que maximizan las utilidades esperadas de
          ambos jugadores. Esto ocurre cuando las derivadas parciales de las
          utilidades esperadas con respecto a $p$ y $q$ son iguales a cero:
        </p>

        <p className="mt-2">
          {
            "$$\\frac{\\partial E[u_1(p, q)]}{\\partial p} = 4q - 2 = 0 \\quad \\Rightarrow \\quad q = \\frac{1}{2}$$"
          }
        </p>
        <p className="mt-2">
          {
            "$$\\frac{\\partial E[u_2(p, q)]}{\\partial q} = 4p - 2 = 0 \\quad \\Rightarrow \\quad p = \\frac{1}{2}$$"
          }
        </p>
        <p className="mt-2">
          {
            "Por lo tanto, el equilibrio de Nash en estrategias mixtas es que ambos jugadores elijan A y B con una probabilidad del 50%. Es decir, el perfil de estrategias mixtas de equilibrio de Nash es $(p^*, q^*) = \\left(\\frac{1}{2}, \\frac{1}{2}\\right)$."
          }
        </p>

        <h4 className="mt-4">
          <strong>Aplicación al juego de "guerra de los sexos"</strong>
        </h4>
        <p className="mt-2">El juego tiene la siguiente tabla</p>
        <table className="mt-7 mb-7 border-collapse mx-auto">
          <thead>
            <tr>
              <td className="p-3"></td>
              <td className="border border-black p-3">T</td>
              <td className="border border-black p-3">C </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 font-medium">T</td>
              <td className="border border-black p-3 text-center">
                {"$(3; 1)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(0; 0)$"}
              </td>
            </tr>
            <tr>
              <td className="border border-black p-3 font-medium">C</td>
              <td className="border border-black p-3 text-center">
                {"$(0; 0)$"}
              </td>
              <td className="border border-black p-3 text-center">
                {"$(1; 3)$"}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          Siguiendo un procedimiento similar al del juego de combinación de
          centavos, podemos definir las estrategias mixtas para ambos jugadores.
          Sea $p$ la probabilidad de que el jugador 1 elija T y $1-p$ la
          probabilidad de que elija C. Sea $q$ la probabilidad de que el jugador
          2 elija T y $1-q$ la probabilidad de que elija C.
        </p>
        <p className="mt-2">La utilidad esperada del jugador 1 es:</p>
        <p className="mt-2">
          {"$$E[u_1(p, q)] = p \\cdot E(T, q) + (1-p) \\cdot E(C, q)$$"}
        </p>
        <p className="mt-2">Calculando estas utilidades esperadas:</p>
        <p className="mt-2">
          {"$$E(T, q) = q \\cdot 3 + (1-q) \\cdot 0 = 3q$$"}
        </p>
        <p className="mt-2">
          {"$$E(C, q) = q \\cdot 0 + (1-q) \\cdot 1 = 1 - q$$"}
        </p>
        <p className="mt-2">Entonces, la utilidad esperada del jugador 1 es:</p>
        <p className="mt-2">
          {
            "$$E[u_1(p, q)] = p \\cdot 3q + (1-p) \\cdot (1 - q) = (4q - 1)p + (1 - q)$$"
          }
        </p>
        <p className="mt-2">
          De manera similar, la utilidad esperada del jugador 2 es:
        </p>
        <p className="mt-2">
          {"$$E[u_2(p, q)] = q \\cdot E(T, p) + (1-q) \\cdot E(C, p)$$"}
        </p>
        <p className="mt-2">Calculando estas utilidades esperadas:</p>
        <p className="mt-2">
          {"$$E(T, p) = p \\cdot 1 + (1-p) \\cdot 0 = p$$"}
        </p>
        <p className="mt-2">
          {"$$E(C, p) = p \\cdot 0 + (1-p) \\cdot 3 = 3(1 - p)$$"}
        </p>
        <p className="mt-2">Entonces, la utilidad esperada del jugador 2 es:</p>
        <p className="mt-2">
          {
            "$$E[u_2(p, q)] = q \\cdot p + (1-q) \\cdot 3(1 - p) = (4p - 3)q + 3(1 - p)$$"
          }
        </p>
        <p className="mt-2">
          Para encontrar el equilibrio de Nash, debemos encontrar las
          probabilidades $p$ y $q$ que maximizan las utilidades esperadas de
          ambos jugadores. Esto ocurre cuando las derivadas parciales de las
          utilidades esperadas con respecto a $p$ y $q$ son iguales a cero:
        </p>

        <p className="mt-2">
          {
            "$$\\frac{\\partial E[u_1(p, q)]}{\\partial p} = 4q - 1 = 0 \\quad \\Rightarrow \\quad q = \\frac{1}{4}$$"
          }
        </p>
        <p className="mt-2">
          {
            "$$\\frac{\\partial E[u_2(p, q)]}{\\partial q} = 4p - 3 = 0 \\quad \\Rightarrow \\quad p = \\frac{3}{4}$$"
          }
        </p>
        <p className="mt-2">
          {
            "Por lo tanto, el equilibrio de Nash en estrategias mixtas es que el jugador 1 elija T con una probabilidad del 75% y C con una probabilidad del 25%, mientras que el jugador 2 elija T con una probabilidad del 25% y C con una probabilidad del 75%. Es decir, el perfil de estrategias mixtas de equilibrio de Nash es $(p^*, q^*) = \\left(\\frac{3}{4}, \\frac{1}{4}\\right)$."
          }
        </p>

        {/* Practica */}
        <h3 className="text-2xl font-semibold text-[#1d2554] mt-6">Práctica</h3>
        <hr />
        <ul className="flex gap-2">
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-1`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 1
          </Link>
          <Link
            to={`/juegos-estaticos-informacion-completa/ejercicio-2`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 2
          </Link>
        </ul>
        <Outlet />
      </section>
    </MathJax>
  );
};

export default Unidad2;
