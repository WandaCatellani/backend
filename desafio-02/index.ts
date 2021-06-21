/* ECMASCRIPT AVANZADO Y TYPESCRIPT 
-------------------------------------------------- */

interface IOperacion {
  num1: number;
  num2: number;
  eleccion: string;
}

function operacion(num1: number, num2: number, eleccion: string) {
  switch (eleccion) {
    case "suma": {
      return new Promise((res, rej) => {
        const moduleSuma = "./suma";
        import(moduleSuma)

          .then((Suma) => {
            let operacionCalculo = new Suma(num1, num2);

            res(operacionCalculo.resultado(num1, num2));
          })

          .catch(() => {
            rej(console.error);
          });
      });
    }

    case "resta": {
      return new Promise((res, rej) => {
        const moduleResta = "./resta";
        import(moduleResta)

          .then((Resta) => {
            let operacionCalculo = new Resta(num1, num2);

            res(operacionCalculo.resultado(num1, num2));
          })

          .catch(() => {
            rej(console.error);
          });
      });
    }

    default: {
      console.log(
        `No se importo ningún archivo y no se realizo ninguna operación`
      );
    }
  }
}

async function operaciones(operac: Array<IOperacion>): Promise<any> {
  for (let datos of operac) {
    await setTimeout(() => {
      operacion(datos.num1, datos.num2, datos.eleccion);
    }, 1000);
  }
}

async function ingresoDatos(): Promise<any> {
  const lote1: IOperacion = {
    num1: 7,
    num2: 3,
    eleccion: "suma",
  };

  const lote2: IOperacion = {
    num1: 50,
    num2: 8,
    eleccion: "resta",
  };

  const lote3: IOperacion = {
    num1: 4,
    num2: 2,
    eleccion: "dividi",
  };

  const lotesDePrueba: Array<IOperacion> = [lote1, lote2, lote3];

  await operaciones(lotesDePrueba);
}

ingresoDatos();
