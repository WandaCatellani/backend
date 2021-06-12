/* ECMASCRIPT AVANZADO Y TYPESCRIPT 
-------------------------------------------------- */

/* interface IOperation {
  num1: number;
  num2: number;
  operacion: string;
}

function operacion(op: IOperation) {
  console.log(`${op.num1} ${op.num2} ${op.operacion}`);
}

let myOperacion: IOperation = { num1: 2, num2: 7, operacion: "operacion" }; 

operacion(myOperacion);*/

interface IOperation {
  num1: number;
  num2: number;
  operacion: string;
}

const operacion = (op: IOperation) => {
  return new Promise((res, rej) => {
    import("./suma");
    import("./resta");

    // .then(sumar, restar => {

    // })
  });
};

let myOperacion: IOperation = { num1: 2, num2: 7, operacion: "operacion" };

operacion(myOperacion);
