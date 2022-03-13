import React from "react";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe("Pruebas sobre componente CounterApp", () => {
  test("Debe de ser un componente de tipo <CounterApp/>", () => {
    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de mostrar el valor por defecto de 100", () => {
    const value = "100";
    const wrapper = shallow(<CounterApp value={100} />);
    const valorCounter = wrapper.find("h2").text().trim();
    expect(valorCounter).toBe(value);
  });
});
