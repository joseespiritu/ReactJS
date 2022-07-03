import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context";
import { AppRouter } from "../../src/router/AppRouter";

describe("Pruebas en <AppRouter/>", () => {
  test("debe de mostrar el login si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter></AppRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getAllByText("Login").length).toBe(1);
  });

  test("debe de mostrar el componente si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Jose",
        id: "123",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <AppRouter></AppRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    expect(screen.getByText("Asociaciones")).toBeTruthy();
    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });
});
