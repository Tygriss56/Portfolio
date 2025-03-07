document.addEventListener("DOMContentLoaded", function() {
    let premiere = document.querySelectorAll(".prem");
    let deuxieme = document.querySelectorAll(".deux");

    let btn1 = document.getElementById("premiere");
    let btn2 = document.getElementById("deuxieme");

    btn1.addEventListener("change", select);
    btn2.addEventListener("change", select);

    function select() {
        if (btn1.checked && !btn2.checked) {
            // Afficher les projets de première année, cacher les autres
            premiere.forEach(el => el.classList.remove("cache"));
            deuxieme.forEach(el => el.classList.add("cache"));
        } 
        else if (btn2.checked && !btn1.checked) {
            // Afficher les projets de deuxième année, cacher les autres
            premiere.forEach(el => el.classList.add("cache"));
            deuxieme.forEach(el => el.classList.remove("cache"));
        } 
        else {
            // Si aucun ou les deux boutons sont sélectionnés, tout afficher
            premiere.forEach(el => el.classList.remove("cache"));
            deuxieme.forEach(el => el.classList.remove("cache"));
        }
    }
});
