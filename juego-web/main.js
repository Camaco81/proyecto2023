//seleccionamos todos los topos
let topos = document.querySelectorAll(".topo");
console.log(topos);
//creamos una variable para guardar el score
var score = 0;
//seleccionamos la etiqueta donde vamos a mostrar el score guardado
const spanScore= document.getElementById('puntaje')
console.log(spanScore)

//recorremos todo el array de topos y para cada uno le agregamos 
//un evento que al hacer click se ejecute una funcion
topos.forEach(function (element) {
    element.addEventListener("click", function (e) {
    //sumamos el score
    score +=5;
    //a la etiqueta le cambiamos la propiedad textcontent
    // por el valor que tenemos del score
    spanScore.textContent = score;
     element.classList.remove("show")
    })
})


 /*  topos[i].classList.remove("show") */