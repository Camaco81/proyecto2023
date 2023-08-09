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
/* const resultado = document.getElementById("var4");//resultado */
const contador = document.getElementById('contador');/* 
const idCorrect = document.getElementById('idCorrect');
const idFail = document.getElementById('idFail'); */
const checkAnimado = document.getElementById('checkAnimado');
const failAnimado = document.getElementById('failAnimado');
const preloaderModal = document.getElementById('preloaderModal');
const allVar1 = [...document.querySelectorAll('a#var1')];
const allVar2 = [...document.querySelectorAll('a#var2')];
const allVar3 = [...document.querySelectorAll('a#var3')];
const allVar4 = [...document.querySelectorAll('a#var4')];

var nVeces = 0;
function digito(p) {
    return Math.floor(Math.random() * p);
}
var var1 = 0;
var var2 = 0;
var var3 = 0;
var var4 = 0;
var resultados = [];
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
    generarValores();
    //crear valores de las paginas cargadas con jquery
    const idCorrect = document.getElementById('idCorrect');
    const idFail = document.getElementById('idFail');
    const completeTitle = document.getElementById('completeTitle');

};

var valSelect = document.getElementById("select");
const op = [...document.querySelectorAll('option')];
function generarValores() {
    var1 = localStorage.getItem("signo");
    var opText;
    switch (var1) {
        case "+":
            opText = "Sumar"
            break;
        case "-":
            opText = "Restar"
            break;
        case "x":
            opText = "Multiplicar"
            break;

        default:
            opText = "Dividir"
            break;
    }
    for (let i = 0; i < op.length; i++) {
        op[i].textContent = opText + " " + (i + 1);
        allVar1[i].textContent = var1;

    }

    cargarBotones();
    //suma secuencial
    if (document.title === 'Suma secuencial | Math game') {
        for (let i = 0; i < allVar3.length; i++) {


            var3 = allVar3[i].textContent = valSelect.value;

            if (var1 === "+" || var1 === "x") {
                var2 = allVar2[i].textContent = i + 1;
            } else if (var1 === "-") {
                var2 = allVar2[i].textContent = Number(valSelect.value) + i;
            } else {
                var2 = allVar2[i].textContent = Number(valSelect.value) * (i + 1);
            }

            switch (var1) {
                case "+":
                    resultados[i] = var2 + Number(var3);
                    break;
                case "-":
                    resultados[i] = var2 - Number(var3);
                    break;
                case "x":
                    resultados[i] = var2 * Number(var3);
                    break;
                default:
                    resultados[i] = var2 / Number(var3);
                    break
            }
        }

    }
    let posRdn = digito(4);/* 
    resultado.textContent =var4; */ //generar valores de los botones
    for (let j = 0; j < 4; j++) {
        if (j === posRdn) {
            valorBoton[posRdn] = resultados[nVeces];

        } else {


            do {
                valorBoton[j] = digito(10 * 2);
            } while (valorBoton[j] === resultados[nVeces])
        }
        buttonsOption[j].textContent = valorBoton[j];
    }
}

function cargarBotones() {


    for (let j = 0; j < 4; j++) {
        buttonsOption[j].addEventListener(
            "click", function () {
                if (block === false) {
                    block = true;
                    if (valorBoton[j] === resultados[nVeces]) {
                        allVar4[nVeces].classList.add("correct")
                        buttonsOption[j].classList.add("bg-correct");
                        checkAnimado.classList.add("o-circle__sign--success");
                        nCorrect++
                        playCorrect();
                    } else {
                        allVar4[nVeces].classList.add("incorrect")
                        buttonsOption[j].classList.add("bg-incorrect");
                        failAnimado.classList.add("o-circle__sign--failure");
                        nFail++
                        playInCorrect();
                    }



                    nVeces++;
                    contador.textContent = nVeces;
                    allVar4[nVeces - 1].textContent = valorBoton[j];
                    setTimeout(() => {
                        if (nVeces === 10) {

                            idCorrect.textContent = nCorrect;

                            idFail.textContent = nFail;
                            completeTitle.textContent = words[nCorrect - 1];
                            complete();

                        } else {
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
    }/* 
    for (let i = 0; i < allVar4.length; i++) {
        allVar4[i].classList.remove("incorrect");
        allVar4[i].classList.remove("correct");

    } */
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

function resetValues() {
    nVeces = 0;
    for (let i = 0; i < allVar4.length; i++) {
        allVar4[i].textContent = "___";
        allVar4[i].classList.remove("incorrect");
        allVar4[i].classList.remove("correct");

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

function playCorrect() {
    let audio = cargarSonido("../assets/sound/correct-ding.mp3");
    audio.play();
}
function playInCorrect() {
    let audio = cargarSonido("../assets/sound/megaman-x-error.mp3");
    audio.play();
}