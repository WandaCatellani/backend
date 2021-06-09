/* CLASE CONSTRUCTORA 
-------------------------------------------------- */

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  getMascotas() {
    return this.mascotas.length;
  }

  addBook(book, autor) {
    const books = { nombre: book, autor: autor };
    return this.libros.push(books);
  }

  getBooks() {
    return this.libros.map((elements) => elements.nombre);
  }
}

// Declaracion de instancia
const persona = new Usuario("Wanda", "Catellani", [], []);

// Muestra del nombre y apellido de la persona
console.log(persona.getFullName());

// Agrego mascotas a la persona
persona.addMascota("Gato");
persona.addMascota("Perro");

// Muestro la cantidad de mascotas de la persona
console.log(`${persona.getFullName()} tiene ${persona.getMascotas()} mascotas`);

// Agrego libros a la persona
persona.addBook("Los años radicales", "Alberto de la Rocha");
persona.addBook("Tienes que mirar", "Anna Starobinets,");
persona.addBook("El último duelo", "Eric Jager");

// Muestro el nombre de los libros que tiene la persona
console.log(persona.getBooks());
