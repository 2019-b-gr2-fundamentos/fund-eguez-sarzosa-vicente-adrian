import {AnimalPerrito} from './interfaces/animal-perrito.interface'

// boolean
// string
// null -> object
// number
// PERSONA


// CASI EN TODOS LOS LENGUAJES
// Struct -> Estructura de datos
// Clase -> Estructura de datos -> Metodos!

// ANIMAL -> nombre cientifico, color principal
// fecha nacimiento, peso, genero, altura 
const edad = 20;
const ejemploEstructura = {
    'nombreCientifico': 'canis lupus familiaris',
    "llave":"valor",    
    enojo: undefined,
    edadActual: edad, // variables 
    noEsNecesario: true, // ultima coma ok
}
// Estructura de datos en lenguaje NO TIPADO
const poliPerro = {
    nombreCientifico: 'Canis Lupus Familiaris',
    nombre: 'Grandote',
    clan: 'Poliperro',
    edad: 10,
    hijos: null,
    perritas: ['Manuela', 'Zoraida'],
    vacunado: true,
}
console.log(poliPerro.nombre); // Canis Lupus Familiaris

// Estructura de datos en lenguaje TIPADO
const poliPerroAmarillo: AnimalPerrito = {
    nombreCientifico: 'Canis Lupus Familiaris',
    nombre: 'Amarillo',
    clan: null // A cualquier propiedad de la Struct 
               // se puede poner "null"
    // edad: 4,
    // hijos: null,
    // perritas: [],
    // vacunado: false,
}
poliPerroAmarillo







