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
  test("Debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, Mundo";
    const subtitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp mensaje={saludo} subtitulo={subtitulo} />
    );
    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(subtitulo);
  });
});
