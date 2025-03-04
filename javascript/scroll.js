window.addEventListener("scroll", function() {
    let nav = document.querySelector("nav");
    let headerH1 = document.getElementById("headerH1"); 
    let pres = document.getElementById("presentation");
    let etudes = document.getElementById("etudes");


    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }


    if (window.scrollY > 275) {
        headerH1.classList.add("hidden"); 
    } else {
        headerH1.classList.remove("hidden"); 
    }

    if (window.scrollY > 350) {
        pres.classList.add("translate-in");
    } else {
        pres.classList.remove("translate-in");
    }

    if (window.scrollY > 600) {
        etudes.style.display = "flex";
        setTimeout(() => etudes.classList.add("translate-in"));
    } else {
        etudes.classList.remove("translate-in");
        setTimeout(() => etudes.style.display = "none");
    }

});

