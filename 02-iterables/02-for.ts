// for
// 1) Declarar una variable OK
// 2) Condicion ( Expresion ) OK
// 3) Incrementar, Disminuir OK
for (let numeroExDeMiCrush = 7; 
    numeroExDeMiCrush > 0 ; // != 0  > 0 OK >= 0  NO
    numeroExDeMiCrush--){
    console.log('ES CAN DA LO!', numeroExDeMiCrush);
}

for (let numeroExDeMiCrush = 0; 
    numeroExDeMiCrush < 8 ; // != 0  > 0 OK >= 0  NO
    numeroExDeMiCrush++){
    console.log('ES CAN DA LO!', numeroExDeMiCrush);
}

for (let numeroExDeMiCrush = 0; 
    numeroExDeMiCrush <= 7 ; // != 0  > 0 OK >= 0  NO
    numeroExDeMiCrush++){
    console.log('ES CAN DA LO!', numeroExDeMiCrush);
}
// <= 6     < 7     6    6
// > 0      >= 1    1    1

// ARREGLOS
// 1 Elemento ( Variable const numero = 1)
// Conjunto del MISMO ELEMENTO (  [1, 2, 3, 4, 5]   )
// Conjunto DIFERENTES ELEMENTOS ( [1, "abc", true] )
const arregloNumeros = [1,  2,3, 4, 5];
// REASIGNAR
// arregloNumeros = [1, 2, 3, 4, 5, 6];
arregloNumeros.push(6); // FUNCION
console.log('arregloNumeros', arregloNumeros);
arregloNumeros.pop();
console.log('arregloNumeros', arregloNumeros);



// Arreglo 
// 1) Elementos
// 2) Indices (0 index based) -> POSICION 
// 3) Longitud -> # Elementos
console.log(arregloNumeros.length);

// Acceder a cada elemento del arreglo POR EL INDICE
const indiceElementoUno = 0;
arregloNumeros[indiceElementoUno]; // 1
arregloNumeros[0]; // 1
const indiceElementoCinco = 4;
arregloNumeros[indiceElementoCinco]; // 5 
arregloNumeros[4]; // 5



// Acceder al elemento 5
// 1) INDICE
// [1, 2, 3, 4 ,5 ]
//  0  1  2  3  4
//      INDICES
console.log(arregloNumeros[4]);
// 5 


// 1) Crear arreglo 5 elementos
const arreglo = [];
// 2) Cada elemento 1 o un 0
// Ej: [0, 0, 1, 1, 0]
// 3) Exista el menos un elemento "1"
// Ej: [0, 0, 0, 0, 0] NO ES VALIDO
// Ej: [0, 0, 0, 0, 1] ES VALIDO


Math.floor(Math.random() * 2) // [0 , 2[
Math.floor(Math.random() * 10) // [0 , 10[

// FOR 
// 1) let tamanio = arregloNumeros.length // 5
// 2) tamanio > 0
// 3) --






/* 


1) Definir # jugadores
2) Asignar randomicamente si tiene 
   o no un floron
3) Verificar si al menos existe un floron
4) Adivinar donde esta el floron

*/












