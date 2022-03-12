import React from "react";
/* import { render } from "@testing-library/react"; */
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("Pruebas en <PrimeraApp/>", () => {
  /* test('debe mostrar el mensaje "Hola, Mundo"', () => {
    const saludo = "Hola, Mundo";
    const { getByText } = render(<PrimeraApp mensaje={saludo} />);
    expect(getByText(saludo)).toBeInTheDocument();
  }); */
  test("Debe de mostrar <PrimeraApp/> correctamente", () => {
    const saludo = "Hola, Mundo";
    const wrapper = shallow(<PrimeraApp mensaje={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });
});
