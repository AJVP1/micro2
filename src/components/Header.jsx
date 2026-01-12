import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <header className="font-bold text-2xl flex justify-center gap-187.5 items-center bg-[#1d2554] text-white p-6">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="brightness-0 invert w-16 h-16" />
        <div>
          <p>Universidad de Buenos Aires</p>
          <p className="text-base text-white/85 font-medium">
            Facultad de Ciencias Económicas
          </p>
        </div>
      </div>
      <a
        href=""
        className="border-2 border-[#1d2554] font-semibold text-white px-4 py-2 rounded-lg hover:border-white"
      >
        Inicio
      </a>
    </header>
  );
};

export default Header;
