import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio13() {
  return (
    <ExerciseLayout number={13}>
      <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
      <p className="mt-2">
        {
          "Participación de votantes. Teoría de juegos se utiliza ampliamente en Ciencias Políticas, especialmente en el estudio de elecciones. El siguiente juego explora la (costosa) decisión de un ciudadano de votar o no. Hay 2 candidatos, $A$ y $B$, que compiten en una elección. De los $n$ ciudadanos, $k$ están a favor de $A$ y el resto, $m$, a favor de $B$. Cada ciudadano decide si votar por el candidato preferido o abstenerse de votar. Ir a votar tiene un costo $c$ para el individuo. Un ciudadano que se abstiene de votar recibe un pago de $2$ si su candidato preferido gana, $1$ si empata y $0$ si pierde. Un ciudadano que vota recibe un pago de $2 - c$, $1 - c$ y $-c$ en estos tres casos respectivamente, donde $0 < c < 1$."
        }
      </p>
      <ol className="list-decimal text-lg mt-4 pl-8">
        <li className="mt-2">
          {
            "Para el caso $k = m = 1$, ¿se parece este juego a alguno que conozca?"
          }
        </li>
        <li className="mt-2">
          {
            "Encuentre los equilibrios de Nash para $k = m$. El caso en que todos votan, ¿constituye un equilibrio de Nash? ¿Hay algún equilibrio de Nash donde los candidatos empaten y no todos voten? ¿Hay algún equilibrio de Nash en el cual un candidato gane por un voto? ¿Hay algún equilibrio de Nash en el cual un candidato gane por 2 o más votos?"
          }
        </li>
        <li className="mt-2">
          {"¿Cuáles con los equilibrios de Nash en el caso $k < m$?"}
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mt-4">Solución</h3>
      <p className="mt-2">
        Para el punto 1. Sí, se parece al dilema del prisionero, ya que cada
        jugador tiene la opción de cooperar (abstenerse de votar) o traicionar
        (votar), y el resultado depende de la elección del otro jugador. De
        forma matricial:
      </p>
      <GameTable
        player1Strategies={["V", "No V"]}
        player2Strategies={["V", "No V"]}
        payoffs={[
          ["($1-c;1-c$)", "($2-c;0$)"],
          ["($0;2-c$)", "($1;1$)"],
        ]}
      />
      <p className="mt-2">Para el punto 2.</p>
      <ol className="list-disc text-lg mt-4 pl-8">
        <li className="mt-2">
          {
            "El caso en que todos votan, ¿constituye un equilibrio de Nash?: Tendría que ponerme en los zapatos de un votante y pensar, tengo incentivos al desvio? Si decido no votar perderíamos y obtendría un pago de 0, es decir, un pago menor a 1-c. Por lo tanto, no tiene incentivos a desviarse y es un equilibrio de Nash."
          }
        </li>
        <li className="mt-2">
          {
            "¿Hay algún equilibrio de Nash donde los candidatos empaten y no todos voten?: Si yo decidí no votar y empatamos obtuve un pago de $1$, tengo incentivos a desviarme? Si voy a votar ganamos y obtengo un pago de $2-c$ que es mayor a 1, por lo tanto, tengo incentivos a desviarme y no es un equilibrio de Nash."
          }
        </li>
        <li className="mt-2">
          {
            "¿Hay algún equilibrio de Nash en el cual un candidato gane por un voto?: Si decidí no votar y perdimos obtuve un pago de $0$, tengo incentivos a desviarme? Si voy a votar empatamos y obtengo un pago de $1-c$ que es mayor a 0, por lo tanto, tengo incentivos a desviarme y no es un equilibrio de Nash."
          }
        </li>
        <li className="mt-2">
          {
            "¿Hay algún equilibrio de Nash en el cual un candidato gane por 2 o más votos?: Si decidí no votar y perdimos obtuve un pago de $0$, tengo incentivos a desviarme? No, voy a votar seguimos perdiendo y obtengo un pago de $-c$ que es menor a 0. Pero del otro lado, si decidí votar y ganamos obtuve un pago de $2-c$, tengo incentivos a desviarme? Si no voy a votar seguimos ganando y obtengo un pago de $2$ que es mayor a $2-c$. Por lo tanto, tiene incentivos a desviarse y no es un equilibrio de Nash."
          }
        </li>
      </ol>
      <p className="mt-2">Para el punto 3.</p>
      <ol className="list-disc text-lg mt-4 pl-8">
        <li className="mt-2">
          {
            "En el caso en que $A$ pierde y votantes de $A$ decidieron votar, no sería un equilibrio de Nash ya que si un seguidor de $A$ decide no votar, el resultado no cambia pero ahora ya no asume el costo $c$, por lo tanto, tiene incentivos a desviarse."
          }
        </li>
        <li className="mt-2">
          {
            "En el caso en que $A$ pierde y votantes de $A$ decidieron no votar, sería un equilibrio de Nash ya que si un seguidor de $A$ decide votar, el resultado no cambia pero ahora asume el costo $c$, por lo tanto, no tiene incentivos a desviarse. Pero por el otro lado, si un seguidor de $B$ decide no votar, el resultado no cambia y no asume el costo $c$, por lo tanto, tiene incentivos a desviarse y no es un equilibrio de Nash."
          }
        </li>
        <li className="mt-2">
          {
            "En el caso de empate, los seguidores de $B$ tienen incentivos a desviarse votando, ya que su candidato ganaría y su pago aumentaría de $1$ a $2-c$. Por lo tanto, no es un equilibrio de Nash."
          }
        </li>
      </ol>
      <p className="mt-2">Por lo tanto, no hay equilibrios de Nash.</p>
    </ExerciseLayout>
  );
}

export default Ejercicio13;
