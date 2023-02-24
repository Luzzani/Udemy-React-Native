import { useReducer, useEffect } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  userName: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: "",
  nombre: "",
};

type LoginPayload = {
  userName: string;
  nombre: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        userName: "",
      };

    case "login":
      const { nombre, userName } = action.payload;
      return {
        validando: false,
        token: "123lucas",
        nombre,
        userName,
      };

    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, userName }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: { nombre: "lucas", userName: "luzzani" },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };

  return (
    <>
      <h3>Login</h3>

      {validando ? (
        <div className="alert alert-info">validando...</div>
      ) : token ? (
        <>
          <div className="alert alert-success">
            Autenticado como: {userName}
          </div>
          <button className="btn btn-primary" onClick={logout}>
            Log out
          </button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">No autenticado</div>
          <button className="btn btn-danger" onClick={login}>
            Login
          </button>
        </>
      )}
    </>
  );
};
