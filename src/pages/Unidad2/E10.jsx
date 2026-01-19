import { MathJax } from "better-react-mathjax";

function Ejercicio10() {
  return (
    <MathJax>
      <section className="bg-[#fafafa] mx-auto p-6">
        <h2 className="text-4xl text-center text-[#1d2554] mt-6">
          Ejercicio 10
        </h2>
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
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <thead><tr>
            <th className="border border-black p-3"></th>
            <th className="border border-black p-3" colSpan="3">
              J2
            </th>
          </tr>
          </thead>
          <tbody><tr>
            <th className="border border-black p-3" rowSpan="3">
              <div className="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th className="border border-black p-3">Estrategias</th>
            <th className="border border-black p-3">Liebre</th>
            <th className="border border-black p-3">Conejo</th>
          </tr>


          <tr>
            <th className="border border-black p-3">Liebre</th>
            <td className="border border-black p-3">($2;2$)</td>
            <td className="border border-black p-3">($1;0$)</td>
          </tr>


          <tr>
            <th className="border border-black p-3">Conejo</th>
            <td className="border border-black p-3">($0;1$)</td>
            <td className="border border-black p-3">($1;1$)</td>
          </tr>

          
          </tbody>
        </table>
        <p>Representando las mejores respuestas en la matriz de pagos.</p>
        <table className="mt-7 mb-7 border-collapse mx-auto text-center">
          <thead><tr>
            <th className="border border-black p-3"></th>
            <th className="border border-black p-3" colSpan="3">
              J2
            </th>
          </tr>
          </thead>
          <tbody><tr>
            <th className="border border-black p-3" rowSpan="3">
              <div className="flex flex-col items-center justify-center leading-none">
                <span>J1</span>
              </div>
            </th>
            <th className="border border-black p-3">Estrategias</th>
            <th className="border border-black p-3">Liebre</th>
            <th className="border border-black p-3">Conejo</th>
          </tr>


          <tr>
            <th className="border border-black p-3">Liebre</th>
            <td className="border border-black p-3">
              {"($\\textcolor{red}{2};\\textcolor{red}{2}$)"}
            </td>
            <td className="border border-black p-3">
              {"($\\textcolor{red}{1};0$)"}
            </td>
          </tr>


          <tr>
            <th className="border border-black p-3">Conejo</th>
            <td className="border border-black p-3">
              {"($0;\\textcolor{red}{1}$)"}
            </td>
            <td className="border border-black p-3">
              {"($\\textcolor{red}{1};\\textcolor{red}{1}$)"}
            </td>
          </tr>

          
          </tbody>
        </table>
        <p>
          Los equilibrios de Nash son ($Liebre, Liebre$) y ($Conejo, Conejo$).
        </p>
      </section>
    </MathJax>
  );
}

export default Ejercicio10;
