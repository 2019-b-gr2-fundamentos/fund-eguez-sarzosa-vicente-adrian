export function map(
    arregloOriginal: any[], // Reviso el original
    funcion: (
        valorActual: any, 
        indice?: number,
        arreglo?: any[]) => any
): any[] {
    const nuevoArreglo = [];
    const arreglo = [...arregloOriginal]; // Le hago un clon
    for(let i = 0; i < arreglo.length; i++ ){
        const clon = [...arreglo] // Crear clon por iteracion
        const respuestaFuncion = funcion(
            clon[i],
            i,
            clon, // Clon del Clon para q juegue el prog
        );
        nuevoArreglo.push(respuestaFuncion);
    }
    return nuevoArreglo;
}