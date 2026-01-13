import { useAuth } from "./auth";

function LogoutPage() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <section className="flex justify-center items-center h-[calc(100vh-300px)]">
      <form
        onSubmit={logout}
        className="bg-gray-200 p-6 rounded-xl shadow-lg flex flex-col gap-4 w-full max-w-sm text-center"
      >
        <p className="text-gray-800 font-medium">
          ¿Estás seguro de que quieres cerrar sesión?
        </p>

        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          Cerrar sesión
        </button>
      </form>
    </section>
  );
}

export default LogoutPage;
