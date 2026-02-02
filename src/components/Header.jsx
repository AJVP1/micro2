import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/auth";

const Header = () => {
  const auth = useAuth();

  return (
    <header className="font-bold text-lg bg-[#1d2554] text-white p-4 flex items-center justify-around md:p-6 md:text-2xl">
      <Link className="flex items-center gap-2 md:gap-4" to="/">
        <img
          src={logo}
          alt="Logo"
          className="brightness-0 invert w-12 h-12 md:w-16 md:h-16"
        />
        <div className="text-center md:text-left">
          <p className="hidden text-base md:text-2xl md:block">
            Universidad de Buenos Aires
          </p>
          <p className="hidden text-xs  text-white/85 font-medium md:text-base md:block">
            Facultad de Ciencias Económicas
          </p>
        </div>
      </Link>
      {!auth.user ? (
        <Link
          to="/login"
          className="border-2 border-[#1d2554] font-semibold text-sm md:text-base text-white px-4 py-2 rounded-lg hover:border-white"
        >
          Inicio
        </Link>
      ) : (
        <Link
          to="/logout"
          className="border-2 border-[#1d2554] font-semibold text-sm md:text-base text-white px-4 py-2 rounded-lg hover:border-white"
        >
          Cerrar sesión
        </Link>
      )}
    </header>
  );
};

export default Header;
