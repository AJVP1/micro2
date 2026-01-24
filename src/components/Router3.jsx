import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

const ejerciciosMap = {
  "ejercicio-1": lazy(() => import("../pages/Unidad3/E1")),
  "ejercicio-2": lazy(() => import("../pages/Unidad3/E2")),
  "ejercicio-3": lazy(() => import("../pages/Unidad3/E3")),
  "ejercicio-4": lazy(() => import("../pages/Unidad3/E4")),
  "ejercicio-5": lazy(() => import("../pages/Unidad3/E5")),
  "ejercicio-6": lazy(() => import("../pages/Unidad3/E6")),
  "ejercicio-7": lazy(() => import("../pages/Unidad3/E7")),
  "ejercicio-8": lazy(() => import("../pages/Unidad3/E8")),
  "ejercicio-9": lazy(() => import("../pages/Unidad3/E9")),
  "ejercicio-10": lazy(() => import("../pages/Unidad3/E10")),
  "ejercicio-11": lazy(() => import("../pages/Unidad3/E11")),
};

function Router3() {
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

  return (
    <Suspense
      fallback={
        <div className="text-center p-6 text-[#1d2554]">Cargando...</div>
      }
    >
      <EjercicioComponent />
    </Suspense>
  );
}

export default Router3;
