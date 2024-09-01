import {validarSuperficie, validarPosicionInicial, validarDireccion, avanzar, girarIzquierda, girarDerecha, cambioPosicion} from "./auto.js";

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
    expect(avanzar("3,4", "N")).toEqual("3,5");
});

it("Deberia validar giro Izquierda", () => {
    expect(girarIzquierda("O")).toEqual("S");
});

it("Deberia validar giro Derecha", () => {
    expect(girarDerecha("N")).toEqual("E");
});

it("Deberia validar movimiento del auto/ Cambio de posicion y direccion", () => {
    expect(cambioPosicion("2,3", "O", "IAADAIA")).toEqual({x: 1, y: 0, direccion:"S"});
});


});
