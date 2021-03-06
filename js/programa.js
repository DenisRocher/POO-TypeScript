"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var informatica = /** @class */ (function () {
        function informatica(titulo) {
            this.titulo = titulo;
            alert('Tienda de tecnologia: ' + titulo);
        }
        return informatica;
    }());
    Tienda.informatica = informatica;
})(Tienda || (Tienda = {}));
var informatica = Tienda.informatica;
var cargarInformatica = new informatica('SuperTienda');
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
var Programa = /** @class */ (function () {
    function Programa() {
        this.nombre = '';
        this.version = 0;
    }
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa = __decorate([
        arranque('lanzamiento del curso de NodeJS'),
        __metadata("design:paramtypes", [])
    ], Programa);
    return Programa;
}());
var EditorVideo = /** @class */ (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        var _this = _super.call(this) || this;
        _this.timeline = 0;
        return _this;
    }
    EditorVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    EditorVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    EditorVideo.prototype.getAllData = function () {
        return this.getNombre() + ' - Version: ' + this.version + ' - Timeline: ' + this.getTimeline();
    };
    return EditorVideo;
}(Programa));
var programa = new Programa();
programa.lanzamiento();
var editor = new EditorVideo();
editor.setVersion(1);
editor.setNombre('Nombre Fantasia');
editor.setTimeline(15);
console.log(editor);
console.log(editor.getAllData());
//LOGICA FORMULARIO
var programas = [];
function guardar() {
    var nombre = document.getElementById('nombre').value.toString();
    var version = parseInt(document.getElementById('version').value);
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(version);
    programas.push(programa);
    console.log(programas);
    visualizarProgramas();
}
function visualizarProgramas() {
    var listado = document.getElementById('listado');
    var list = '';
    programas.forEach(function (element) {
        //console.log(element);
        list = list + "\n         <li>" + element.nombre + " - version: " + element.version + "</li>";
    });
    listado.innerHTML = list;
    //console.log(listado);
    //console.log(list);
}
