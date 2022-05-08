import React from "react";
import { shallow } from "enzyme";
import ReactExampleRef from "../../../components/04-useRef/ReactExampleRef";

describe("Pruebas en <ReactExampleRef/>", () => {
  let wrapper = shallow(<ReactExampleRef />);
  beforeEach(() => {
    wrapper = shallow(<ReactExampleRef />);
  });

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  test("debe de mostrar el <MultipleCustomHooks/>", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
