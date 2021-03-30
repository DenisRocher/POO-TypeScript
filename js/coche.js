"use strict";
var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = ''; }
        this.color = 'Blanco';
        this.velocidad = 0;
        if (modelo == '')
            this.modelo = 'Color Genérico';
        else
            this.modelo = modelo;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.accelerar = function (incremento) {
        this.velocidad = this.velocidad + incremento;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
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
console.log('El color del coche 1 es ' + coche.getColor() + 'su velocidad es ' + coche.velocidad);
console.log('El color del coche 2 es ' + coche_dos.getColor() + 'su velocidad es ' + coche_dos.velocidad);
console.log('El color del coche 3 es ' + coche_tres.getColor() + 'su velocidad es ' + coche_tres.velocidad);
