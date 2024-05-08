const jedi = { nombre: "Luke Skywalker", edad: 19 };

// Tu código para cambiar la edad aquí...
jedi.edad = 20;

console.log(jedi); // Imprime el objeto luke con su nueva edad de 20 años
// 2. Presentación al estilo Leia Organa:
var nombre = "Leia"
var apellido = "Organa";
var edad = 20;
console.log("Soy " + nombre + " " + apellido + " Tengo " + edad + " años y soy una princesa de Alderaan.");
//3. Calculando el coste total de sables de luz
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };

// Tu código para calcular el precio total aquí...
var sables = sable1.precio + sable2.precio;
console.log("el precio total de los sabes es: " + sables);
// 4. Actualizando el precio final de las naves:
let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000 };

// Tu código para actualizar el precio final de cada nave aquí...
nave1.precioBase = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;