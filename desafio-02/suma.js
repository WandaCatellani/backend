"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Suma = /** @class */ (function () {
    function Suma(num1, num2, eleccion) {
        this.num1 = num1;
        this.num2 = num2;
        this.eleccion = eleccion;
    }
    Suma.prototype.resultado = function (num1, num2, eleccion) {
        if (eleccion === "sumar") {
            return num1 + num2;
        }
        else {
            console.log("No se puede realizar la operacion " + eleccion);
        }
    };
    return Suma;
}());
exports.default = Suma;
