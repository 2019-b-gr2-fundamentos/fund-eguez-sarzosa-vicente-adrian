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

