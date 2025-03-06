document.addEventListener("DOMContentLoaded", function() {
let premiere = document.getElementById("1ere");
let deuxieme = document.getElementById("2eme");

let btn1 = document.getElementById("premiere");
let btn2 = document.getElementById("deuxieme");

btn1.addEventListener("change", select);
btn2.addEventListener("change", select);

function select() {
    if (btn1.checked) {
        deuxieme.classList.add("cache");
        premiere.classList.remove("cache");
    } 
    if(btn2.checked){
        deuxieme.classList.remove("cache");
        premiere.classList.add("cache");
    }
    if(!btn2.checked && !btn1.checked){
        deuxieme.classList.remove("cache");
        premiere.classList.remove("cache");
    }
    if(btn2.checked && btn1.checked){
        deuxieme.classList.remove("cache");
        premiere.classList.remove("cache");
    }

}
});



