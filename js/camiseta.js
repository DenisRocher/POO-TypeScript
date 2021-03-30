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
// DECORADOR
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('Camiseta estampada con el logo: ' + logo);
        };
    };
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
var Camiseta = /** @class */ (function () {
    //asignar valor, fuera del metodo
    function Camiseta(color, modelo, marca, talla, precio, moneda) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
        this.moneda = moneda;
    }
    // Método
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Lacoste'),
        __metadata("design:paramtypes", [String, String, String, String, Number, String])
    ], Camiseta);
    return Camiseta;
}());
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
var poleras = /** @class */ (function (_super) {
    __extends(poleras, _super);
    function poleras(capucha) {
        var _this = _super.call(this, '', '', '', '', 0, '') || this;
        _this.capucha = capucha;
        return _this;
    }
    ;
    poleras.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    ;
    poleras.prototype.getCapucha = function () {
        return this.capucha;
    };
    return poleras;
}(Camiseta));
;
var poleron_Adidas = new poleras(true);
poleron_Adidas.setCapucha(true);
console.log(poleron_Adidas);
