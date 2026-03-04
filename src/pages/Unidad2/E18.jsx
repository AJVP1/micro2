import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio18() {
  return (
    <ExerciseLayout number={18}>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Enunciado</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        La batalla de los sexos. Mi esposa y yo vamos a salir esta noche luego
        de la clase de Micro. Ella está dando clases y yo estoy dando clases, y
        no tenemos forma de comunicarnos. Como estábamos de mal humor, ni nos
        hablamos antes de salir de casa. Las opciones son dos: ir a la cancha a
        ver a mi equipo, o ir al cine a ver una aburrida película romántica. A
        mí me gusta ir a la cancha más que al cine (3 a 1 si lo mido en útiles),
        y mi esposa tiene preferencias opuestas, pero a ambos nos gusta estar
        juntos. Si no nos encontramos ambos obtenemos una utilidad nula. ¿Me
        ayudan a decidir a dónde ir? ¿Es posible predecir si nos vamos a
        encontrar o no?
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-6">Solución</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg">En forma normal</p>
      <GameTable
        player1Strategies={["Cancha", "Cine"]}
        player2Strategies={["Cancha", "Cine"]}
        payoffs={[
          ["(3,1)", "(0,0)"],
          ["(0,0)", "(1,3)"],
        ]}
      />
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "Los equilibrios de Nash en estrategias puras son: $\\{ (Cancha, Cancha), (Cine, Cine) \\}$."
        }
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        Ahora buscamos los equilibrios de Nash en estrategias mixtas. Para esto,
        igualamos los pagos esperados de cada jugador. Para el jugador 1:
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_1(Cancha; q)] = E[u_1(Cine; q)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 3(q) + 0(1-q) = 0(q) + 1(1-q) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">$$ 3q = -q + 1 $$</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ q = \frac{1}
        {4} $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">Para el jugador 2:</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ E[u_2(p; Cancha)] = E[u_2(p; Cine)] $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ 1(p) + 0(1-p) = 0(p) + 3(1-p) $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">$$ p = -3p + 3 $$</p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        $$ p = \frac{3}
        {4} $$
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        {
          "El equilibrio de Nash en estrategias mixtas es: $ \\{ (\\frac{1}{4}, \\frac{3}{4}), (\\frac{3}{4}, \\frac{1}{4}) \\}$."
        }
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio18;
