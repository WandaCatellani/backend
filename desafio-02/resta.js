"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Resta = /** @class */ (function () {
    function Resta(num1, num2, operacion) {
        this.num1 = num1;
        this.num2 = num2;
        this.operacion = operacion;
    }
    Resta.prototype.resultado = function (num1, num2, operacion) {
        if (num1 && num2) {
            var resta = num1 - num2;
            console.log("La resta de " + num1 + " y " + num2 + " es " + resta);
        }
        else {
            console.log(operacion + " : Operacion sin exito");
        }
    };
    return Resta;
}());
exports.default = Resta;
var numResta = new Resta(50, 25, "nada");
console.log(numResta);
console.log(Resta.prototype.resultado(10, 8, "w"));
