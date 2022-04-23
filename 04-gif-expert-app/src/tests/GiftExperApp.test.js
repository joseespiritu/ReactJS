import React from "react";
import { shallow } from "enzyme";
import GiftExperApp from "../GiftExperApp";

describe("Pruebas sobre el componente <GiftGridExperApp/>", () => {
  test("Debe de renderizar el componente correctamente", () => {
    const wrapper = shallow(<GiftExperApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar una lista de categorias", () => {
    const categories = ["One punch", "dragon ball"];
    const wrapper = shallow(<GiftExperApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
