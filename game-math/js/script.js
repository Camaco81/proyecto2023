//variables globales
const signo = document.getElementById("var1");//signo
const primerValor = document.getElementById("var2");//primer valor
const SegundoValor = document.getElementById("var3");//segundo valor
const resultado = document.getElementById("var4");//resultado
const contador = document.getElementById('contador');
var ncorrect = 1;
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
var posRdn = digito(4);
var valorBoton = []

//Suma lineal
var2 = digito(10);
var3 = digito(10);
var4 = var2 + var3;



//generar valores de los botones
for (let j = 0; j < 4; j++) {
    if (j===posRdn) {
        valorBoton[posRdn] = var4;
    } else{
        valorBoton[j] = digito(10*2);
    }
    buttonsOption[j].textContent = valorBoton[j];
    buttonsOption[j].addEventListener(
        "click", function (params) {
        
        remover("incorrect");
        remover("bg-incorrect");
        remover("correct");
        remover("bg-correct");

    if (valorBoton[j]=== var4 ) {
        console.log('correcto');
        resultado.classList.add("correct")
        buttonsOption[j].classList.add("bg-correct");
        ncorrect++;
        contador.textContent=ncorrect;
    } else {
        console.log('incorrecto')
        resultado.classList.add("incorrect")
        buttonsOption[j].classList.add("bg-incorrect");
        
    }
    resultado.textContent=valorBoton[j];
    }
    )
    
}

function remover(params) {
    for (let i = 0; i < buttonsOption.length; i++) {
        buttonsOption[i].classList.remove(params);
    }
    resultado.classList.remove(params);
}
//mostrar resultados
signo.textContent = "+";
primerValor.textContent = var2;
SegundoValor.textContent = var3;/* 
    resultado.textContent =var4; */

var show =  document.getElementById("pauseModal");    

function pauseMenu() {
    pauseModal.style.display = "flex"
}
   

function reanudar() {
    pauseModal.style.display = "none"
}
