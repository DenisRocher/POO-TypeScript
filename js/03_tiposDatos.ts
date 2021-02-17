
// String
let cadena: string = 'Denis Rocher';

// number
let numero: number = 12;

// boolean
let boleano: boolean = false;

// Any
let cualquiera: any = 'hola';
cualquiera = false;

/** 
 *    ARRAY
 * Array<String> = ['xxx','yyy']
 * Array<any> = [lo que sea]
 * number[] = [0,0,0,1]   <==> Array<number>
 * any[] = [0,'aa', etc.]
 */
let lenguaje: Array<string> = ['PHP', 'JS', 'TypeScript', 'Java'];
let varios: Array<any> = ['PHP', 'JS', 'TypeScript', 'Java', 3];
let years: number[] = [2012, 2015, 2021, 2020];

/** 
 * VARIABLES CON MULTIPLES TIPOS DE DATOS
 * let var: string | number   ==> Permite sean string o number
 */

let cadenas: string | number = 12;


/** TIPOS DE DATOS PERSONALIZADOS 
 * 
 * type NBRETIPODATOS = string | number;      Nuevo tipo de variable que puede ser string o numero
 * 
*/
type alfanumerico = string | number;
let pruebaAlfa: alfanumerico = 'Alfanumerico';
pruebaAlfa = 5;

/** VAR O LET
 * LET es variable a nivel de bloque
 * VAR es variable global
 */
var numero1 = 10;
var numero2 = 12;

if (numero1 == 10) {
  let numero1 = 44;
  var numero2 = 55;
  console.log(numero1, numero2);
}
console.log(numero1, numero2);


console.log(cadena, numero, boleano, cualquiera, lenguaje, varios, years, cadenas, pruebaAlfa);
