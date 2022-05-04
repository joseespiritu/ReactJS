import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  // 1. Obtener refenrecia al userContext
  // 2. setUser
  // {id: 132, name: 'Jose'}

  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: 132, name: "Jose" })}
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
