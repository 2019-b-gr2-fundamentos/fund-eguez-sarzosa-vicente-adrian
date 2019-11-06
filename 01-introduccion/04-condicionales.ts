// 04-condicionales.ts
const casado = true;
if (casado == true) {
    console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
}

if (casado == false) { // (Expresion => boolean)
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
}

if (casado != true) {
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
}

if (casado != false) {
    console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
}

const tengoMosa = false;



const estaCasado = true; // expresion
const soyMosero = tengoMosa == true; // 
const casadoYMosero = estaCasado && soyMosero;

if(casadoYMosero){
    console.log("Casado y mosero");
} else{
    console.log("O casado o Mosero o Nada");
}

// casadoYMosero <=> c==true && b==true && d==true 

// AND -> &&
// TRUE y TRUE = TRUE
// TRUE y FALSE = FALSE
// FALSE y TRUE = FALSE
// FALSE y FALSE = FALSE

// OR -> || -> PIPES
// TRUE y TRUE = TRUE
// TRUE y FALSE = TRUE
// FALSE y TRUE = TRUE
// FALSE y FALSE = FALSE



/*





*/
// apago la primera alarma me hago 
// bolita y lloro hasta la segunda 
// alarma y me levanto
// celularDescargado == true
// celularDañado == true
// amaneceMuerto == true
// estaActivadaLaAlarma != true
// estaEnModoSilencio == true
// const seAtrasoAClase = celularDescargado == true  || celularDañado == true|| amaneceMuerto == true || estaActivadaLaAlarma != true || estaEnModoSilencio == true



// TRUTY
const nombreVacio = "";
if(""){
    console.log("Truty"); // Truty
}else{
    console.log("Falsy");
}

if("abc"){
    console.log("Truty"); // Truty
}else{
    console.log("Falsy");
}

if(-1){
    console.log("Truty"); // Truty
}else{
    console.log("Falsy");
}

if(1){
    console.log("Truty"); // Truty
}else{
    console.log("Falsy");
}

if(1.3232){
    console.log("Truty"); // Truty
}else{
    console.log("Falsy");
}

if(0){
    console.log("Truty"); 
}else{
    console.log("Falsy"); // Falsy
}

if(null){
    console.log("Truty"); 
}else{
    console.log("Falsy"); // Falsy
}

if(undefined){
    console.log("Truty"); 
}else{
    console.log("Falsy"); // Falsy
}
const calculo = "sumar"; // sumar restar multiplicar dividir
switch(calculo) {
    case "sumar": // 1
        // Codigo
        break;
    case "restar": // 2
        // Codigo
        break;
    case "multiplicar":  //3
        // Codigo
        break;
    case "dividir": //4
        // Codigo        
        break;
    default:
}

// 6 Guagua
// 18 Guambra
// 65 Longo
// 66 Ruku




// FALSY





const edadString = prompt("Ingresar numero");
const edad = Number(edadString); // sumar restar multiplicar dividir


const a = 2;
const A = 2;
const papito = "";
const papitO = "";





switch(edad) {
    case 1: // 1
        console.log("Guagua");
        break;
    case "restar": // 2
        // Codigo
        break;
    case "multiplicar":  //3
        // Codigo
        break;
    case "dividir": //4
        // Codigo        
        break;
    default:
}






