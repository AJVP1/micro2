// importar librerias
import { HashRouter, Routes, Route } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";
import { lazy, Suspense } from "react";

// importar componentes
import Header from "./components/Header";
import Router2 from "./components/Router2";
import Router3 from "./components/Router3";
import Router4 from "./components/Router4";

// importar paginas con lazy loading
import Bienvenida from "./pages/Bienvenida";
const Introduccion = lazy(() => import("./pages/Introduccion"));
const Unidad2 = lazy(() => import("./pages/Unidad2/Teoria"));
const Unidad3 = lazy(() => import("./pages/Unidad3/Teoria"));
const Unidad4 = lazy(() => import("./pages/Unidad4/Teoria"));

// importar auth
import { AuthProvider, AuthRoute } from "./auth/auth";
const LoginPage = lazy(() => import("./auth/LoginPage"));
const LogoutPage = lazy(() => import("./auth/LogoutPage"));

// Componente de carga
const LoadingComponent = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <p>Cargando...</p>
  </div>
);

function App() {
  return (
    <MathJaxContext config={{ tex: { inlineMath: [["$", "$"]] } }}>
      <HashRouter>
        <AuthProvider>
          <Header />

          <Suspense fallback={<LoadingComponent />}>
            <Routes>
              <Route path="/" element={<Bienvenida />} />
              <Route path="/introduccion" element={<Introduccion />} />

              <Route
                path="/juegos-estaticos-informacion-completa"
                element={
                  <AuthRoute>
                    <Unidad2 />
                  </AuthRoute>
                }
              >
                <Route path=":slug" element={<Router2 />} />
              </Route>

              <Route
                path="/decisiones-bajo-incertidumbre"
                element={
                  <AuthRoute>
                    <Unidad3 />
                  </AuthRoute>
                }
              >
                <Route path=":slug" element={<Router3 />} />
              </Route>

              <Route
                path="/juegos-dinamicos-informacion-completa"
                element={
                  <AuthRoute>
                    <Unidad4 />
                  </AuthRoute>
                }
              >
                <Route path=":slug" element={<Router4 />} />
              </Route>

              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/logout"
                element={
                  <AuthRoute>
                    <LogoutPage />
                  </AuthRoute>
                }
              />
              <Route path="*" element={<p>Página no encontrada</p>} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </HashRouter>
    </MathJaxContext>
  );
}

export default App;
