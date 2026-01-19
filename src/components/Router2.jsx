import { useParams } from "react-router-dom";
import Ejercicio1 from "../pages/Unidad2/E1";
import Ejercicio2 from "../pages/Unidad2/E2";
import Ejercicio3 from "../pages/Unidad2/E3";
import Ejercicio4 from "../pages/Unidad2/E4";
import Ejercicio5 from "../pages/Unidad2/E5";
import Ejercicio6 from "../pages/Unidad2/E6";
import Ejercicio7 from "../pages/Unidad2/E7";
import Ejercicio8 from "../pages/Unidad2/E8";
import Ejercicio9 from "../pages/Unidad2/E9";
import Ejercicio10 from "../pages/Unidad2/E10";
import Ejercicio11 from "../pages/Unidad2/E11";
import Ejercicio12 from "../pages/Unidad2/E12";
import Ejercicio13 from "../pages/Unidad2/E13";
import Ejercicio14 from "../pages/Unidad2/E14";

const ejerciciosMap = {
  "ejercicio-1": Ejercicio1,
  "ejercicio-2": Ejercicio2,
  "ejercicio-3": Ejercicio3,
  "ejercicio-4": Ejercicio4,
  "ejercicio-5": Ejercicio5,
  "ejercicio-6": Ejercicio6,
  "ejercicio-7": Ejercicio7,
  "ejercicio-8": Ejercicio8,
  "ejercicio-9": Ejercicio9,
  "ejercicio-10": Ejercicio10,
  "ejercicio-11": Ejercicio11,
  "ejercicio-12": Ejercicio12,
  "ejercicio-13": Ejercicio13,
  "ejercicio-14": Ejercicio14,
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
