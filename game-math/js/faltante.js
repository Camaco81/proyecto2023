//cargamos el contenido de la pagina con jquery
$(document).ready(function () {
    $('#header').load('../components/header.html');
    $('#pauseModal').load('../components/pause-modal.html');
    $('#completeModal').load('../components/complete-modal.html');
    $('#salirModal').load('../components/salir-modal.html');
});


//variables globales
const signo = document.getElementById("var1");//signo
const primerValor = document.getElementById("var2");//primer valor
const SegundoValor = document.getElementById("var3");//segundo valor
const resultado = document.getElementById("var4");//resultado 
const contador = document.getElementById('contador');/* 
const idCorrect = document.getElementById('idCorrect');
const idFail = document.getElementById('idFail'); */
const checkAnimado = document.getElementById('checkAnimado');
const failAnimado = document.getElementById('failAnimado');
const preloaderModal = document.getElementById('preloaderModal');
const allVar2 = [...document.querySelectorAll('a#var2')];
const allVar3 = [...document.querySelectorAll('a#var3')];
const resultados = [...document.querySelectorAll('a#var4')];

var nVeces = 0;
function digito(p) {
    return Math.floor(Math.random() * p);
}
var var1 = 0;
var var2 = 0;
var var3 = 0;
var var4 = 0;/* 
var resultados=[]; */
//cuantos botones hay
var buttonsOption = document.getElementsByClassName("option");
//calculamos una posicion random para colocar la opcion correcta

var valorBoton = [];
var words = ["¡Pésimo!", "¡Malo!", "¡Regular!", "¡Aceptable!", "¡Normal!", "¡Bueno!", "¡Notable!", "¡Excelente!", "¡Sobresaliente!", "¡Excepcional!"];
var nCorrect = 0;
var nFail = 0;
var block = false;
//ocultar preloader
setTimeout(() => {
    preloaderModal.style.display = "none";
}, 1000);

window.onload = () => {

    if (document.title === 'Math game') {
    } else {
        generarValores();

    }

    //crear valores de las paginas cargadas con jquery
    const idCorrect = document.getElementById('idCorrect');
    const idFail = document.getElementById('idFail');
    const completeTitle = document.getElementById('completeTitle');

};


function generarValores() {
    cargarBotones();
    //Suma lineal
    if (document.title === 'Suma número faltante | Math game') {
        var2 = digito(10);
        var3 = digito(10);
        var4 = var2 + var3;
        //mostrar resultados
        signo.textContent = "+";
        primerValor.textContent = var2;
        SegundoValor.textContent = "[ ]";
        resultado.textContent = var4;
    }

}
//let posRdn = digito(4);
//resultado.textContent =var4; //generar valores de los botones
/*  for (let j = 0; j <11; j++) {
     if (j === posRdn) {
         valorBoton[posRdn] = var4;
     } else {
         valorBoton[j] = digito(10 * 2);
     }
     buttonsOption[j].textContent = valorBoton[j];
 } */

function cargarBotones() {


    for (let j = 0; j < 10; j++) {
        buttonsOption[j].addEventListener(
            "click", function () {
                if (block === false) {
                    block = true;

                    if (document.title === 'Suma número faltante | Math game') {

                        if (buttonsOption[j].textContent == var3) {
                            SegundoValor.classList.add("correct")
                            buttonsOption[j].classList.add("bg-correct");
                            checkAnimado.classList.add("o-circle__sign--success");
                            nCorrect++
                            playCorrect()
                        } else {
                            SegundoValor.classList.add("incorrect")
                            buttonsOption[j].classList.add("bg-incorrect");
                            failAnimado.classList.add("o-circle__sign--failure");
                            nFail++
                            playInCorrect()
                        }

                    }

                    nVeces++;
                    contador.textContent = nVeces; 
                    SegundoValor.textContent = var3;
                    setTimeout(() => {
                        if (nVeces === 10) {

                            idCorrect.textContent = nCorrect;

                            idFail.textContent = nFail;
                            completeTitle.textContent = words[nCorrect - 1];
                            complete();

                        } else {
                            resultados[0].textContent = "[ ]";
                            remover();
                            generarValores();

                            block = false;
                        }

                    }, 2000);
                }
            }
        )
    }
}



function remover() {
    for (let i = 0; i < buttonsOption.length; i++) {
        buttonsOption[i].classList.remove("bg-correct");
        buttonsOption[i].classList.remove("bg-incorrect");
    }
    SegundoValor.classList.remove("incorrect");
    SegundoValor.classList.remove("correct");


    checkAnimado.classList.remove("o-circle__sign--success");
    failAnimado.classList.remove("o-circle__sign--failure");


}

var show = document.getElementById("pauseModal");
const salirModal = document.getElementById("salirModal");
const completeModal = document.getElementById("completeModal");

function pauseMenu() {
    pauseModal.style.display = "flex";
}


function reanudar() {
    pauseModal.style.display = "none";
}
function salir() {
    if (salirModal.style.display === "flex") {
        salirModal.style.display = "none"

    } else {
        salirModal.style.display = "flex"
    }
}
function complete() {
    if (completeModal.style.display === "flex") {
        completeModal.style.display = "none"

    } else {
        completeModal.style.display = "flex"
    }
}

function cargarSonido(fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};
// El sonido que podemos reproducir o pausar

function playCorrect() {
    let audio = cargarSonido("../assets/sound/correct-ding.mp3");
    audio.play();
}
function playInCorrect() {
    let audio = cargarSonido("../assets/sound/megaman-x-error.mp3");
    audio.play();
}
