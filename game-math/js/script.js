//variables globales
const signo = document.getElementById("var1");//signo
const primerValor = document.getElementById("var2");//primer valor
const SegundoValor = document.getElementById("var3");//segundo valor
const resultado = document.getElementById("var4");//resultado
const contador = document.getElementById('contador');
const idCorrect = document.getElementById('idCorrect');
const idFail = document.getElementById('idFail');
const checkAnimado = document.getElementById('checkAnimado');
const failAnimado = document.getElementById('failAnimado');
var nVeces = 0;
function digito(p) {
    return Math.floor(Math.random() * p);
}
var var1 = 0;
var var2 = 0;
var var3 = 0;
var var4 = 0;
//cuantos botones hay
var buttonsOption = document.getElementsByClassName("option");
//calculamos una posicion random para colocar la opcion correcta

var valorBoton = [];
var nCorrect = 0;
var nFail = 0;
var block = false;



window.onload = () => {
    console.log("page is fully loaded");
    generarValores();
};

function generarValores() {

    //Suma lineal
    var2 = digito(10);
    var3 = digito(10);
    var4 = var2 + var3;
    let posRdn = digito(4);
    //mostrar resultados
    signo.textContent = "+";
    primerValor.textContent = var2;
    SegundoValor.textContent = var3;/* 
    resultado.textContent =var4; */ //generar valores de los botones
    for (let j = 0; j < 4; j++) {
        if (j === posRdn) {
            valorBoton[posRdn] = var4;
        } else {
            valorBoton[j] = digito(10 * 2);
        }
        buttonsOption[j].textContent = valorBoton[j];
    }
}

for (let j = 0; j < 4; j++) {
    buttonsOption[j].addEventListener(
        "click", function () {
            if (block === false) {
                block = true;
                remover();

                if (valorBoton[j] === var4) {
                    console.log('correcto');
                    resultado.classList.add("correct")
                    buttonsOption[j].classList.add("bg-correct");
                    checkAnimado.classList.add("o-circle__sign--success");
                    nCorrect++
                } else {
                    console.log('incorrecto')
                    resultado.classList.add("incorrect")
                    buttonsOption[j].classList.add("bg-incorrect");
                    failAnimado.classList.add("o-circle__sign--failure");
                    nFail++
                }

                nVeces++;
                contador.textContent = nVeces;
                resultado.textContent = valorBoton[j];
                setTimeout(() => {
                    if (nVeces === 10) {

                        idCorrect.textContent = nCorrect;

                        idFail.textContent = nFail;
                        complete();

                    } else {
                        console.log("tres segundos");

                        resultado.textContent = "[ ]";
                        remover();
                        generarValores();

                        block = false;
                    }

                }, 2000);
            }
        }
    )
}



function remover() {
    for (let i = 0; i < buttonsOption.length; i++) {
        buttonsOption[i].classList.remove("bg-correct");
        buttonsOption[i].classList.remove("bg-incorrect");
    }
    resultado.classList.remove("incorrect");
    resultado.classList.remove("correct");
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
