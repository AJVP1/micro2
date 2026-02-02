import ExerciseLayout from "../../components/layout/ExerciseLayout";

function Ejercicio14() {
  return (
    <ExerciseLayout number={14}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "Cournot. Considere un modelo de oligopolio de Cournot de $n$ empresas con costos marginales simétricos. Sea $q_i$ la cantidad producida por la empresa $i$ y $Q = \\sum q_i$ la cantidad agregada producida en la economía de este bien homogéneo. Suponga que la demanda inversa de este bien viene dada por:"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">$$P(Q) = a - Q$$</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Además, siguiendo el modelo original de Cournot, todas las empresas
        deciden las cantidades producidas simultáneamente.
      </p>
      <ol className="list-decimal text-lg mt-4 pl-8">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre el EN de este juego. Ayuda: el juego es simétrico.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          {"¿Qué ocurre a medida que $n$ tiende a $\\infty$?"}
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          ¿Cómo afecta a las empresas, en términos de beneficios, y al
          consumidor, en términos de excedente, que haya más empresas? Explique
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Encuentre las cantidades de equilibrio de Nash $s_i$ para $n = 2$, $a
          = 24$ y $c_i = 0$
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          colusión: siguiendo con el caso 4., suponga que las empresas pueden
          firmar un acuerdo en el cual estipulan cuanto va a producir cada una.
          En particular, maximizan la suma de los beneficios de ambas empresas y
          dividen la cantidad total a producir por 2.
        </li>
        <ul className="list-disc text-lg mt-4 pl-8">
          <li className="mt-2 text-sm sm:text-base md:text-lg">
            ¿Cuánto producirá cada una de las empresas en esta situación?
          </li>
          <li className="mt-2 text-sm sm:text-base md:text-lg">
            Compare estos beneficios con los de Equilibrio de Nash
          </li>
          <li className="mt-2 text-sm sm:text-base md:text-lg">
            ¿Cómo afecta a las empresas, en términos de beneficios, y al
            consumidor, en términos de excedente, que exista un acuerdo de este
            tipo?
          </li>
          <li className="mt-2 text-sm sm:text-base md:text-lg">
            ¿Es el EN encontrado en 4. un óptimo de Pareto? ¿Por qué?
          </li>
        </ul>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 1. La firma $i$ maximiza su beneficio:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$\\pi_i = P(Q)q_i - c_i q_i = (a - Q)q_i  - c_i q_i = (a - \\sum q_i)q_i - c_i q_i = aq_i - q_i^2 - q_i \\sum q_-i - c_i q_i$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Condiciones de primer orden:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$\\frac{\\partial \\pi_i}{\\partial q_i} = 0  \\Rightarrow a-2q_i - \\sum q_-i - c_i = 0$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Despejando $q_i$ llegamos a:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$q_i = \\frac{a - \\sum q_{-i} - c_i}{2}$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Dado que el juego es simétrico, se puede pensar que al reemplazar las
        $n$ mejores respuestas en las demás se llega a la conclusión que cada
        empresa produce la misma cantidad. Por lo tanto, se puede reescribir la
        función de mejor respuesta de la empresa $i$ como
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$q_i = \\frac{a - \\sum q_{-i} - c_i}{2} \\Rightarrow q = \\frac{a - (n-1)q - c_i}{2}$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Despejando $q$ llegamos a:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$q = \\frac{a - c_i}{n+1}$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "Por lo tanto, el equilibrio de Nash es $\\left(\\frac{a - c_i}{n+1}, \\dots, \\frac{a - c_i}{n+1}\\right)$."
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 2., a medida que $n$ tiende a infinito, la cantidad
        producida por cada empresa tiende a cero.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$\\lim_{n \\to \\infty} q = \\lim_{n \\to \\infty} \\frac{a - c_i}{n+1} =  = 0$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 3., a medida que hay más empresas, la cantidad total
        producida en el mercado aumenta, lo que lleva a una disminución del
        precio de mercado. Esto beneficia a los consumidores, ya que pueden
        comprar más a un precio más bajo. Sin embargo, las empresas ven
        reducidos sus beneficios individuales debido a la mayor competencia.
      </p>

      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 4., con $n = 2$, $a = 24$ y $c_i = 0$, la cantidad de
        equilibrio de Nash para cada empresa es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$q_i = \\frac{24}{2+1} = 8$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por lo tanto, cada empresa produce 8 unidades en equilibrio de Nash.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 5.a, en una situación de colusión, las empresas maximizan
        la suma de sus beneficios conjuntos. La cantidad total producida se
        determina resolviendo:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\max_Q P(Q)Q = (24 - Q)Q = 24Q - Q^2$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Condiciones de primer orden:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$\\frac{\\partial (24Q - Q^2)}{\\partial Q} = 0 \\Rightarrow 24 - 2Q = 0$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Despejando $Q$ llegamos a:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$Q = \\frac{24}{2} = 12$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Dado que las empresas dividen la cantidad total por 2, cada empresa
        produce:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$q_i = \\frac{Q}{2} = \\frac{24}{4} = 6$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por lo tanto, en situación de colusión, cada empresa produce 6 unidades.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 5.b, comparando los beneficios en ambas situaciones:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En equilibrio de Nash, cada empresa produce 8 unidades a un precio de
        $P(16) = 24 - 16 = 8$, por lo que el beneficio de cada empresa es
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\pi_i = P(16)q_i = 8 \\times 8 = 64$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        En situación de colusión, cada empresa produce 6 unidades a un precio de
        $P(12) = 24 - 12 = 12$, por lo que el beneficio de cada empresa es
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\pi_i = P(12)q_i = 12 \\times 6 = 72$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Por lo tanto, los beneficios son mayores en la situación de colusión
        ($72$) en comparación con el equilibrio de Nash ($64$).
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 5.c, la colusión beneficia a las empresas al aumentar sus
        beneficios individuales. Sin embargo, esto perjudica a los consumidores,
        ya que el precio es más alto y la cantidad disponible es menor en
        comparación con el equilibrio de Nash.
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 5.d, el equilibrio de Nash encontrado en el punto 4 no es
        un óptimo de Pareto. En el equilibrio de Nash, ambas empresas producen
        más y el precio es más bajo, lo que beneficia a los consumidores. En la
        situación de colusión, aunque las empresas aumentan sus beneficios, los
        consumidores están peor debido al precio más alto y la menor cantidad
        disponible. Por lo tanto, no se puede mejorar la situación de una parte
        sin perjudicar a la otra, lo que indica que el equilibrio de Nash es un
        óptimo de Pareto.
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio14;
