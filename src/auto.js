function validarSuperficie(superficie) {
    const [x, y] = superficie.split(',').map(Number);
    return {x, y};
}
export default validarSuperficie;