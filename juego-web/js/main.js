//seleccionamos todos los topos
const topos = document.querySelectorAll(".topo");
//creamos una variable para guardar el score
var score = 0;
//seleccionamos la etiqueta donde vamos a mostrar el score guardado
const spanScore = document.getElementById('puntaje')

//modales pause y dinamico
const tituloModal = document.getElementById("tituloModal");
const textoModal = document.getElementById("textoModal");
const   boton1Modal = document.getElementById("boton1Modal");
const    boton2Modal= document.getElementById("boton2Modal");


// CREAMOS UN OBJETO
const niveles = [
    //los objetos contienen niveles
    [2,0,20,
        9], // [minutos, segundos, puntaje, huecos]
    [1,30,10,9],
    [1,0,5,12],
]
    
    

window.onload = init;

function init() {

    //selcciono el id y le agrego un evento que al dar click me ejecuta una funcion que pausa el juego

    document.querySelector("#parar").addEventListener("click", pausa);

    //selcciono el id y le agrego un evento que al dar click me ejecuta una funcion que reanuda el juego donde queda

    document.querySelector("#continuar").addEventListener("click", reanudar);

    reanudar();
}


//recorremos todo el array de topos y para cada uno le agregamos 
//un evento que al hacer click se ejecute una funcion
topos.forEach(function (element) {
    element.addEventListener("click", function (e) {
        //sumamos el score
        score += 5;
        //a la etiqueta le cambiamos la propiedad textcontent
        // por el valor que tenemos del score
        spanScore.textContent = score;
        element.classList.remove("show")
    })
})


var cronometro;
var segundos = 0;
var minutos = 0;

const tiempo = document.getElementById("tiempo")
var mostrando = false;
let topoNuevo = 0;
let topoAnterior = 0;
function time() {
    segundos++;
    if (segundos % 2 === 0) {
        desaparecer(topoAnterior);
        aparecer(topoNuevo);
        topoAnterior = topoNuevo;
    }
    topoNuevo = numEnt();
    if (segundos > 59) {
        segundos = 0
        minutos++
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    if (minutos < 10) {
        tiempo.textContent = "0" + minutos + ":" + segundos;
    } else {
        tiempo.textContent = minutos + ":" + segundos;
    }

    comprobarGanarPerder()


}






/* 
20 MOD(2)

20/2 = 10 
*/


function aparecer(parmetro) {
    topos[parmetro].classList.add('show')
}
function desaparecer(parmetro) {
    topos[parmetro].classList.remove("show")
}

function numEnt() {
    return Math.floor(Math.random() * 9);
}

var nivel  = 0;
function levelUp(){
    nivel++,
    reiniciar();
    if ( nivel > niveles.length -1){
        modalShow("Felicidades", "Has terminado todos los niveles" ,"Volver a inicio")
    }
}
function comprobarGanarPerder() {
    
    // donde [primero es nivel] [ posiciones]
    if (score >= niveles[nivel][2]) {

        detener();
        modalShow("Felicidades", "Has completado este nivel" , "Reiniciar", "Siguiente");
        return true
    } else if (minutos === niveles[nivel][0] && segundos === niveles[nivel][1] ) {
        console.log("funciona")

        detener();
        modalShow("Game Over", "¡Mejor suerte la proxima!", "Reiniciar", "");
        return true

    } else {
        return false
    }

}
//detener intervalo
function detener() {
    setTimeout(function () {
        clearInterval(cronometro);
    })
}
function pausa() {
    clearInterval(cronometro);
    pauseModal.style.display = "block";
}

function reanudar() {
    cronometro = setInterval(time, 1000);
    pauseModal.style.display = "none";
    modal.style.display = "none";

}
function reiniciar() {
    pausa();
    //seteo en 0 las variables
    score = 0;
    minutos = 0;
    segundos = 0;
    //cambio el contenido de las etiquetas
    spanScore.textContent = score;
    tiempo.textContent = "00:00";
    reanudar();

}

//**********Modal*********** */

// Ventana modal
var modal = document.getElementById("ventanaModal");
var pauseModal = document.getElementById("pauseModal");

// Botón que abre el modal
var boton = document.getElementById("abrirModal");

// Cuando el usuario hace clic en el botón, se abre la ventana
boton.addEventListener("click", function () {
    modal.style.display = "block";
});/* 
// Cuando el usuario hace clic en el botón Pause, se abre la ventana
btnPause.addEventListener("click", function () {
    pauseModal.style.display = "block";
}); */

/* // Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}); */

function modalShow(titulo, texto, boton1, boton2) {
    modal.style.display = "block";
    tituloModal.textContent = titulo;
    textoModal.textContent = texto;
    boton1Modal.textContent = boton1;
    boton2Modal.textContent = boton2;
    if (boton2Modal.textContent === "") {
        boton2Modal.style.display="none"
    } else{
        
        boton2Modal.style.display="inline-block"
    }
    if (boton1Modal.textContent === "Volver a inicio") {
        boton1Modal.setAttribute("href", "inicio.html")
    } 
}


