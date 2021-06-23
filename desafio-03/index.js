/* JAVASCRIPT ASINCRONICO 
-------------------------------------------------- */

async function mostrarPalabras(texto, callback) {
  const textoParrafo = texto.split(" ");

  for (let palabra of textoParrafo) {
    await new Promise((res) => {
      setTimeout(() => {
        res(console.log(palabra));
      }, 1000);
    });
  }

  callback(textoParrafo.length);
}

async function enviarParrafos() {
  let totalPalabras = 0;

  const contarPalabras = (cantidadPalabras) => {
    totalPalabras += cantidadPalabras;
  };

  await mostrarPalabras(`1. Hola!`, contarPalabras);
  await mostrarPalabras(`2. Como estas?`, contarPalabras);
  await mostrarPalabras(`3. Esto es un contador de palabras`, contarPalabras);

  console.log(`Cantidad de palabras: ${totalPalabras}`);
  console.log(`Proceso completo`);
}

enviarParrafos();
