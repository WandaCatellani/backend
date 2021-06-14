"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Suma = /** @class */ (function () {
    function Suma(num1, num2, operacion) {
        this.num1 = num1;
        this.num2 = num2;
        this.operacion = operacion;
    }
    /*   public resultado(num1: number, num2: number, operacion: string) {
      if (num1 && num2) {
        const suma = num1 + num2;
        console.log(`La suma de ${num1} y ${num2} es ${suma}`);
      } else {
        console.log(`${operacion} : Operacion sin exito`);
      }
    } */
    Suma.prototype.resultado = function (num1, num2) {
        var suma = num1 + num2;
        return "La suma de " + num1 + " y " + num2 + " es " + suma;
    };
    return Suma;
}());
exports.default = Suma;
var numSuma = new Suma(50, 25, "nada");
console.log(numSuma);
console.log(Suma.prototype.resultado(5, 8));
