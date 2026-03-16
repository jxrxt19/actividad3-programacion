// Vamos a crear un OBJETO
const estudiante = {
    // Un mapa esta compuesto CLAVE y VALOR 
    nombre : "Pepito",
    carrera : "Informatica y Desarrollo de aplicaciones web",
    ciclo : 3,
    // Vamos a crear METODOS(Son las acciones -  verbos)
    estudiar: function(){
        console.log("Pepito esta aprendiendo JavaScript.");
    }
};

// Acceder al objeto
console.log(estudiante.nombre);
estudiante.estudiar()


// Vamos a crear un CONSTRUCTOR (SIEMPRE DEBE EMPESAR CON MAYÚSCULA)
function Computadora(marca,procesador,ram){
    // Usamos atributos públicos usnado THIS
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;

    // Creamos el Método (Acciones)
this.encender = function() {
    console.log("Iniciamos el Sistema" + this.marca);
}

this.aumentaRam = function() {
    return ram + "GB"
}


}
// El operador NEW crea una instancia o copia a partir del modelo
const PCLAB1 = new Computadora("HP", "Corei7", "32");
const PCLAB2 = new Computadora("ASUS", "Corei5", "16");

console.log(PCLAB1.marca);
console.log(PCLAB1.procesador);
console.log(PCLAB1.ram);
const mensaje = "tipos de datos javascript";
console.log(mensaje.length());
console.log(mensaje.trim());
console.log(mensaje.toUpperCase());
console.log(mensaje.includes());

const lenguajes =["html", "css", "php", "javascript"];

lenguajes.push("JAVA"); // Se agrega al final
lenguajes.pop(); // Elimina el ultimo
lenguajes.unshift("JAVA");
lenguajes.shift();
console.log(lenguajes.join("-"));