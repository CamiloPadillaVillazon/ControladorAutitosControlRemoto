import {validarSuperficie, validarPosicionInicial, validarDireccion} from "./auto.js";

describe("Validaciones", () => {
    it("Deberia validar el tamaño de la superficie", () => {
    expect(validarSuperficie("4,5")).toEqual({x: 4, y: 5});
});

it("Deberia validar la posicion inical si esta en rango de la superficie", () => {
    expect(validarPosicionInicial("4,5", "5,5")).toEqual(true);
});


});
