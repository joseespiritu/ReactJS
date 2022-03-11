import React from "react";
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp/>", () => {
  test('debe mostrar el mensaje "Hola, Mundo"', () => {
    const saludo = "Hola, Mundo";
    const { getByText } = render(<PrimeraApp mensaje={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  });
});
