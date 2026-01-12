// importar librerias
import { HashRouter, Routes, Route } from "react-router-dom";
// importar componentes
import Header from "./components/Header";
// importar paginas
import Bienvenida from "./pages/Bienvenida";
import Introduccion from "./pages/Introduccion";

function App() {
  return (
    <>
      <HashRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/introduccion" element={<Introduccion />} />
          <Route path="*" element={<p>Página no encontrada</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
