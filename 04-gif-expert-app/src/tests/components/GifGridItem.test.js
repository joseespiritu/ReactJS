import React from "react";
import GifGridItem from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe("Debe de renderizar el componente correctamente", () => {
  const title = "Un titulo";
  const url = "http://localhost";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe de ser un componente de tipo <GifGridItem/>", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un párrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe de tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    // console.log(img.prop('src'));
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe de tener animate__fadeIn", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
