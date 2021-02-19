// INTERFACES
interface CamisetaBase{   //NOS OBLIGA A DEFINIR LOS METODOS EN LA CLASE
  setColor(color: any);
  getColor();
}

// DECORADOR
function estampar(logo: String) {
  return function (target: Function) {
    target.prototype.estampacion = function (): void{
      console.log('Camiseta estampada con el logo: ' + logo);
    }
  }
}

/**
 * CLASE, es el molde del objeto
 * PROPIEDADES, son las características del objeto
 * METODOS, son funciones o acciones del objeto
 * 
 * 
 * NOTA IMPORTANTE:   EL FICHERO *.ts DEBE TENER EL MISMO NOMBRE QUE LA CLASE
 */

// CLASE
//class Camiseta{
@estampar('Lacoste')
class Camiseta implements CamisetaBase {
  [x: string]: any;
  // Propiedades de la clase
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;
  private moneda: string;      // En el caso que sea private, no se puede
  //asignar valor, fuera del metodo

  constructor(color: string, modelo: string, marca: string, talla: string, precio: number, moneda: string) {
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
    this.moneda = moneda;
  }
  
  // Método
  public setColor(color: string) {
    this.color = color;
  }
  
  public getColor() {
    return this.color;
  }
}


/* 
// Vàlido sin constructo:   var camiseta = new Camiseta();
// Con constructor, se deben informar los argumentos
var camiseta = new Camiseta('red', 'Manga Larga', 'Lacoste', 'L', 15, 'CLP');
camiseta.color = 'Red';
/** Solo funciona si fuesen publicos 
 * camiseta.marca = 'Lacoste';
 * camiseta.talla = 'L';
 * camiseta.precio = 10;
 * 
camiseta.setMoneda('Euros');

var polera = new Camiseta('yellow', 'Manga Corta', 'Armani', 'M', 200, 'CLP');;
polera.color = 'Blue';
/** Solo funciona con argumentos tipo public
 * polera.marca = 'Guy Laroche';
 * polera.talla = 'M';
 * polera.precio = 20;

polera.setMoneda('CLP');

console.log(camiseta, polera, polera.getMoneda());

*/

var camiseta = new Camiseta('Blue', 'Manga Larga', 'Lacoste', 'L', 150000, 'CLP');
camiseta.estampacion();
console.log(camiseta);

/** 
 *      HERENCIA DE CLASES
 */

class poleras extends Camiseta{
  public capucha: boolean;

  constructor(capucha: boolean) {
    super('','','','',0,'');
    this.capucha = capucha;
  };
  
  setCapucha(capucha: boolean) {
    this.capucha = capucha;
  };
  getCapucha() {
    return this.capucha;
  }
};

var poleron_Adidas = new poleras(true);
poleron_Adidas.setCapucha(true);
console.log(poleron_Adidas);
