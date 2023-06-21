
//saber la distancia del header desde el top del documento
const header = document.getElementById("main-header");
var sticky = header.offsetTop;
//capturo los que voy a modificar
const menuItem = document.querySelectorAll(".menuItem");
const logo = document.getElementById("logo");

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");
var btns = document.getElementsByClassName("btn");

// When the user scrolls down 50px from the top of the document, resize the header's font size
// cuando el scroll del usuario baja 50px del top de el documento se rediseña ell header
window.onscroll = function () { resizeHeader(); stickyHeader() };


function resizeHeader() {// redimencionar el header

    // si pasa del tamaño sticky 
    if (document.body.scrollTop > sticky || document.documentElement.scrollTop > sticky) {
        //reduce el padding
        header.style.padding = "5px 0px";
        //cambia el tamaño de la letra
        menuItem.forEach(function (e) {
            e.style.fontSize = "18px";
        })
        //resize logo
        logo.style.height = "40px";

    } else {
        //sino los valores default
        header.style.padding = "20px 0px";

        menuItem.forEach(function (e) {
            e.style.fontSize = "20px";
        })
        logo.style.height = "50px";

    }

}
function stickyHeader() {
    if (document.body.scrollTop > sticky || document.documentElement.scrollTop > sticky) {

        //agregar clase sticky (fijar header dinamicamente)
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//Funciones de los botones de la galería
function oneColumn() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.width = "80%";
    }
    //llamo a la funcion para cambiar el active
    // y le indico la posición del array (arreglo)
    // sabiendo que la primera posición  no es 1 sino es 0
    btnActive(0);
}
function twoColumns() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.width = "40%"
    }
    btnActive(1);
}
function fourColumns() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.width = "20%"
    }
    btnActive(2);
}

//Cambia el boton activo de la galería
function btnActive(button) {
    for (let i = 0; i < btns.length; i++) {
        //primero me aseguro de que ningun boton tenga active
        btns[i].classList.remove("active")
        if (i === button) {
            //le agrego active al boton presionado
            btns[i].classList.add("active")
        }
    }
}

//USAR EL CODIGO ANTERIOR ↑↑↑ 
//PARA CAMBIAR EL BOTON ACTIVO DEL MENU DEL HEADER


/*********************** control de los Slides ************************ */

//declaro una variable para el index
slideIndex = 1;
//llamo a show slide para mostrar el primero ya que está en display: none por defecto
showSlides(slideIndex);
//control anterior o siguiente
function plusSlides(n){
showSlides(slideIndex +=n)
}

// Thumbnail controls | control desde el dots
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n){
let i;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

if (n>slides.length){slideIndex=1}
if (n<1) {slideIndex=slides.length}
for (let i = 0; i < slides.length; i++) {
   slides[i].style.display="none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
console.log(slides);
slides[slideIndex-1].style.display="block";

dots[slideIndex-1].className += " active";
}