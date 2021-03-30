interface CocheBase{
  getModelo(): string;
  getVelocidad(): number;
}


class Coche implements CocheBase{
  public color: string;
  public modelo: string;
  public velocidad: number;

  constructor(modelo:string = '') {
    this.color = 'Blanco';
    this.velocidad = 0;

    if (modelo == '')
      this.modelo = 'Color Genérico'
    else
      this.modelo = modelo;
    
    }
  
  public getColor() {
    return this.color;
  }

  public setColor(color: string) {
    this.color = color;
  }

  protected setVelocidad(velocidad: number) {
    this.velocidad = velocidad;
  }

  public getModelo() {
    return this.modelo;
  }

  public getVelocidad(): number{
    return this.velocidad;
  }

  public accelerar(incremento: number) {
    this.velocidad = this.velocidad + incremento;
  }

  public frenar() {
    this.velocidad--;
  }
}

var coche = new Coche();
var coche_dos = new Coche();
var coche_tres = new Coche('BMW');

coche.setColor('rojo');
coche_dos.setColor('azul');
coche_tres.setColor('verde');

coche_dos.accelerar(50);

coche_tres.frenar();
coche_tres.frenar();
coche_tres.frenar();

console.log(coche);
console.log(coche_dos);
console.log(coche_tres);

console.log('El color del coche 1 es ' + coche.getColor() + 'su velocidad es '+coche.velocidad);
console.log('El color del coche 2 es ' + coche_dos.getColor()+ 'su velocidad es '+coche_dos.velocidad);
console.log('El color del coche 3 es ' + coche_tres.getColor()+ 'su velocidad es '+coche_tres.velocidad);