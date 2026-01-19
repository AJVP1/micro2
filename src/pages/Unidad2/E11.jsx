import ExerciseLayout from "../../components/layout/ExerciseLayout";
import img1 from "../../assets/img1.png";

function Ejercicio11() {
  return (
    <ExerciseLayout number={11}>
      <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
      <p className="mt-2">
        {
          "El juego del millón. En el juego del millón de pesos, dos competidores tienen que elegir simultáneamente cuanto quieren del millón, tal que $s_i$ es la fracción del millón que pide para sí mismo el jugador $i$. Si lo que los jugadores piden para sí mismos excede la unidad ($s_1 + s_2 > 1$), cada uno recibe cero pesos. En caso contrario ($s_1 + s_2 = 1$), ambos reciben lo que piden."
        }
      </p>
      <ol className="list-decimal text-lg mt-4 pl-8">
        <li className="mt-2">
          Encuentre y grafique las correspondencias de mejor respuesta
        </li>
        <li className="mt-2">
          Encuentre todos los equilibrios de Nash en estrategias puras para
          este juego
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mt-4">Solución</h3>
      <p className="mt-2">
        Para el punto 1. A cada jugador le convendrá elegir el complemento de
        lo que eligió el otro jugador. Por lo tanto, las mejores respuestas
        ante la elección del oponente son:
      </p>
      <p className="mt-2">
        $$J_1(\alpha_2) = 1 - \alpha_2 \quad \quad 0 \leq \alpha_2 \leq 1$$
      </p>
      <p className="mt-2">
        $$J_2(\alpha_1) = 1 - \alpha_1 \quad \quad 0 \leq \alpha_1 \leq 1$$
      </p>
      <img
        src={img1}
        alt="Correspondencia de mejor respuesta"
        className="mx-auto block"
        width={400}
        height={400}
      />
      <p className="mt-2">
        {
          "Para el punto 2. Los equilibrios de Nash se dan cuando los jugadores eligen sus acciones tales que $s_1 + s_2 = 1$."
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio11;
