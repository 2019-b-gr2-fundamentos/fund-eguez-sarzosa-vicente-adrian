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












