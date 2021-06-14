export default class Suma {
  private num1: number;
  private num2: number;
  private operacion: string;

  public constructor(num1: number, num2: number, operacion: string) {
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

  public resultado(num1: number, num2: number): any {
    const suma = num1 + num2;
    return `La suma de ${num1} y ${num2} es ${suma}`;
  }
}

let numSuma: Suma = new Suma(50, 25, "nada");

console.log(numSuma);
console.log(Suma.prototype.resultado(5, 8));
