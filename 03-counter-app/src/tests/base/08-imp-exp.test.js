import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("pruebas en funciones de Héroes", () => {
  test("debe de retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((heroe) => heroe.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test("debe de retornar undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("debe de retornar un arreglo de heroes por owner", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter((heroe) => heroe.owner === owner);
    expect(heroes).toEqual(heroesData);
  });

  test("debe de retornar el lenght de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });
});
