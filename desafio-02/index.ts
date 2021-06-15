/* ECMASCRIPT AVANZADO Y TYPESCRIPT 
-------------------------------------------------- */

interface IOperacion {
  num1: number;
  num2: number;
  eleccion: string;
}

function operacion(op: IOperacion) {
  return new Promise((res, rej) => {
    const moduleSuma = "./suma";
    import(moduleSuma);

    const moduleResta = "./resta";
    import(moduleResta).then((calculos) => {
      let operacionCalculo = new calculos.default(
        op.num1,
        op.num2,
        op.eleccion
      );
      res(operacionCalculo.resultado(op.num1, op.num2, op.eleccion));
    });

    //  .catch(console.error)
  });
}

const myOperacion: IOperacion = { num1: 10, num2: 7, eleccion: "sumar" };

async function operaciones(num1: number, num2: number) {
  (await num1) - num2;
}

console.log(operacion);
operaciones(8, 3);
console.log(operaciones);
