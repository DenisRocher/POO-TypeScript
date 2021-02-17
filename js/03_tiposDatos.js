// String
var cadena = 'Denis Rocher';
// number
var numero = 12;
// boolean
var boleano = false;
// Any
var cualquiera = 'hola';
cualquiera = false;
/**
 *    ARRAY
 * Array<String> = ['xxx','yyy']
 * Array<any> = [lo que sea]
 * number[] = [0,0,0,1]   <==> Array<number>
 * any[] = [0,'aa', etc.]
 */
var lenguaje = ['PHP', 'JS', 'TypeScript', 'Java'];
var varios = ['PHP', 'JS', 'TypeScript', 'Java', 3];
var years = [2012, 2015, 2021, 2020];
/**
 * VARIABLES CON MULTIPLES TIPOS DE DATOS
 * let var: string | number   ==> Permite sean string o number
 */
var cadenas = 12;
var pruebaAlfa = 'Alfanumerico';
pruebaAlfa = 5;
/** VAR O LET
 * LET es variable a nivel de bloque
 * VAR es variable global
 */
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
console.log(cadena, numero, boleano, cualquiera, lenguaje, varios, years, cadenas, pruebaAlfa);
