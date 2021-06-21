export default class Resta {
  private num1: number;
  private num2: number;
  private eleccion: string;

  public constructor(num1: number, num2: number, eleccion: string) {
    this.num1 = num1;
    this.num2 = num2;
    this.eleccion = eleccion;
  }

  public resultado(num1: number, num2: number, eleccion: string): any {
    if (eleccion === "resta") {
      return num1 - num2;
    } else {
      console.log(`No se puede realizar la operacion ${eleccion}`);
    }
  }
}
