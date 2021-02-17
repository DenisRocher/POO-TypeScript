

/** DISTINTAS MANERAS DE DECLARAR FUNCIONES EN TYPESCRIPT, CON O SIN TIPADO FUERTE
 *  function name(param){}
 * 
 *  function name(param:type){}
 * 
 * 
 */
function getNumero(numero = 12) {   // Permite definir valor por defecto de 
                                    // la  variable
  return 'El numero es ' + numero;
};

function getNumero2(numero:number = 154):string {   // Indica formato devuelto
  return 'El numero es ' + numero;
};

console.log(getNumero());
console.log(getNumero(15));

console.log(getNumero2());
console.log(getNumero2(25));