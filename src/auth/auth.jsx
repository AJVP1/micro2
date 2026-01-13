import React from "react";
import { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  // metodos
  const login = (username) => {
    setUser({ username });
    navigate("/");
  };
  const logout = () => {
    setUser(null);
  };

  // proporcionar el contexto
  const auth = { user, login, logout };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

function AuthRoute(props) {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

// eslint-disable-next-line
export { AuthProvider, AuthRoute, useAuth };
