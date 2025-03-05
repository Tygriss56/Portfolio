let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length;

function reloadSlider() {
    let translateX = -active * 100; // Chaque slide se décale de 100%
    list.style.transform = `translateX(${translateX}%)`;

    // Mise à jour des dots
    document.querySelector('.dots .active').classList.remove('active');
    dots[active].classList.add('active');
}

// Gestion du bouton "next"
next.onclick = function() {
    if (active < lengthItems - 1) {
        active += 1;
    } else {
        active = 0; // Revient au début si c'est le dernier
    }
    reloadSlider();
};

// Gestion du bouton "prev"
prev.onclick = function() {
    if (active > 0) {
        active -= 1;
    } else {
        active = lengthItems - 1; // Revient à la fin si on est au début
    }
    reloadSlider();
};

// Gestion du clic sur les dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        active = index;
        reloadSlider();
    });
});

let refreshSlider = setInterval(() => {next.click()},3000);

// Initialisation
reloadSlider();
