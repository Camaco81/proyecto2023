

window.onload = init;

function init() {
    const body=document.getElementById("body");
    body.addEventListener("mousehover",function (e) {
        console.log("moviendome")
    musicSound.play();
    })

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
const startSound = cargarSonido("assets/sound/start.mp3");
$botonReproducir.onclick = () => {
    musicSound.play();
};
$botonPausar.onclick = () => {
    musicSound.pause();
};
$botonReiniciar.onclick = () => {
    musicSound.currentTime = 0;
};

