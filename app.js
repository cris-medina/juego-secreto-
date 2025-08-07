let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10; 

function asignarTextoELEMENTO(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt( document.getElementById("valorUsuario").value) ;
    
    if (numeroDeUsuario=== numeroSecreto){
        asignarTextoELEMENTO ("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez":"veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoELEMENTO("p","El número secreto es menor");
        } else {
            asignarTextoELEMENTO ("p","El número secreto es mayor");
        }
        intentos++; 
        limpiarCaja ();
    }
    
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
    //let valorCaja = document.querySelector("#valorUsuario")
    //valorCaja,value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los números
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoELEMENTO("p","Ya se sortearon todos los números posibles");
    } else {

        //Si el número esta inlcuido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)){

        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales (){
    asignarTextoELEMENTO("h1","Juego del número secreto");
    asignarTextoELEMENTO("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1; 
}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja ();
    // indicar mensaje de inicio
    mensajesIniciales(); 
    //generar número aleatorio
    //reiniciar número de intentos
    condicionesIniciales();  
    //deshabilitar boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

condicionesIniciales(); 