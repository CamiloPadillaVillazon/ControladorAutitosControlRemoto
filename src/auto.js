function validarSuperficie(superficie) {
    const [xMax, yMax] = superficie.split(',').map(Number);
    return {x: xMax, y:yMax};
}

function validarPosicionInicial(pInicial, superficie){
    const [x, y] = pInicial.split(',').map(Number);
    const [xMax, yMax] = superficie.split(',').map(Number);
    return x >= 0 && x <= xMax && y >= 0 && y <= yMax
}

function validarDireccion(direccion) {
    if(direccion === "N" || direccion === "S" || direccion === "E" || direccion === "O"){
        return true;
    }
}

function avanzar(posicion, direccion){
    let [x, y] = posicion.split(',').map(Number);

    switch(direccion){
        case "N":
            y += 1;
            break;
        case "S":
            y -= 1;
            break;
        case "E":
            x += 1;
            break;
        case "O":
            x -= 1;
            break;
        default:
            console.error("Dirección Inválida");
        }
    return {x, y};
}

function girarIzquierda(direccion){
    let nuevaDireccion;
    switch(direccion){
        case "N":
        nuevaDireccion = "E";
            break;
        case "S":
            nuevaDireccion = "O";
            break;
        case "E":
            nuevaDireccion = "S";
            break;
        case "O":
            nuevaDireccion = "N";
            break;
        default:
            console.error("Dirección Inválida");
    }
    return nuevaDireccion;
}

function girarDerecha(direccion){
    let nuevaDireccion;
    switch(direccion){
        case "N":
        nuevaDireccion = "O";
            break;
        case "S":
            nuevaDireccion = "E";
            break;
        case "E":
            nuevaDireccion = "N";
            break;
        case "O":
            nuevaDireccion = "S";
            break;
        default:
            console.error("Dirección Inválida");
    }
    return nuevaDireccion;

}

export {validarSuperficie, validarPosicionInicial, validarDireccion, avanzar, girarIzquierda, girarDerecha};