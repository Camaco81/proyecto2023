//seleccionamos todos los topos
const topos = document.querySelectorAll(".topo");
//creamos una variable para guardar el score
var score = 0;
//seleccionamos la etiqueta donde vamos a mostrar el score guardado
const spanScore = document.getElementById('puntaje')

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


var cronometro = setInterval(time, 1000);
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
    if(segundos > 59){
        segundos = 0
        minutos++
    }
    if (segundos < 10){
        segundos="0"+segundos;
    }
    if (minutos < 10){
        tiempo.textContent = "0"+minutos + ":" +segundos;
    } else{
        tiempo.textContent = minutos + ":" +segundos;
    }

    levelUp()


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

function levelUp(){
    if( minutos === 2 || score ===300){
        console.log('nivel superado');
        detener();
        return true

    }else{
        return false
    }

}
//detener intervalo
function detener() {
    setTimeout(function () {
        clearInterval(cronometro);
        console.log("Intervalo detenido")
    })
    
}





/* var control = setInterval(tiempo, 1000);
var segundos =0;
function tiempo(){
    segundos++;
    console.log(segundos)
    if (tiempo = 60 ){
        
    }
} */