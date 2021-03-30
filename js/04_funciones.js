"use strict";
/** DISTINTAS MANERAS DE DECLARAR FUNCIONES EN TYPESCRIPT, CON O SIN TIPADO FUERTE
 *  function name(param){}
 *
 *  function name(param:type){}
 *
 *
 */
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    // la  variable
    return 'El numero es ' + numero;
}
;
function getNumero2(numero) {
    if (numero === void 0) { numero = 154; }
    return 'El numero es ' + numero;
}
;
console.log(getNumero());
console.log(getNumero(15));
console.log(getNumero2());
console.log(getNumero2(25));
