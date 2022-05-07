import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../components/02-useEffect/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Jose",
    email: "jose@email.com",
  };

  test("Debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });
  test("Debe de cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Melissa",
        },
      });
    });

    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, name: "Melissa" });
  });
  test("Debe de reestablecer el formulario con RESET", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Melissa",
        },
      });

      reset();
    });

    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
