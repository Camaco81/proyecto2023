

// When the user scrolls down 50px from the top of the document, resize the header's font size
// cuando el scroll del usuario baja 50px del top de el documento se rediseña ell header
window.onscroll = function () { scrollFunction() };


function scrollFunction() {// detecta el cambio del scroll

    //capturo los que voy a modificar
    const header = document.getElementById("main-header");
    const menuItem = document.querySelectorAll(".menuItem");
    const logo = document.getElementById("logo");

    // si pasa de 50px 
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        //reduce el padding
        header.style.padding = "5px 0px";
        //cambia el tamaño de la letra
        menuItem.forEach(function (e) {
            e.style.fontSize = "18px";
        })
        //resize logo
        logo.style.height="40px";
    } else {
        //sino los valores default
        header.style.padding = "20px 0px";
        
        menuItem.forEach(function (e) {
            e.style.fontSize = "20px";
        })
        logo.style.height="50px";
    }
}