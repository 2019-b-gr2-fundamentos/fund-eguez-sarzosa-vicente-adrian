// DO WHILE
let vecesQueHeComido = 0;
do {
    console.log('Vamos a comer');
    vecesQueHeComido = vecesQueHeComido + 1;
    switch(vecesQueHeComido){
        case 1:
            console.log('Desayuno');
            break;
        case 2:
            console.log("'Almuerzo'");
            break;
        case 3:
            console.log('"Merienda"')
            break;
        default:
            console.log('Gorditos');
    }


} while(vecesQueHeComido < 3)

/* 
1 Analisis socioeconomico
2 Algebra 
3 compiladores
5 Fundamentos de programacion
7 Calculo
11 Fisica
13 ingles

si es impar -> aumentamos a analisis 17 -
si es par   -> aumentamos a algebra 17 - 
si es multiplo de 3 -> aumentamos a compiladores 16 -
*/
let analisis = 0;
console.log(`Hice ${analisis} deberes de Analisis.`);
console.log('Hice ' + analisis + 'deberes de Analisis.');
        // template strings -> tilde invertida = alt + 96                                                