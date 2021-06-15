"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Resta = /** @class */ (function () {
    function Resta(num1, num2, eleccion) {
        this.num1 = num1;
        this.num2 = num2;
        this.eleccion = eleccion;
    }
    Resta.prototype.resultado = function (num1, num2, eleccion) {
        if (eleccion === "restar") {
            return num1 - num2;
        }
        else {
            console.log("No se puede realizar la operacion " + eleccion);
        }
    };
    return Resta;
}());
exports.default = Resta;
