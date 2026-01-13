import { useParams } from "react-router-dom";
import Ejercicio1 from "../pages/Unidad2/E1";
import Ejercicio2 from "../pages/Unidad2/E2";

const ejerciciosMap = {
  "ejercicio-1": Ejercicio1,
  "ejercicio-2": Ejercicio2,
};

function Router2() {
  const { slug } = useParams();

  const EjercicioComponent = ejerciciosMap[slug];

  if (!EjercicioComponent) {
    return (
      <section className="bg-[#fafafa] max-w-270 mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center mt-6">
          Ejercicio no encontrado
        </h2>
      </section>
    );
  }

  return <EjercicioComponent />;
}

export default Router2;
