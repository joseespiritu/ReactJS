import React from "react";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe("Pruebas sobre componente CounterApp", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe de ser un componente de tipo <CounterApp/>", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de mostrar el valor por defecto de 100", () => {
    const value = "100";
    const wrapper = shallow(<CounterApp value={100} />);
    const valorCounter = wrapper.find("h2").text().trim();
    expect(valorCounter).toBe(value);
  });

  test("Debe de incrementar con el botón +1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });

  test("Debe de disminuir con el botón -1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("9");
  });

  test("debe de colocar el valor por defecto con el btn reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("105");
  });
});
