const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const movie = document.getElementById("movie");
const ending = document.getElementById("ending");
const typing = document.getElementById("typing");

const slides = document.querySelectorAll(".slide");

const message = `Happy Birthday My Love ❤️

You are the most beautiful part of my life.
Every smile of yours makes my day brighter.
Thank you for being you.

May all your dreams come true.
Stay happy, stay blessed.

I Love You Forever 💖

- Your Sana ❤️`;

let i = 0;
let j = 0;

startBtn.onclick = () => {
    intro.style.display = "none";
    movie.style.display = "flex";

    typeWriter();
    slideShow();

    setTimeout(() => {
        ending.style.display = "block";
    }, 42000);
};

function typeWriter() {
    if (i < message.length) {
        typing.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
}

function slideShow() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[j].classList.add("active");

    j++;
    if (j >= slides.length) j = 0;

    setTimeout(slideShow, 3000);
}
