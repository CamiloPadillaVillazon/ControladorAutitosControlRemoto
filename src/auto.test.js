import {validarSuperficie, validarPosicionInicial, validarDireccion, avanzar, girarIzquierda, girarDerecha} from "./auto.js";

describe("Validaciones", () => {
    it("Deberia validar el tamaño de la superficie", () => {
    expect(validarSuperficie("4,5")).toEqual({x: 4, y: 5});
});

it("Deberia validar la posicion inical si esta en rango de la superficie", () => {
    expect(validarPosicionInicial("4,5", "5,5")).toEqual(true);
});

it("Deberia validar direccion inicial del auto", () => {
    expect(validarDireccion("N")).toEqual(true);
});

it("Deberia validar avanzar la posicion del auto", () => {
    expect(avanzar("3,4", "N")).toEqual({x: 3, y: 5});
});

it("Deberia validar giro Izquierda", () => {
    expect(girarIzquierda("O")).toEqual("N");
});

it("Deberia validar giro Izquierda", () => {
    expect(girarDerecha("S")).toEqual("E");
});

});
