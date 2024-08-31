import validarSuperficie from "./auto.js";

describe("Validaciones", () => {
    it("Deberia validar el tamaño de la superficie", () => {
    expect(validarSuperficie("4,5")).toEqual({x: 4, y: 5});
});
});
