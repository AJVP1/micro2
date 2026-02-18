import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

const ejerciciosMap = {
  "ejercicio-1": lazy(() => import("../pages/Unidad4/E1")),
};

function Router4() {
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

export default Router4;
