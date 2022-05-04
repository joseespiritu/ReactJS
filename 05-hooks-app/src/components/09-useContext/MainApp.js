import React, { useState } from "react";
import AppRouter from "./AppRouter";
import { UserContext } from "./UserContext";

const MainApp = () => {
  const [user, setUser] = useState({});

  // const user = {
  //   id: 1234,
  //   name: "jose",
  //   email: "jose@email.com",
  // };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
