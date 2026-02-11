import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio10() {
  return (
    <ExerciseLayout number={10}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "Elección de portafolio. Los activos $A$ y $B$ cuestan $150$ cada uno. El valor que tendrán mañana depende del estado del mercado financiero. Asuma que existen solo dos estados posibles, $1$ y $2$. $A$ vale mañana $100$ o $200$ según se dé el estado $1$ o $2$, mientras que el activo $B$ vale $200$ o $100$, respectivamente. Un inversor tiene una riqueza inicial de $150$ y una función de utilidad dada por $v(c) = -e^{-c}$ donde $c$ es consumo."
        }
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Formalice el problema del inversor
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Muestre que la restricción presupuestaria contingente puede ser
          expresada como $c_1 + c_2 = 300$.
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Si el inversor cree que el estado 1 ocurrirá con probabilidad $\pi$,
          muestre que su consumo óptimo en el estado $1$ viene dado por:
          {
            "$$c_1^* = 150 + \\frac{1}{2} \\ln \\left(\\frac{\\pi}{1-\\pi}\\right).$$"
          }
        </li>
        <li className="mt-2 text-sm sm:text-base md:text-lg">
          Si $q_A$ es la cantidad de acciones que compra del activo $A$, muestre
          que $c_1 = 200 - 100q_A$. Obtenga una expresión para $q_A$ en función
          de $\pi$.
        </li>
      </ol>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 1. El inversor tiene que elegir un portafolio de activos
        que le permita maximizar su utilidad esperada, los posibles estados
        futuros y valores se representan en la siguiente tabla:
      </p>
      <table className="mx-auto mt-4 border border-gray-400 border-collapse text-sm sm:text-base md:text-lg">
        <tr>
          <td className="border border-gray-400 px-4 py-2"></td>
          <td className="border border-gray-400 px-4 py-2 font-semibold">
            Estado 1
          </td>
          <td className="border border-gray-400 px-4 py-2 font-semibold">
            Estado 2
          </td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2 font-semibold">
            Activo A
          </td>
          <td className="border border-gray-400 px-4 py-2">$100$</td>
          <td className="border border-gray-400 px-4 py-2">$200$</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2 font-semibold">
            Activo B
          </td>
          <td className="border border-gray-400 px-4 py-2">$200$</td>
          <td className="border border-gray-400 px-4 py-2">$100$</td>
        </tr>
      </table>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El problema del inversor es elegir una combinación de porciones de $A$ y
        $B$ que le permita maximizar su utilidad esperada, es decir, el problema
        del inversor es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$q_A p_A + q_B p_B = R$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        donde $q_A$ y $q_B$ son las cantidades de acciones que compra de los
        activos $A$ y $B$, respectivamente, $p_A$ y $p_B$ son los precios de los
        activos $A$ y $B$, respectivamente, y $R$ es la riqueza inicial del
        inversor. Ya que se trabaja en porciones de activos, entonces $p_A = p_B
        = 150$ y $R = 150$, por lo tanto, la restricción presupuestaria del
        inversor es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$q_A 150 + q_B 150 = 150$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$q_A + q_B = 1$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El pago que recibe el inversor en el estado $1$ es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ c_1 = q_A 100 + q_B 200$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El pago que recibe el inversor en el estado $2$ es:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ c_2 = q_A 200 + q_B 100$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        El problema del inversor es entonces elegir $q_A$ y $q_B$ que maximicen
        su utilidad esperada, es decir:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\max_{q_A, q_B} \\quad \\pi (-e^{-c_1}) + (1-\\pi) (-e^{-c_2})$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el punto 2.</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ c_1 + c_2 = 300$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_A 100 + q_B 200 + q_A 200 + q_B 100 = 300$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_A 300 + q_B 300 = 300$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_A + q_B = 1$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 3. Resolvemos el problema del inversor usando la
        restricción presupuestaria, es decir, reemplazamos $c_2$ por $300 - c_1$
        en la función objetivo:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\max_{c_1} \\quad \\pi (-e^{-c_1}) + (1-\\pi) (-e^{-300 + c_1})$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Derivando e igualando a cero, obtenemos:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$\\frac{d}{dc_1} \\left( \\pi (-e^{-c_1}) + (1-\\pi) (-e^{-300 + c_1}) \\right) = 0$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\pi (e^{-c_1}) - (1-\\pi) (e^{-300 + c_1})= 0$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\pi (e^{-c_1}) = (1-\\pi) (e^{-300 + c_1})$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Aplicando logaritmos, obtenemos:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$\\ln(\\pi) - c_1 = \\ln(1-\\pi) - 300 + c_1$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ -2c_1 = \\ln(1-\\pi) -\\ln(\\pi) - 300$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ 2c_1 = \\ln\\left(\\frac{\\pi}{1-\\pi}\\right) + 300$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ c_1 = \\frac{1}{2} \\ln\\left(\\frac{\\pi}{1-\\pi}\\right) + 150$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Para el punto 4. Sabiendo que:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ c_1 = 100q_A + 200q_B$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Y sabiendo que:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ q_B = 1 - q_A$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Entonces:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {"$$ c_1 = 100q_A + 200(1 - q_A) = 200 - 100q_A$$"}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Reemplazando en la función encontrada en el inciso anterior:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ c_1 = \\frac{1}{2} \\ln\\left(\\frac{\\pi}{1-\\pi}\\right) + 150$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ 200-100q_A = \\frac{1}{2} \\ln\\left(\\frac{\\pi}{1-\\pi}\\right) + 150$$"
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "$$ q_A = \\frac{1}{200} \\ln\\left(\\frac{\\pi}{1-\\pi}\\right) + 0,5$$"
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio10;
