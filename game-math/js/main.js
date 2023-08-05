var allButtons = document.querySelectorAll("a.link");

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click",
        () => {
            console.log("funciona");
            localStorage.setItem("title", allButtons[i].textContent);

            if (i < 3) {
                localStorage.setItem("signo", "+");
            }
            if (i >2&&i<6) {
                localStorage.setItem("signo", "-");
            }
            if (i > 5 && i < 9) {
                localStorage.setItem("signo", "x");
            }
            if (i > 8 && i < 12) {
                localStorage.setItem("signo", "/");
            }
        });

}
if (document.title !== "Math game") {
    const typeOpId = document.getElementById("typeOp");
    typeOpId.textContent = localStorage.getItem("title");

}