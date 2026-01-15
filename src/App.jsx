// importar librerias
import { HashRouter, Routes, Route } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";

// importar componentes
import Header from "./components/Header";
import Router2 from "./components/Router2";

// importar paginas
import Bienvenida from "./pages/Bienvenida";
import Introduccion from "./pages/Introduccion";
import Unidad2 from "./pages/Unidad2/Teoria";

// importar auth
import { AuthProvider, AuthRoute } from "./auth/auth";
import LoginPage from "./auth/LoginPage";
import LogoutPage from "./auth/LogoutPage";

function App() {
  return (
    <MathJaxContext config={{ tex: { inlineMath: [["$", "$"]] } }}>
      <HashRouter>
        <AuthProvider>
          <Header />

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

            <Route />

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
        </AuthProvider>
      </HashRouter>
    </MathJaxContext>
  );
}

export default App;
