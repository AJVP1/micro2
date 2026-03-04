import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

const ejerciciosMap = {
  "ejercicio-1": lazy(() => import("../pages/Unidad2/E1")),
  "ejercicio-2": lazy(() => import("../pages/Unidad2/E2")),
  "ejercicio-3": lazy(() => import("../pages/Unidad2/E3")),
  "ejercicio-4": lazy(() => import("../pages/Unidad2/E4")),
  "ejercicio-5": lazy(() => import("../pages/Unidad2/E5")),
  "ejercicio-6": lazy(() => import("../pages/Unidad2/E6")),
  "ejercicio-7": lazy(() => import("../pages/Unidad2/E7")),
  "ejercicio-8": lazy(() => import("../pages/Unidad2/E8")),
  "ejercicio-9": lazy(() => import("../pages/Unidad2/E9")),
  "ejercicio-10": lazy(() => import("../pages/Unidad2/E10")),
  "ejercicio-11": lazy(() => import("../pages/Unidad2/E11")),
  "ejercicio-12": lazy(() => import("../pages/Unidad2/E12")),
  "ejercicio-13": lazy(() => import("../pages/Unidad2/E13")),
  "ejercicio-14": lazy(() => import("../pages/Unidad2/E14")),
  "ejercicio-15": lazy(() => import("../pages/Unidad2/E15")),
  "ejercicio-16": lazy(() => import("../pages/Unidad2/E16")),
  "ejercicio-17": lazy(() => import("../pages/Unidad2/E17")),
  "ejercicio-18": lazy(() => import("../pages/Unidad2/E18")),
  "ejercicio-19": lazy(() => import("../pages/Unidad2/E19")),
  "ejercicio-20": lazy(() => import("../pages/Unidad2/E20")),
  "ejercicio-21": lazy(() => import("../pages/Unidad2/E21")),
  "ejercicio-22": lazy(() => import("../pages/Unidad2/E22")),
  "ejercicio-23": lazy(() => import("../pages/Unidad2/E23")),
  "ejercicio-24": lazy(() => import("../pages/Unidad2/E24")),
  "ejercicio-25": lazy(() => import("../pages/Unidad2/E25")),
  "ejercicio-26": lazy(() => import("../pages/Unidad2/E26")),
  "ejercicio-27": lazy(() => import("../pages/Unidad2/E27")),
  "ejercicio-28": lazy(() => import("../pages/Unidad2/E28")),
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

export default Router2;
