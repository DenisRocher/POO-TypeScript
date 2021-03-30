function arranque(lanzar:string) {
  return function (target: Function) {
    target.prototype.lanzamiento = function (): void{
      alert(lanzar);
    }
  }
}

@arranque('lanzamiento del curso de NodeJS')
class Programa{
  public nombre: string;
  public version: number;

  constructor() {
    this.nombre = '';
    this.version = 0;
  }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }
  setVersion(version: number) {
    this.version = version;
  }
  getNombre():string {
    return this.nombre;
  }
  getVersion():number {
    return this.version;
  }
}

class EditorVideo extends Programa{
  public timeline: number;

  constructor() {
    super();
    this.timeline = 0;
  }

  setTimeline(timeline: number) {
    this.timeline = timeline;
  }
  getTimeline() {
    return this.timeline;
  }

  getAllData(): string{
    return this.getNombre() + ' - Version: ' + this.version + ' - Timeline: ' + this.getTimeline();
  }
}

var programa = new Programa();
(programa as any).lanzamiento();
var editor = new EditorVideo();
editor.setVersion(1);
editor.setNombre('Nombre Fantasia');
editor.setTimeline(15);

console.log(editor);
console.log(editor.getAllData());

//LOGICA FORMULARIO
var programas: Array<Programa> = [];

function guardar() {
  var nombre = (<HTMLInputElement>document.getElementById('nombre')).value.toString();
  var version = parseInt((<HTMLInputElement>document.getElementById('version')).value);

  var programa = new Programa();
  programa.setNombre(nombre);
  programa.setVersion(version);
  programas.push(programa);
  console.log(programas);
  visualizarProgramas();
}

function visualizarProgramas() {
  var listado = (<HTMLInputElement>document.getElementById('listado'));
  var list = '';
  programas.forEach(element => {
    //console.log(element);
    list = list + `
         <li>`+element.nombre+` - version: `+element.version+`</li>`
  });
  listado.innerHTML = list;
  //console.log(listado);
  //console.log(list);


}