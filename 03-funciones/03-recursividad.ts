function imprimirMensajeNVeces(
    mensaje: string,
    numeroVeces: number
): void{
    if(numeroVeces == 0){
        console.log('Se termino');
    }else{
        console.log(mensaje);
        const nuevoNumeroVeces = numeroVeces - 1;
        imprimirMensajeNVeces(mensaje, nuevoNumeroVeces);
    }
}

function main(){
    imprimirMensajeNVeces(':3', 12);
}

main();
// EJEMPLOS
const arregloNumeros: number[] = [1, 2, 3];
const arregloString: string[] = ['a', 'b', 'c'];
const arregloBoolean: boolean[] = [true, false, false];
// EJEMPLO 
function imprimir(arreglo: number[]){

}


const arregloDosDimensiones = [
        [1,2,3,4],
        [4,5,6,7] 
    ];
arregloDosDimensiones[0] // [1,2,3,4]
arregloDosDimensiones[0].length // 4
arregloDosDimensiones[1] // [4,5,6,7]
arregloDosDimensiones.length // 2
// [0, 0 ,1*7 + 2*6 + 3*5 + 4*4]
// 1) definir el tamaño 
// 2) Repetir calculo N veces (N = tamaño)
// 3.1 ) 1er elemento 1er arreglo
// 3.2 ) ultimo elemento del 2do arreglo
// 3.3 ) sumar los elementos

// 3.4 ) 1er elemento + 1 = 2do elemnto 1er arreglo
// 3.5 ) ultimo elemento - 1 = penultimo del 2do arreglo
// 3.5 ) sumar los elementos







// multiplicar el 0 * n elemento + 
// multiplicar el 0 + 1 * n - 1 elemento +
// multiplicar el 0 + 2 * n - 2 elemento +
arregloDosDimensiones[0][0] // 1
arregloDosDimensiones[0][1] // 2
arregloDosDimensiones[1][0] // 3
arregloDosDimensiones[1][1] // 4

function productoCruz(vectores: number[][]): number[]{
    // return [0, 0, ]
}







const unaDimension = 
[
    [
        [1]
    ],
    [
        [2]
    ]
]



// Escriba un programa que verifique si dos matrices son 
// iguales ( La matriz es de dos dimensiones n * m)
// "n" y "m" pueden ser iguales o distintas.
/**
  n = 2 , m = 3
  1 2 3     2 3 4  
  4 5 6     4 5 6

 */
// Sumar todas las filas y todas las columnas










compararMatriz([[2,3],[3,4]],[[2,3],[3,4]]) // true