// importar librerias
import { HashRouter, Routes, Route } from "react-router-dom";

// importar componentes
import Header from "./components/Header";
import Ejercicio from "./components/Ejercicio";

// importar paginas
import Bienvenida from "./pages/Bienvenida";
import Introduccion from "./pages/Introduccion";
import Unidad2 from "./pages/Unidad2";

function App() {
  return (
    <>
      <HashRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/introduccion" element={<Introduccion />} />

          <Route
            path="/juegos-estaticos-informacion-completa"
            element={<Unidad2 />}
          />
          <Route
            path="/juegos-estaticos-informacion-completa/:slug"
            element={<Ejercicio />}
          />

          <Route />
          <Route path="*" element={<p>Página no encontrada</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
