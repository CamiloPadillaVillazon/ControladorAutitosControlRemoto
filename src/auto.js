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

function avanzar(posicion, direccion, xMax, yMax) {
    let [x, y] = posicion.split(',').map(Number);

    switch(direccion) {
        case "N":
            if(y + 1 > yMax) {
                return "No se puede avanzar";
            }
            y += 1;
            break;
        case "S":
            if(y - 1 < 0) {
                return "No se puede avanzar";
            }
            y -= 1;
            break;
        case "E":
            if(x + 1 > xMax) {
                return "No se puede avanzar";
            }
            x += 1;
            break;
        case "O":
            if(x - 1 < 0) {
                return "No se puede avanzar";
            }
            x -= 1;
            break;
        default:
            console.error("Dirección Inválida");
    }
    return `${x},${y}`;
}


function girarIzquierda(direccion){
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

function girarDerecha(direccion){
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

function cambioPosicion(posInicial, dirInicial, comando, xMax, yMax) {
    let posicion = posInicial;
    let direccion = dirInicial;

    for(let i = 0; i < comando.length; i++) {
        const letra = comando[i];
        if (letra === "A") {
            const nuevaPosicion = avanzar(posicion, direccion, xMax, yMax);
            if (nuevaPosicion === "No se puede avanzar") {
                return { error: `No se puede avanzar en la dirección ${direccion} desde la posición ${posicion}` };
            }
            posicion = nuevaPosicion;
        } else if (letra === "I") {
            direccion = girarIzquierda(direccion);
        } else if (letra === "D") {
            direccion = girarDerecha(direccion);
        }
    }
    let [x, y] = posicion.split(',').map(Number);
    
    return {x, y, direccion};
}



export {cambioPosicion};

