//seleccionamos todos los topos
const topos = document.querySelectorAll(".topo");
//creamos una variable para guardar el score
var score = 0;
var scoreTotal = 0;
//seleccionamos la etiqueta donde vamos a mostrar el score guardado
const spanScore = document.getElementById('puntaje')

//modales pause y dinamico
const tituloModal = document.getElementById("tituloModal");
const textoModal = document.getElementById("textoModal");
const boton1Modal = document.getElementById("boton1Modal");
const boton2Modal = document.getElementById("boton2Modal");
const dificultad = document.getElementById("dificultad");


// CREAMOS UN OBJETO
const niveles = [
    //los objetos contienen niveles
    [0, 10, 20, 1000, 9], // [minutos, segundos, puntaje, milisegundos, huecos]
    [0, 30, 20, 700, 9],
    [1, 0, 50, 500, 9],
    [0, 45, 50, 500, 12],
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
        //reproducimos sonido
        hitSound.play();
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
    girarTopo();
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

var nivel = 0;
function levelUp() {
    nivel++;
    scoreTotal = score;
    clearInterval(cronometro);
    if (nivel > niveles.length - 1) {
        modalShow("Felicidades", "Has terminado todos los niveles", "Volver a inicio")
    } else {
        //seteo en 0 las variables
        /*  score = 0; */
        minutos = 0;
        segundos = 0;
        //cambio el contenido de las etiquetas
        /* spanScore.textContent = score; */
        tiempo.textContent = "00:00";
        reanudar();



        dificultad.textContent = nivel + 1;
    }
}
/* function comprobarGanarPerder() {
    
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

} */

function comprobarGanarPerder() {

    // donde [primero es nivel] [ posiciones]
    if (minutos >= niveles[nivel][0] && segundos >= niveles[nivel][1]) {
        //al terminar el tiempo
        if (score >= niveles[nivel][2]) {
            modalShow("Felicidades", "Has completado este nivel", "Reiniciar", "Siguiente");
        } else {
            modalShow("Game Over", "¡Mejor suerte la proxima!", "Reiniciar", "");
        }
        //se detiene y retorna true
        detener();
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
    menuSound.play();
    clearInterval(cronometro);
    pauseModal.style.display = "block";
}

function reanudar() {
    menuSound.play();
    cronometro = setInterval(time, niveles[nivel][3]);
    pauseModal.style.display = "none";
    modal.style.display = "none";

}
function reiniciar() {
    pausa();
    //seteo en 0 las variables
    score = scoreTotal;
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
/* 
// Cuando el usuario hace clic en el botón, se abre la ventana
boton.addEventListener("click", function () {
    modal.style.display = "block";
}); 
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
        boton2Modal.style.display = "none"
    } else {

        boton2Modal.style.display = "inline-block"
    }
    if (boton1Modal.textContent === "Volver a inicio") {
        boton1Modal.setAttribute("href", "inicio.html")
    }
}


//animaciones

function girarTopo() {
    topos.forEach(
        function (e) {/* 
        console.log(e) */
            e.classList.toggle("rotar180")
        }
    )
}

// ******sonidos*******
// Carga un sonido a través de su fuente y lo inyecta de manera oculta
const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};
const $botonReproducir = document.querySelector("#btnReproducir"),
    $botonPausar = document.querySelector("#btnPausar"),
    $botonReiniciar = document.querySelector("#btnReiniciar");
// El sonido que podemos reproducir o pausar
const musicSound = cargarSonido("assets/sound/music.mp3");
const hitSound = cargarSonido("assets/sound/hit.mp3");
const menuSound = cargarSonido("assets/sound/menu.mp3");
$botonReproducir.onclick = () => {
    musicSound.play();
};
$botonPausar.onclick = () => {
    musicSound.pause();
};
$botonReiniciar.onclick = () => {
    musicSound.currentTime = 0;
};

