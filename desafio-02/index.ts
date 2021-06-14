/* ECMASCRIPT AVANZADO Y TYPESCRIPT 
-------------------------------------------------- */

interface IOperacion {
  num1: number;
  num2: number;
  operacion: string;
}

function operacion(op: IOperacion) {
  return new Promise((res, rej) => {
    // import("./suma");
    // import("./resta");

    const moduleSuma = "./suma";
    import(moduleSuma);

    const moduleResta = "./resta";
    import(moduleResta).then((calculoSuma) => {
      let operacionCalculoSuma = new calculoSuma(
        op.num1,
        op.num2,
        op.operacion
      );
      res(operacionCalculoSuma.resultado(op.num1, op.num2, op.operacion));
    });
    // .then((calculoResta) => {
    //   let operacionCalculoResta = new calculoResta(
    //     op.num1,
    //     op.num2,
    //     op.operacion
    //   );
    //   res(operacionCalculoResta.resultado(op.num1, op.num2, op.operacion));
    // })
    // .catch(console.error);
  });
}
const myOperacion: IOperacion = { num1: 10, num2: 7, operacion: "lorem" };
operacion(myOperacion);

console.log(operacion);

async function operaciones() {
  console.log("soy la funcion operaciones");
}
