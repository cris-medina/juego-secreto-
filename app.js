let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10; 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt( document.getElementById("valorUsuario").value) ;
    
    if (numeroDeUsuario=== numeroSecreto){
        asignarTextoElemento ("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez":"veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        } else {
            asignarTextoElemento ("p","El número secreto es mayor");
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
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");
    } else {

        //Si el número esta inlcuido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto()
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales (){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1; 
}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja ();
    // indicar mensaje de inicio
    //generar número aleatorio
    //reiniciar número de intentos
    condicionesIniciales();  
    //deshabilitar boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales(); 