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
            print("Direccion Invalida");
    }

    return {x, y};
}
export {validarSuperficie, validarPosicionInicial, validarDireccion, avanzar};