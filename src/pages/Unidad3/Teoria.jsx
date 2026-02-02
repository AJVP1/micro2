// importamos Link para navegacion interna
import { Link, Outlet } from "react-router-dom";
// importamos MathJax para formulas matematicas
import { MathJax } from "better-react-mathjax";

const Unidad3 = () => {
  return (
    <MathJax>
      <section className="bg-[#fafafa] max-w-270 mx-auto p-6">
        <h2 className="text-4xl font-bold text-center text-[#1d2554] mt-6">
          Decisiones bajo incertidumbre
        </h2>

        <h3 className="text-2xl font-semibold text-[#1d2554] mt-6">Teoría</h3>
        <hr />

        <h4 className="mt-4">
          <strong>Elementos</strong>
        </h4>
        <ul className="list-disc text-lg mt-4 pl-8">
          <li>
            {
              "Resultados: conjunto de posibles resultados $C= (\\:c_1;\\: c_2; \\:...;\\: c_n)$."
            }
          </li>
          <li>
            {
              "Loteria: probabilidad de ocurrencia asignada a cada resultado $\\ell= (\\:p_1;\\: p_2; \\:...;\\: p_n)$ con $0 \\leq p_i \\leq 1$ y $\\sum_{i=1}^n p_i = 1$."
            }
          </li>
          <li>
            {
              "Preferencias: definidas sobre loterías $L = (\\: \\ell_1;\\: \\ell_2; \\:...;\\: \\ell_m)$, esto es, relación entre loterías tal que existen relaciones de preferencias entre estas."
            }
          </li>
          <li>
            {
              "Utilidad: funciones de utilidad que dependen de los resultados, y devuelven la utilidad los mismos resultados."
            }
          </li>
        </ul>

        <h4 className="mt-4">
          <strong>Axioma de completitud</strong>
        </h4>
        <p className="mt-2">
          {
            "Para cualesquiera dos loterías $\\ell_1$ y $\\ell_2$, se cumple que: $\\ell_1 \\succeq \\ell_2$ o $\\ell_2 \\succeq \\ell_1$ (o ambas)."
          }
        </p>

        <h4 className="mt-4">
          <strong>Axioma de transitividad</strong>
        </h4>
        <p className="mt-2">
          {
            "Para cualesquiera tres loterías $\\ell_1$, $\\ell_2$ y $\\ell_3$, se cumple que: si $\\ell_1 \\succeq \\ell_2$ y $\\ell_2 \\succeq \\ell_3$, entonces $\\ell_1 \\succeq \\ell_3$."
          }
        </p>

        <h4 className="mt-4">
          <strong>Axioma de continuidad</strong>
        </h4>
        <p className="mt-2">
          {
            "Para cualesquiera tres loterías $\\ell_1$, $\\ell_2$ y $\\ell_3$, con $\\ell_1 \\succeq \\ell_2 \\succeq \\ell_3$, existe un $\\alpha \\in (0,1)$ tal que: $\\ell_2 \\sim \\alpha \\ell_1 + (1-\\alpha) \\ell_3$."
          }
        </p>

        <h4 className="mt-4">
          <strong>Axioma de independencia</strong>
        </h4>
        <p className="mt-2">
          {
            "Si $\\ell_1 \\succeq \\ell_2$, entonces para cualquier lotería $\\ell$ y cualquier $\\alpha \\in (0,1)$, se cumple que:."
          }
        </p>
        <p className="mt-2">
          {
            "$$\\ell_1 \\succeq \\ell_2 \\implies \\alpha \\ell_1 \\succeq \\alpha \\ell_2 \\implies \\alpha \\ell_1 + (1-\\alpha) \\ell_2 \\succeq \\alpha \\ell_2 + (1-\\alpha) \\ell_2$$"
          }
        </p>

        <h4 className="mt-4">
          <strong>Teorema de la Utilidad Esperada</strong>
        </h4>
        <p className="mt-2">
          {
            "Si las preferencias sobre loterías cumplen los axiomas de completitud, transitividad, continuidad e independencia, entonces existe una función de utilidad $u(c)$ definida sobre los resultados tal que las preferencias sobre loterías pueden ser representadas por la utilidad esperada."
          }
        </p>
        <p className="mt-2">{"$$u^e(\\ell) = \\sum_{i=1}^n p_i u(c_i)$$"}</p>

        <h4 className="mt-4">
          <strong>Definición de aversión al riesgo</strong>
        </h4>
        <p className="mt-2">
          Un agente es averso al riesgo si prefiere la utilidad esperada de una
          lotería segura a la utilidad esperada de una lotería riesgosa con el
          mismo valor esperado.
        </p>
        <p className="mt-2">{"$$ u(f(x)) \\ge u(E[x]) $$"}</p>
        <p className="mt-2">
          De forma análoga, un agente es amante del riesgo si prefiere la
          utilidad esperada de una lotería riesgosa a la utilidad esperada de
          una lotería segura con el mismo valor esperado.
        </p>
        <p className="mt-2">{"$$ u(f(x)) \\le u(E[x]) $$"}</p>

        <h4 className="mt-4">
          <strong>Monto equivalente cierto</strong>
        </h4>
        <p className="mt-2">
          {
            "Dadas la lotería $f(x)$ y las utilidades $u(x)$, el valor de monto equivalente cierto $\\hat x$ es aquel que deja indiferente al individuo entre la lotería y el pago cierto."
          }
        </p>
        <p className="mt-2">{"$$u(f(\\hat{x})) = u(E[\\hat{x}])$$"}</p>

        <h4 className="mt-4">
          <strong>Coeficiente de Arrow-Pratt</strong>
        </h4>
        <p className="mt-2">
          {
            "El coeficiente de aversión al riesgo de Arrow-Pratt mide la aversión al riesgo de un individuo en un punto específico de su función de utilidad. Se define como:"
          }
        </p>
        <p className="mt-2">{"$$ A(x) = -\\frac{u''(x)}{u'(x)} $$"}</p>
        <p className="mt-2">
          {
            "Donde $u'(x)$ es la primera derivada de la función de utilidad y $u''(x)$ es la segunda derivada. Un valor positivo de $A(x)$ indica aversión al riesgo, un valor negativo indica amor al riesgo, y un valor de cero indica neutralidad al riesgo."
          }
        </p>

        <h4 className="mt-4">
          <strong>Ejemplo de compra de un seguro</strong>
        </h4>
        <p className="mt-2">
          {
            "Sea un individuo con riqueza inicial $w_0$ que enfrenta una posible pérdida $l$ con probabilidad $p$. El individuo puede comprar un seguro que cubre la pérdida a un costo $c$. La utilidad esperada sin seguro es:"
          }
        </p>
        <p className="mt-2">
          {"$$ U_{sin\\ seguro} = p \\cdot u(w_0 - l) + (1-p)\\cdot u(w_0) $$"}
        </p>
        <p className="mt-2">
          {
            "Ahora supongamos el agente puede elegir cuantas cantidades asegurar, sean $q$ las cantidades aseguradas. Y sea $e$ el costo por unidad asegurada. Entonces la utilidad esperada con el seguro es:"
          }
        </p>
        <p className="mt-2">
          {
            "$$ U_{con\\ seguro} = p \\cdot u(w_0 - e \\cdot q + q - l) + (1-p) \\cdot u(w_0 - e \\cdot q) $$"
          }
        </p>
        <p className="mt-2">
          {
            "El agente elegirá la cantidad asegurada $q$ que maximice su utilidad esperada. Haciendo condiciones de primer orden:"
          }
        </p>
        <p className="mt-2">
          {
            "$$ \\frac{\\partial U_{con\\ seguro}}{\\partial q} =  0 \\implies p \\cdot (1-e) \\cdot u'(w_0 - e \\cdot q + q - l) + (1-p) \\cdot (-e) \\cdot u'(w_0 - e \\cdot q) = 0 $$"
          }
        </p>
        <p className="mt-2">
          {
            "$$ p \\cdot (1-e) \\cdot u'(w_0 - e \\cdot q + q - l) = (1-p) \\cdot e \\cdot u'(w_0 - e \\cdot q)$$"
          }
        </p>
        <p className="mt-2">
          {
            "$$ \\frac{p}{(1-p)} \\cdot \\frac{u'(w_0 - e \\cdot q + q - l)}{u'(w_0 - e \\cdot q)}   = \\frac{e}{(1-e)} $$"
          }
        </p>
        <p className="mt-2">
          {
            "Implícitamente tenemos las cantidades de equilibrio tal que el individuo maximiza la utilidad esperada. Viendo que pasa cuando $p = e$, es decir, cuando se iguala la probabilidad de ocurrir el siniestro y el costo por unidad:"
          }
        </p>
        <p className="mt-2">
          {"$$ u'(w_0 - e \\cdot q + q - l) =  u'(w_0 - e \\cdot q) $$"}
        </p>
        <p className="mt-2">
          Este es el caso de un seguro actuarialmente justo, lo que paga el
          seguro se iguala en promedio a lo que pierde el cliente. En este
          escenario, al cliente le conviene asegurar todas las cantidades dado
          que varía en la misma proporción la utilidad tanto si ocurre el suceso
          o si no ocurre.
        </p>

        <h4 className="mt-4">
          <strong>Que vimos?</strong>
        </h4>
        <ul className="list-disc list-inside mt-2">
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
        <h3 className="text-2xl font-semibold text-[#1d2554] mt-6">Práctica</h3>
        <hr />
        <ul className="flex gap-2 flex-wrap">
          <Link
            to={`/decisiones-bajo-incertidumbre/ejercicio-1`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 1
          </Link>
          <Link
            to={`/decisiones-bajo-incertidumbre/ejercicio-2`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 2
          </Link>
          <Link
            to={`/decisiones-bajo-incertidumbre/ejercicio-3`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 3
          </Link>
          <Link
            to={`/decisiones-bajo-incertidumbre/ejercicio-4`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 4
          </Link>
          <Link
            to={`/decisiones-bajo-incertidumbre/ejercicio-5`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 5
          </Link>
          <Link
            to={`/decisiones-bajo-incertidumbre/ejercicio-6`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 6
          </Link>
          <Link
            to={`/decisiones-bajo-incertidumbre/ejercicio-7`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 7
          </Link>
          <Link
            to={`/decisiones-bajo-incertidumbre/ejercicio-8`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 8
          </Link>
          <Link
            to={`/decisiones-bajo-incertidumbre/ejercicio-9`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 9
          </Link>
          <Link
            to={`/decisiones-bajo-incertidumbre/ejercicio-10`}
            className="bg-[#1d2554] text-white px-4 py-2 rounded mt-4 hover:bg-[#374785] transition-colors"
          >
            Ejercicio 10
          </Link>
          <Link
            to={`/decisiones-bajo-incertidumbre/ejercicio-11`}
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

export default Unidad3;
