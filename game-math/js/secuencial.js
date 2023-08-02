//cargamos el contenido de la pagina con jquery
$(document).ready(function () {
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
var nCorrect = 0;
var nFail = 0;
var block = false;
//ocultar preloader
setTimeout(() => {
    preloaderModal.style.display = "none";
}, 1000);

window.onload = () => {
    console.log("page is fully loaded");
    generarValores();
    //crear valores de las paginas cargadas con jquery
    const idCorrect = document.getElementById('idCorrect');
    const idFail = document.getElementById('idFail');

};

var valSelect = document.getElementById("select");
function generarValores() {
    cargarBotones();
    //suma secuencial
    if (document.title === 'Suma secuencial | Math game') {
        for (let i = 0; i < allVar3.length; i++) {
            var2 = allVar2[i].textContent = i + 1;
            var3 = allVar3[i].textContent = valSelect.value;
            resultados[i] = var2 + Number(var3);
            console.log(resultados[i])
        }

    }
    let posRdn = digito(4);/* 
    resultado.textContent =var4; */ //generar valores de los botones
    for (let j = 0; j < 4; j++) {
        if (j === posRdn) {
            valorBoton[posRdn] = resultados[nVeces]; {

            }
        } else {
            valorBoton[j] = digito(10 * 2);
        }
        buttonsOption[j].textContent = valorBoton[j];
    }
}

function cargarBotones() {


    for (let j = 0; j < 4; j++) {
        buttonsOption[j].addEventListener(
            "click", function () {
                if (block === false) {
                    block = true;/* 
                    //Suma lineal
                    if (document.title === 'Suma lineal | Math game') {
                    if (valorBoton[j] === var4) {
                        resultados[0].classList.add("correct")
                        buttonsOption[j].classList.add("bg-correct");
                        checkAnimado.classList.add("o-circle__sign--success");
                        nCorrect++
                    } else {
                        resultados[0].classList.add("incorrect")
                        buttonsOption[j].classList.add("bg-incorrect");
                        failAnimado.classList.add("o-circle__sign--failure");
                        nFail++
                    }
                    
                    }*/
                    //suma secuencial
                    if (document.title === 'Suma secuencial | Math game') {
                        if (valorBoton[j] === resultados[nVeces]) {
                            allVar4[nVeces].classList.add("correct")
                            buttonsOption[j].classList.add("bg-correct");
                            checkAnimado.classList.add("o-circle__sign--success");
                            nCorrect++
                        } else {
                            allVar4[nVeces].classList.add("incorrect")
                            buttonsOption[j].classList.add("bg-incorrect");
                            failAnimado.classList.add("o-circle__sign--failure");
                            nFail++
                        }

                    }



                    nVeces++;
                    contador.textContent = nVeces;
                    allVar4[nVeces - 1].textContent = valorBoton[j];
                    setTimeout(() => {
                        if (nVeces === 10) {

                            idCorrect.textContent = nCorrect;

                            idFail.textContent = nFail;
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
