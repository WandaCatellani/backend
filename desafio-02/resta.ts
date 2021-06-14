export default class Resta {
  private num1: number;
  private num2: number;
  private operacion: string;

  public constructor(num1: number, num2: number, operacion: string) {
    this.num1 = num1;
    this.num2 = num2;
    this.operacion = operacion;
  }

  public resultado(num1: number, num2: number, operacion: string) {
    if (num1 && num2) {
      const resta = num1 - num2;
      console.log(`La resta de ${num1} y ${num2} es ${resta}`);
    } else {
      console.log(`${operacion} : Operacion sin exito`);
    }
  }
}

let numResta: Resta = new Resta(50, 25, "nada");

console.log(numResta);
console.log(Resta.prototype.resultado(10, 8, "w"));
