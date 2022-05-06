import React from "react";
import HookApp from "../HookApp";
import { shallow } from "enzyme";

describe("Pruebas sobre componente <HookApp/>", () => {
  test("Debe de renderizar el componmente correctamente", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
