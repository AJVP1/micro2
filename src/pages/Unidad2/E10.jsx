import ExerciseLayout from "../../components/layout/ExerciseLayout";
import GameTable from "../../components/ui/GameTable";

function Ejercicio10() {
  return (
    <ExerciseLayout number={10}>
      <h3 className="text-2xl font-semibold mt-4">Enunciado</h3>
      <p className="mt-2">
        Stag-Hunt. Cada integrante de un grupo de cazadores tiene 2 opciones:
        puede permanecer atento para atrapar una liebre o un conejo. Si todos
        los cazadores persiguen a la liebre, logran atraparla y se la dividen
        en partes iguales. Sin embargo, si alguno de los cazadores atrapa un
        conejo, los demás cazadores no podrán atrapar la liebre. Cada cazador
        prefiere una parte de la liebre en vez de un conejo. Represente este
        juego en el caso de 2 jugadores y encuentre los equilibrios de Nash.
      </p>

      <h3 className="text-2xl font-semibold mt-4">Solución</h3>
      <p className="mt-2">
        Los jugadores tienen dos estrategias: Atrapar Liebre (L) o Atrapar
        Conejo (C). Lo mejor es que ambos atrapen la liebre, luego es mejor
        atrapar el conejo, y lo peor es que uno atrape la liebre mientras el
        otro atrapa el conejo. La matriz de pagos es:
      </p>
      <GameTable
        player1Strategies={["Liebre", "Conejo"]}
        player2Strategies={["Liebre", "Conejo"]}
        payoffs={[
          ["($2;2$)", "($1;0$)"],
          ["($0;1$)", "($1;1$)"],
        ]}
      />
      <p>Representando las mejores respuestas en la matriz de pagos.</p>
      <GameTable
        player1Strategies={["Liebre", "Conejo"]}
        player2Strategies={["Liebre", "Conejo"]}
        payoffs={[
          [
            "($\\textcolor{red}{2};\\textcolor{red}{2}$)",
            "($\\textcolor{red}{1};0$)",
          ],
          [
            "($0;\\textcolor{red}{1}$)",
            "($\\textcolor{red}{1};\\textcolor{red}{1}$)",
          ],
        ]}
      />
      <p>
        Los equilibrios de Nash son ($Liebre, Liebre$) y ($Conejo, Conejo$).
      </p>
    </ExerciseLayout>
  );
}

export default Ejercicio10;
